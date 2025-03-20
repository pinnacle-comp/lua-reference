---
outline: [2, 3]
---

# Class `pinnacle.input`


Input management.

This module provides utilities to set key- and mousebinds as well as change keyboard settings.

## Fields

### mouse_button_values

`mouse_button_values`: <code>table</code>



### key

`key` = `require("pinnacle.input.keys")`

Keycodes for every key.


## Functions

### <Badge type="function" text="function" /> keybind

<div class="language-lua"><pre><code>function pinnacle.input.keybind(mods: <a href="/lua-reference/enums/pinnacle.input.Mod">pinnacle.input.Mod</a>[], key: <a href="/lua-reference/enums/pinnacle.input.Key">pinnacle.input.Key</a> | string, on_press: fun(), bind_info?: { group?: string?, description?: string? }?)</code></pre></div>

Sets a keybind.

This function can be called in two ways:
1. As `Input.keybind(mods, key, on_press, bind_info?)`
2. As `Input.keybind(<Keybind table>)`

Calling this with a `Keybind` table gives you more options, including the ability to assign a bind layer
to the keybind or set it to happen on release instead of press.

When calling using the first way, you must provide three arguments:

 - `mods`: An array of `Modifier`s. If you don't want any, provide an empty table.
 - `key`: The key that will trigger `action`. You can provide three types of key:
     - Something from the `Key` table in `Input.key`, which lists every xkbcommon key. The naming pattern is the xkbcommon key without the `KEY_` prefix, unless that would make it start with a number or the reserved lua keyword `function`, in which case the `KEY_` prefix is included.
     - A single character representing your key. This can be something like "g", "$", "~", "1", and so on.
     - A string of the key's name. This is the name of the xkbcommon key without the `KEY_` prefix.
 - `on_press`: The function that will be run when the keybind is pressed.

It is important to note that `"a"` is different than `"A"`. Similarly, `key.a` is different than `key.A`.
Usually, it's best to use the non-modified key to prevent confusion and unintended behavior.

Similar principles apply when calling with a `Keybind` table.

#### Ignoring Modifiers
Normally, modifiers that are not specified will require the bind to not have them held down.
You can ignore this by adding the corresponding `"ignore_*"` modifier.

#### Descriptions
You can specify a group and description for the bind.
This will be used to categorize the bind in the bind overlay and provide a description.

#### Example
```lua
 -- Set `super + Return` to open Alacritty
Input.keybind({ "super" }, Input.key.Return, function()
    Process.spawn("alacritty")
end)
```



#### Parameters

`mods`: <code><a href="/lua-reference/enums/pinnacle.input.Mod">pinnacle.input.Mod</a>[]</code> - The modifiers that need to be held down for the bind to trigger<br>
`key`: <code><a href="/lua-reference/enums/pinnacle.input.Key">pinnacle.input.Key</a> | string</code> - The key used to trigger the bind<br>
`on_press`: <code>fun()</code> - The function to run when the bind is triggered<br>
`bind_info?`: <code>{ group?: string?, description?: string? }?</code> - An optional group and description that is displayed in the bind overlay.






### <Badge type="function" text="function" /> mousebind

<div class="language-lua"><pre><code>function pinnacle.input.mousebind(mods: <a href="/lua-reference/enums/pinnacle.input.Mod">pinnacle.input.Mod</a>[], button: <a href="/lua-reference/enums/pinnacle.input.MouseButton">pinnacle.input.MouseButton</a>, on_press: fun(), bind_info?: { group?: string?, description?: string? }?)</code></pre></div>

Sets a mousebind.

This function can be called in two ways:
1. As `Input.mousebind(mods, button, on_press, bind_info?)`
2. As `Input.mousebind(<Mousebind table>)`

Calling this with a `Mousebind` table gives you more options, including the ability to assign a bind layer
to the keybind or set it to happen on release instead of press.

When calling using the first way, you must provide three arguments:

 - `mods`: An array of `Modifier`s. If you don't want any, provide an empty table.
 - `button`: The mouse button.
 - `on_press`: The function that will be run when the button is pressed.

#### Ignoring Modifiers
Normally, modifiers that are not specified will require the bind to not have them held down.
You can ignore this by adding the corresponding `"ignore_*"` modifier.

#### Descriptions
You can specify a group and description for the bind.
This will be used to categorize the bind in the bind overlay and provide a description.

#### Example
```lua
 -- Set `super + left mouse button` to move a window on press
Input.mousebind({ "super" }, "btn_left", "press", function()
    Window.begin_move("btn_left")
end)
```



#### Parameters

