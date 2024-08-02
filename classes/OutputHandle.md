---
outline: [2, 3]
---

# Class `OutputHandle`


An output handle.

This is a handle to one of your monitors.
It serves to make it easier to deal with them, defining methods for getting properties and
helpers for things like positioning multiple monitors.

This can be retrieved through the various `get` functions in the `Output` module.

## Fields

### name

`name`: <code>string</code>

The unique name of this output


## Functions

### <Badge type="method" text="method" /> set_location

<div class="language-lua"><pre><code>function OutputHandle:set_location(loc: { x: integer, y: integer })</code></pre></div>

Set the location of this output in the global space.

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
Output.get_by_name("DP-1"):set_location({ x = 0, y = 0 })
Output.get_by_name("HDMI-1"):set_location({ x = 1920, y = -360 })
 -- Results in:
 --       ┌───────┐
 -- ┌─────┤       │
 -- │DP-1 │HDMI-1 │
 -- └─────┴───────┘
 -- Notice that y = 0 aligns with the top of "DP-1", and the top of "HDMI-1" is at y = -360.
```



#### Parameters

`loc`: <code>{ x: integer, y: integer }</code>





#### See also

- <code><a href="/lua-reference/classes/OutputHandle#set_loc_adj_to">OutputHandle.set_loc_adj_to</a></code>
### <Badge type="method" text="method" /> set_loc_adj_to

<div class="language-lua"><pre><code>function OutputHandle:set_loc_adj_to(other: <a href="/lua-reference/classes/OutputHandle">OutputHandle</a>, alignment: <a href="/lua-reference/aliases/Alignment">Alignment</a>)</code></pre></div>

Set the location of this output adjacent to another one.

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

`other`: <code><a href="/lua-reference/classes/OutputHandle">OutputHandle</a></code><br>
`alignment`: <code><a href="/lua-reference/aliases/Alignment">Alignment</a></code>






### <Badge type="method" text="method" /> set_mode

<div class="language-lua"><pre><code>function OutputHandle:set_mode(pixel_width: integer, pixel_height: integer, refresh_rate_millihz?: integer)</code></pre></div>

Set this output's mode.

If `refresh_rate_millihz` is provided, Pinnacle will attempt to use the mode with that refresh rate.
If it isn't, Pinnacle will attempt to use the mode with the highest refresh rate that matches the
given size.

The refresh rate is in millihertz. For example, to choose a mode with a refresh rate of 60Hz, use 60000.

If this output doesn't support the given mode, it will be ignored.

#### Example
```lua
Output.get_focused():set_mode(2560, 1440, 144000)
```


#### Parameters

`pixel_width`: <code>integer</code><br>
`pixel_height`: <code>integer</code><br>
`refresh_rate_millihz?`: <code>integer</code>






### <Badge type="method" text="method" /> set_modeline

<div class="language-lua"><pre><code>function OutputHandle:set_modeline(modeline: string | <a href="/lua-reference/classes/Modeline">Modeline</a>)</code></pre></div>

Set a custom modeline for this output.

This accepts a `Modeline` table or a string of the modeline.


#### Parameters

`modeline`: <code>string | <a href="/lua-reference/classes/Modeline">Modeline</a></code>






### <Badge type="method" text="method" /> set_scale

<div class="language-lua"><pre><code>function OutputHandle:set_scale(scale: number)</code></pre></div>

Set this output's scaling factor.


#### Parameters

`scale`: <code>number</code>






### <Badge type="method" text="method" /> increase_scale

<div class="language-lua"><pre><code>function OutputHandle:increase_scale(increase_by: number)</code></pre></div>

Increase this output's scaling factor.


#### Parameters

`increase_by`: <code>number</code>






### <Badge type="method" text="method" /> decrease_scale

<div class="language-lua"><pre><code>function OutputHandle:decrease_scale(decrease_by: number)</code></pre></div>

Decrease this output's scaling factor.


#### Parameters

`decrease_by`: <code>number</code>






### <Badge type="method" text="method" /> set_transform

<div class="language-lua"><pre><code>function OutputHandle:set_transform(transform: <a href="/lua-reference/enums/Transform">Transform</a>)</code></pre></div>

Set this output's transform.


#### Parameters

`transform`: <code><a href="/lua-reference/enums/Transform">Transform</a></code>






### <Badge type="method" text="method" /> set_powered

<div class="language-lua"><pre><code>function OutputHandle:set_powered(powered: boolean)</code></pre></div>

Power on or off this output.


#### Parameters

`powered`: <code>boolean</code>






### <Badge type="method" text="method" /> props

<div class="language-lua"><pre><code>function OutputHandle:props()
    -> <a href="/lua-reference/classes/OutputProperties">OutputProperties</a></code></pre></div>

Get all properties of this output.




#### Returns

1. <code><a href="/lua-reference/classes/OutputProperties">OutputProperties</a></code>




### <Badge type="method" text="method" /> make

<div class="language-lua"><pre><code>function OutputHandle:make()
    -> string</code></pre></div>

Get this output's make.

Note: make and model detection are currently somewhat iffy and may not work.

Shorthand for `handle:props().make`.




#### Returns

1. <code>string</code>




### <Badge type="method" text="method" /> model

<div class="language-lua"><pre><code>function OutputHandle:model()
    -> string</code></pre></div>

Get this output's model.

Note: make and model detection are currently somewhat iffy and may not work.

Shorthand for `handle:props().model`.




#### Returns

1. <code>string</code>




### <Badge type="method" text="method" /> x

<div class="language-lua"><pre><code>function OutputHandle:x()
    -> integer</code></pre></div>

Get this output's x-coordinate in the global space.

Shorthand for `handle:props().x`.




#### Returns

1. <code>integer</code>




### <Badge type="method" text="method" /> y

<div class="language-lua"><pre><code>function OutputHandle:y()
    -> integer</code></pre></div>

Get this output's y-coordinate in the global space.

Shorthand for `handle:props().y`.




#### Returns

1. <code>integer</code>




### <Badge type="method" text="method" /> logical_width

<div class="language-lua"><pre><code>function OutputHandle:logical_width()
    -> integer</code></pre></div>

Get this output's logical width in pixels.

If the output is disabled, this returns nil.

Shorthand for `handle:props().logical_width`.




#### Returns

1. <code>integer</code>




### <Badge type="method" text="method" /> logical_height

<div class="language-lua"><pre><code>function OutputHandle:logical_height()
    -> integer</code></pre></div>

Get this output's logical height in pixels.

If the output is disabled, this returns nil.

Shorthand for `handle:props().y`.




#### Returns

1. <code>integer</code>




### <Badge type="method" text="method" /> current_mode

<div class="language-lua"><pre><code>function OutputHandle:current_mode()
    -> <a href="/lua-reference/classes/Mode">Mode</a></code></pre></div>

Get this output's current mode.

Shorthand for `handle:props().current_mode`.




#### Returns

1. <code><a href="/lua-reference/classes/Mode">Mode</a></code>




### <Badge type="method" text="method" /> preferred_mode

<div class="language-lua"><pre><code>function OutputHandle:preferred_mode()
    -> <a href="/lua-reference/classes/Mode">Mode</a></code></pre></div>

Get this output's preferred mode.

Shorthand for `handle:props().preferred_mode`.




#### Returns

1. <code><a href="/lua-reference/classes/Mode">Mode</a></code>




### <Badge type="method" text="method" /> modes

<div class="language-lua"><pre><code>function OutputHandle:modes()
    -> <a href="/lua-reference/classes/Mode">Mode</a>[]</code></pre></div>

Get all of this output's available modes.

Shorthand for `handle:props().modes`.




#### Returns

1. <code><a href="/lua-reference/classes/Mode">Mode</a>[]</code>




### <Badge type="method" text="method" /> physical_width

<div class="language-lua"><pre><code>function OutputHandle:physical_width()
    -> integer</code></pre></div>

Get this output's physical width in millimeters.

Shorthand for `handle:props().physical_width`.




#### Returns

1. <code>integer</code>




### <Badge type="method" text="method" /> physical_height

<div class="language-lua"><pre><code>function OutputHandle:physical_height()
    -> integer</code></pre></div>

Get this output's physical height in millimeters.

Shorthand for `handle:props().physical_height`.




#### Returns

1. <code>integer</code>




### <Badge type="method" text="method" /> focused

<div class="language-lua"><pre><code>function OutputHandle:focused()
    -> boolean</code></pre></div>

Get whether or not this output is focused.

The focused output is currently implemented as the one that last had pointer motion.

Shorthand for `handle:props().focused`.




#### Returns

1. <code>boolean</code>




### <Badge type="method" text="method" /> tags

<div class="language-lua"><pre><code>function OutputHandle:tags()
    -> <a href="/lua-reference/classes/TagHandle">TagHandle</a>[]</code></pre></div>

Get the tags this output has.

Shorthand for `handle:props().tags`.




#### Returns

1. <code><a href="/lua-reference/classes/TagHandle">TagHandle</a>[]</code>




### <Badge type="method" text="method" /> scale

<div class="language-lua"><pre><code>function OutputHandle:scale()
    -> number</code></pre></div>

Get this output's scaling factor.

Shorthand for `handle:props().scale`.




#### Returns

1. <code>number</code>




### <Badge type="method" text="method" /> transform

<div class="language-lua"><pre><code>function OutputHandle:transform()
    -> <a href="/lua-reference/enums/Transform">Transform</a></code></pre></div>

Get this output's transform.

Shorthand for `handle:props().transform`.




#### Returns

1. <code><a href="/lua-reference/enums/Transform">Transform</a></code>




### <Badge type="method" text="method" /> serial

<div class="language-lua"><pre><code>function OutputHandle:serial()
    -> integer</code></pre></div>

Get this output's EDID serial number.

Shorthand for `handle:props().serial`.




#### Returns

1. <code>integer</code>




### <Badge type="method" text="method" /> keyboard_focus_stack

<div class="language-lua"><pre><code>function OutputHandle:keyboard_focus_stack()
    -> <a href="/lua-reference/classes/WindowHandle">WindowHandle</a>[]</code></pre></div>

Get this output's keyboard focus stack.

This includes *all* windows on the output, even those on inactive tags.
If you only want visible windows, use `keyboard_focus_stack_visible` instead.

Shorthand for `handle:props().keyboard_focus_stack`.





#### Returns

1. <code><a href="/lua-reference/classes/WindowHandle">WindowHandle</a>[]</code>



#### See also

- <code><a href="/lua-reference/classes/OutputHandle#keyboard_focus_stack_visible">OutputHandle.keyboard_focus_stack_visible</a></code>
### <Badge type="method" text="method" /> enabled

<div class="language-lua"><pre><code>function OutputHandle:enabled()
    -> boolean</code></pre></div>

Get whether this output is enabled.

Disabled outputs are not mapped to the global space and cannot be used.




#### Returns

1. <code>boolean</code>




### <Badge type="method" text="method" /> powered

<div class="language-lua"><pre><code>function OutputHandle:powered()
    -> boolean</code></pre></div>

Get whether this output is powered.

Unpowered outputs that are enabled will be off, but they will still be
mapped to the global space, meaning you can still interact with them.




#### Returns

1. <code>boolean</code>




### <Badge type="method" text="method" /> keyboard_focus_stack_visible

<div class="language-lua"><pre><code>function OutputHandle:keyboard_focus_stack_visible()
    -> <a href="/lua-reference/classes/WindowHandle">WindowHandle</a>[]</code></pre></div>

Get this output's keyboard focus stack.

This only includes windows on active tags.
If you want all windows on the output, use `keyboard_focus_stack` instead.





#### Returns

1. <code><a href="/lua-reference/classes/WindowHandle">WindowHandle</a>[]</code>



#### See also

- <code><a href="/lua-reference/classes/OutputHandle#keyboard_focus_stack">OutputHandle.keyboard_focus_stack</a></code>