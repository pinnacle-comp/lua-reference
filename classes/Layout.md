---
outline: [2, 3]
---

# Class `Layout`




## Fields

### stream <Badge type="danger" text="nullable" />

`stream?`: <code>grpc_client.h2.Stream</code>



### builtins

`builtins` = `builtins`




## Functions

### <Badge type="function" text="function" /> set_manager

<div class="language-lua"><pre><code>function Layout.set_manager(manager: <a href="/classes/LayoutManager">LayoutManager</a>)</code></pre></div>

Set the layout manager for this config.

It will manage layout requests from the compositor.

Only one layout manager can manage layouts at a time.


#### Parameters

`manager`: <code><a href="/classes/LayoutManager">LayoutManager</a></code>






### <Badge type="function" text="function" /> request_layout

<div class="language-lua"><pre><code>function Layout.request_layout(output?: <a href="/classes/OutputHandle">OutputHandle</a>)</code></pre></div>

Request a layout on the given output, or the focused output if nil.

If no `LayoutManager` was set, this will do nothing.


#### Parameters

`output?`: <code><a href="/classes/OutputHandle">OutputHandle</a></code>






### <Badge type="function" text="function" /> new_cycling_manager

<div class="language-lua"><pre><code>function Layout.new_cycling_manager(layouts: <a href="/classes/LayoutGenerator">LayoutGenerator</a>[])
    -> <a href="/classes/CyclingLayoutManager">CyclingLayoutManager</a></code></pre></div>

Create a new cycling layout manager.




#### Parameters

`layouts`: <code><a href="/classes/LayoutGenerator">LayoutGenerator</a>[]</code>



#### Returns

1. <code><a href="/classes/CyclingLayoutManager">CyclingLayoutManager</a></code>



#### See also

- <code><a href="/classes/CyclingLayoutManager">CyclingLayoutManager</a></code>