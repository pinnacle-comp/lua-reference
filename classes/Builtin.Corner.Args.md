---
outline: [2, 3]
---

# Class `Builtin.Corner.Args`




## Fields

### gaps <Badge type="danger" text="nullable" />

`gaps?`: <code>integer | { inner: integer, outer: integer }</code>

Gaps between windows, in pixels.

This can be an integer or the table { inner: integer, outer: integer }.
If it is an integer, all gaps will be that amount of pixels wide.
If it is a table, `outer` denotes the amount of pixels around the
edge of the output area that will become a gap, and
`inner` denotes the amount of pixels around each window that
will become a gap.

This means that, for example, `inner = 2` will cause the gap
width between windows to be 4; 2 around each window.

Defaults to 8.

### corner_width_factor <Badge type="danger" text="nullable" />

`corner_width_factor?`: <code>number</code>

How much of the output the corner window's width will take up.

Defaults to 0.5.

### corner_height_factor <Badge type="danger" text="nullable" />

`corner_height_factor?`: <code>number</code>

How much of the output the corner window's height will take up.

Defaults to 0.5.

### corner_loc <Badge type="danger" text="nullable" />

`corner_loc?`: <code>"top_left" | "top_right" | "bottom_left" | "bottom_right"</code>

Which corner the corner window will be in.

Defaults to "top_left".


