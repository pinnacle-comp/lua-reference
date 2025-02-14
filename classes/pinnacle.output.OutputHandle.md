---
outline: [2, 3]
---

# Class `pinnacle.output.OutputHandle`


An output handle.

This is a handle to one of your monitors.

This can be retrieved through the various `get` functions in the `Output` module.


## Fields

### name

`name`: <code>string</code>

The unique name of this output


## Functions

### <Badge type="method" text="method" /> set_loc

<div class="language-lua"><pre><code>function pinnacle.output.OutputHandle:set_loc(x: integer, y: integer)</code></pre></div>

Sets the location of this output in the global space.

On startup, Pinnacle will lay out all connected outputs starting at (0, 0)
and going to the right, with their top borders aligned.

This method allows you to move outputs where necessary.

Note: If you have space between two outputs when setting their locations,
the pointer will not be able to move between them.

#### Example
```lua
 -- Assume two monitors in order, "DP-1" and "HDMI-1", with the following dimensions:
 --  - "DP-1":   ┌─────┐
 --              │     │1920x1080
 --              └─────┘
 --  - "HDMI-1": ┌───────┐
 --              │ 2560x │
 --              │ 1440  │
 --              └───────┘
Output.get_by_name("DP-1"):set_loc(0, 0)
Output.get_by_name("HDMI-1"):set_loc(1920, -360)
 -- Results in:
 --       ┌───────┐
 -- ┌─────┤       │
 -- │DP-1 │HDMI-1 │
 -- └─────┴───────┘
 -- Notice that y = 0 aligns with the top of "DP-1", and the top of "HDMI-1" is at y = -360.
```



#### Parameters

`x`: <code>integer</code><br>
`y`: <code>integer</code>





#### See also

- <code><a href="/lua-reference/classes/pinnacle.output.OutputHandle#set_loc_adj_to">pinnacle.output.OutputHandle.set_loc_adj_to</a></code>
### <Badge type="method" text="method" /> set_loc_adj_to

