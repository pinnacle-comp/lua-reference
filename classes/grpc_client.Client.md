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




### <Badge type="method" text="method" /> pinnacle_signal_v1_SignalService_OutputConnect

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_signal_v1_SignalService_OutputConnect(callback: fun(response: <a href="/lua-reference/classes/pinnacle.signal.v1.OutputConnectResponse">pinnacle.signal.v1.OutputConnectResponse</a>, stream: <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a>))
    -> <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a> | nil, An: string | nil</code></pre></div>

Performs a bidirectional-streaming request.

`callback` will be called with every streamed response.

The raw client-to-server stream is returned to allow you to send encoded messages.




#### Parameters

`callback`: <code>fun(response: <a href="/lua-reference/classes/pinnacle.signal.v1.OutputConnectResponse">pinnacle.signal.v1.OutputConnectResponse</a>, stream: <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a>)</code>



#### Returns

1. <code><a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a> | nil</code>
2. `An`: <code>string | nil</code> - error string, if any




### <Badge type="method" text="method" /> pinnacle_signal_v1_SignalService_OutputDisconnect

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_signal_v1_SignalService_OutputDisconnect(callback: fun(response: <a href="/lua-reference/classes/pinnacle.signal.v1.OutputDisconnectResponse">pinnacle.signal.v1.OutputDisconnectResponse</a>, stream: <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a>))
    -> <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a> | nil, An: string | nil</code></pre></div>

Performs a bidirectional-streaming request.

`callback` will be called with every streamed response.

The raw client-to-server stream is returned to allow you to send encoded messages.




#### Parameters

`callback`: <code>fun(response: <a href="/lua-reference/classes/pinnacle.signal.v1.OutputDisconnectResponse">pinnacle.signal.v1.OutputDisconnectResponse</a>, stream: <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a>)</code>



#### Returns

1. <code><a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a> | nil</code>
2. `An`: <code>string | nil</code> - error string, if any




### <Badge type="method" text="method" /> pinnacle_signal_v1_SignalService_OutputResize

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_signal_v1_SignalService_OutputResize(callback: fun(response: <a href="/lua-reference/classes/pinnacle.signal.v1.OutputResizeResponse">pinnacle.signal.v1.OutputResizeResponse</a>, stream: <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a>))
    -> <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a> | nil, An: string | nil</code></pre></div>

Performs a bidirectional-streaming request.

`callback` will be called with every streamed response.

The raw client-to-server stream is returned to allow you to send encoded messages.




#### Parameters

`callback`: <code>fun(response: <a href="/lua-reference/classes/pinnacle.signal.v1.OutputResizeResponse">pinnacle.signal.v1.OutputResizeResponse</a>, stream: <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a>)</code>



#### Returns

1. <code><a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a> | nil</code>
2. `An`: <code>string | nil</code> - error string, if any




### <Badge type="method" text="method" /> pinnacle_signal_v1_SignalService_OutputMove

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_signal_v1_SignalService_OutputMove(callback: fun(response: <a href="/lua-reference/classes/pinnacle.signal.v1.OutputMoveResponse">pinnacle.signal.v1.OutputMoveResponse</a>, stream: <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a>))
    -> <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a> | nil, An: string | nil</code></pre></div>

Performs a bidirectional-streaming request.

`callback` will be called with every streamed response.

The raw client-to-server stream is returned to allow you to send encoded messages.




#### Parameters

`callback`: <code>fun(response: <a href="/lua-reference/classes/pinnacle.signal.v1.OutputMoveResponse">pinnacle.signal.v1.OutputMoveResponse</a>, stream: <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a>)</code>



#### Returns

1. <code><a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a> | nil</code>
2. `An`: <code>string | nil</code> - error string, if any




### <Badge type="method" text="method" /> pinnacle_signal_v1_SignalService_WindowPointerEnter

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_signal_v1_SignalService_WindowPointerEnter(callback: fun(response: <a href="/lua-reference/classes/pinnacle.signal.v1.WindowPointerEnterResponse">pinnacle.signal.v1.WindowPointerEnterResponse</a>, stream: <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a>))
    -> <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a> | nil, An: string | nil</code></pre></div>

Performs a bidirectional-streaming request.

`callback` will be called with every streamed response.

The raw client-to-server stream is returned to allow you to send encoded messages.




#### Parameters

`callback`: <code>fun(response: <a href="/lua-reference/classes/pinnacle.signal.v1.WindowPointerEnterResponse">pinnacle.signal.v1.WindowPointerEnterResponse</a>, stream: <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a>)</code>



#### Returns

1. <code><a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a> | nil</code>
2. `An`: <code>string | nil</code> - error string, if any




### <Badge type="method" text="method" /> pinnacle_signal_v1_SignalService_WindowPointerLeave

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_signal_v1_SignalService_WindowPointerLeave(callback: fun(response: <a href="/lua-reference/classes/pinnacle.signal.v1.WindowPointerLeaveResponse">pinnacle.signal.v1.WindowPointerLeaveResponse</a>, stream: <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a>))
    -> <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a> | nil, An: string | nil</code></pre></div>

Performs a bidirectional-streaming request.

`callback` will be called with every streamed response.

The raw client-to-server stream is returned to allow you to send encoded messages.




#### Parameters

`callback`: <code>fun(response: <a href="/lua-reference/classes/pinnacle.signal.v1.WindowPointerLeaveResponse">pinnacle.signal.v1.WindowPointerLeaveResponse</a>, stream: <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a>)</code>



#### Returns

1. <code><a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a> | nil</code>
2. `An`: <code>string | nil</code> - error string, if any




