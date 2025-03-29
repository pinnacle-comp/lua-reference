---
outline: [2, 3]
---

# Class `pinnacle.input.libinput.DeviceHandle`


A handle to an input device.

## Fields

### sysname

`sysname`: <code>string</code>

The name of the device's system path.


## Functions

### <Badge type="method" text="method" /> capabilities

<div class="language-lua"><pre><code>function pinnacle.input.libinput.DeviceHandle:capabilities()
    -> <a href="/lua-reference/0.1.0-alpha.1/classes/pinnacle.input.libinput.Capabilities">pinnacle.input.libinput.Capabilities</a></code></pre></div>

Gets this device's libinput capabilities.




#### Returns

1. <code><a href="/lua-reference/0.1.0-alpha.1/classes/pinnacle.input.libinput.Capabilities">pinnacle.input.libinput.Capabilities</a></code>




### <Badge type="method" text="method" /> name

<div class="language-lua"><pre><code>function pinnacle.input.libinput.DeviceHandle:name()
    -> string</code></pre></div>

Gets the name of this device.




#### Returns

1. <code>string</code>




### <Badge type="method" text="method" /> product_id

<div class="language-lua"><pre><code>function pinnacle.input.libinput.DeviceHandle:product_id()
    -> integer</code></pre></div>

Gets this device's product id.




#### Returns

1. <code>integer</code>




### <Badge type="method" text="method" /> vendor_id

<div class="language-lua"><pre><code>function pinnacle.input.libinput.DeviceHandle:vendor_id()
    -> integer</code></pre></div>

Gets this device's vendor id.



#### Returns

1. <code>integer</code>




### <Badge type="method" text="method" /> device_type

<div class="language-lua"><pre><code>function pinnacle.input.libinput.DeviceHandle:device_type()
    -> <a href="/lua-reference/0.1.0-alpha.1/aliases/pinnacle.input.libinput.DeviceType">pinnacle.input.libinput.DeviceType</a></code></pre></div>

Gets the type of this device.

Note: This uses heuristics to determine the type and may not be correct.
For example a device with both pointer and keyboard capabilities will be a "mouse"
when it may actually be a keyboard.




#### Returns

1. <code><a href="/lua-reference/0.1.0-alpha.1/aliases/pinnacle.input.libinput.DeviceType">pinnacle.input.libinput.DeviceType</a></code>




### <Badge type="method" text="method" /> map_to_output

