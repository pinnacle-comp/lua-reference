---
outline: [2, 3]
---

# Class `grpc_client.Client`




## Fields

### conn

`conn`: <code><a href="/lua-reference/classes/grpc_client.h2.Conn">grpc_client.h2.Conn</a></code>



### loop

`loop`: <code><a href="/lua-reference/classes/grpc_client.cqueues.Loop">grpc_client.cqueues.Loop</a></code>




## Functions

### <Badge type="method" text="method" /> unary_request

<div class="language-lua"><pre><code>function grpc_client.Client:unary_request(request_specifier: <a href="/lua-reference/classes/grpc_client.RequestSpecifier">grpc_client.RequestSpecifier</a>, data: table)
    -> response: table | nil, error: string | nil</code></pre></div>

Perform a unary request.




#### Parameters

`request_specifier`: <code><a href="/lua-reference/classes/grpc_client.RequestSpecifier">grpc_client.RequestSpecifier</a></code><br>
`data`: <code>table</code> - The message to send. This should be in the structure of `request_specifier.request`.



#### Returns

1. `response`: <code>table | nil</code> - The response as a table in the structure of `request_specifier.response`, or `nil` if there is an error.
2. `error`: <code>string | nil</code> - An error string, if any.




### <Badge type="method" text="method" /> server_streaming_request

<div class="language-lua"><pre><code>function grpc_client.Client:server_streaming_request(request_specifier: <a href="/lua-reference/classes/grpc_client.RequestSpecifier">grpc_client.RequestSpecifier</a>, data: table, callback: fun(response: table))
    -> error: string | nil</code></pre></div>

Performs a server-streaming request.

`callback` will be called with every streamed response.




#### Parameters

`request_specifier`: <code><a href="/lua-reference/classes/grpc_client.RequestSpecifier">grpc_client.RequestSpecifier</a></code><br>
`data`: <code>table</code> - The message to send. This should be in the structure of `request_specifier.request`.<br>
`callback`: <code>fun(response: table)</code> - A callback that will be run with every response



#### Returns

1. `error`: <code>string | nil</code> - An error string, if any.




### <Badge type="method" text="method" /> bidirectional_streaming_request

<div class="language-lua"><pre><code>function grpc_client.Client:bidirectional_streaming_request(request_specifier: <a href="/lua-reference/classes/grpc_client.RequestSpecifier">grpc_client.RequestSpecifier</a>, callback: fun(response: table, stream: <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a>))
    -> <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a> | nil, error: string | nil</code></pre></div>

Performs a bidirectional-streaming request.

`callback` will be called with every streamed response.

The raw client-to-server stream is returned to allow you to send encoded messages.




#### Parameters

`request_specifier`: <code><a href="/lua-reference/classes/grpc_client.RequestSpecifier">grpc_client.RequestSpecifier</a></code><br>
`callback`: <code>fun(response: table, stream: <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a>)</code> - A callback that will be run with every response



#### Returns

1. <code><a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any.



