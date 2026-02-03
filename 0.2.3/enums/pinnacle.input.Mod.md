---
outline: [2, 3]
---

# Enum `pinnacle.input.Mod`
<Badge type="tip" text="key" />

`"shift"` | `"ctrl"` | `"alt"` | `"super"` | `"iso_level3_shift"` | `"iso_level5_shift"` | `"ignore_shift"` | `"ignore_ctrl"` | `"ignore_alt"` | `"ignore_super"` | `"ignore_iso_level3_shift"` | `"ignore_iso_level5_shift"`

A keyboard modifier for use in binds.

Binds can be configured to require certain keyboard modifiers to be held down to trigger.
For example, a bind with `{ "super", "ctrl" }` requires both the super and control keys
to be held down.

Normally, modifiers must be in the exact same state as passed in to trigger a bind.
This means if you use `"super"` in a bind, *only* super must be held down; holding
down any other modifier will invalidate the bind.

To circumvent this, you can ignore certain modifiers by adding the respective `"ignore_*"` modifier.

## Values

### `"shift"`

The shift key.

### `"ctrl"`

The control key.

### `"alt"`

The alt key.

### `"super"`

The super key.

### `"iso_level3_shift"`

The IsoLevel3Shift modifier.

### `"iso_level5_shift"`

The IsoLevel5Shift modifier.

### `"ignore_shift"`

Ignore the shift key.

### `"ignore_ctrl"`

Ignore the control key.

### `"ignore_alt"`

Ignore the alt key.

### `"ignore_super"`

Ignore the super key.

### `"ignore_iso_level3_shift"`

Ignore the IsoLevel3Shift modifier.

### `"ignore_iso_level5_shift"`

Ignore the IsoLevel5Shift modifier.