### <Badge type="method" text="method" /> pinnacle_signal_v1_SignalService_WindowFocused

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_signal_v1_SignalService_WindowFocused(callback: fun(response: <a href="/lua-reference/classes/pinnacle.signal.v1.WindowFocusedResponse">pinnacle.signal.v1.WindowFocusedResponse</a>, stream: <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a>))
    -> <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a> | nil, An: string | nil</code></pre></div>

Performs a bidirectional-streaming request.

`callback` will be called with every streamed response.

The raw client-to-server stream is returned to allow you to send encoded messages.




#### Parameters

`callback`: <code>fun(response: <a href="/lua-reference/classes/pinnacle.signal.v1.WindowFocusedResponse">pinnacle.signal.v1.WindowFocusedResponse</a>, stream: <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a>)</code>



#### Returns

1. <code><a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a> | nil</code>
2. `An`: <code>string | nil</code> - error string, if any




### <Badge type="method" text="method" /> pinnacle_signal_v1_SignalService_TagActive

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_signal_v1_SignalService_TagActive(callback: fun(response: <a href="/lua-reference/classes/pinnacle.signal.v1.TagActiveResponse">pinnacle.signal.v1.TagActiveResponse</a>, stream: <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a>))
    -> <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a> | nil, An: string | nil</code></pre></div>

Performs a bidirectional-streaming request.

`callback` will be called with every streamed response.

The raw client-to-server stream is returned to allow you to send encoded messages.




#### Parameters

`callback`: <code>fun(response: <a href="/lua-reference/classes/pinnacle.signal.v1.TagActiveResponse">pinnacle.signal.v1.TagActiveResponse</a>, stream: <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a>)</code>



#### Returns

1. <code><a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a> | nil</code>
2. `An`: <code>string | nil</code> - error string, if any




### <Badge type="method" text="method" /> pinnacle_signal_v1_SignalService_InputDeviceAdded

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_signal_v1_SignalService_InputDeviceAdded(callback: fun(response: <a href="/lua-reference/classes/pinnacle.signal.v1.InputDeviceAddedResponse">pinnacle.signal.v1.InputDeviceAddedResponse</a>, stream: <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a>))
    -> <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a> | nil, An: string | nil</code></pre></div>

Performs a bidirectional-streaming request.

`callback` will be called with every streamed response.

The raw client-to-server stream is returned to allow you to send encoded messages.




#### Parameters

`callback`: <code>fun(response: <a href="/lua-reference/classes/pinnacle.signal.v1.InputDeviceAddedResponse">pinnacle.signal.v1.InputDeviceAddedResponse</a>, stream: <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a>)</code>



#### Returns

1. <code><a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a> | nil</code>
2. `An`: <code>string | nil</code> - error string, if any




