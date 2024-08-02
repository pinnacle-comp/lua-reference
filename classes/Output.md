---
outline: [2, 3]
---

# Class `Output`


Output management.

An output is what you would call a monitor. It presents windows, your cursor, and other UI elements.

Outputs are uniquely identified by their name, a.k.a. the name of the connector they're plugged in to.

## Fields

### handle

`handle`: <code><a href="/classes/OutputHandleModule">OutputHandleModule</a></code>




## Functions

### <Badge type="function" text="function" /> get_all

<div class="language-lua"><pre><code>function Output.get_all()
    -> <a href="/classes/OutputHandle">OutputHandle</a>[]</code></pre></div>

Get all outputs.

### Example
```lua
local outputs = Output.get_all()
```




#### Returns

1. <code><a href="/classes/OutputHandle">OutputHandle</a>[]</code>




### <Badge type="function" text="function" /> get_all_enabled

<div class="language-lua"><pre><code>function Output.get_all_enabled()
    -> <a href="/classes/OutputHandle">OutputHandle</a>[]</code></pre></div>

Get all enabled outputs.

### Example
```lua
local outputs = Output.get_all_enabled()
```




#### Returns

1. <code><a href="/classes/OutputHandle">OutputHandle</a>[]</code>




### <Badge type="function" text="function" /> get_by_name

<div class="language-lua"><pre><code>function Output.get_by_name(name: string)
    -> <a href="/classes/OutputHandle">OutputHandle</a> | nil</code></pre></div>

