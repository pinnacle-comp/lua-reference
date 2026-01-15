---
outline: [2, 3]
---

# Class `pinnacle.layout.LayoutResponse`


A response to a layout request.

## Fields

### root_node

`root_node`: <code><a href="/lua-reference/0.2.2/classes/pinnacle.layout.LayoutNode">pinnacle.layout.LayoutNode</a></code>

The root node of the layout tree.

### tree_id

`tree_id`: <code>integer</code>

A non-negative identifier.

Trees that are considered "the same", like trees for a certain tag and layout,
should have the same identifier to allow Pinnacle to remember tile sizing.


