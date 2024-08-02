---
outline: [2, 3]
---

# Class `Builtin.Fair.Args`




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

### direction <Badge type="danger" text="nullable" />

`direction?`: <code>"horizontal" | "vertical"</code>

The direction of the lines of windows.

Defaults to "vertical".


