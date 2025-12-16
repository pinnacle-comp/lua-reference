---
outline: [2, 3]
---

# Class `pinnacle.input.BindInfo`


Bind information.

Mainly used for the bind overlay.

## Fields

### mods

`mods`: <code><a href="/lua-reference/0.2.0-alpha.2/enums/pinnacle.input.Mod">pinnacle.input.Mod</a>[]</code>

The bind's modifiers.

### ignore_mods

`ignore_mods`: <code><a href="/lua-reference/0.2.0-alpha.2/enums/pinnacle.input.Mod">pinnacle.input.Mod</a>[]</code>

The bind's ignored modifiers.

### bind_layer <Badge type="danger" text="nullable" />

`bind_layer?`: <code>string</code>

The bind's layer.

### group

`group`: <code>string</code>

The bind's group. Empty if it is not in one.

### description

`description`: <code>string</code>

The bind's description. Empty if it does not have one.

### quit

`quit`: <code>boolean</code>

Whether this bind is a quit bind.

### reload_config

`reload_config`: <code>boolean</code>

Whether this bind is a reload config bind.

### allow_when_locked

`allow_when_locked`: <code>boolean</code>

Whether this bind is allowed when the session is locked.

### kind

`kind`: <code><a href="/lua-reference/0.2.0-alpha.2/classes/pinnacle.input.BindInfoKind">pinnacle.input.BindInfoKind</a></code>

What kind of bind this is.


