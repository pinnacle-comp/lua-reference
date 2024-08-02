---
outline: [2, 3]
---

# Class `Builtin.MasterStack` : <code><a href="/classes/LayoutGenerator">LayoutGenerator</a></code>


A `LayoutGenerator` that has one master area to one side
and a stack of windows next to it.

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

### master_factor

`master_factor`: <code>number</code> = `0.5`

The proportion of the output taken up by the master window(s).

This is a float that will be clamped between 0.1 and 0.9.

### master_side

`master_side`: <code>"left" | "right" | "top" | "bottom"</code> = `"left"`

The side the master window(s) will be on.

### master_count

`master_count`: <code>integer</code> = `1`

How many windows the master side will have.


## Functions

### <Badge type="method" text="method" /> layout

<div class="language-lua"><pre><code>function Builtin.MasterStack:layout(args: <a href="/classes/LayoutArgs">LayoutArgs</a>)
    -> { x: integer, y: integer, width: integer, height: integer }[]</code></pre></div>



#### Parameters

`args`: <code><a href="/classes/LayoutArgs">LayoutArgs</a></code>



#### Returns

1. <code>{ x: integer, y: integer, width: integer, height: integer }[]</code>



