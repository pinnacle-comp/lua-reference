---
outline: [2, 3]
---

# Class `TagHandle`


A tag handle.

This is a handle that allows manipulation of a tag.

This can be retrieved through the various `get` functions in the `Tag` module.

## Fields

### id

`id`: <code>integer</code>




## Functions

### <Badge type="method" text="method" /> remove

<div class="language-lua"><pre><code>function TagHandle:remove()</code></pre></div>

Remove this tag.

#### Example
```lua
local tags = Tag.add(Output.get_by_name("HDMI-1"), "1", "2", "Buckle", "Shoe")

tags[2]:remove()
tags[4]:remove()
 -- "HDMI-1" now only has tags "1" and "Buckle"
```






### <Badge type="method" text="method" /> switch_to

<div class="language-lua"><pre><code>function TagHandle:switch_to()</code></pre></div>

Activate this tag and deactivate all other ones on the same output.

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

<div class="language-lua"><pre><code>function TagHandle:set_active(active: boolean)</code></pre></div>

Set whether or not this tag is active.

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

<div class="language-lua"><pre><code>function TagHandle:toggle_active()</code></pre></div>

Toggle this tag's active state.

#### Example
```lua
 -- Assume the focused output has the following inactive tags and windows:
 --  - "1": Alacritty
 --  - "2": Firefox, Discord
 --  - "3": Steam
Tag.get("2"):toggle_active() -- Displays Firefox and Discord
Tag.get("2"):toggle_active() -- Displays nothing
```






### <Badge type="method" text="method" /> props

<div class="language-lua"><pre><code>function TagHandle:props()
    -> <a href="/classes/TagProperties">TagProperties</a></code></pre></div>

Get all properties of this tag.




#### Returns

1. <code><a href="/classes/TagProperties">TagProperties</a></code>




### <Badge type="method" text="method" /> active

<div class="language-lua"><pre><code>function TagHandle:active()
    -> boolean</code></pre></div>

Get whether or not this tag is being displayed.

Shorthand for `handle:props().active`.




#### Returns

1. <code>boolean</code>




### <Badge type="method" text="method" /> name

<div class="language-lua"><pre><code>function TagHandle:name()
    -> string</code></pre></div>

Get this tag's name.

Shorthand for `handle:props().name`.




#### Returns

1. <code>string</code>




### <Badge type="method" text="method" /> output

<div class="language-lua"><pre><code>function TagHandle:output()
    -> <a href="/classes/OutputHandle">OutputHandle</a></code></pre></div>

Get the output this tag is on.

Shorthand for `handle:props().output`.




#### Returns

1. <code><a href="/classes/OutputHandle">OutputHandle</a></code>




### <Badge type="method" text="method" /> windows

<div class="language-lua"><pre><code>function TagHandle:windows()
    -> <a href="/classes/WindowHandle">WindowHandle</a>[]</code></pre></div>

Get the windows that have this tag.

Shorthand for `handle:props().windows`.




#### Returns

1. <code><a href="/classes/WindowHandle">WindowHandle</a>[]</code>



