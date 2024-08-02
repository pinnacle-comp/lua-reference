---
outline: [2, 3]
---

# Class `Tag`


Tag management.

This module provides utilities for creating and manipulating tags.

A tag is a sort of marker for each of your windows. It allows you to present windows in ways that
traditional workspaces cannot.

More specifically:

 - A window can have multiple tags.
   - This means that you can have one window show up across multiple "workspaces" if you come something like i3.
 - An output can display multiple tags at once.
   - This allows you to toggle a tag and have windows on both tags display at once. This is helpful if you, say, want to reference a browser window while coding; you toggle your browser's tag and temporarily reference it while you work without having to change screens.

If you need to get tags beyond the first with the same name, use the `get` method and find what you need.

## Fields

### handle

`handle`: <code><a href="/classes/TagHandleModule">TagHandleModule</a></code>




## Functions

### <Badge type="function" text="function" /> get_all

<div class="language-lua"><pre><code>function Tag.get_all()
    -> <a href="/classes/TagHandle">TagHandle</a>[]</code></pre></div>

Get all tags across all outputs.




#### Returns

1. <code><a href="/classes/TagHandle">TagHandle</a>[]</code>




### <Badge type="function" text="function" /> get

<div class="language-lua"><pre><code>function Tag.get(name: string, output?: <a href="/classes/OutputHandle">OutputHandle</a>)
    -> <a href="/classes/TagHandle">TagHandle</a> | nil</code></pre></div>

Get the tag with the given name and output.

If `output` is not specified, this uses the focused output.

If an output has more than one tag with the same name, this returns the first.

### Example
```lua
 -- Get tags on the focused output
local tag = Tag.get("Tag")

 -- Get tags on a specific output
local tag_on_hdmi1 = Tag.get("Tag", Output:get_by_name("HDMI-1"))
```



#### Parameters

`name`: <code>string</code><br>
`output?`: <code><a href="/classes/OutputHandle">OutputHandle</a></code>



#### Returns

1. <code><a href="/classes/TagHandle">TagHandle</a> | nil</code>




### <Badge type="function" text="function" /> add

<div class="language-lua"><pre><code>function Tag.add(output: <a href="/classes/OutputHandle">OutputHandle</a>, ...: string)
    -> tags: <a href="/classes/TagHandle">TagHandle</a>[]</code></pre></div>

Add tags with the given names to the specified output.

Returns handles to the created tags.

### Example
```lua
local tags = Tag.add(Output.get_by_name("HDMI-1"), "1", "2", "Buckle", "Shoe")

 -- With a table
local tag_names = { "1", "2", "Buckle", "Shoe" }
local tags = Tag.add(Output.get_by_name("HDMI-1"), tag_names)
```




#### Parameters

`output`: <code><a href="/classes/OutputHandle">OutputHandle</a></code><br>
`...`: <code>string</code>



#### Returns

1. `tags`: <code><a href="/classes/TagHandle">TagHandle</a>[]</code> - Handles to the created tags




### <Badge type="function" text="function" /> remove

<div class="language-lua"><pre><code>function Tag.remove(tags: <a href="/classes/TagHandle">TagHandle</a>[])</code></pre></div>

Remove the given tags.

### Example
```lua
local tags = Tag.add(Output.get_by_name("HDMI-1"), "1", "2", "Buckle", "Shoe")

Tag.remove(tags) -- "HDMI-1" no longer has those tags
```


#### Parameters

`tags`: <code><a href="/classes/TagHandle">TagHandle</a>[]</code>






### <Badge type="function" text="function" /> connect_signal

<div class="language-lua"><pre><code>function Tag.connect_signal(signals: <a href="/classes/TagSignal">TagSignal</a>)
    -> signal_handles: <a href="/classes/SignalHandles">SignalHandles</a></code></pre></div>

Connect to a tag signal.

The compositor sends signals about various events. Use this function to run a callback when
some tag signal occurs.

This function returns a table of signal handles with each handle stored at the same key used
to connect to the signal. See `SignalHandles` for more information.

# Example
```lua
Tag.connect_signal({
    active = function(tag, active)
        print("Activity for " .. tag:name() .. " was set to", active)
    end
})
```




#### Parameters

`signals`: <code><a href="/classes/TagSignal">TagSignal</a></code> - The signal you want to connect to



#### Returns

1. `signal_handles`: <code><a href="/classes/SignalHandles">SignalHandles</a></code> - Handles to every signal you connected to wrapped in a table, with keys being the same as the connected signal.



#### See also

- <code><a href="/classes/SignalHandles#disconnect_all">SignalHandles.disconnect_all</a></code>: - To disconnect from these signals