<div class="language-lua"><pre><code>function pinnacle.output.OutputHandle:set_loc_adj_to(other: <a href="/lua-reference/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a>, alignment: <a href="/lua-reference/aliases/pinnacle.output.Alignment">pinnacle.output.Alignment</a>)</code></pre></div>

Sets the location of this output adjacent to another one.

`alignment` is how you want this output to be placed.
For example, "top_align_left" will place this output above `other` and align the left borders.
Similarly, "right_align_center" will place this output to the right of `other` and align their centers.

#### Example
```lua
 -- Assume two monitors in order, "DP-1" and "HDMI-1", with the following dimensions:
 --  - "DP-1":   ┌─────┐
 --              │     │1920x1080
 --              └─────┘
 --  - "HDMI-1": ┌───────┐
 --              │ 2560x │
 --              │ 1440  │
 --              └───────┘
Output.get_by_name("DP-1"):set_loc_adj_to(Output:get_by_name("HDMI-1"), "bottom_align_right")
 -- Results in:
 -- ┌───────┐
 -- │       │
 -- │HDMI-1 │
 -- └──┬────┤
 --    │DP-1│
 --    └────┘
 -- Notice that "DP-1" now has the coordinates (2280, 1440) because "DP-1" is getting moved, not "HDMI-1".
 -- "HDMI-1" was placed at (1920, 0) during the compositor's initial output layout.
```


#### Parameters

`other`: <code><a href="/lua-reference/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a></code><br>
`alignment`: <code><a href="/lua-reference/aliases/pinnacle.output.Alignment">pinnacle.output.Alignment</a></code>






### <Badge type="method" text="method" /> set_mode

<div class="language-lua"><pre><code>function pinnacle.output.OutputHandle:set_mode(width: integer, height: integer, refresh_rate_mhz?: integer)</code></pre></div>

Sets this output's mode.

If `refresh_rate_mhz` is provided, Pinnacle will attempt to use the mode with that refresh rate.
If it isn't, Pinnacle will attempt to use the mode with the highest refresh rate that matches the
given size.

The refresh rate is in millihertz. For example, to choose a mode with a refresh rate of 60Hz, use 60000.

If this output doesn't support the given mode, it will be ignored.

#### Example
```lua
Output.get_focused():set_mode(2560, 1440, 144000)
```


#### Parameters

`width`: <code>integer</code><br>
`height`: <code>integer</code><br>
`refresh_rate_mhz?`: <code>integer</code>






### <Badge type="method" text="method" /> set_custom_mode

<div class="language-lua"><pre><code>function pinnacle.output.OutputHandle:set_custom_mode(width: integer, height: integer, refresh_rate_mhz?: integer)</code></pre></div>

Sets this output's mode to a custom one.

If `refresh_rate_mhz` is provided, Pinnacle will create a new mode with that refresh rate.
If it isn't, it will default to 60Hz.

The refresh rate is in millihertz. For example, to choose a mode with a refresh rate of 60Hz, use 60000.

#### Example
```lua
Output.get_focused():set_custom_mode(2560, 1440, 75000)
```


#### Parameters

`width`: <code>integer</code><br>
`height`: <code>integer</code><br>
`refresh_rate_mhz?`: <code>integer</code>






### <Badge type="method" text="method" /> set_modeline

<div class="language-lua"><pre><code>function pinnacle.output.OutputHandle:set_modeline(modeline: string | <a href="/lua-reference/classes/pinnacle.output.Modeline">pinnacle.output.Modeline</a>)</code></pre></div>

Sets a custom modeline for this output.

This accepts a `Modeline` table or a string of the modeline.
You can parse a modeline into a `Modeline` table with
```lua
require("pinnacle.util").output.parse_modeline("your modeline herre")
```


#### Parameters

`modeline`: <code>string | <a href="/lua-reference/classes/pinnacle.output.Modeline">pinnacle.output.Modeline</a></code>






### <Badge type="method" text="method" /> set_scale

<div class="language-lua"><pre><code>function pinnacle.output.OutputHandle:set_scale(scale: number)</code></pre></div>

Sets this output's scaling factor.


#### Parameters

`scale`: <code>number</code>






### <Badge type="method" text="method" /> change_scale

<div class="language-lua"><pre><code>function pinnacle.output.OutputHandle:change_scale(change_by: number)</code></pre></div>

Changes this output's scaling factor by the given amount.


#### Parameters

`change_by`: <code>number</code>






### <Badge type="method" text="method" /> set_transform

<div class="language-lua"><pre><code>function pinnacle.output.OutputHandle:set_transform(transform: <a href="/lua-reference/enums/pinnacle.output.Transform">pinnacle.output.Transform</a>)</code></pre></div>

Sets this output's transform.


#### Parameters

`transform`: <code><a href="/lua-reference/enums/pinnacle.output.Transform">pinnacle.output.Transform</a></code>






### <Badge type="method" text="method" /> set_powered

<div class="language-lua"><pre><code>function pinnacle.output.OutputHandle:set_powered(powered: boolean)</code></pre></div>

Powers on or off this output.


#### Parameters

`powered`: <code>boolean</code>






### <Badge type="method" text="method" /> toggle_powered

<div class="language-lua"><pre><code>function pinnacle.output.OutputHandle:toggle_powered()</code></pre></div>

Toggles power for this output.






### <Badge type="method" text="method" /> make

<div class="language-lua"><pre><code>function pinnacle.output.OutputHandle:make()
    -> string</code></pre></div>

Gets this output's make.




#### Returns

1. <code>string</code>




### <Badge type="method" text="method" /> model

<div class="language-lua"><pre><code>function pinnacle.output.OutputHandle:model()
    -> string</code></pre></div>

Gets this output's model.




#### Returns

1. <code>string</code>




### <Badge type="method" text="method" /> serial

<div class="language-lua"><pre><code>function pinnacle.output.OutputHandle:serial()
    -> string</code></pre></div>

Gets this output's serial.




#### Returns

1. <code>string</code>




### <Badge type="method" text="method" /> loc

<div class="language-lua"><pre><code>function pinnacle.output.OutputHandle:loc()
    -> { x: integer, y: integer }</code></pre></div>

Gets this output's location in the global space.




#### Returns

1. <code>{ x: integer, y: integer }</code>




### <Badge type="method" text="method" /> logical_size

<div class="language-lua"><pre><code>function pinnacle.output.OutputHandle:logical_size()
    -> { width: integer, height: integer }</code></pre></div>

Gets this output's logical size in logical pixels.

If the output is disabled, this returns nil.




#### Returns

1. <code>{ width: integer, height: integer }</code>




### <Badge type="method" text="method" /> physical_size

<div class="language-lua"><pre><code>function pinnacle.output.OutputHandle:physical_size()
    -> { width: integer, height: integer }</code></pre></div>

Gets this output's physical size in millimeters.




#### Returns

1. <code>{ width: integer, height: integer }</code>




### <Badge type="method" text="method" /> current_mode

<div class="language-lua"><pre><code>function pinnacle.output.OutputHandle:current_mode()
    -> <a href="/lua-reference/classes/pinnacle.output.Mode">pinnacle.output.Mode</a></code></pre></div>

Gets this output's current mode.




#### Returns

1. <code><a href="/lua-reference/classes/pinnacle.output.Mode">pinnacle.output.Mode</a></code>




### <Badge type="method" text="method" /> preferred_mode

<div class="language-lua"><pre><code>function pinnacle.output.OutputHandle:preferred_mode()
    -> <a href="/lua-reference/classes/pinnacle.output.Mode">pinnacle.output.Mode</a></code></pre></div>

Gets this output's preferred mode.




#### Returns

1. <code><a href="/lua-reference/classes/pinnacle.output.Mode">pinnacle.output.Mode</a></code>




### <Badge type="method" text="method" /> modes

<div class="language-lua"><pre><code>function pinnacle.output.OutputHandle:modes()
    -> <a href="/lua-reference/classes/pinnacle.output.Mode">pinnacle.output.Mode</a>[]</code></pre></div>

Gets all of this output's available modes.




#### Returns

1. <code><a href="/lua-reference/classes/pinnacle.output.Mode">pinnacle.output.Mode</a>[]</code>




### <Badge type="method" text="method" /> focused

<div class="language-lua"><pre><code>function pinnacle.output.OutputHandle:focused()
    -> boolean</code></pre></div>

Gets whether or not this output is focused.

The focused output is currently implemented as the one that last had pointer motion.




#### Returns

1. <code>boolean</code>




### <Badge type="method" text="method" /> tags

<div class="language-lua"><pre><code>function pinnacle.output.OutputHandle:tags()
    -> <a href="/lua-reference/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a>[]</code></pre></div>

Gets the tags this output has.




#### Returns

1. <code><a href="/lua-reference/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a>[]</code>




### <Badge type="method" text="method" /> scale

<div class="language-lua"><pre><code>function pinnacle.output.OutputHandle:scale()
    -> number</code></pre></div>

Get this output's scale.




#### Returns

1. <code>number</code>




### <Badge type="method" text="method" /> transform

<div class="language-lua"><pre><code>function pinnacle.output.OutputHandle:transform()
    -> <a href="/lua-reference/enums/pinnacle.output.Transform">pinnacle.output.Transform</a></code></pre></div>

Get this output's transform.




#### Returns

1. <code><a href="/lua-reference/enums/pinnacle.output.Transform">pinnacle.output.Transform</a></code>




### <Badge type="method" text="method" /> enabled

<div class="language-lua"><pre><code>function pinnacle.output.OutputHandle:enabled()
    -> boolean</code></pre></div>

Gets whether this output is enabled.

Disabled outputs are not mapped to the global space and cannot be used.




#### Returns

1. <code>boolean</code>




### <Badge type="method" text="method" /> powered

<div class="language-lua"><pre><code>function pinnacle.output.OutputHandle:powered()
    -> boolean</code></pre></div>

Gets whether this output is powered.

Unpowered outputs that are enabled will be off, but they will still be
mapped to the global space, meaning you can still interact with them.




#### Returns

1. <code>boolean</code>




### <Badge type="method" text="method" /> keyboard_focus_stack

<div class="language-lua"><pre><code>function pinnacle.output.OutputHandle:keyboard_focus_stack()
    -> <a href="/lua-reference/classes/pinnacle.window.WindowHandle">pinnacle.window.WindowHandle</a>[]</code></pre></div>

Gets this output's keyboard focus stack.

This includes *all* windows on the output, even those on inactive tags.
If you only want visible windows, use `keyboard_focus_stack_visible` instead.





#### Returns

1. <code><a href="/lua-reference/classes/pinnacle.window.WindowHandle">pinnacle.window.WindowHandle</a>[]</code>



#### See also

- <code><a href="/lua-reference/classes/pinnacle.output.OutputHandle#keyboard_focus_stack_visible">pinnacle.output.OutputHandle.keyboard_focus_stack_visible</a></code>
### <Badge type="method" text="method" /> keyboard_focus_stack_visible

<div class="language-lua"><pre><code>function pinnacle.output.OutputHandle:keyboard_focus_stack_visible()
    -> <a href="/lua-reference/classes/pinnacle.window.WindowHandle">pinnacle.window.WindowHandle</a>[]</code></pre></div>

Gets this output's keyboard focus stack.

This only includes windows on active tags.
If you want all windows on the output, use `keyboard_focus_stack` instead.





#### Returns

1. <code><a href="/lua-reference/classes/pinnacle.window.WindowHandle">pinnacle.window.WindowHandle</a>[]</code>



#### See also

- <code><a href="/lua-reference/classes/pinnacle.output.OutputHandle#keyboard_focus_stack">pinnacle.output.OutputHandle.keyboard_focus_stack</a></code>