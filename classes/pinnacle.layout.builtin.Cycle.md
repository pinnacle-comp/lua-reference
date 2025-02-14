---
outline: [2, 3]
---

# Class `pinnacle.layout.builtin.Cycle` : <code><a href="/lua-reference/classes/pinnacle.layout.LayoutGenerator">pinnacle.layout.LayoutGenerator</a></code>




## Fields

### layouts

`layouts`: <code><a href="/lua-reference/classes/pinnacle.layout.LayoutGenerator">pinnacle.layout.LayoutGenerator</a>[]</code>



### tag_indices

`tag_indices`: <code>table&lt;integer, integer></code>



### current_tag <Badge type="danger" text="nullable" />

`current_tag?`: <code><a href="/lua-reference/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a></code>




## Functions

### <Badge type="method" text="method" /> cycle_layout_forward

<div class="language-lua"><pre><code>function pinnacle.layout.builtin.Cycle:cycle_layout_forward(tag: <a href="/lua-reference/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a>)</code></pre></div>

Cycles the layout forward for the given tag.


#### Parameters

`tag`: <code><a href="/lua-reference/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a></code>






### <Badge type="method" text="method" /> cycle_layout_backward

<div class="language-lua"><pre><code>function pinnacle.layout.builtin.Cycle:cycle_layout_backward(tag: <a href="/lua-reference/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a>)</code></pre></div>

Cycles the layout backward for the given tag.


#### Parameters

`tag`: <code><a href="/lua-reference/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a></code>






### <Badge type="method" text="method" /> current_layout

<div class="language-lua"><pre><code>function pinnacle.layout.builtin.Cycle:current_layout(tag: <a href="/lua-reference/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a>)
    -> <a href="/lua-reference/classes/pinnacle.layout.LayoutGenerator">pinnacle.layout.LayoutGenerator</a></code></pre></div>

Gets the current layout generator for the given tag.



#### Parameters

`tag`: <code><a href="/lua-reference/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a></code>



#### Returns

1. <code><a href="/lua-reference/classes/pinnacle.layout.LayoutGenerator">pinnacle.layout.LayoutGenerator</a></code>



