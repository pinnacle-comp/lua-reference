---
outline: [2, 3]
---

# Class `WindowHandle`


A window handle.

This is a handle to an application window that allows manipulation of the window.

If the window is destroyed, the handle will become invalid and may not do
what you want it to.

You can retrieve window handles through the various `get` functions in the `Window` module.

## Fields

### id

`id`: <code>integer</code>




## Functions

### <Badge type="method" text="method" /> close

<div class="language-lua"><pre><code>function WindowHandle:close()</code></pre></div>

Send a close request to this window.

### Example
```lua
local focused = Window.get_focused()
if focused then focused:close() end
```






### <Badge type="method" text="method" /> set_geometry

<div class="language-lua"><pre><code>function WindowHandle:set_geometry(geo: { x: integer, y: integer, width: integer, height: integer })</code></pre></div>

Set this window's location and/or size.

The coordinate system has the following axes:
```
       ^ -y
       |
 -x <--+--> +x
       |
       v +y
```

*Tiled windows will not reflect these changes.*
This method only applies to this window's floating geometry.

### Example
```lua
local focused = Window.get_focused()
if focused then
    focused:set_floating(true)                     -- `set_geometry` only applies to floating geometry.

    focused:set_geometry({ x = 50, y = 300 })      -- Move this window to (50, 300)
    focused:set_geometry({ y = 0, height = 1080 }) -- Move this window to y = 0 and make its height 1080 pixels
    focused:set_geometry({})                       -- Do nothing useful
end
```

#### Parameters

`geo`: <code>{ x: integer, y: integer, width: integer, height: integer }</code> - The new location and/or size






### <Badge type="method" text="method" /> set_fullscreen

<div class="language-lua"><pre><code>function WindowHandle:set_fullscreen(fullscreen: boolean)</code></pre></div>

Set this window to fullscreen or not.

### Example
```lua
local focused = Window.get_focused()
if focused then
    focused:set_fullscreen(true)
    focused:set_fullscreen(false)
end
```


#### Parameters

`fullscreen`: <code>boolean</code>






### <Badge type="method" text="method" /> toggle_fullscreen

<div class="language-lua"><pre><code>function WindowHandle:toggle_fullscreen()</code></pre></div>

Toggle this window to and from fullscreen.

### Example
```lua
local focused = Window.get_focused()
if focused then
    focused:toggle_fullscreen()
end
```






### <Badge type="method" text="method" /> set_maximized

<div class="language-lua"><pre><code>function WindowHandle:set_maximized(maximized: boolean)</code></pre></div>

Set this window to maximized or not.

### Example
```lua
local focused = Window.get_focused()
if focused then
    focused:set_maximized(true)
    focused:set_maximized(false)
end
```


#### Parameters

`maximized`: <code>boolean</code>






### <Badge type="method" text="method" /> toggle_maximized

<div class="language-lua"><pre><code>function WindowHandle:toggle_maximized()</code></pre></div>

Toggle this window to and from maximized.

### Example
```lua
local focused = Window.get_focused()
if focused then
    focused:toggle_maximized()
end
```






### <Badge type="method" text="method" /> set_floating

<div class="language-lua"><pre><code>function WindowHandle:set_floating(floating: boolean)</code></pre></div>

Set this window to floating or not.

### Example
```lua
local focused = Window.get_focused()
if focused then
    focused:set_floating(true)
    focused:set_floating(false)
end
```


#### Parameters

`floating`: <code>boolean</code>






### <Badge type="method" text="method" /> toggle_floating

<div class="language-lua"><pre><code>function WindowHandle:toggle_floating()</code></pre></div>

Toggle this window to and from floating.

### Example
```lua
local focused = Window.get_focused()
if focused then
    focused:toggle_floating()
end
```






### <Badge type="method" text="method" /> set_focused

<div class="language-lua"><pre><code>function WindowHandle:set_focused(focused: boolean)</code></pre></div>

Focus or unfocus this window.

### Example
```lua
local focused = Window.get_focused()
if focused then
    focused:set_focused(false)
end
```


#### Parameters

`focused`: <code>boolean</code>






### <Badge type="method" text="method" /> toggle_focused

<div class="language-lua"><pre><code>function WindowHandle:toggle_focused()</code></pre></div>

Toggle this window to and from focused.

### Example
```lua
local focused = Window.get_focused()
if focused then
    focused:toggle_focused()
end
```






### <Badge type="method" text="method" /> move_to_tag

<div class="language-lua"><pre><code>function WindowHandle:move_to_tag(tag: <a href="/classes/TagHandle">TagHandle</a>)</code></pre></div>

Move this window to the specified tag.

This will remove all tags from this window and tag it with `tag`.

### Example
```lua
 -- Assume the focused output has the tag "Tag"
local focused = Window.get_focused()
if focused then
    focused:move_to_tag(Tag.get("Tag"))
end
```


#### Parameters

`tag`: <code><a href="/classes/TagHandle">TagHandle</a></code> - The tag to move this window to






### <Badge type="method" text="method" /> set_tag

<div class="language-lua"><pre><code>function WindowHandle:set_tag(tag: <a href="/classes/TagHandle">TagHandle</a>, set: boolean)</code></pre></div>

