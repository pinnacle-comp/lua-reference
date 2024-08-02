---
outline: [2, 3]
---

# Class `OutputSetup`




## Fields

### filter <Badge type="danger" text="nullable" />

`filter?`: <code>fun(output: <a href="/classes/OutputHandle">OutputHandle</a>): boolean</code>

A filter for wildcard matches that should return true if this setup should apply to the passed in output.

### mode <Badge type="danger" text="nullable" />

`mode?`: <code><a href="/classes/Mode">Mode</a></code>

Makes this setup apply the given mode to outputs.

### modeline <Badge type="danger" text="nullable" />

`modeline?`: <code>string | <a href="/classes/Modeline">Modeline</a></code>

Makes this setup apply the given modeline to outputs. This takes precedence over `mode`.

### scale <Badge type="danger" text="nullable" />

`scale?`: <code>number</code>

Makes this setup apply the given scale to outputs.

### tags <Badge type="danger" text="nullable" />

`tags?`: <code>string[]</code>

Makes this setup add tags with the given name to outputs.

### transform <Badge type="danger" text="nullable" />

`transform?`: <code><a href="/enums/Transform">Transform</a></code>

Makes this setup applt the given transform to outputs.


