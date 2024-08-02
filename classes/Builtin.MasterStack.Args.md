---
outline: [2, 3]
---

# Class `Builtin.MasterStack.Args`




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

### master_factor <Badge type="danger" text="nullable" />

`master_factor?`: <code>number</code>

The proportion of the output taken up by the master window(s).

This is a float that will be clamped between 0.1 and 0.9.

Defaults to 0.5.

### master_side <Badge type="danger" text="nullable" />

`master_side?`: <code>"left" | "right" | "top" | "bottom"</code>

The side the master window(s) will be on.

Defaults to "left".

### master_count <Badge type="danger" text="nullable" />

`master_count?`: <code>integer</code>

How many windows the master side will have.

Defaults to 1.


