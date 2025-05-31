---
outline: [2, 3]
---

# Class `pinnacle.layout.LayoutRequester`


An object that allows you to forcibly request layouts.

## Fields

### sender

`sender`: <code>grpc_client.h2.Stream</code>




## Functions

### <Badge type="method" text="method" /> request_layout

<div class="language-lua"><pre><code>function pinnacle.layout.LayoutRequester:request_layout(output?: <a href="/lua-reference/0.1.0/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a>)</code></pre></div>

Causes the compositor to emit a layout request.


#### Parameters

`output?`: <code><a href="/lua-reference/0.1.0/classes/pinnacle.output.OutputHandle">pinnacle.output.OutputHandle</a></code> - The output to layout, or `nil` for the focused output.





