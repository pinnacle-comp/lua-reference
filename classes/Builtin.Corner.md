---
outline: [2, 3]
---

# Class `Builtin.Corner` : <code><a href="/classes/LayoutGenerator">LayoutGenerator</a></code>


A `LayoutGenerator` that has one main corner window and a
horizontal and vertical stack flanking it on the other two sides.

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

### corner_width_factor

`corner_width_factor`: <code>number</code> = `0.5`

How much of the output the corner window's width will take up.

### corner_height_factor

`corner_height_factor`: <code>number</code> = `0.5`

How much of the output the corner window's height will take up.

### corner_loc

`corner_loc`: <code>"top_left" | "top_right" | "bottom_left" | "bottom_right"</code> = `"top_left"`

Which corner the corner window will be in.


## Functions

### <Badge type="method" text="method" /> layout

<div class="language-lua"><pre><code>function Builtin.Corner:layout(args: <a href="/classes/LayoutArgs">LayoutArgs</a>)
    -> { x: integer, y: integer, width: integer, height: integer }[]</code></pre></div>



#### Parameters

`args`: <code><a href="/classes/LayoutArgs">LayoutArgs</a></code>



#### Returns

1. <code>{ x: integer, y: integer, width: integer, height: integer }[]</code>



