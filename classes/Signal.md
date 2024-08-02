---
outline: [2, 3]
---

# Class `Signal`




## Fields

### handle

`handle`: <code><a href="/classes/SignalHandleModule">SignalHandleModule</a></code>



### handles

`handles`: <code><a href="/classes/SignalHandlesModule">SignalHandlesModule</a></code>




## Functions

### <Badge type="function" text="function" /> add_callback

<div class="language-lua"><pre><code>function Signal.add_callback(request: string, callback: function)</code></pre></div>



#### Parameters

`request`: <code>string</code><br>
`callback`: <code>function</code>






### <Badge type="function" text="function" /> connect

<div class="language-lua"><pre><code>function Signal.connect(request: string, callback: fun(response: table))</code></pre></div>



#### Parameters

`request`: <code>string</code><br>
`callback`: <code>fun(response: table)</code>






### <Badge type="function" text="function" /> disconnect

<div class="language-lua"><pre><code>function Signal.disconnect(request: string)</code></pre></div>

This should only be called when call callbacks for the signal are removed

#### Parameters

`request`: <code>string</code>





