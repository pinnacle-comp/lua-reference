---
outline: [2, 3]
---

# Class `pinnacle.layout.builtin.MasterStackOpts`


Options for the master stack generator.

## Fields

### outer_gaps <Badge type="danger" text="nullable" />

`outer_gaps?`: <code><a href="/lua-reference/0.2.0-alpha.2/aliases/pinnacle.layout.Gaps">pinnacle.layout.Gaps</a></code>

The gaps between the outer container and this layout.

### inner_gaps <Badge type="danger" text="nullable" />

`inner_gaps?`: <code><a href="/lua-reference/0.2.0-alpha.2/aliases/pinnacle.layout.Gaps">pinnacle.layout.Gaps</a></code>

The gaps between windows within this layout.

### master_factor <Badge type="danger" text="nullable" />

`master_factor?`: <code>number</code>

The proportion of the output the master area will take up.

### master_side <Badge type="danger" text="nullable" />

`master_side?`: <code>"left" | "right" | "top" | "bottom"</code>

Which side the master area will be.

### master_count <Badge type="danger" text="nullable" />

`master_count?`: <code>integer</code>

How many windows will be in the master area.

### reversed <Badge type="danger" text="nullable" />

`reversed?`: <code>boolean</code>

Reverses the direction of window insertion i.e. new windows are inserted at the top
of the master stack instead of at the bottom of the side stack.


