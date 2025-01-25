---
outline: [2, 3]
---

# Class `LayoutNode`




## Fields

### label <Badge type="danger" text="nullable" />

`label?`: <code>string</code>

A label that helps Pinnacle decide how to diff layout trees.

### traversal_index <Badge type="danger" text="nullable" />

`traversal_index?`: <code>integer</code>

An index that determines how Pinnacle traverses a layout tree.

### traversal_overrides <Badge type="danger" text="nullable" />

`traversal_overrides?`: <code>table&lt;integer, integer[]></code>

A set of indices per window index that changes how that window is assigned a geometry.

### layout_dir <Badge type="danger" text="nullable" />

`layout_dir?`: <code><a href="/lua-reference/aliases/LayoutDir">LayoutDir</a></code>



### gaps <Badge type="danger" text="nullable" />

`gaps?`: <code>number | <a href="/lua-reference/aliases/pinnacle.layout.Gaps">pinnacle.layout.Gaps</a></code>



### size_proportion <Badge type="danger" text="nullable" />

`size_proportion?`: <code>number</code>

The proportion the node takes up relative to its siblings.

### children

`children`: <code><a href="/lua-reference/classes/LayoutNode">LayoutNode</a>[]</code>




