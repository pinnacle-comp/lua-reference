---
outline: [2, 3]
---

# Class `pinnacle.layout.builtin`


Builtin layout generators.

This contains functions that create various builtin generators.



## Functions

### <Badge type="function" text="function" /> line

<div class="language-lua"><pre><code>function pinnacle.layout.builtin.line(options?: <a href="/lua-reference/0.1.0/classes/pinnacle.layout.builtin.LineOpts">pinnacle.layout.builtin.LineOpts</a>)
    -> <a href="/lua-reference/0.1.0/classes/pinnacle.layout.builtin.Line">pinnacle.layout.builtin.Line</a></code></pre></div>

Creates a layout generator that lays out windows in a line.



#### Parameters

`options?`: <code><a href="/lua-reference/0.1.0/classes/pinnacle.layout.builtin.LineOpts">pinnacle.layout.builtin.LineOpts</a></code> - Options for the generator.



#### Returns

1. <code><a href="/lua-reference/0.1.0/classes/pinnacle.layout.builtin.Line">pinnacle.layout.builtin.Line</a></code>




### <Badge type="function" text="function" /> master_stack

<div class="language-lua"><pre><code>function pinnacle.layout.builtin.master_stack(options?: <a href="/lua-reference/0.1.0/classes/pinnacle.layout.builtin.MasterStackOpts">pinnacle.layout.builtin.MasterStackOpts</a>)
    -> <a href="/lua-reference/0.1.0/classes/pinnacle.layout.builtin.MasterStack">pinnacle.layout.builtin.MasterStack</a></code></pre></div>

Creates a layout generator that lays windows out in two stacks: a master and side stack.


#### Parameters

`options?`: <code><a href="/lua-reference/0.1.0/classes/pinnacle.layout.builtin.MasterStackOpts">pinnacle.layout.builtin.MasterStackOpts</a></code> - Options for the generator.



#### Returns

1. <code><a href="/lua-reference/0.1.0/classes/pinnacle.layout.builtin.MasterStack">pinnacle.layout.builtin.MasterStack</a></code>




### <Badge type="function" text="function" /> dwindle

<div class="language-lua"><pre><code>function pinnacle.layout.builtin.dwindle(options?: <a href="/lua-reference/0.1.0/classes/pinnacle.layout.builtin.DwindleOpts">pinnacle.layout.builtin.DwindleOpts</a>)
    -> <a href="/lua-reference/0.1.0/classes/pinnacle.layout.builtin.Dwindle">pinnacle.layout.builtin.Dwindle</a></code></pre></div>

Creates a layout generator that lays windows out dwindling down to the bottom right.



#### Parameters

`options?`: <code><a href="/lua-reference/0.1.0/classes/pinnacle.layout.builtin.DwindleOpts">pinnacle.layout.builtin.DwindleOpts</a></code> - Options for the generator.



#### Returns

1. <code><a href="/lua-reference/0.1.0/classes/pinnacle.layout.builtin.Dwindle">pinnacle.layout.builtin.Dwindle</a></code>




### <Badge type="function" text="function" /> spiral

<div class="language-lua"><pre><code>function pinnacle.layout.builtin.spiral(options?: <a href="/lua-reference/0.1.0/classes/pinnacle.layout.builtin.SpiralOpts">pinnacle.layout.builtin.SpiralOpts</a>)
    -> <a href="/lua-reference/0.1.0/classes/pinnacle.layout.builtin.Spiral">pinnacle.layout.builtin.Spiral</a></code></pre></div>

Creates a layout generator that lays windows out in a spiral.



#### Parameters

`options?`: <code><a href="/lua-reference/0.1.0/classes/pinnacle.layout.builtin.SpiralOpts">pinnacle.layout.builtin.SpiralOpts</a></code> - Options for the generator.



#### Returns

1. <code><a href="/lua-reference/0.1.0/classes/pinnacle.layout.builtin.Spiral">pinnacle.layout.builtin.Spiral</a></code>




### <Badge type="function" text="function" /> corner

<div class="language-lua"><pre><code>function pinnacle.layout.builtin.corner(options?: <a href="/lua-reference/0.1.0/classes/pinnacle.layout.builtin.CornerOpts">pinnacle.layout.builtin.CornerOpts</a>)
    -> <a href="/lua-reference/0.1.0/classes/pinnacle.layout.builtin.Corner">pinnacle.layout.builtin.Corner</a></code></pre></div>

Creates a layout generator that lays windows out with one main corner window and
a horizontal and vertical stack flanking the other two sides.



#### Parameters

`options?`: <code><a href="/lua-reference/0.1.0/classes/pinnacle.layout.builtin.CornerOpts">pinnacle.layout.builtin.CornerOpts</a></code> - Options for the generator.



#### Returns

1. <code><a href="/lua-reference/0.1.0/classes/pinnacle.layout.builtin.Corner">pinnacle.layout.builtin.Corner</a></code>




### <Badge type="function" text="function" /> fair

<div class="language-lua"><pre><code>function pinnacle.layout.builtin.fair(options?: <a href="/lua-reference/0.1.0/classes/pinnacle.layout.builtin.FairOpts">pinnacle.layout.builtin.FairOpts</a>)
    -> <a href="/lua-reference/0.1.0/classes/pinnacle.layout.builtin.Fair">pinnacle.layout.builtin.Fair</a></code></pre></div>

Creates a layout generator that lays windows out keeping their sizes roughly the same.



#### Parameters

`options?`: <code><a href="/lua-reference/0.1.0/classes/pinnacle.layout.builtin.FairOpts">pinnacle.layout.builtin.FairOpts</a></code> - Options for the generator.



#### Returns

1. <code><a href="/lua-reference/0.1.0/classes/pinnacle.layout.builtin.Fair">pinnacle.layout.builtin.Fair</a></code>




### <Badge type="function" text="function" /> cycle

<div class="language-lua"><pre><code>function pinnacle.layout.builtin.cycle(layouts: <a href="/lua-reference/0.1.0/classes/pinnacle.layout.LayoutGenerator">pinnacle.layout.LayoutGenerator</a>[])
    -> <a href="/lua-reference/0.1.0/classes/pinnacle.layout.builtin.Cycle">pinnacle.layout.builtin.Cycle</a></code></pre></div>

Creates a layout generator that delegates to other layout generators depending on the tag
and allows you to cycle between the generators.



#### Parameters

`layouts`: <code><a href="/lua-reference/0.1.0/classes/pinnacle.layout.LayoutGenerator">pinnacle.layout.LayoutGenerator</a>[]</code> - The layouts that this generator will cycle between.



#### Returns

1. <code><a href="/lua-reference/0.1.0/classes/pinnacle.layout.builtin.Cycle">pinnacle.layout.builtin.Cycle</a></code>



