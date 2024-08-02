---
outline: [2, 3]
---

# Class `Builtin.Fair` : <code><a href="/lua-reference/classes/LayoutGenerator">LayoutGenerator</a></code>


A `LayoutGenerator` that attempts to layout windows such that
they are the same size.

## Fields

### gaps

`gaps`: <code>integer | { inner: integer, outer: integer }</code> = `8`

Gaps between windows, in pixels.

This can be an integer or the table { inner: integer, outer: integer }.
If it is an integer, all gaps will be that amount of pixels wide.
If it is a table, `outer` denotes the amount of pixels around the
edge of the output area that will become a gap, and
`inner` denotes the amount of pixels around each window that
will become a gap.

This means that, for example, `inner = 2` will cause the gap
width between windows to be 4; 2 around each window.

### direction

`direction`: <code>"horizontal" | "vertical"</code> = `"vertical"`

The direction of the lines of windows.


## Functions

### <Badge type="method" text="method" /> layout

<div class="language-lua"><pre><code>function Builtin.Fair:layout(args: <a href="/lua-reference/classes/LayoutArgs">LayoutArgs</a>)
    -> { x: integer, y: integer, width: integer, height: integer }[]</code></pre></div>



#### Parameters

`args`: <code><a href="/lua-reference/classes/LayoutArgs">LayoutArgs</a></code>



#### Returns

1. <code>{ x: integer, y: integer, width: integer, height: integer }[]</code>



