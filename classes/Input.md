---
outline: [2, 3]
---

# Class `Input`


Input management.

This module provides utilities to set key- and mousebinds as well as change keyboard settings.

## Fields

### mouse_button_values

`mouse_button_values`: <code>table</code>



### key

`key` = `require("pinnacle.input.keys")`




## Functions

### <Badge type="function" text="function" /> keybind

<div class="language-lua"><pre><code>function Input.keybind(mods: <a href="/lua-reference/enums/Modifier">Modifier</a>[], key: <a href="/lua-reference/enums/Key">Key</a> | string, action: fun(), keybind_info?: <a href="/lua-reference/classes/KeybindInfo">KeybindInfo</a>)</code></pre></div>

Set a keybind. If called with an already existing keybind, it gets replaced.

You must provide three arguments:

 - `mods`: An array of `Modifier`s. If you don't want any, provide an empty table.
 - `key`: The key that will trigger `action`. You can provide three types of key:
     - Something from the `Key` table in `Input.key`, which lists every xkbcommon key. The naming pattern is the xkbcommon key without the `KEY_` prefix, unless that would make it start with a number or the reserved lua keyword `function`, in which case the `KEY_` prefix is included.
     - A single character representing your key. This can be something like "g", "$", "~", "1", and so on.
     - A string of the key's name. This is the name of the xkbcommon key without the `KEY_` prefix.
 - `action`: The function that will be run when the keybind is pressed.

It is important to note that `"a"` is different than `"A"`. Similarly, `key.a` is different than `key.A`.
Usually, it's best to use the non-modified key to prevent confusion and unintended behavior.

```lua
Input.keybind({ "shift" }, "a", function() end) -- This is preferred
Input.keybind({ "shift" }, "A", function() end) -- over this

 -- This keybind will only work with capslock on.
Input.keybind({}, "A", function() end)

 -- This keybind won't work at all because to get `@` you need to hold shift,
 -- which this keybind doesn't accept.
Input.keybind({ "ctrl" }, "@", function() end)
```

#### Example
```lua
 -- Set `super + Return` to open Alacritty
Input.keybind({ "super" }, Input.key.Return, function()
    Process.spawn("alacritty")
end)
```


#### Parameters

`mods`: <code><a href="/lua-reference/enums/Modifier">Modifier</a>[]</code> - The modifiers that need to be held down for the bind to trigger<br>
`key`: <code><a href="/lua-reference/enums/Key">Key</a> | string</code> - The key used to trigger the bind<br>
`action`: <code>fun()</code> - The function to run when the bind is triggered<br>
`keybind_info?`: <code><a href="/lua-reference/classes/KeybindInfo">KeybindInfo</a></code>






### <Badge type="function" text="function" /> mousebind

<div class="language-lua"><pre><code>function Input.mousebind(mods: <a href="/lua-reference/enums/Modifier">Modifier</a>[], button: <a href="/lua-reference/enums/MouseButton">MouseButton</a>, edge: <a href="/lua-reference/enums/MouseEdge">MouseEdge</a>, action: fun())</code></pre></div>

Set a mousebind. If called with an already existing mousebind, it gets replaced.

You must specify whether the keybind happens on button press or button release.

#### Example
```lua
 -- Set `super + left mouse button` to move a window on press
Input.mousebind({ "super" }, "btn_left", "press", function()
    Window.begin_move("btn_left")
end)
```


#### Parameters

`mods`: <code><a href="/lua-reference/enums/Modifier">Modifier</a>[]</code> - The modifiers that need to be held down for the bind to trigger<br>
`button`: <code><a href="/lua-reference/enums/MouseButton">MouseButton</a></code> - The mouse button used to trigger the bind<br>
`edge`: <code><a href="/lua-reference/enums/MouseEdge">MouseEdge</a></code> - "press" or "release" to trigger on button press or release<br>
`action`: <code>fun()</code> - The function to run when the bind is triggered






### <Badge type="function" text="function" /> keybind_descriptions

<div class="language-lua"><pre><code>function Input.keybind_descriptions()
    -> <a href="/lua-reference/classes/KeybindDescription">KeybindDescription</a>[]</code></pre></div>

Get all keybinds along with their descriptions




#### Returns

1. <code><a href="/lua-reference/classes/KeybindDescription">KeybindDescription</a>[]</code>




### <Badge type="function" text="function" /> set_xkb_config

<div class="language-lua"><pre><code>function Input.set_xkb_config(xkb_config: <a href="/lua-reference/classes/XkbConfig">XkbConfig</a>)</code></pre></div>

Set the xkbconfig for your keyboard.

Fields not present will be set to their default values.

Read `xkeyboard-config(7)` for more information.

#### Example
```lua
Input.set_xkb_config({
    layout = "us,fr,ge",
    options = "ctrl:swapcaps,caps:shift"
})
```


#### Parameters

`xkb_config`: <code><a href="/lua-reference/classes/XkbConfig">XkbConfig</a></code> - The new xkbconfig






### <Badge type="function" text="function" /> set_repeat_rate

<div class="language-lua"><pre><code>function Input.set_repeat_rate(rate: integer, delay: integer)</code></pre></div>

Set the keyboard's repeat rate and delay.

#### Example
```lua
Input.set_repeat_rate(100, 1000) -- Key must be held down for 1 second, then repeats 10 times per second.
```


#### Parameters

`rate`: <code>integer</code> - The time between repeats in milliseconds<br>
`delay`: <code>integer</code> - The duration a key needs to be held down before repeating starts in milliseconds






### <Badge type="function" text="function" /> set_libinput_settings

<div class="language-lua"><pre><code>function Input.set_libinput_settings(settings: <a href="/lua-reference/classes/LibinputSettings">LibinputSettings</a>)</code></pre></div>

Set a libinput setting.

This includes settings for pointer devices, like acceleration profiles, natural scroll, and more.

#### Example
```lua
Input.set_libinput_settings({
    accel_profile = "flat",
    natural_scroll = true,
})
```


#### Parameters

`settings`: <code><a href="/lua-reference/classes/LibinputSettings">LibinputSettings</a></code>






### <Badge type="function" text="function" /> set_xcursor_theme

<div class="language-lua"><pre><code>function Input.set_xcursor_theme(theme: string)</code></pre></div>

Sets the current xcursor theme.

Pinnacle reads `$XCURSOR_THEME` on startup to set the theme.
This allows you to set it at runtime.


#### Parameters

`theme`: <code>string</code>






### <Badge type="function" text="function" /> set_xcursor_size

<div class="language-lua"><pre><code>function Input.set_xcursor_size(size: integer)</code></pre></div>

Sets the current xcursor size.

Pinnacle reads `$XCURSOR_SIZE` on startup to set the cursor size.
This allows you to set it at runtime.


#### Parameters

`size`: <code>integer</code>





