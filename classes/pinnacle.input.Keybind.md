---
outline: [2, 3]
---

# Class `pinnacle.input.Keybind` : <code><a href="/lua-reference/classes/pinnacle.input.Bind">pinnacle.input.Bind</a></code>


A keybind.

## Fields

### key

`key`: <code>string | <a href="/lua-reference/enums/pinnacle.input.Key">pinnacle.input.Key</a></code>

The key that will trigger this bind.

### on_press <Badge type="danger" text="nullable" />

`on_press?`: <code>fun()?</code>

An action that is run when the keybind is pressed.

### on_release <Badge type="danger" text="nullable" />

`on_release?`: <code>fun()?</code>

An action that is run when the keybind is released.


