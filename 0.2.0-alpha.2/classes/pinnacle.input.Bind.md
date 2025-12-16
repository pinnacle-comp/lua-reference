---
outline: [2, 3]
---

# Class `pinnacle.input.Bind`


An input bind.

## Fields

### mods

`mods`: <code><a href="/lua-reference/0.2.0-alpha.2/enums/pinnacle.input.Mod">pinnacle.input.Mod</a>[]</code>

The modifiers that need to be pressed for this bind to trigger.

### bind_layer <Badge type="danger" text="nullable" />

`bind_layer?`: <code>string</code>

The layer that this bind is assigned.

### group <Badge type="danger" text="nullable" />

`group?`: <code>string</code>

The group to place this keybind in. Used for the keybind list.

### description <Badge type="danger" text="nullable" />

`description?`: <code>string</code>

The description of this keybind. Used for the keybind list.

### quit <Badge type="danger" text="nullable" />

`quit?`: <code>boolean</code>

Sets this bind as a quit bind.

### reload_config <Badge type="danger" text="nullable" />

`reload_config?`: <code>boolean</code>

Sets this bind as a reload config bind.

### allow_when_locked <Badge type="danger" text="nullable" />

`allow_when_locked?`: <code>boolean</code>

Allows this bind to trigger when the session is locked.


