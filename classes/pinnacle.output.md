---
outline: [2, 3]
---

# Class `pinnacle.output`


Output management.

An output is the Wayland term for a monitor. It presents windows, your cursor, and other UI elements.

Outputs are uniquely identified by their name, a.k.a. the name of the connector they're plugged in to.




## Functions

### <Badge type="function" text="function" /> get_all

<div class="language-lua"><pre><code>function pinnacle.output.get_all()
    -> <a href="/lua-reference/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a>[]</code></pre></div>

Gets all outputs.




#### Returns

1. <code><a href="/lua-reference/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a>[]</code>




### <Badge type="function" text="function" /> get_all_enabled

<div class="language-lua"><pre><code>function pinnacle.output.get_all_enabled()
    -> <a href="/lua-reference/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a>[]</code></pre></div>

Gets all enabled outputs.




#### Returns

1. <code><a href="/lua-reference/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a>[]</code>




### <Badge type="function" text="function" /> get_by_name

<div class="language-lua"><pre><code>function pinnacle.output.get_by_name(name: string)
    -> <a href="/lua-reference/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a> | nil</code></pre></div>

Gets an output by its name (the connector it's plugged into).



#### Parameters

`name`: <code>string</code> - The name of the connector the output is connected to



#### Returns

1. <code><a href="/lua-reference/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a> | nil</code>




### <Badge type="function" text="function" /> get_focused

<div class="language-lua"><pre><code>function pinnacle.output.get_focused()
    -> <a href="/lua-reference/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a> | nil</code></pre></div>

Gets the currently focused output.

This is currently defined as the most recent one that has had pointer motion.




#### Returns

1. <code><a href="/lua-reference/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a> | nil</code>




### <Badge type="function" text="function" /> for_each_output

<div class="language-lua"><pre><code>function pinnacle.output.for_each_output(for_each: fun(output: <a href="/lua-reference/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a>))</code></pre></div>

 Runs a closure on all current and future outputs.

 When called, this will do two things:
 1. Immediately run `for_each` with all currently connected outputs.
 2. Call `for_each` with any newly connected outputs.

 Note that `for_each` will *not* run with outputs that have been unplugged and replugged.
 This is to prevent duplicate setup. Instead, the compositor keeps track of any tags and
 state the output had when unplugged and restores them on replug. This may change in the future.

#### Example
```lua
 -- Add tags "1" through "5" to all outputs
require("pinnacle.output").for_each_output(function(output)
    local tags = Tag.add(output, "1", "2", "3", "4", "5")
    tags[1]:toggle_active()
end)
```


#### Parameters

`for_each`: <code>fun(output: <a href="/lua-reference/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a>)</code>






### <Badge type="function" text="function" /> connect_signal

<div class="language-lua"><pre><code>function pinnacle.output.connect_signal(signals: <a href="/lua-reference/classes/pinnacle.output.OutputSignal">pinnacle.output.OutputSignal</a>)
    -> signal_handles: <a href="/lua-reference/classes/pinnacle.signal.SignalHandles">pinnacle.signal.SignalHandles</a></code></pre></div>

Connects to an output signal.

`signals` is a table containing the signal(s) you want to connect to along with
a corresponding callback that will be called when the signal is signalled.

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

`signals`: <code><a href="/lua-reference/classes/pinnacle.output.OutputSignal">pinnacle.output.OutputSignal</a></code> - The signal you want to connect to



#### Returns

1. `signal_handles`: <code><a href="/lua-reference/classes/pinnacle.signal.SignalHandles">pinnacle.signal.SignalHandles</a></code> - Handles to every signal you connected to wrapped in a table, with keys being the same as the connected signal.



#### See also

- <code><a href="/lua-reference/classes/pinnacle#signal.SignalHandles.disconnect_all">pinnacle.signal.SignalHandles.disconnect_all</a></code>: - To disconnect from these signals