<div class="language-lua"><pre><code>function pinnacle.input.libinput.DeviceHandle:map_to_output(output: <a href="/lua-reference/0.1.0-alpha.1/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a>)</code></pre></div>

Maps the absolute input from this device to the corresponding output.

This will cause touch input from this device to map proportionally
to the area of an output. For example, tapping in the middle of the device
will generate a tap event at the middle of the output.

This only affects devices with touch capability.



#### Parameters

`output`: <code><a href="/lua-reference/0.1.0-alpha.1/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a></code> - The output to map the device's input to





#### See also

- <code><a href="/lua-reference/0.1.0-alpha.1/classes/pinnacle.input.libinput.DeviceHandle#map_to_region">pinnacle.input.libinput.DeviceHandle.map_to_region</a></code>: To map device input to an arbitrary region instead
### <Badge type="method" text="method" /> map_to_region

<div class="language-lua"><pre><code>function pinnacle.input.libinput.DeviceHandle:map_to_region(region: { x: integer, y: integer, width: integer, height: integer })</code></pre></div>

Maps the absolute input from this device to the corresponding region
in the global space.

This will cause touch input from this device to map proportionally
to the given region within the global space. For example, tapping in the middle of the device
will generate a tap event at the middle of the region. This can be used
to map a touch device to more than one output, for example.

This only affects devices with touch capability.



#### Parameters

`region`: <code>{ x: integer, y: integer, width: integer, height: integer }</code> - The region in the global space to map input to





#### See also

- <code><a href="/lua-reference/0.1.0-alpha.1/classes/pinnacle.input.libinput.DeviceHandle#map_to_output">pinnacle.input.libinput.DeviceHandle.map_to_output</a></code>: To map device input to a specific output instead
### <Badge type="method" text="method" /> set_accel_profile

<div class="language-lua"><pre><code>function pinnacle.input.libinput.DeviceHandle:set_accel_profile(accel_profile: <a href="/lua-reference/0.1.0-alpha.1/enums/pinnacle.input.libinput.AccelProfile">pinnacle.input.libinput.AccelProfile</a>)</code></pre></div>

Sets this device's acceleration profile.


#### Parameters

`accel_profile`: <code><a href="/lua-reference/0.1.0-alpha.1/enums/pinnacle.input.libinput.AccelProfile">pinnacle.input.libinput.AccelProfile</a></code>






### <Badge type="method" text="method" /> set_accel_speed

<div class="language-lua"><pre><code>function pinnacle.input.libinput.DeviceHandle:set_accel_speed(accel_speed: number)</code></pre></div>

Sets this device's acceleration speed.


#### Parameters

`accel_speed`: <code>number</code>






### <Badge type="method" text="method" /> set_calibration_matrix

<div class="language-lua"><pre><code>function pinnacle.input.libinput.DeviceHandle:set_calibration_matrix(calibration_matrix: number[])</code></pre></div>

Sets this device's calibration matrix.


#### Parameters

`calibration_matrix`: <code>number[]</code> - The calibration matrix as an array of 6 floats.






### <Badge type="method" text="method" /> set_click_method

<div class="language-lua"><pre><code>function pinnacle.input.libinput.DeviceHandle:set_click_method(click_method: <a href="/lua-reference/0.1.0-alpha.1/enums/pinnacle.input.libinput.ClickMethod">pinnacle.input.libinput.ClickMethod</a>)</code></pre></div>

Sets this device's click method.


#### Parameters

`click_method`: <code><a href="/lua-reference/0.1.0-alpha.1/enums/pinnacle.input.libinput.ClickMethod">pinnacle.input.libinput.ClickMethod</a></code>






### <Badge type="method" text="method" /> set_disable_while_typing

<div class="language-lua"><pre><code>function pinnacle.input.libinput.DeviceHandle:set_disable_while_typing(disable_while_typing: boolean)</code></pre></div>

Sets whether or not this device is disabled while typing.


#### Parameters

`disable_while_typing`: <code>boolean</code>






### <Badge type="method" text="method" /> set_left_handed

<div class="language-lua"><pre><code>function pinnacle.input.libinput.DeviceHandle:set_left_handed(left_handed: boolean)</code></pre></div>

Sets this device to left-handed or not.


#### Parameters

`left_handed`: <code>boolean</code>






### <Badge type="method" text="method" /> set_middle_emulation

<div class="language-lua"><pre><code>function pinnacle.input.libinput.DeviceHandle:set_middle_emulation(middle_emulation: boolean)</code></pre></div>

Sets whether or not middle emulation is enabled.


#### Parameters

`middle_emulation`: <code>boolean</code>






### <Badge type="method" text="method" /> set_rotation_angle

<div class="language-lua"><pre><code>function pinnacle.input.libinput.DeviceHandle:set_rotation_angle(rotation_angle: integer)</code></pre></div>

Sets this device's rotation angle.


#### Parameters

`rotation_angle`: <code>integer</code>






### <Badge type="method" text="method" /> set_scroll_button

<div class="language-lua"><pre><code>function pinnacle.input.libinput.DeviceHandle:set_scroll_button(scroll_button: integer)</code></pre></div>

Sets this device's scroll button.


#### Parameters

`scroll_button`: <code>integer</code>






### <Badge type="method" text="method" /> set_scroll_button_lock

<div class="language-lua"><pre><code>function pinnacle.input.libinput.DeviceHandle:set_scroll_button_lock(scroll_button_lock: boolean)</code></pre></div>

Sets whether or not the scroll button locks on this device.


#### Parameters

`scroll_button_lock`: <code>boolean</code>






### <Badge type="method" text="method" /> set_scroll_method

<div class="language-lua"><pre><code>function pinnacle.input.libinput.DeviceHandle:set_scroll_method(scroll_method: <a href="/lua-reference/0.1.0-alpha.1/enums/pinnacle.input.libinput.ScrollMethod">pinnacle.input.libinput.ScrollMethod</a>)</code></pre></div>

Sets this device's scroll method.


#### Parameters

`scroll_method`: <code><a href="/lua-reference/0.1.0-alpha.1/enums/pinnacle.input.libinput.ScrollMethod">pinnacle.input.libinput.ScrollMethod</a></code>






### <Badge type="method" text="method" /> set_natural_scroll

<div class="language-lua"><pre><code>function pinnacle.input.libinput.DeviceHandle:set_natural_scroll(natural_scroll: boolean)</code></pre></div>

Enables or disables natural scroll on this device.


#### Parameters

`natural_scroll`: <code>boolean</code>






### <Badge type="method" text="method" /> set_tap_button_map

<div class="language-lua"><pre><code>function pinnacle.input.libinput.DeviceHandle:set_tap_button_map(tap_button_map: <a href="/lua-reference/0.1.0-alpha.1/enums/pinnacle.input.libinput.TapButtonMap">pinnacle.input.libinput.TapButtonMap</a>)</code></pre></div>

Sets this device's tap button map.


#### Parameters

`tap_button_map`: <code><a href="/lua-reference/0.1.0-alpha.1/enums/pinnacle.input.libinput.TapButtonMap">pinnacle.input.libinput.TapButtonMap</a></code>






### <Badge type="method" text="method" /> set_tap_drag

<div class="language-lua"><pre><code>function pinnacle.input.libinput.DeviceHandle:set_tap_drag(tap_drag: boolean)</code></pre></div>

Enables or disables tap dragging on this device.


#### Parameters

`tap_drag`: <code>boolean</code>






### <Badge type="method" text="method" /> set_tap_drag_lock

<div class="language-lua"><pre><code>function pinnacle.input.libinput.DeviceHandle:set_tap_drag_lock(tap_drag_lock: boolean)</code></pre></div>

Sets whether or not tap dragging locks on this device.


#### Parameters

`tap_drag_lock`: <code>boolean</code>






### <Badge type="method" text="method" /> set_tap

<div class="language-lua"><pre><code>function pinnacle.input.libinput.DeviceHandle:set_tap(tap: boolean)</code></pre></div>

Enables or disables tap-to-click on this device.


#### Parameters

`tap`: <code>boolean</code>






### <Badge type="method" text="method" /> set_send_events_mode

<div class="language-lua"><pre><code>function pinnacle.input.libinput.DeviceHandle:set_send_events_mode(send_events_mode: <a href="/lua-reference/0.1.0-alpha.1/enums/pinnacle.input.libinput.SendEventsMode">pinnacle.input.libinput.SendEventsMode</a>)</code></pre></div>

Sets this device's send events mode.


#### Parameters

`send_events_mode`: <code><a href="/lua-reference/0.1.0-alpha.1/enums/pinnacle.input.libinput.SendEventsMode">pinnacle.input.libinput.SendEventsMode</a></code>





