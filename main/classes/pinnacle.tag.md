---
outline: [2, 3]
---

# Class `pinnacle.tag`


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

`handle`: <code>pinnacle.tag.TagHandleModule</code>




## Functions

### <Badge type="function" text="function" /> get_all

<div class="language-lua"><pre><code>function pinnacle.tag.get_all()
    -> <a href="/lua-reference/main/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a>[]</code></pre></div>

Gets all tags across all outputs.




#### Returns

1. <code><a href="/lua-reference/main/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a>[]</code>




### <Badge type="function" text="function" /> get

<div class="language-lua"><pre><code>function pinnacle.tag.get(name: string, output: <a href="/lua-reference/main/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a>)
    -> <a href="/lua-reference/main/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a> | nil</code></pre></div>

Gets the tag with the given name and output.

If `output` is not specified, this uses the focused output.

If an output has more than one tag with the same name, this returns the first.

#### Example
```lua
 -- Get tags on the focused output
local tag = Tag.get("Tag")

 -- Get tags on a specific output
local tag_on_hdmi1 = Tag.get("Tag", Output.get_by_name("HDMI-1"))
```



#### Parameters

`name` - The name of the tag
  - <code>string</code><br>
`output` - The output to get the tag on, or `nil` for the focused output.
  - <code><a href="/lua-reference/main/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a></code>



#### Returns

1. <code><a href="/lua-reference/main/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a> | nil</code>




### <Badge type="function" text="function" /> add

<div class="language-lua"><pre><code>function pinnacle.tag.add(output: <a href="/lua-reference/main/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a>, ...: string)
    -> tags: <a href="/lua-reference/main/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a>[]</code></pre></div>

Adds tags with the given names to the specified output.

Returns handles to the created tags.

#### Example
```lua
local tags = Tag.add(Output.get_by_name("HDMI-1"), "1", "2", "Buckle", "Shoe")

 -- With a table
local tag_names = { "1", "2", "Buckle", "Shoe" }
local tags = Tag.add(Output.get_by_name("HDMI-1"), tag_names)
```




#### Parameters

`output` - The output to add tags to.
  - <code><a href="/lua-reference/main/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a></code><br>
`...` - The names of the new tags.
  - <code>string</code>



#### Returns

1. `tags`: <code><a href="/lua-reference/main/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a>[]</code> - Handles to the created tags.




### <Badge type="function" text="function" /> remove

<div class="language-lua"><pre><code>function pinnacle.tag.remove(tags: <a href="/lua-reference/main/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a>[])</code></pre></div>

Removes the given tags.

#### Example
```lua
local tags = Tag.add(Output.get_by_name("HDMI-1"), "1", "2", "Buckle", "Shoe")

Tag.remove(tags) -- "HDMI-1" no longer has those tags
```


#### Parameters

`tags` - The tags to remove.
  - <code><a href="/lua-reference/main/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a>[]</code>






### <Badge type="function" text="function" /> connect_signal

<div class="language-lua"><pre><code>function pinnacle.tag.connect_signal(signals: <a href="/lua-reference/main/classes/pinnacle.tag.TagSignal">pinnacle.tag.TagSignal</a>)
    -> signal_handles: <a href="/lua-reference/main/classes/pinnacle.signal.SignalHandles">pinnacle.signal.SignalHandles</a></code></pre></div>

Connects to a tag signal.

`signals` is a table containing the signal(s) you want to connect to along with
a corresponding callback that will be called when the signal is signalled.

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

`signals` - The signal you want to connect to
  - <code><a href="/lua-reference/main/classes/pinnacle.tag.TagSignal">pinnacle.tag.TagSignal</a></code>



#### Returns

1. `signal_handles`: <code><a href="/lua-reference/main/classes/pinnacle.signal.SignalHandles">pinnacle.signal.SignalHandles</a></code> - Handles to every signal you connected to wrapped in a table, with keys being the same as the connected signal.



#### See also

- <code><a href="/lua-reference/main/classes/pinnacle#signal.SignalHandles.disconnect_all">pinnacle.signal.SignalHandles.disconnect_all</a></code>: - To disconnect from these signals