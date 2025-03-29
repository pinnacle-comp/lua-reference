---
outline: [2, 3]
---

# Class `pinnacle`


The entry point to configuration.

This module contains the `setup` function, which is where you'll put all of your config in.
It also contains general compositor actions like `quit` and `reload_config`.




## Functions

### <Badge type="function" text="function" /> quit

<div class="language-lua"><pre><code>function pinnacle.quit()</code></pre></div>

Quits Pinnacle.






### <Badge type="function" text="function" /> reload_config

<div class="language-lua"><pre><code>function pinnacle.reload_config()</code></pre></div>

Reloads the active config.






### <Badge type="function" text="function" /> backend

<div class="language-lua"><pre><code>function pinnacle.backend()
    -> "tty" | "window"</code></pre></div>

Gets the currently running backend.




#### Returns

1. <code>"tty" | "window"</code> - `"tty"` if Pinnacle is running in a tty, or `"window"` if it's running in a nested window




### <Badge type="function" text="function" /> set_xwayland_self_scaling

<div class="language-lua"><pre><code>function pinnacle.set_xwayland_self_scaling(should_self_scale: boolean)</code></pre></div>

Sets whether or not xwayland clients should scale themselves.

If `true`, xwayland clients will be told they are on an output with a larger or smaller size than
normal then rescaled to replicate being on an output with a scale of 1.

Xwayland clients that support DPI scaling will scale properly, leading to crisp and correct scaling
with fractional output scales. Those that don't, like `xterm`, will render as if they are on outputs
with scale 1, and their scale will be slightly incorrect on outputs with fractional scale.

Results may vary if you have multiple outputs with different scales.


#### Parameters

`should_self_scale`: <code>boolean</code>






### <Badge type="function" text="function" /> set_last_error

<div class="language-lua"><pre><code>function pinnacle.set_last_error(error: string)</code></pre></div>

Sets an error message that is held by the compositor until it is retrieved.


#### Parameters

`error`: <code>string</code>






### <Badge type="function" text="function" /> take_last_error

<div class="language-lua"><pre><code>function pinnacle.take_last_error()
    -> error: string | nil</code></pre></div>

Gets and consumes the last error message set, possibly by a previously running config.




#### Returns

1. `error`: <code>string | nil</code> - An error string, or `nil` if none was set.




### <Badge type="function" text="function" /> init

<div class="language-lua"><pre><code>function pinnacle.init()</code></pre></div>

Initializes the protobuf backend and connects to Pinnacle's gRPC socket.

If the Snowcap Lua API is installed and Snowcap is running, this will also setup Snowcap and
connect to its socket as well.






### <Badge type="function" text="function" /> setup

<div class="language-lua"><pre><code>function pinnacle.setup(config_fn: fun())</code></pre></div>

Sets up a Pinnacle config.

This receives a function that contains your config.

If you want to run a function with the config without blocking, see `Pinnacle.run`.



#### Parameters

`config_fn`: <code>fun()</code>





#### See also

- <code><a href="/lua-reference/0.1.0-alpha.1/classes/pinnacle#run">pinnacle.run</a></code>
### <Badge type="function" text="function" /> run

<div class="language-lua"><pre><code>function pinnacle.run(run_fn: fun())</code></pre></div>

Runs a function with the Pinnacle API.

If you are writing a config, use `Pinnacle.setup` instead.

This receives a function that runs anything in this API.
However, it will not block to receive compositor events.



#### Parameters

`run_fn`: <code>fun()</code>





#### See also

- <code><a href="/lua-reference/0.1.0-alpha.1/classes/pinnacle#setup">pinnacle.setup</a></code>