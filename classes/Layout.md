---
outline: [2, 3]
---

# Class `Layout`


Layout management.


## Fields

### builtin

`builtin` = `builtin`




## Functions

### <Badge type="function" text="function" /> manage

<div class="language-lua"><pre><code>function Layout.manage(on_layout: fun(args: <a href="/lua-reference/classes/LayoutArgs">LayoutArgs</a>): <a href="/lua-reference/classes/LayoutNode">LayoutNode</a>)
    -> <a href="/lua-reference/classes/pinnacle.layout.LayoutRequester">pinnacle.layout.LayoutRequester</a></code></pre></div>

Begins managing layout requests from the compositor.

You must call this function to get windows to lay out.
The provided function will be run with the arguments of the layout request.
It must return a `LayoutNode` that represents the root of a layout tree.

#### Example

```lua
local layout_requester = Layout.manage(function(args)
    local first_tag = args.tags[1]
    if not first_tag then
        return {
            children = {},
        }
    end
    layout_cycler.current_tag = first_tag
    return layout_cycler:layout(args.window_count)
end)
```



#### Parameters

`on_layout`: <code>fun(args: <a href="/lua-reference/classes/LayoutArgs">LayoutArgs</a>): <a href="/lua-reference/classes/LayoutNode">LayoutNode</a></code>



#### Returns

1. <code><a href="/lua-reference/classes/pinnacle.layout.LayoutRequester">pinnacle.layout.LayoutRequester</a></code> - A requester that allows you to force the compositor to request a layout.



