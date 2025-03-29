---
outline: [2, 3]
---

# Class `pinnacle.util`


Utility functions.

## Fields

### output

`output`: <code><a href="/lua-reference/0.1.0-alpha.1/classes/pinnacle.util.output">pinnacle.util.output</a></code> = `output`

Output utilities.


## Functions

### <Badge type="function" text="function" /> batch

<div class="language-lua"><pre><code>function pinnacle.util.batch(requests: fun(): T[])
    -> responses: T[]</code></pre></div>

Batches a set of requests that will be sent to the compositor all at once.

Normally, all API calls are blocking. For example, calling `Window.get_all`
then calling `WindowHandle.props` on each returned window handle will block
after each `props` call waiting for the compositor to respond.

In order to mitigate this issue, you can batch up a set of API calls using this function.
This will send all requests to the compositor at once without blocking, then wait for the compositor
to respond.

You must wrap each request in a function, otherwise they would just get
evaluated at the callsite in a blocking manner.

#### Example
```lua
local handles = window.get_all()

 ---@type (fun(): bool)[]
local requests = {}

 -- Wrap each request to `focused` in another function
for i, handle in ipairs(handles) do
    requests[i] = function()
        return handle:focused()
    end
end

 -- Batch send these requests
local props = require("pinnacle.util").batch(requests)
 -- `props` now contains the focus state of all the windows above
```




#### Parameters

`requests`: <code>fun(): T[]</code> - The requests that you want to batch up, wrapped in a function.



#### Returns

1. `responses`: <code>T[]</code> - The results of each request in the same order that they were in `requests`.




### <Badge type="function" text="function" /> deep_copy

<div class="language-lua"><pre><code>function pinnacle.util.deep_copy(obj: T)
    -> deep_copy: T</code></pre></div>

Creates a deep copy of an object.




#### Parameters

`obj`: <code>T</code> - The object to deep copy.



#### Returns

1. `deep_copy`: <code>T</code> - A deep copy of `obj`




### <Badge type="function" text="function" /> bijective_table

<div class="language-lua"><pre><code>function pinnacle.util.bijective_table(key_value_pairs: T)
    -> bijective_table: T</code></pre></div>

Creates a table with entries key->value and value->key for all given pairs.



#### Parameters

`key_value_pairs`: <code>T</code>



#### Returns

1. `bijective_table`: <code>T</code> - A table with pairs key->value and value->key




### <Badge type="function" text="function" /> make_bijective

<div class="language-lua"><pre><code>function pinnacle.util.make_bijective(table: table)</code></pre></div>

Makes a table bijective by inserting `value = key` entries for every key-value pair.


#### Parameters

`table`: <code>table</code>





