---
outline: [2, 3]
---

# Class `Rectangle`


A rectangle with a position and size.

## Fields

### x

`x`: <code>number</code>

The x-position of the top-left corner

### y

`y`: <code>number</code>

The y-position of the top-left corner

### width

`width`: <code>number</code>

The width of the rectangle

### height

`height`: <code>number</code>

The height of the rectangle


## Functions

### <Badge type="method" text="method" /> split_at

<div class="language-lua"><pre><code>function Rectangle:split_at(axis: "horizontal" | "vertical", at: number, thickness?: number)
    -> rect1: <a href="/lua-reference/classes/Rectangle">Rectangle</a>, rect2: <a href="/lua-reference/classes/Rectangle">Rectangle</a> | nil</code></pre></div>

Split this rectangle along `axis` at `at`.

If `thickness` is specified, the split will chop off a section of this
rectangle from `at` to `at + thickness`.

`at` is relative to the space this rectangle is in, not
this rectangle's origin.



#### Parameters

`axis`: <code>"horizontal" | "vertical"</code><br>
`at`: <code>number</code><br>
`thickness?`: <code>number</code>



#### Returns

1. `rect1`: <code><a href="/lua-reference/classes/Rectangle">Rectangle</a></code> - The first rectangle.
2. `rect2`: <code><a href="/lua-reference/classes/Rectangle">Rectangle</a> | nil</code> - The second rectangle, if there is one.



