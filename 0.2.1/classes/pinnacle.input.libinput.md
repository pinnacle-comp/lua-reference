---
outline: [2, 3]
---

# Class `pinnacle.input.libinput`


Libinput device management.



## Functions

### <Badge type="function" text="function" /> get_devices

<div class="language-lua"><pre><code>function pinnacle.input.libinput.get_devices()
    -> <a href="/lua-reference/0.2.1/classes/pinnacle.input.libinput.DeviceHandle">pinnacle.input.libinput.DeviceHandle</a>[]</code></pre></div>

Gets all connected input devices.




#### Returns

1. <code><a href="/lua-reference/0.2.1/classes/pinnacle.input.libinput.DeviceHandle">pinnacle.input.libinput.DeviceHandle</a>[]</code>




### <Badge type="function" text="function" /> for_each_device

<div class="language-lua"><pre><code>function pinnacle.input.libinput.for_each_device(for_each: fun(device: <a href="/lua-reference/0.2.1/classes/pinnacle.input.libinput.DeviceHandle">pinnacle.input.libinput.DeviceHandle</a>))</code></pre></div>

Runs a function for every currently connected device as well as
all devices that will be connected in the future.


#### Parameters

`for_each`<br>
&emsp; ┃ <code>fun(device: <a href="/lua-reference/0.2.1/classes/pinnacle.input.libinput.DeviceHandle">pinnacle.input.libinput.DeviceHandle</a>)</code><br>