Get an output by its name (the connector it's plugged into).

### Example
```lua
local output = Output.get_by_name("eDP-1")
```


#### Parameters

`name`: <code>string</code> - The name of the connector the output is connected to



#### Returns

1. <code><a href="/classes/OutputHandle">OutputHandle</a> | nil</code>




### <Badge type="function" text="function" /> get_focused

<div class="language-lua"><pre><code>function Output.get_focused()
    -> <a href="/classes/OutputHandle">OutputHandle</a> | nil</code></pre></div>

Get the currently focused output.

This is currently defined as the most recent one that has had pointer motion.

### Example
```lua
local output = Output.get_focused()
```




#### Returns

1. <code><a href="/classes/OutputHandle">OutputHandle</a> | nil</code>




### <Badge type="function" text="function" /> connect_for_all

<div class="language-lua"><pre><code>function Output.connect_for_all(callback: fun(output: <a href="/classes/OutputHandle">OutputHandle</a>))</code></pre></div>

Connect a function to be run with all current and future outputs.

This method does two things:
1. Immediately runs `callback` with all currently connected outputs.
2. Calls `callback` whenever a new output is plugged in.

This will *not* run `callback` with an output that has been unplugged and replugged
to prevent duplicate setup. Instead, the compositor keeps track of the tags and other
state associated with that output and restores it when replugged.

### Example
```lua
 -- Add tags "1" through "5" to all outputs
Output.connect_for_all(function(output)
    local tags = Tag.add(output, "1", "2", "3", "4", "5")
    tags[1]:toggle_active()
end)
```


#### Parameters

`callback`: <code>fun(output: <a href="/classes/OutputHandle">OutputHandle</a>)</code>






### <Badge type="function" text="function" /> setup

<div class="language-lua"><pre><code>function Output.setup(setups: table&lt;string, <a href="/classes/OutputSetup">OutputSetup</a>>)</code></pre></div>

Declaratively setup outputs.

`Output.setup` allows you to specify output properties that will be applied immediately and
on output connection. These include mode, scale, tags, and more.

`setups` is a table of output identifier strings to `OutputSetup`s.

### Keys

Keys attempt to match outputs.

Wildcard keys (`"*"`) will match all outputs. You can additionally filter these outputs
by setting a `filter` function in the setup that returns true if it should apply to the output.
(See the example.)

Otherwise, keys will attempt to match the exact name of an output.

Use "serial:<number>" to match outputs by their EDID serial. For example, "serial:143256".
Note that not all displays have EDID serials. Also, serials are not guaranteed to be unique.
If you're unlucky enough to have two displays with the same serial, you'll have to use their names
or filter with wildcards instead.

### Setups

If an output is matched, the corresponding `OutputSetup` entry will be applied to it.
Any given `tags` will be added, and things like `transform`s, `scale`s, and `mode`s will be set.

### Ordering setups

You may need to specify multiple wildcard matches for different setup applications.
You can't just add another key of `"*"`, because that would overwrite the old `"*"`.
In this case, you can order setups by prepending `n:` to the key, where n is an ordering number.
`n` should be between `1` and `#setups`. Setting higher orders without setting lower ones
will cause entries without orders to fill up lower numbers in an arbitrary order. Setting
orders above `#setups` may cause their entries to not apply.


### Example
```lua
Output.setup({
    -- Give all outputs tags 1 through 5
    ["1:*"] = {
        tags = { "1", "2", "3", "4", "5" },
    },
    -- Give outputs with a preferred mode of 4K a scale of 2.0
    ["2:*"] = {
        filter = function(op)
            return op:preferred_mode().pixel_height == 2160
        end,
        scale = 2.0,
    },
    -- Additionally give eDP-1 tags 6 and 7
    ["eDP-1"] = {
        tags = { "6", "7" },
    },
    -- Match an output by its EDID serial number
    ["serial:235987"] = { ... }
})
```


#### Parameters

`setups`: <code>table&lt;string, <a href="/classes/OutputSetup">OutputSetup</a>></code>






### <Badge type="function" text="function" /> setup_locs

<div class="language-lua"><pre><code>function Output.setup_locs(update_locs_on: <a href="/aliases/UpdateLocsOn">UpdateLocsOn</a>[] | "all", locs: table&lt;string, <a href="/aliases/OutputLoc">OutputLoc</a>>)</code></pre></div>

Setup locations for outputs.

This function lets you declare positions for outputs, either as a specific point in the global
space or relative to another output.

### Choosing when to recompute output positions

`update_locs_on` specifies when output positions should be recomputed. It can be `"all"`, signaling you
want positions to update on all of output connect, disconnect, and resize, or it can be a table
containing `"connect"`, `"disconnect"`, and/or `"resize"`.

### Specifying locations

`locs` should be a table of output identifiers to locations.

#### Output identifiers

Keys for `locs` should be output identifiers. These are strings of
the name of the output, for example "eDP-1" or "HDMI-A-1".
Additionally, if you want to match the EDID serial of an output,
prepend the serial with "serial:", for example "serial:174652".
You can find this by doing `get-edid | edid-decode`.

#### Fallback relative-tos

Sometimes you have an output with a relative location, but the output
it's relative to isn't connected. In this case you can specify an
order that locations will be placed by prepending "n:" to the key.
For example, "4:HDMI-1" will be applied before "5:HDMI-1", allowing
you to specify more than one relative output. The first connected
relative output will be chosen for placement. See the example below.

### Example
```lua
               -- vvvvv Relayout on output connect, disconnect, and resize
Output.setup_locs("all", {
    -- Anchor eDP-1 to (0, 0) so we can place other outputs relative to it
    ["eDP-1"] = { 0, 0 },
    -- Place HDMI-A-1 below it centered
    ["HDMI-A-1"] = { "eDP-1", "bottom_align_center" },
    -- Place HDMI-A-2 below HDMI-A-1.
    ["3:HDMI-A-2"] = { "HDMI-A-1", "bottom_align_center" },
    -- Additionally, if HDMI-A-1 isn't connected, fallback to placing it below eDP-1 instead.
    ["4:HDMI-A-2"] = { "eDP-1", "bottom_align_center" },

    -- Note that the last two have a number followed by a colon. This dictates the order of application.
    -- Because Lua tables with string keys don't index by declaration order, this is needed to specify that.
    -- You can also put a "1:" and "2:" in front of "eDP-1" and "HDMI-A-1" if you want to be explicit
    -- about their ordering.
    --
    -- Just note that orders must be from 1 to the length of the array. Entries without an order
    -- will be filled in from 1 upwards, taking any open slots. Entries with orders above
    -- #locs may not be applied.
})

 -- Only relayout on output connect and resize
Output.setup_locs({ "connect", "resize" }, { ... })

 -- Use EDID serials for identification.
 -- You can run
 -- require("pinnacle").run(function(Pinnacle)
 --     print(Pinnacle.output.get_focused():serial())
 -- end)
 -- in a Lua repl to find the EDID serial of the focused output.
Output.setup_locs("all" {
    ["serial:139487"] = { ... },
})
```


#### Parameters

`update_locs_on`: <code><a href="/aliases/UpdateLocsOn">UpdateLocsOn</a>[] | "all"</code><br>
`locs`: <code>table&lt;string, <a href="/aliases/OutputLoc">OutputLoc</a>></code>






### <Badge type="function" text="function" /> connect_signal

<div class="language-lua"><pre><code>function Output.connect_signal(signals: <a href="/classes/OutputSignal">OutputSignal</a>)
    -> signal_handles: <a href="/classes/SignalHandles">SignalHandles</a></code></pre></div>

Connect to an output signal.

The compositor sends signals about various events. Use this function to run a callback when
some output signal occurs.

This function returns a table of signal handles with each handle stored at the same key used
to connect to the signal. See `SignalHandles` for more information.

# Example
```lua
Output.connect_signal({
    connect = function(output)
        print("New output connected:", output.name)
    end
})
```




#### Parameters

`signals`: <code><a href="/classes/OutputSignal">OutputSignal</a></code> - The signal you want to connect to



#### Returns

1. `signal_handles`: <code><a href="/classes/SignalHandles">SignalHandles</a></code> - Handles to every signal you connected to wrapped in a table, with keys being the same as the connected signal.



#### See also

- <code><a href="/classes/SignalHandles#disconnect_all">SignalHandles.disconnect_all</a></code>: - To disconnect from these signals