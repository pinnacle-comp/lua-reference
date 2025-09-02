---
outline: [2, 3]
---

# Class `pinnacle.layout`


Layout management.

Read the [wiki page](https://pinnacle-comp.github.io/pinnacle/configuration/layout.html) for more information.


## Fields

### builtin

`builtin` = `builtin`

Builtin layout generators.


## Functions

### <Badge type="function" text="function" /> manage

<div class="language-lua"><pre><code>function pinnacle.layout.manage(on_layout: fun(args: <a href="/lua-reference/main/classes/pinnacle.layout.LayoutArgs">pinnacle.layout.LayoutArgs</a>): <a href="/lua-reference/main/classes/pinnacle.layout.LayoutResponse">pinnacle.layout.LayoutResponse</a>)
    -> <a href="/lua-reference/main/classes/pinnacle.layout.LayoutRequester">pinnacle.layout.LayoutRequester</a></code></pre></div>

Begins managing layout requests from the compositor.

You must call this function to get windows to tile.
The provided function will be run with the arguments of the layout request.
It must return a `LayoutResponse` containing a `LayoutNode` that represents
the root of a layout tree, along with an identifier.

#### Example

```lua
local layout_requester = Layout.manage(function(args)
    local first_tag = args.tags[1]
    if not first_tag then
        ---@type pinnacle.layout.LayoutResponse
        return {
            root_node = {},
            tree_id = 0,
        }
    end
    layout_cycler.current_tag = first_tag
    local root_node = layout_cycler:layout(args.window_count)
    local tree_id = layout_cycler:current_tree_id()

    ---@type pinnacle.layout.LayoutResponse
    return {
        root_node = root_node,
        tree_id = tree_id,
    }
end)
```



#### Parameters

`on_layout` - A function that receives layout arguments and builds and returns a layout response.
	- <code>fun(args: <a href="/lua-reference/main/classes/pinnacle.layout.LayoutArgs">pinnacle.layout.LayoutArgs</a>): <a href="/lua-reference/main/classes/pinnacle.layout.LayoutResponse">pinnacle.layout.LayoutResponse</a></code>



#### Returns

1. <code><a href="/lua-reference/main/classes/pinnacle.layout.LayoutRequester">pinnacle.layout.LayoutRequester</a></code> - A requester that allows you to force the compositor to request a layout.