`mods`: <code><a href="/lua-reference/enums/pinnacle.input.Mod">pinnacle.input.Mod</a>[]</code> - The modifiers that need to be held down for the bind to trigger<br>
`button`: <code><a href="/lua-reference/enums/pinnacle.input.MouseButton">pinnacle.input.MouseButton</a></code> - The mouse button used to trigger the bind<br>
`on_press`: <code>fun()</code> - The function to run when the bind is triggered<br>
`bind_info?`: <code>{ group?: string?, description?: string? }?</code> - An optional group and description that will be displayed in the bind overlay.






### <Badge type="function" text="function" /> enter_bind_layer

<div class="language-lua"><pre><code>function pinnacle.input.enter_bind_layer(layer?: string?)</code></pre></div>

Enters the bind layer `layer`, or the default layer if `layer` is nil.


#### Parameters

`layer?`: <code>string?</code> - The bind layer.






### <Badge type="function" text="function" /> bind_infos

<div class="language-lua"><pre><code>function pinnacle.input.bind_infos()
    -> <a href="/lua-reference/classes/pinnacle.input.BindInfo">pinnacle.input.BindInfo</a>[]</code></pre></div>

Gets all binds and their information.




#### Returns

1. <code><a href="/lua-reference/classes/pinnacle.input.BindInfo">pinnacle.input.BindInfo</a>[]</code>




### <Badge type="function" text="function" /> set_xkb_config

<div class="language-lua"><pre><code>function pinnacle.input.set_xkb_config(xkb_config: <a href="/lua-reference/classes/pinnacle.input.XkbConfig">pinnacle.input.XkbConfig</a>)</code></pre></div>

Sets the xkbconfig for your keyboard.

Read `xkeyboard-config(7)` for more information.

#### Example
```lua
Input.set_xkb_config({
    layout = "us,fr,ge",
    options = "ctrl:swapcaps,caps:shift"
})
```


#### Parameters

`xkb_config`: <code><a href="/lua-reference/classes/pinnacle.input.XkbConfig">pinnacle.input.XkbConfig</a></code> - The new xkbconfig






### <Badge type="function" text="function" /> set_repeat_rate

<div class="language-lua"><pre><code>function pinnacle.input.set_repeat_rate(rate: integer, delay: integer)</code></pre></div>

Sets the keyboard's repeat rate and delay.

#### Example
```lua
Input.set_repeat_rate(100, 1000) -- Key must be held down for 1 second, then repeats 10 times per second.
```


#### Parameters

`rate`: <code>integer</code> - The time between repeats in milliseconds<br>
`delay`: <code>integer</code> - The duration a key needs to be held down before repeating starts in milliseconds






### <Badge type="function" text="function" /> set_xcursor_theme

<div class="language-lua"><pre><code>function pinnacle.input.set_xcursor_theme(theme: string)</code></pre></div>

Sets the current xcursor theme.

Pinnacle reads `$XCURSOR_THEME` on startup to set the theme.
This allows you to set it at runtime.


#### Parameters

`theme`: <code>string</code> - The name of the xcursor theme.






### <Badge type="function" text="function" /> set_xcursor_size

<div class="language-lua"><pre><code>function pinnacle.input.set_xcursor_size(size: integer)</code></pre></div>

Sets the current xcursor size.

Pinnacle reads `$XCURSOR_SIZE` on startup to set the cursor size.
This allows you to set it at runtime.


#### Parameters

`size`: <code>integer</code> - The new size of the cursor.






### <Badge type="function" text="function" /> connect_signal

<div class="language-lua"><pre><code>function pinnacle.input.connect_signal(signals: <a href="/lua-reference/classes/pinnacle.input.InputSignal">pinnacle.input.InputSignal</a>)
    -> signal_handles: <a href="/lua-reference/classes/pinnacle.signal.SignalHandles">pinnacle.signal.SignalHandles</a></code></pre></div>

Connects to an input signal.

`signals` is a table containing the signal(s) you want to connect to along with
a corresponding callback that will be called when the signal is signalled.

This function returns a table of signal handles with each handle stored at the same key used
to connect to the signal. See `SignalHandles` for more information.

# Example
```lua
Input.connect_signal({
    device_added = function(device)
        print("Device connected", device:name())
    end
})
```



#### Parameters

`signals`: <code><a href="/lua-reference/classes/pinnacle.input.InputSignal">pinnacle.input.InputSignal</a></code> - The signal you want to connect to



#### Returns

1. `signal_handles`: <code><a href="/lua-reference/classes/pinnacle.signal.SignalHandles">pinnacle.signal.SignalHandles</a></code> - Handles to every signal you connected to wrapped in a table, with keys being the same as the connected signal.



#### See also

- <code><a href="/lua-reference/classes/pinnacle#signal.SignalHandles.disconnect_all">pinnacle.signal.SignalHandles.disconnect_all</a></code>: - To disconnect from these signals