---
outline: [2, 3]
---

# Class `pinnacle.window.WindowHandle`


A window handle.

This is a handle to an application window that allows manipulation of the window.

If the window is destroyed, the handle will become invalid and may not do
what you want it to.

You can retrieve window handles through the various `get` functions in the `Window` module.


## Fields

### id

`id`: <code>integer</code>

The unique id of this window.


## Functions

### <Badge type="method" text="method" /> close

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:close()</code></pre></div>

Sends a close request to this window.






### <Badge type="method" text="method" /> set_geometry

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:set_geometry(geo: { x?: integer, y?: integer, width?: integer, height?: integer })</code></pre></div>

Sets this window's location and/or size.

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

#### Example
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

`geo` - The new location and/or size
  - <code>{ x?: integer, y?: integer, width?: integer, height?: integer }</code>






### <Badge type="method" text="method" /> resize_tile

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:resize_tile(dimensions: { left?: integer, right?: integer, top?: integer, bottom?: integer })</code></pre></div>

If this window is tiled, resizes its tile by shifting the left, right,
top, and bottom edges by the provided pixel amounts.

Positive amounts shift edges right/down, while negative amounts
shift edges left/up.

If this resizes the tile in a direction that it can no longer resize
towards (e.g. it's at the edge of the screen), it will resize in the opposite
direction.

#### Example
```lua
-- Grow the focused tiled window 10 pixels leftward
Window.get_focused():resize_tile({ left = -10 })

-- Shrink the focused tiled window 10 pixels inward from the right
Window.get_focused():resize_tile({ right = -10 })

-- Grow the focused tiled window 20 pixels centered vertically
Window.get_focused():resize_tile({ top = -10, bottom = 10 })
```


#### Parameters

`dimensions`
  - <code>{ left?: integer, right?: integer, top?: integer, bottom?: integer }</code>






### <Badge type="method" text="method" /> set_fullscreen

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:set_fullscreen(fullscreen: boolean)</code></pre></div>

Sets this window to fullscreen or not.


#### Parameters

`fullscreen`
  - <code>boolean</code>






### <Badge type="method" text="method" /> toggle_fullscreen

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:toggle_fullscreen()</code></pre></div>

Toggles this window to and from fullscreen.







### <Badge type="method" text="method" /> set_maximized

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:set_maximized(maximized: boolean)</code></pre></div>

Sets this window to maximized or not.


#### Parameters

`maximized`
  - <code>boolean</code>






### <Badge type="method" text="method" /> toggle_maximized

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:toggle_maximized()</code></pre></div>

Toggles this window to and from maximized.







### <Badge type="method" text="method" /> set_floating

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:set_floating(floating: boolean)</code></pre></div>

Sets this window to floating or not.


#### Parameters

`floating`
  - <code>boolean</code>






### <Badge type="method" text="method" /> toggle_floating

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:toggle_floating()</code></pre></div>

Toggles this window to and from floating.







### <Badge type="method" text="method" /> set_focused

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:set_focused(focused: boolean)</code></pre></div>

Focuses or unfocuses this window.


#### Parameters

`focused`
  - <code>boolean</code>






### <Badge type="method" text="method" /> toggle_focused

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:toggle_focused()</code></pre></div>

Toggles this window to and from focused.







### <Badge type="method" text="method" /> set_decoration_mode

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:set_decoration_mode(mode: "client_side" | "server_side")</code></pre></div>

Sets this window's decoration mode.

If not set, the client is allowed to choose its decoration mode, defaulting to client-side if it doesn't.


#### Parameters

`mode` - `"client_side"` to enable CSD, or `"server_side"` to enable CSD.
  - <code>"client_side" | "server_side"</code>






### <Badge type="method" text="method" /> move_to_output

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:move_to_output(output: <a href="/lua-reference/main/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a>)</code></pre></div>

Moves this window to the specified output.

This will set the window tags to the output tags, and update the window position.


#### Parameters

`output` - The output to move this window to.
  - <code><a href="/lua-reference/main/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a></code>






### <Badge type="method" text="method" /> move_to_tag

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:move_to_tag(tag: <a href="/lua-reference/main/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a>)</code></pre></div>

Moves this window to the specified tag.

This will remove all tags from this window and add the tag `tag`.


#### Parameters

`tag` - The tag to move this window to
  - <code><a href="/lua-reference/main/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a></code>






### <Badge type="method" text="method" /> set_tag

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:set_tag(tag: <a href="/lua-reference/main/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a>, set: boolean)</code></pre></div>

Adds or removes the given tag to or from this window.


#### Parameters

`tag` - The tag to set or unset
  - <code><a href="/lua-reference/main/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a></code><br>
`set`
  - <code>boolean</code>






### <Badge type="method" text="method" /> toggle_tag

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:toggle_tag(tag: <a href="/lua-reference/main/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a>)</code></pre></div>

Toggles the given tag on this window.


#### Parameters

`tag` - The tag to toggle
  - <code><a href="/lua-reference/main/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a></code>






### <Badge type="method" text="method" /> set_tags

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:set_tags(tags: <a href="/lua-reference/main/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a>[])</code></pre></div>

Sets the exact provided tags on this window.

Passing in an empty table will not change the window's tags.

#### Example
```lua
-- Sets the focused window's tags to "1" and "3", removing all others
Window.get_focused():set_tags({ Tag.get("1"), Tag.get("2") })
```


#### Parameters

`tags` - The tags to set
  - <code><a href="/lua-reference/main/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a>[]</code>






### <Badge type="method" text="method" /> set_vrr_demand

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:set_vrr_demand(vrr_demand?: "visible" | "fullscreen")</code></pre></div>

Sets this window's vrr demand.

This works in conjunction with an output with an on-demand vrr state.


#### Parameters

`vrr_demand?` - The vrr demand, or `nil` to have none.
  - <code>"visible"</code> - Turns vrr on on an on-demand vrr output when a window is visible.
  - <code>"fullscreen"</code> - Turns vrr on on an on-demand vrr output when a window is both visible *and* fullscreen.






### <Badge type="method" text="method" /> raise

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:raise()</code></pre></div>

Raises a window.

This will bring the window to the front.






### <Badge type="method" text="method" /> lower

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:lower()</code></pre></div>

Lowers a window.

This will bring the window to the back.






### <Badge type="method" text="method" /> is_on_active_tag

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:is_on_active_tag()
    -> boolean</code></pre></div>

Returns whether or not this window is on an active tag.




#### Returns

1. <code>boolean</code>




### <Badge type="method" text="method" /> loc

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:loc()
    -> { x: integer, y: integer }?</code></pre></div>

Gets this window's location.




#### Returns

1. <code>{ x: integer, y: integer }</code>




### <Badge type="method" text="method" /> size

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:size()
    -> { width: integer, height: integer }?</code></pre></div>

Gets this window's location.




#### Returns

1. <code>{ width: integer, height: integer }</code>




### <Badge type="method" text="method" /> app_id

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:app_id()
    -> string</code></pre></div>

Gets this window's class.




#### Returns

1. <code>string</code>




### <Badge type="method" text="method" /> title

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:title()
    -> string</code></pre></div>

Gets this window's title.




#### Returns

1. <code>string</code>




### <Badge type="method" text="method" /> focused

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:focused()
    -> boolean</code></pre></div>

Gets whether or not this window is focused.




#### Returns

1. <code>boolean</code>




### <Badge type="method" text="method" /> output

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:output()
    -> output: <a href="/lua-reference/main/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a> | nil</code></pre></div>

Gets this window's output.

This is currently implemented as the output of the first tag on this window.




#### Returns

1. `output`: <code><a href="/lua-reference/main/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a> | nil</code> - This window's output, or `nil` if it doesn't exist or it has no tags.




### <Badge type="method" text="method" /> floating

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:floating()
    -> boolean</code></pre></div>

Gets whether or not this window is floating.




#### Returns

1. <code>boolean</code>




### <Badge type="method" text="method" /> tiled

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:tiled()
    -> boolean</code></pre></div>

Gets whether this window is tiled.




#### Returns

1. <code>boolean</code>




### <Badge type="method" text="method" /> spilled

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:spilled()
    -> boolean</code></pre></div>

Gets whether this window is spilled from the layout.

A window is spilled when the current layout doesn't contains enough nodes
and the compositor cannot assign a geometry to it. In that state, the window
behaves as a floating window except that it gets tiled again if the number
of nodes become big enough.




#### Returns

1. <code>boolean</code>




### <Badge type="method" text="method" /> fullscreen

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:fullscreen()
    -> boolean</code></pre></div>

Gets whether this window is fullscreen.




#### Returns

1. <code>boolean</code>




### <Badge type="method" text="method" /> maximized

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:maximized()
    -> boolean</code></pre></div>

Gets whether this window is maximized.




#### Returns

1. <code>boolean</code>




### <Badge type="method" text="method" /> tags

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:tags()
    -> <a href="/lua-reference/main/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a>[]</code></pre></div>

Gets all tags on this window.




#### Returns

1. <code><a href="/lua-reference/main/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a>[]</code>




### <Badge type="method" text="method" /> in_direction

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:in_direction(direction: "left" | "right" | "up" | "down")
    -> <a href="/lua-reference/main/classes/pinnacle.window.WindowHandle">pinnacle.window.WindowHandle</a>[]</code></pre></div>

Gets all windows in the provided direction, sorted closest to farthest.


#### Parameters

`direction`
  - <code>"left" | "right" | "up" | "down"</code>



#### Returns

1. <code><a href="/lua-reference/main/classes/pinnacle.window.WindowHandle">pinnacle.window.WindowHandle</a>[]</code>




### <Badge type="method" text="method" /> foreign_toplevel_list_identifier

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:foreign_toplevel_list_identifier()
    -> identifier: string | nil</code></pre></div>

Gets this window's ext-foreign-toplevel-list handle identifier.




#### Returns

1. `identifier`: <code>string | nil</code>




### <Badge type="method" text="method" /> swap

<div class="language-lua"><pre><code>function pinnacle.window.WindowHandle:swap(target: <a href="/lua-reference/main/classes/pinnacle.window.WindowHandle">pinnacle.window.WindowHandle</a>)</code></pre></div>

Swap position with another window.


#### Parameters

`target`
  - <code><a href="/lua-reference/main/classes/pinnacle.window.WindowHandle">pinnacle.window.WindowHandle</a></code>