Tag or untag the given tag on this window.

### Example
```lua
 -- Assume the focused output has the tag "Tag"
local focused = Window.get_focused()
if focused then
    local tag = Tag.get("Tag")

    focused:set_tag(tag, true)
    -- `focused` now has tag "Tag"
    focused:set_tag(tag, false)
    -- `focused` no longer has tag "Tag"
end
```


#### Parameters

`tag`: <code><a href="/classes/TagHandle">TagHandle</a></code> - The tag to set or unset<br>
`set`: <code>boolean</code>






### <Badge type="method" text="method" /> toggle_tag

<div class="language-lua"><pre><code>function WindowHandle:toggle_tag(tag: <a href="/classes/TagHandle">TagHandle</a>)</code></pre></div>

Toggle the given tag on this window.

### Example
```lua
 -- Assume the focused output has the tag "Tag"
local focused = Window.get_focused()
if focused then
    local tag = Tag.get("Tag")
    focused:set_tag(tag, false)

    focused:toggle_tag(tag)
    -- `focused` now has tag "Tag"
    focused:toggle_tag(tag)
    -- `focused` no longer has tag "Tag"
end
```


#### Parameters

`tag`: <code><a href="/classes/TagHandle">TagHandle</a></code> - The tag to toggle






### <Badge type="method" text="method" /> raise

<div class="language-lua"><pre><code>function WindowHandle:raise()</code></pre></div>

Raise a window.

This will raise a window all the way to the top of the z-stack.

### Example
```lua
local focused = Window.get_focused()
if focused then
    focused:raise()
end
```






### <Badge type="method" text="method" /> is_on_active_tag

<div class="language-lua"><pre><code>function WindowHandle:is_on_active_tag()
    -> boolean</code></pre></div>

Returns whether or not this window is on an active tag.




#### Returns

1. <code>boolean</code>




### <Badge type="method" text="method" /> props

<div class="language-lua"><pre><code>function WindowHandle:props()
    -> <a href="/classes/WindowProperties">WindowProperties</a></code></pre></div>

Get all the properties of this window.




#### Returns

1. <code><a href="/classes/WindowProperties">WindowProperties</a></code>




### <Badge type="method" text="method" /> geometry

<div class="language-lua"><pre><code>function WindowHandle:geometry()
    -> { x: integer, y: integer, width: integer, height: integer }</code></pre></div>

Get this window's location and size.

Shorthand for `handle:props().geometry`.




#### Returns

1. <code>{ x: integer, y: integer, width: integer, height: integer }</code>




### <Badge type="method" text="method" /> class

<div class="language-lua"><pre><code>function WindowHandle:class()
    -> string</code></pre></div>

Get this window's class.

Shorthand for `handle:props().class`.




#### Returns

1. <code>string</code>




### <Badge type="method" text="method" /> title

<div class="language-lua"><pre><code>function WindowHandle:title()
    -> string</code></pre></div>

Get this window's title.

Shorthand for `handle:props().title`.




#### Returns

1. <code>string</code>




### <Badge type="method" text="method" /> focused

<div class="language-lua"><pre><code>function WindowHandle:focused()
    -> boolean</code></pre></div>

Get whether or not this window is focused.

Shorthand for `handle:props().focused`.




#### Returns

1. <code>boolean</code>




### <Badge type="method" text="method" /> floating

<div class="language-lua"><pre><code>function WindowHandle:floating()
    -> boolean</code></pre></div>

Get whether or not this window is floating.

Shorthand for `handle:props().floating`.




#### Returns

1. <code>boolean</code>




### <Badge type="method" text="method" /> tiled

<div class="language-lua"><pre><code>function WindowHandle:tiled()
    -> boolean</code></pre></div>

Get whether this window is tiled.




#### Returns

1. <code>boolean</code>




### <Badge type="method" text="method" /> fullscreen

<div class="language-lua"><pre><code>function WindowHandle:fullscreen()
    -> boolean</code></pre></div>

Get whether this window is fullscreen.




#### Returns

1. <code>boolean</code>




### <Badge type="method" text="method" /> maximized

<div class="language-lua"><pre><code>function WindowHandle:maximized()
    -> boolean</code></pre></div>

Get whether this window is maximized.




#### Returns

1. <code>boolean</code>




### <Badge type="method" text="method" /> fullscreen_or_maximized

<div class="language-lua"><pre><code>function WindowHandle:fullscreen_or_maximized()
    -> <a href="/enums/FullscreenOrMaximized">FullscreenOrMaximized</a></code></pre></div>

Deprecated; use the `fullscreen` or `maximized` methods instead.

Get whether this window is fullscreen, maximized, or neither.

Shorthand for `handle:props().fullscreen_or_maximized`.




#### Returns

1. <code><a href="/enums/FullscreenOrMaximized">FullscreenOrMaximized</a></code>




### <Badge type="method" text="method" /> tags

<div class="language-lua"><pre><code>function WindowHandle:tags()
    -> <a href="/classes/TagHandle">TagHandle</a>[]</code></pre></div>

Get all tags on this window.

Shorthand for `handle:props().tags`.




#### Returns

1. <code><a href="/classes/TagHandle">TagHandle</a>[]</code>



