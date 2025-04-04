---
outline: [2, 3]
---

# Enum `pinnacle.input.libinput.ScrollMethod`
<Badge type="tip" text="key" />

`"no_scroll"` | `"two_finger"` | `"edge"` | `"on_button_down"`

The scroll method of a device selects when to generate scroll axis events instead of pointer motion events.

## Values

### `"no_scroll"`

Never send scroll events instead of pointer motion events

### `"two_finger"`

Send scroll events when two fingers are logically down on the device

### `"edge"`

Send scroll events when a finger moves along the bottom or right edge of a device

### `"on_button_down"`

Send scroll events when a button is down and the device moves along a scroll-capable axis

