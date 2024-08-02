---
outline: [2, 3]
---

# Class `Builtin.Dwindle` : <code><a href="/classes/LayoutGenerator">LayoutGenerator</a></code>


A `LayoutGenerator` that lays out windows in a shrinking fashion
towards the bottom right corner.

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

### split_factors

`split_factors`: <code>table&lt;integer, number></code>

The proportions that each split will split at.

The first split will use the factor at [1],
the second at [2], and so on.


## Functions

### <Badge type="method" text="method" /> layout

<div class="language-lua"><pre><code>function Builtin.Dwindle:layout(args: <a href="/classes/LayoutArgs">LayoutArgs</a>)
    -> { x: integer, y: integer, width: integer, height: integer }[]</code></pre></div>



#### Parameters

`args`: <code><a href="/classes/LayoutArgs">LayoutArgs</a></code>



#### Returns

1. <code>{ x: integer, y: integer, width: integer, height: integer }[]</code>