### <Badge type="method" text="method" /> pinnacle_input_v1_InputService_Bind

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_input_v1_InputService_Bind(data: <a href="/lua-reference/classes/pinnacle.input.v1.BindRequest">pinnacle.input.v1.BindRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.input.v1.BindResponse">pinnacle.input.v1.BindResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.input.v1.BindRequest">pinnacle.input.v1.BindRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.input.v1.BindResponse">pinnacle.input.v1.BindResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_input_v1_InputService_GetBindInfos

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_input_v1_InputService_GetBindInfos(data: <a href="/lua-reference/classes/pinnacle.input.v1.GetBindInfosRequest">pinnacle.input.v1.GetBindInfosRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.input.v1.GetBindInfosResponse">pinnacle.input.v1.GetBindInfosResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.input.v1.GetBindInfosRequest">pinnacle.input.v1.GetBindInfosRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.input.v1.GetBindInfosResponse">pinnacle.input.v1.GetBindInfosResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_input_v1_InputService_SetBindGroup

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_input_v1_InputService_SetBindGroup(data: <a href="/lua-reference/classes/pinnacle.input.v1.SetBindGroupRequest">pinnacle.input.v1.SetBindGroupRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.input.v1.SetBindGroupRequest">pinnacle.input.v1.SetBindGroupRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_input_v1_InputService_SetBindDescription

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_input_v1_InputService_SetBindDescription(data: <a href="/lua-reference/classes/pinnacle.input.v1.SetBindDescriptionRequest">pinnacle.input.v1.SetBindDescriptionRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.input.v1.SetBindDescriptionRequest">pinnacle.input.v1.SetBindDescriptionRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_input_v1_InputService_SetQuitBind

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_input_v1_InputService_SetQuitBind(data: <a href="/lua-reference/classes/pinnacle.input.v1.SetQuitBindRequest">pinnacle.input.v1.SetQuitBindRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.input.v1.SetQuitBindRequest">pinnacle.input.v1.SetQuitBindRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_input_v1_InputService_SetReloadConfigBind

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_input_v1_InputService_SetReloadConfigBind(data: <a href="/lua-reference/classes/pinnacle.input.v1.SetReloadConfigBindRequest">pinnacle.input.v1.SetReloadConfigBindRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.input.v1.SetReloadConfigBindRequest">pinnacle.input.v1.SetReloadConfigBindRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_input_v1_InputService_GetBindLayerStack

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_input_v1_InputService_GetBindLayerStack(data: <a href="/lua-reference/classes/pinnacle.input.v1.GetBindLayerStackRequest">pinnacle.input.v1.GetBindLayerStackRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.input.v1.GetBindLayerStackResponse">pinnacle.input.v1.GetBindLayerStackResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.input.v1.GetBindLayerStackRequest">pinnacle.input.v1.GetBindLayerStackRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.input.v1.GetBindLayerStackResponse">pinnacle.input.v1.GetBindLayerStackResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_input_v1_InputService_EnterBindLayer

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_input_v1_InputService_EnterBindLayer(data: <a href="/lua-reference/classes/pinnacle.input.v1.EnterBindLayerRequest">pinnacle.input.v1.EnterBindLayerRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.input.v1.EnterBindLayerRequest">pinnacle.input.v1.EnterBindLayerRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_input_v1_InputService_KeybindStream

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_input_v1_InputService_KeybindStream(data: <a href="/lua-reference/classes/pinnacle.input.v1.KeybindStreamRequest">pinnacle.input.v1.KeybindStreamRequest</a>, callback: fun(response: <a href="/lua-reference/classes/pinnacle.input.v1.KeybindStreamResponse">pinnacle.input.v1.KeybindStreamResponse</a>))
    -> An: string | nil</code></pre></div>

Performs a server-streaming request.

`callback` will be called with every streamed response.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.input.v1.KeybindStreamRequest">pinnacle.input.v1.KeybindStreamRequest</a></code><br>
`callback`: <code>fun(response: <a href="/lua-reference/classes/pinnacle.input.v1.KeybindStreamResponse">pinnacle.input.v1.KeybindStreamResponse</a>)</code>



#### Returns

1. `An`: <code>string | nil</code> - error string, if any




### <Badge type="method" text="method" /> pinnacle_input_v1_InputService_MousebindStream

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_input_v1_InputService_MousebindStream(data: <a href="/lua-reference/classes/pinnacle.input.v1.MousebindStreamRequest">pinnacle.input.v1.MousebindStreamRequest</a>, callback: fun(response: <a href="/lua-reference/classes/pinnacle.input.v1.MousebindStreamResponse">pinnacle.input.v1.MousebindStreamResponse</a>))
    -> An: string | nil</code></pre></div>

Performs a server-streaming request.

`callback` will be called with every streamed response.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.input.v1.MousebindStreamRequest">pinnacle.input.v1.MousebindStreamRequest</a></code><br>
`callback`: <code>fun(response: <a href="/lua-reference/classes/pinnacle.input.v1.MousebindStreamResponse">pinnacle.input.v1.MousebindStreamResponse</a>)</code>



#### Returns

1. `An`: <code>string | nil</code> - error string, if any




### <Badge type="method" text="method" /> pinnacle_input_v1_InputService_KeybindOnPress

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_input_v1_InputService_KeybindOnPress(data: <a href="/lua-reference/classes/pinnacle.input.v1.KeybindOnPressRequest">pinnacle.input.v1.KeybindOnPressRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.input.v1.KeybindOnPressRequest">pinnacle.input.v1.KeybindOnPressRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_input_v1_InputService_MousebindOnPress

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_input_v1_InputService_MousebindOnPress(data: <a href="/lua-reference/classes/pinnacle.input.v1.MousebindOnPressRequest">pinnacle.input.v1.MousebindOnPressRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.input.v1.MousebindOnPressRequest">pinnacle.input.v1.MousebindOnPressRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_input_v1_InputService_SetXkbConfig

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_input_v1_InputService_SetXkbConfig(data: <a href="/lua-reference/classes/pinnacle.input.v1.SetXkbConfigRequest">pinnacle.input.v1.SetXkbConfigRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.input.v1.SetXkbConfigRequest">pinnacle.input.v1.SetXkbConfigRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_input_v1_InputService_SetRepeatRate

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_input_v1_InputService_SetRepeatRate(data: <a href="/lua-reference/classes/pinnacle.input.v1.SetRepeatRateRequest">pinnacle.input.v1.SetRepeatRateRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.input.v1.SetRepeatRateRequest">pinnacle.input.v1.SetRepeatRateRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_input_v1_InputService_SetXcursor

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_input_v1_InputService_SetXcursor(data: <a href="/lua-reference/classes/pinnacle.input.v1.SetXcursorRequest">pinnacle.input.v1.SetXcursorRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.input.v1.SetXcursorRequest">pinnacle.input.v1.SetXcursorRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_input_v1_InputService_GetDevices

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_input_v1_InputService_GetDevices(data: <a href="/lua-reference/classes/pinnacle.input.v1.GetDevicesRequest">pinnacle.input.v1.GetDevicesRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.input.v1.GetDevicesResponse">pinnacle.input.v1.GetDevicesResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.input.v1.GetDevicesRequest">pinnacle.input.v1.GetDevicesRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.input.v1.GetDevicesResponse">pinnacle.input.v1.GetDevicesResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_input_v1_InputService_GetDeviceCapabilities

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_input_v1_InputService_GetDeviceCapabilities(data: <a href="/lua-reference/classes/pinnacle.input.v1.GetDeviceCapabilitiesRequest">pinnacle.input.v1.GetDeviceCapabilitiesRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.input.v1.GetDeviceCapabilitiesResponse">pinnacle.input.v1.GetDeviceCapabilitiesResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.input.v1.GetDeviceCapabilitiesRequest">pinnacle.input.v1.GetDeviceCapabilitiesRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.input.v1.GetDeviceCapabilitiesResponse">pinnacle.input.v1.GetDeviceCapabilitiesResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_input_v1_InputService_GetDeviceInfo

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_input_v1_InputService_GetDeviceInfo(data: <a href="/lua-reference/classes/pinnacle.input.v1.GetDeviceInfoRequest">pinnacle.input.v1.GetDeviceInfoRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.input.v1.GetDeviceInfoResponse">pinnacle.input.v1.GetDeviceInfoResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.input.v1.GetDeviceInfoRequest">pinnacle.input.v1.GetDeviceInfoRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.input.v1.GetDeviceInfoResponse">pinnacle.input.v1.GetDeviceInfoResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_input_v1_InputService_GetDeviceType

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_input_v1_InputService_GetDeviceType(data: <a href="/lua-reference/classes/pinnacle.input.v1.GetDeviceTypeRequest">pinnacle.input.v1.GetDeviceTypeRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.input.v1.GetDeviceTypeResponse">pinnacle.input.v1.GetDeviceTypeResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.input.v1.GetDeviceTypeRequest">pinnacle.input.v1.GetDeviceTypeRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.input.v1.GetDeviceTypeResponse">pinnacle.input.v1.GetDeviceTypeResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_input_v1_InputService_SetDeviceLibinputSetting

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_input_v1_InputService_SetDeviceLibinputSetting(data: <a href="/lua-reference/classes/pinnacle.input.v1.SetDeviceLibinputSettingRequest">pinnacle.input.v1.SetDeviceLibinputSettingRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.input.v1.SetDeviceLibinputSettingRequest">pinnacle.input.v1.SetDeviceLibinputSettingRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_input_v1_InputService_SetDeviceMapTarget

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_input_v1_InputService_SetDeviceMapTarget(data: <a href="/lua-reference/classes/pinnacle.input.v1.SetDeviceMapTargetRequest">pinnacle.input.v1.SetDeviceMapTargetRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.input.v1.SetDeviceMapTargetRequest">pinnacle.input.v1.SetDeviceMapTargetRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_layout_v1_LayoutService_Layout

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_layout_v1_LayoutService_Layout(callback: fun(response: <a href="/lua-reference/classes/pinnacle.layout.v1.LayoutResponse">pinnacle.layout.v1.LayoutResponse</a>, stream: <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a>))
    -> <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a> | nil, An: string | nil</code></pre></div>

Performs a bidirectional-streaming request.

`callback` will be called with every streamed response.

The raw client-to-server stream is returned to allow you to send encoded messages.




#### Parameters

`callback`: <code>fun(response: <a href="/lua-reference/classes/pinnacle.layout.v1.LayoutResponse">pinnacle.layout.v1.LayoutResponse</a>, stream: <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a>)</code>



#### Returns

1. <code><a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a> | nil</code>
2. `An`: <code>string | nil</code> - error string, if any




### <Badge type="method" text="method" /> pinnacle_tag_v1_TagService_Get

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_tag_v1_TagService_Get(data: <a href="/lua-reference/classes/pinnacle.tag.v1.GetRequest">pinnacle.tag.v1.GetRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.tag.v1.GetResponse">pinnacle.tag.v1.GetResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.tag.v1.GetRequest">pinnacle.tag.v1.GetRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.tag.v1.GetResponse">pinnacle.tag.v1.GetResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_tag_v1_TagService_GetActive

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_tag_v1_TagService_GetActive(data: <a href="/lua-reference/classes/pinnacle.tag.v1.GetActiveRequest">pinnacle.tag.v1.GetActiveRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.tag.v1.GetActiveResponse">pinnacle.tag.v1.GetActiveResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.tag.v1.GetActiveRequest">pinnacle.tag.v1.GetActiveRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.tag.v1.GetActiveResponse">pinnacle.tag.v1.GetActiveResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_tag_v1_TagService_GetName

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_tag_v1_TagService_GetName(data: <a href="/lua-reference/classes/pinnacle.tag.v1.GetNameRequest">pinnacle.tag.v1.GetNameRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.tag.v1.GetNameResponse">pinnacle.tag.v1.GetNameResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.tag.v1.GetNameRequest">pinnacle.tag.v1.GetNameRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.tag.v1.GetNameResponse">pinnacle.tag.v1.GetNameResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_tag_v1_TagService_GetOutputName

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_tag_v1_TagService_GetOutputName(data: <a href="/lua-reference/classes/pinnacle.tag.v1.GetOutputNameRequest">pinnacle.tag.v1.GetOutputNameRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.tag.v1.GetOutputNameResponse">pinnacle.tag.v1.GetOutputNameResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.tag.v1.GetOutputNameRequest">pinnacle.tag.v1.GetOutputNameRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.tag.v1.GetOutputNameResponse">pinnacle.tag.v1.GetOutputNameResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_tag_v1_TagService_Add

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_tag_v1_TagService_Add(data: <a href="/lua-reference/classes/pinnacle.tag.v1.AddRequest">pinnacle.tag.v1.AddRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.tag.v1.AddResponse">pinnacle.tag.v1.AddResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.tag.v1.AddRequest">pinnacle.tag.v1.AddRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.tag.v1.AddResponse">pinnacle.tag.v1.AddResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_tag_v1_TagService_Remove

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_tag_v1_TagService_Remove(data: <a href="/lua-reference/classes/pinnacle.tag.v1.RemoveRequest">pinnacle.tag.v1.RemoveRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.tag.v1.RemoveRequest">pinnacle.tag.v1.RemoveRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_tag_v1_TagService_SetActive

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_tag_v1_TagService_SetActive(data: <a href="/lua-reference/classes/pinnacle.tag.v1.SetActiveRequest">pinnacle.tag.v1.SetActiveRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.tag.v1.SetActiveRequest">pinnacle.tag.v1.SetActiveRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_tag_v1_TagService_SwitchTo

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_tag_v1_TagService_SwitchTo(data: <a href="/lua-reference/classes/pinnacle.tag.v1.SwitchToRequest">pinnacle.tag.v1.SwitchToRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.tag.v1.SwitchToRequest">pinnacle.tag.v1.SwitchToRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_process_v1_ProcessService_Spawn

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_process_v1_ProcessService_Spawn(data: <a href="/lua-reference/classes/pinnacle.process.v1.SpawnRequest">pinnacle.process.v1.SpawnRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.process.v1.SpawnResponse">pinnacle.process.v1.SpawnResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.process.v1.SpawnRequest">pinnacle.process.v1.SpawnRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.process.v1.SpawnResponse">pinnacle.process.v1.SpawnResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_process_v1_ProcessService_WaitOnSpawn

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_process_v1_ProcessService_WaitOnSpawn(data: <a href="/lua-reference/classes/pinnacle.process.v1.WaitOnSpawnRequest">pinnacle.process.v1.WaitOnSpawnRequest</a>, callback: fun(response: <a href="/lua-reference/classes/pinnacle.process.v1.WaitOnSpawnResponse">pinnacle.process.v1.WaitOnSpawnResponse</a>))
    -> An: string | nil</code></pre></div>

Performs a server-streaming request.

`callback` will be called with every streamed response.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.process.v1.WaitOnSpawnRequest">pinnacle.process.v1.WaitOnSpawnRequest</a></code><br>
`callback`: <code>fun(response: <a href="/lua-reference/classes/pinnacle.process.v1.WaitOnSpawnResponse">pinnacle.process.v1.WaitOnSpawnResponse</a>)</code>



#### Returns

1. `An`: <code>string | nil</code> - error string, if any




### <Badge type="method" text="method" /> pinnacle_window_v1_WindowService_Get

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_window_v1_WindowService_Get(data: <a href="/lua-reference/classes/pinnacle.window.v1.GetRequest">pinnacle.window.v1.GetRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.window.v1.GetResponse">pinnacle.window.v1.GetResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.window.v1.GetRequest">pinnacle.window.v1.GetRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.window.v1.GetResponse">pinnacle.window.v1.GetResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_window_v1_WindowService_GetAppId

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_window_v1_WindowService_GetAppId(data: <a href="/lua-reference/classes/pinnacle.window.v1.GetAppIdRequest">pinnacle.window.v1.GetAppIdRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.window.v1.GetAppIdResponse">pinnacle.window.v1.GetAppIdResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.window.v1.GetAppIdRequest">pinnacle.window.v1.GetAppIdRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.window.v1.GetAppIdResponse">pinnacle.window.v1.GetAppIdResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_window_v1_WindowService_GetTitle

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_window_v1_WindowService_GetTitle(data: <a href="/lua-reference/classes/pinnacle.window.v1.GetTitleRequest">pinnacle.window.v1.GetTitleRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.window.v1.GetTitleResponse">pinnacle.window.v1.GetTitleResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.window.v1.GetTitleRequest">pinnacle.window.v1.GetTitleRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.window.v1.GetTitleResponse">pinnacle.window.v1.GetTitleResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_window_v1_WindowService_GetLoc

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_window_v1_WindowService_GetLoc(data: <a href="/lua-reference/classes/pinnacle.window.v1.GetLocRequest">pinnacle.window.v1.GetLocRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.window.v1.GetLocResponse">pinnacle.window.v1.GetLocResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.window.v1.GetLocRequest">pinnacle.window.v1.GetLocRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.window.v1.GetLocResponse">pinnacle.window.v1.GetLocResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_window_v1_WindowService_GetSize

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_window_v1_WindowService_GetSize(data: <a href="/lua-reference/classes/pinnacle.window.v1.GetSizeRequest">pinnacle.window.v1.GetSizeRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.window.v1.GetSizeResponse">pinnacle.window.v1.GetSizeResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.window.v1.GetSizeRequest">pinnacle.window.v1.GetSizeRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.window.v1.GetSizeResponse">pinnacle.window.v1.GetSizeResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_window_v1_WindowService_GetFocused

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_window_v1_WindowService_GetFocused(data: <a href="/lua-reference/classes/pinnacle.window.v1.GetFocusedRequest">pinnacle.window.v1.GetFocusedRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.window.v1.GetFocusedResponse">pinnacle.window.v1.GetFocusedResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.window.v1.GetFocusedRequest">pinnacle.window.v1.GetFocusedRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.window.v1.GetFocusedResponse">pinnacle.window.v1.GetFocusedResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_window_v1_WindowService_GetLayoutMode

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_window_v1_WindowService_GetLayoutMode(data: <a href="/lua-reference/classes/pinnacle.window.v1.GetLayoutModeRequest">pinnacle.window.v1.GetLayoutModeRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.window.v1.GetLayoutModeResponse">pinnacle.window.v1.GetLayoutModeResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.window.v1.GetLayoutModeRequest">pinnacle.window.v1.GetLayoutModeRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.window.v1.GetLayoutModeResponse">pinnacle.window.v1.GetLayoutModeResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_window_v1_WindowService_GetTagIds

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_window_v1_WindowService_GetTagIds(data: <a href="/lua-reference/classes/pinnacle.window.v1.GetTagIdsRequest">pinnacle.window.v1.GetTagIdsRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.window.v1.GetTagIdsResponse">pinnacle.window.v1.GetTagIdsResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.window.v1.GetTagIdsRequest">pinnacle.window.v1.GetTagIdsRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.window.v1.GetTagIdsResponse">pinnacle.window.v1.GetTagIdsResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_window_v1_WindowService_Close

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_window_v1_WindowService_Close(data: <a href="/lua-reference/classes/pinnacle.window.v1.CloseRequest">pinnacle.window.v1.CloseRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.window.v1.CloseRequest">pinnacle.window.v1.CloseRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_window_v1_WindowService_SetGeometry

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_window_v1_WindowService_SetGeometry(data: <a href="/lua-reference/classes/pinnacle.window.v1.SetGeometryRequest">pinnacle.window.v1.SetGeometryRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.window.v1.SetGeometryRequest">pinnacle.window.v1.SetGeometryRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_window_v1_WindowService_SetFullscreen

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_window_v1_WindowService_SetFullscreen(data: <a href="/lua-reference/classes/pinnacle.window.v1.SetFullscreenRequest">pinnacle.window.v1.SetFullscreenRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.window.v1.SetFullscreenRequest">pinnacle.window.v1.SetFullscreenRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_window_v1_WindowService_SetMaximized

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_window_v1_WindowService_SetMaximized(data: <a href="/lua-reference/classes/pinnacle.window.v1.SetMaximizedRequest">pinnacle.window.v1.SetMaximizedRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.window.v1.SetMaximizedRequest">pinnacle.window.v1.SetMaximizedRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_window_v1_WindowService_SetFloating

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_window_v1_WindowService_SetFloating(data: <a href="/lua-reference/classes/pinnacle.window.v1.SetFloatingRequest">pinnacle.window.v1.SetFloatingRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.window.v1.SetFloatingRequest">pinnacle.window.v1.SetFloatingRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_window_v1_WindowService_SetFocused

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_window_v1_WindowService_SetFocused(data: <a href="/lua-reference/classes/pinnacle.window.v1.SetFocusedRequest">pinnacle.window.v1.SetFocusedRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.window.v1.SetFocusedRequest">pinnacle.window.v1.SetFocusedRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_window_v1_WindowService_SetDecorationMode

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_window_v1_WindowService_SetDecorationMode(data: <a href="/lua-reference/classes/pinnacle.window.v1.SetDecorationModeRequest">pinnacle.window.v1.SetDecorationModeRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.window.v1.SetDecorationModeRequest">pinnacle.window.v1.SetDecorationModeRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_window_v1_WindowService_MoveToTag

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_window_v1_WindowService_MoveToTag(data: <a href="/lua-reference/classes/pinnacle.window.v1.MoveToTagRequest">pinnacle.window.v1.MoveToTagRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.window.v1.MoveToTagRequest">pinnacle.window.v1.MoveToTagRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_window_v1_WindowService_SetTag

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_window_v1_WindowService_SetTag(data: <a href="/lua-reference/classes/pinnacle.window.v1.SetTagRequest">pinnacle.window.v1.SetTagRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.window.v1.SetTagRequest">pinnacle.window.v1.SetTagRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_window_v1_WindowService_Raise

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_window_v1_WindowService_Raise(data: <a href="/lua-reference/classes/pinnacle.window.v1.RaiseRequest">pinnacle.window.v1.RaiseRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.window.v1.RaiseRequest">pinnacle.window.v1.RaiseRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_window_v1_WindowService_MoveGrab

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_window_v1_WindowService_MoveGrab(data: <a href="/lua-reference/classes/pinnacle.window.v1.MoveGrabRequest">pinnacle.window.v1.MoveGrabRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.window.v1.MoveGrabRequest">pinnacle.window.v1.MoveGrabRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_window_v1_WindowService_ResizeGrab

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_window_v1_WindowService_ResizeGrab(data: <a href="/lua-reference/classes/pinnacle.window.v1.ResizeGrabRequest">pinnacle.window.v1.ResizeGrabRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.window.v1.ResizeGrabRequest">pinnacle.window.v1.ResizeGrabRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_window_v1_WindowService_WindowRule

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_window_v1_WindowService_WindowRule(callback: fun(response: <a href="/lua-reference/classes/pinnacle.window.v1.WindowRuleResponse">pinnacle.window.v1.WindowRuleResponse</a>, stream: <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a>))
    -> <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a> | nil, An: string | nil</code></pre></div>

Performs a bidirectional-streaming request.

`callback` will be called with every streamed response.

The raw client-to-server stream is returned to allow you to send encoded messages.




#### Parameters

`callback`: <code>fun(response: <a href="/lua-reference/classes/pinnacle.window.v1.WindowRuleResponse">pinnacle.window.v1.WindowRuleResponse</a>, stream: <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a>)</code>



#### Returns

1. <code><a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a> | nil</code>
2. `An`: <code>string | nil</code> - error string, if any




### <Badge type="method" text="method" /> pinnacle_render_v1_RenderService_SetUpscaleFilter

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_render_v1_RenderService_SetUpscaleFilter(data: <a href="/lua-reference/classes/pinnacle.render.v1.SetUpscaleFilterRequest">pinnacle.render.v1.SetUpscaleFilterRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.render.v1.SetUpscaleFilterRequest">pinnacle.render.v1.SetUpscaleFilterRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_render_v1_RenderService_SetDownscaleFilter

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_render_v1_RenderService_SetDownscaleFilter(data: <a href="/lua-reference/classes/pinnacle.render.v1.SetDownscaleFilterRequest">pinnacle.render.v1.SetDownscaleFilterRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.render.v1.SetDownscaleFilterRequest">pinnacle.render.v1.SetDownscaleFilterRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_output_v1_OutputService_Get

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_output_v1_OutputService_Get(data: <a href="/lua-reference/classes/pinnacle.output.v1.GetRequest">pinnacle.output.v1.GetRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.output.v1.GetResponse">pinnacle.output.v1.GetResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.output.v1.GetRequest">pinnacle.output.v1.GetRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.output.v1.GetResponse">pinnacle.output.v1.GetResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_output_v1_OutputService_SetLoc

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_output_v1_OutputService_SetLoc(data: <a href="/lua-reference/classes/pinnacle.output.v1.SetLocRequest">pinnacle.output.v1.SetLocRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.output.v1.SetLocRequest">pinnacle.output.v1.SetLocRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_output_v1_OutputService_SetMode

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_output_v1_OutputService_SetMode(data: <a href="/lua-reference/classes/pinnacle.output.v1.SetModeRequest">pinnacle.output.v1.SetModeRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.output.v1.SetModeRequest">pinnacle.output.v1.SetModeRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_output_v1_OutputService_SetModeline

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_output_v1_OutputService_SetModeline(data: <a href="/lua-reference/classes/pinnacle.output.v1.SetModelineRequest">pinnacle.output.v1.SetModelineRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.output.v1.SetModelineRequest">pinnacle.output.v1.SetModelineRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_output_v1_OutputService_SetScale

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_output_v1_OutputService_SetScale(data: <a href="/lua-reference/classes/pinnacle.output.v1.SetScaleRequest">pinnacle.output.v1.SetScaleRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.output.v1.SetScaleRequest">pinnacle.output.v1.SetScaleRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_output_v1_OutputService_SetTransform

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_output_v1_OutputService_SetTransform(data: <a href="/lua-reference/classes/pinnacle.output.v1.SetTransformRequest">pinnacle.output.v1.SetTransformRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.output.v1.SetTransformRequest">pinnacle.output.v1.SetTransformRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_output_v1_OutputService_SetPowered

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_output_v1_OutputService_SetPowered(data: <a href="/lua-reference/classes/pinnacle.output.v1.SetPoweredRequest">pinnacle.output.v1.SetPoweredRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.output.v1.SetPoweredRequest">pinnacle.output.v1.SetPoweredRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_output_v1_OutputService_GetInfo

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_output_v1_OutputService_GetInfo(data: <a href="/lua-reference/classes/pinnacle.output.v1.GetInfoRequest">pinnacle.output.v1.GetInfoRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.output.v1.GetInfoResponse">pinnacle.output.v1.GetInfoResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.output.v1.GetInfoRequest">pinnacle.output.v1.GetInfoRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.output.v1.GetInfoResponse">pinnacle.output.v1.GetInfoResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_output_v1_OutputService_GetLoc

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_output_v1_OutputService_GetLoc(data: <a href="/lua-reference/classes/pinnacle.output.v1.GetLocRequest">pinnacle.output.v1.GetLocRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.output.v1.GetLocResponse">pinnacle.output.v1.GetLocResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.output.v1.GetLocRequest">pinnacle.output.v1.GetLocRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.output.v1.GetLocResponse">pinnacle.output.v1.GetLocResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_output_v1_OutputService_GetLogicalSize

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_output_v1_OutputService_GetLogicalSize(data: <a href="/lua-reference/classes/pinnacle.output.v1.GetLogicalSizeRequest">pinnacle.output.v1.GetLogicalSizeRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.output.v1.GetLogicalSizeResponse">pinnacle.output.v1.GetLogicalSizeResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.output.v1.GetLogicalSizeRequest">pinnacle.output.v1.GetLogicalSizeRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.output.v1.GetLogicalSizeResponse">pinnacle.output.v1.GetLogicalSizeResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_output_v1_OutputService_GetPhysicalSize

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_output_v1_OutputService_GetPhysicalSize(data: <a href="/lua-reference/classes/pinnacle.output.v1.GetPhysicalSizeRequest">pinnacle.output.v1.GetPhysicalSizeRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.output.v1.GetPhysicalSizeResponse">pinnacle.output.v1.GetPhysicalSizeResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.output.v1.GetPhysicalSizeRequest">pinnacle.output.v1.GetPhysicalSizeRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.output.v1.GetPhysicalSizeResponse">pinnacle.output.v1.GetPhysicalSizeResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_output_v1_OutputService_GetModes

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_output_v1_OutputService_GetModes(data: <a href="/lua-reference/classes/pinnacle.output.v1.GetModesRequest">pinnacle.output.v1.GetModesRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.output.v1.GetModesResponse">pinnacle.output.v1.GetModesResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.output.v1.GetModesRequest">pinnacle.output.v1.GetModesRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.output.v1.GetModesResponse">pinnacle.output.v1.GetModesResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_output_v1_OutputService_GetFocused

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_output_v1_OutputService_GetFocused(data: <a href="/lua-reference/classes/pinnacle.output.v1.GetFocusedRequest">pinnacle.output.v1.GetFocusedRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.output.v1.GetFocusedResponse">pinnacle.output.v1.GetFocusedResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.output.v1.GetFocusedRequest">pinnacle.output.v1.GetFocusedRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.output.v1.GetFocusedResponse">pinnacle.output.v1.GetFocusedResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_output_v1_OutputService_GetTagIds

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_output_v1_OutputService_GetTagIds(data: <a href="/lua-reference/classes/pinnacle.output.v1.GetTagIdsRequest">pinnacle.output.v1.GetTagIdsRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.output.v1.GetTagIdsResponse">pinnacle.output.v1.GetTagIdsResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.output.v1.GetTagIdsRequest">pinnacle.output.v1.GetTagIdsRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.output.v1.GetTagIdsResponse">pinnacle.output.v1.GetTagIdsResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_output_v1_OutputService_GetScale

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_output_v1_OutputService_GetScale(data: <a href="/lua-reference/classes/pinnacle.output.v1.GetScaleRequest">pinnacle.output.v1.GetScaleRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.output.v1.GetScaleResponse">pinnacle.output.v1.GetScaleResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.output.v1.GetScaleRequest">pinnacle.output.v1.GetScaleRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.output.v1.GetScaleResponse">pinnacle.output.v1.GetScaleResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_output_v1_OutputService_GetTransform

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_output_v1_OutputService_GetTransform(data: <a href="/lua-reference/classes/pinnacle.output.v1.GetTransformRequest">pinnacle.output.v1.GetTransformRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.output.v1.GetTransformResponse">pinnacle.output.v1.GetTransformResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.output.v1.GetTransformRequest">pinnacle.output.v1.GetTransformRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.output.v1.GetTransformResponse">pinnacle.output.v1.GetTransformResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_output_v1_OutputService_GetEnabled

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_output_v1_OutputService_GetEnabled(data: <a href="/lua-reference/classes/pinnacle.output.v1.GetEnabledRequest">pinnacle.output.v1.GetEnabledRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.output.v1.GetEnabledResponse">pinnacle.output.v1.GetEnabledResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.output.v1.GetEnabledRequest">pinnacle.output.v1.GetEnabledRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.output.v1.GetEnabledResponse">pinnacle.output.v1.GetEnabledResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_output_v1_OutputService_GetPowered

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_output_v1_OutputService_GetPowered(data: <a href="/lua-reference/classes/pinnacle.output.v1.GetPoweredRequest">pinnacle.output.v1.GetPoweredRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.output.v1.GetPoweredResponse">pinnacle.output.v1.GetPoweredResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.output.v1.GetPoweredRequest">pinnacle.output.v1.GetPoweredRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.output.v1.GetPoweredResponse">pinnacle.output.v1.GetPoweredResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_output_v1_OutputService_GetFocusStackWindowIds

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_output_v1_OutputService_GetFocusStackWindowIds(data: <a href="/lua-reference/classes/pinnacle.output.v1.GetFocusStackWindowIdsRequest">pinnacle.output.v1.GetFocusStackWindowIdsRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.output.v1.GetFocusStackWindowIdsResponse">pinnacle.output.v1.GetFocusStackWindowIdsResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.output.v1.GetFocusStackWindowIdsRequest">pinnacle.output.v1.GetFocusStackWindowIdsRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.output.v1.GetFocusStackWindowIdsResponse">pinnacle.output.v1.GetFocusStackWindowIdsResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_v1_PinnacleService_Quit

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_v1_PinnacleService_Quit(data: <a href="/lua-reference/classes/pinnacle.v1.QuitRequest">pinnacle.v1.QuitRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.v1.QuitRequest">pinnacle.v1.QuitRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_v1_PinnacleService_ReloadConfig

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_v1_PinnacleService_ReloadConfig(data: <a href="/lua-reference/classes/pinnacle.v1.ReloadConfigRequest">pinnacle.v1.ReloadConfigRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.v1.ReloadConfigRequest">pinnacle.v1.ReloadConfigRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_v1_PinnacleService_Keepalive

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_v1_PinnacleService_Keepalive(callback: fun(response: <a href="/lua-reference/classes/pinnacle.v1.KeepaliveResponse">pinnacle.v1.KeepaliveResponse</a>, stream: <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a>))
    -> <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a> | nil, An: string | nil</code></pre></div>

Performs a bidirectional-streaming request.

`callback` will be called with every streamed response.

The raw client-to-server stream is returned to allow you to send encoded messages.




#### Parameters

`callback`: <code>fun(response: <a href="/lua-reference/classes/pinnacle.v1.KeepaliveResponse">pinnacle.v1.KeepaliveResponse</a>, stream: <a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a>)</code>



#### Returns

1. <code><a href="/lua-reference/classes/grpc_client.h2.Stream">grpc_client.h2.Stream</a> | nil</code>
2. `An`: <code>string | nil</code> - error string, if any




### <Badge type="method" text="method" /> pinnacle_v1_PinnacleService_Backend

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_v1_PinnacleService_Backend(data: <a href="/lua-reference/classes/pinnacle.v1.BackendRequest">pinnacle.v1.BackendRequest</a>)
    -> response: <a href="/lua-reference/classes/pinnacle.v1.BackendResponse">pinnacle.v1.BackendResponse</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.v1.BackendRequest">pinnacle.v1.BackendRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/classes/pinnacle.v1.BackendResponse">pinnacle.v1.BackendResponse</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any




### <Badge type="method" text="method" /> pinnacle_v1_PinnacleService_SetXwaylandClientSelfScale

<div class="language-lua"><pre><code>function grpc_client.Client:pinnacle_v1_PinnacleService_SetXwaylandClientSelfScale(data: <a href="/lua-reference/classes/pinnacle.v1.SetXwaylandClientSelfScaleRequest">pinnacle.v1.SetXwaylandClientSelfScaleRequest</a>)
    -> response: <a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil, error: string | nil</code></pre></div>

Performs a unary request.




#### Parameters

`data`: <code><a href="/lua-reference/classes/pinnacle.v1.SetXwaylandClientSelfScaleRequest">pinnacle.v1.SetXwaylandClientSelfScaleRequest</a></code>



#### Returns

1. `response`: <code><a href="/lua-reference/aliases/google.protobuf.Empty">google.protobuf.Empty</a> | nil</code>
2. `error`: <code>string | nil</code> - An error string, if any



