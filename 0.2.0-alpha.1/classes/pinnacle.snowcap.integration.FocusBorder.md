---
outline: [2, 3]
---

# Class `pinnacle.snowcap.integration.FocusBorder` : <code>snowcap.widget.Program</code>


A border that shows window focus, with an optional titlebar.

## Fields

### window

`window`: <code><a href="/lua-reference/0.2.0-alpha.1/classes/pinnacle.window.WindowHandle">pinnacle.window.WindowHandle</a></code>

The window this border is decorating.

### thickness

`thickness`: <code>integer</code>

The thickness of the border, in pixels.

### focused_color

`focused_color`: <code>snowcap.widget.Color</code>

The color of the border when it's focused.

### unfocused_color

`unfocused_color`: <code>snowcap.widget.Color</code>

The color of the border when it's unfocused.

### focused

`focused`: <code>boolean</code>

Whether the window this border surrounds is focused.

### include_titlebar

`include_titlebar`: <code>boolean</code>

Whether to draw a titlebar

### title

`title`: <code>string</code>

The title of the window.

### titlebar_height

`titlebar_height`: <code>integer</code>

The height of the titlebar


## Functions

### <Badge type="method" text="method" /> decorate

<div class="language-lua"><pre><code>function pinnacle.snowcap.integration.FocusBorder:decorate()
    -> snowcap.decoration.DecorationHandle | nil</code></pre></div>

Decorates the window with this focus border.




#### Returns

1. <code>snowcap.decoration.DecorationHandle | nil</code>



