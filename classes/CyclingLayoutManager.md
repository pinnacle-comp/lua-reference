---
outline: [2, 3]
---

# Class `CyclingLayoutManager` : <code><a href="/lua-reference/classes/LayoutManager">LayoutManager</a></code>


A `LayoutManager` that keeps track of layouts per tag and provides
methods to cycle between them.

## Fields

### tag_indices

`tag_indices`: <code>table&lt;integer, integer></code>




## Functions

### <Badge type="method" text="method" /> get_active

<div class="language-lua"><pre><code>function CyclingLayoutManager:get_active(args: <a href="/lua-reference/classes/LayoutArgs">LayoutArgs</a>)
    -> <a href="/lua-reference/classes/LayoutGenerator">LayoutGenerator</a></code></pre></div>



#### Parameters

`args`: <code><a href="/lua-reference/classes/LayoutArgs">LayoutArgs</a></code>



#### Returns

1. <code><a href="/lua-reference/classes/LayoutGenerator">LayoutGenerator</a></code>




### <Badge type="method" text="method" /> cycle_layout_forward

<div class="language-lua"><pre><code>function CyclingLayoutManager:cycle_layout_forward(tag: <a href="/lua-reference/classes/TagHandle">TagHandle</a>)</code></pre></div>

Cycle the layout for the given tag forward.


#### Parameters

`tag`: <code><a href="/lua-reference/classes/TagHandle">TagHandle</a></code>






### <Badge type="method" text="method" /> cycle_layout_backward

<div class="language-lua"><pre><code>function CyclingLayoutManager:cycle_layout_backward(tag: <a href="/lua-reference/classes/TagHandle">TagHandle</a>)</code></pre></div>

Cycle the layout for the given tag backward.


#### Parameters

`tag`: <code><a href="/lua-reference/classes/TagHandle">TagHandle</a></code>





