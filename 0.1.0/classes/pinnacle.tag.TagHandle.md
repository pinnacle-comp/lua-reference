---
outline: [2, 3]
---

# Class `pinnacle.tag.TagHandle`


A tag handle.

This is a handle that allows manipulation of a tag.

This can be retrieved through the various `get` functions in the `Tag` module.

## Fields

### id

`id`: <code>integer</code>

The unique id of this tag.


## Functions

### <Badge type="method" text="method" /> remove

<div class="language-lua"><pre><code>function pinnacle.tag.TagHandle:remove()</code></pre></div>

Removes this tag.

#### Example
```lua
local tags = Tag.add(Output.get_by_name("HDMI-1"), "1", "2", "Buckle", "Shoe")

tags[2]:remove()
tags[4]:remove()
 -- "HDMI-1" now only has tags "1" and "Buckle"
```






### <Badge type="method" text="method" /> switch_to

<div class="language-lua"><pre><code>function pinnacle.tag.TagHandle:switch_to()</code></pre></div>

Activates this tag and deactivates all other ones on the same output.

#### Example
```lua
 -- Assume the focused output has the following inactive tags and windows:
 --  - "1": Alacritty
 --  - "2": Firefox, Discord
 --  - "3": Steam
Tag.get("2"):switch_to() -- Displays Firefox and Discord
Tag.get("3"):switch_to() -- Displays Steam
```






### <Badge type="method" text="method" /> set_active

<div class="language-lua"><pre><code>function pinnacle.tag.TagHandle:set_active(active: boolean)</code></pre></div>

Sets whether or not this tag is active.

#### Example
```lua
 -- Assume the focused output has the following inactive tags and windows:
 --  - "1": Alacritty
 --  - "2": Firefox, Discord
 --  - "3": Steam
Tag.get("2"):set_active(true)  -- Displays Firefox and Discord
Tag.get("3"):set_active(true)  -- Displays Firefox, Discord, and Steam
Tag.get("2"):set_active(false) -- Displays Steam
```


#### Parameters

`active`: <code>boolean</code>






### <Badge type="method" text="method" /> toggle_active

<div class="language-lua"><pre><code>function pinnacle.tag.TagHandle:toggle_active()</code></pre></div>

Toggles this tag's active state.

#### Example
```lua
 -- Assume the focused output has the following inactive tags and windows:
 --  - "1": Alacritty
 --  - "2": Firefox, Discord
 --  - "3": Steam
Tag.get("2"):toggle_active() -- Displays Firefox and Discord
Tag.get("2"):toggle_active() -- Displays nothing
```






### <Badge type="method" text="method" /> active

<div class="language-lua"><pre><code>function pinnacle.tag.TagHandle:active()
    -> boolean</code></pre></div>

Gets whether or not this tag is active.




#### Returns

1. <code>boolean</code>




### <Badge type="method" text="method" /> name

<div class="language-lua"><pre><code>function pinnacle.tag.TagHandle:name()
    -> string?</code></pre></div>

Gets this tag's name.




#### Returns

1. <code>string</code>




### <Badge type="method" text="method" /> output

<div class="language-lua"><pre><code>function pinnacle.tag.TagHandle:output()
    -> <a href="/lua-reference/0.1.0/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a></code></pre></div>

Gets the output this tag is on.




#### Returns

1. <code><a href="/lua-reference/0.1.0/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a></code>




### <Badge type="method" text="method" /> windows

<div class="language-lua"><pre><code>function pinnacle.tag.TagHandle:windows()
    -> <a href="/lua-reference/0.1.0/classes/pinnacle.window.WindowHandle">pinnacle.window.WindowHandle</a>[]</code></pre></div>

Gets the windows that have this tag.




#### Returns

1. <code><a href="/lua-reference/0.1.0/classes/pinnacle.window.WindowHandle">pinnacle.window.WindowHandle</a>[]</code>



