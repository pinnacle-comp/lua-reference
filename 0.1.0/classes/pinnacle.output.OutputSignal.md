---
outline: [2, 3]
---

# Class `pinnacle.output.OutputSignal`




## Fields

### connect <Badge type="danger" text="nullable" />

`connect?`: <code>fun(output: <a href="/lua-reference/0.1.0/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a>)</code>

An output was connected. FIXME: This currently does not fire for outputs that have been previously connected and disconnected.

### disconnect <Badge type="danger" text="nullable" />

`disconnect?`: <code>fun(output: <a href="/lua-reference/0.1.0/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a>)</code>

An output was disconnected.

### resize <Badge type="danger" text="nullable" />

`resize?`: <code>fun(output: <a href="/lua-reference/0.1.0/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a>, logical_width: integer, logical_height: integer)</code>

An output's logical size changed.

### move <Badge type="danger" text="nullable" />

`move?`: <code>fun(output: <a href="/lua-reference/0.1.0/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a>, x: integer, y: integer)</code>

An output moved.


