---
outline: [2, 3]
---

# Class `pinnacle.layout.builtin.Cycle` : <code><a href="/lua-reference/0.1.0/classes/pinnacle.layout.LayoutGenerator">pinnacle.layout.LayoutGenerator</a></code>


A layout generator that keeps track of layouts per tag
and provides methods to cycle between them.

## Fields

### layouts

`layouts`: <code><a href="/lua-reference/0.1.0/classes/pinnacle.layout.LayoutGenerator">pinnacle.layout.LayoutGenerator</a>[]</code>

The layouts this generator will cycle between.

### tag_indices

`tag_indices`: <code>table&lt;integer, integer></code>



### current_tag <Badge type="danger" text="nullable" />

`current_tag?`: <code><a href="/lua-reference/0.1.0/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a></code>

The current tag that will determine the chosen layout.


## Functions

### <Badge type="method" text="method" /> cycle_layout_forward

<div class="language-lua"><pre><code>function pinnacle.layout.builtin.Cycle:cycle_layout_forward(tag: <a href="/lua-reference/0.1.0/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a>)</code></pre></div>

Cycles the layout forward for the given tag.


#### Parameters

`tag`: <code><a href="/lua-reference/0.1.0/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a></code> - The tag to cycle the layout for.






### <Badge type="method" text="method" /> cycle_layout_backward

<div class="language-lua"><pre><code>function pinnacle.layout.builtin.Cycle:cycle_layout_backward(tag: <a href="/lua-reference/0.1.0/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a>)</code></pre></div>

Cycles the layout backward for the given tag.


#### Parameters

`tag`: <code><a href="/lua-reference/0.1.0/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a></code> - The tag to cycle the layout for.






### <Badge type="method" text="method" /> current_layout

<div class="language-lua"><pre><code>function pinnacle.layout.builtin.Cycle:current_layout(tag: <a href="/lua-reference/0.1.0/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a>)
    -> <a href="/lua-reference/0.1.0/classes/pinnacle.layout.LayoutGenerator">pinnacle.layout.LayoutGenerator</a>?</code></pre></div>

Gets the current layout generator for the given tag.



#### Parameters

`tag`: <code><a href="/lua-reference/0.1.0/classes/pinnacle.tag.TagHandle">pinnacle.tag.TagHandle</a></code> - The tag to get a layout for.



#### Returns

1. <code><a href="/lua-reference/0.1.0/classes/pinnacle.layout.LayoutGenerator">pinnacle.layout.LayoutGenerator</a></code>



