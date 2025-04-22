---
outline: [2, 3]
---

# Class `pinnacle.layout.builtin.MasterStack` : <code><a href="/lua-reference/0.1.0-beta.1/classes/pinnacle.layout.LayoutGenerator">pinnacle.layout.LayoutGenerator</a></code>


A layout generator that has one master area to one side and a stack of windows next to it.

## Fields

### outer_gaps

`outer_gaps`: <code><a href="/lua-reference/0.1.0-beta.1/aliases/pinnacle.layout.Gaps">pinnacle.layout.Gaps</a></code>

The gaps between the outer container and this layout.

### inner_gaps

`inner_gaps`: <code><a href="/lua-reference/0.1.0-beta.1/aliases/pinnacle.layout.Gaps">pinnacle.layout.Gaps</a></code>

The gaps between windows within this layout.

### master_factor

`master_factor`: <code>number</code>

The proportion of the output the master area will take up.

### master_side

`master_side`: <code>"left" | "right" | "top" | "bottom"</code>

Which side the master area will be.

### master_count

`master_count`: <code>integer</code>

How many windows will be in the master area.

### reversed

`reversed`: <code>boolean</code>

Reverses the direction of window insertion i.e. new windows are inserted at the top
of the master stack instead of at the bottom of the side stack.


