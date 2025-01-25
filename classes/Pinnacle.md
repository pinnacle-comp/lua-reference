---
outline: [2, 3]
---

# Class `Pinnacle`


The entry point to configuration.

This module contains the `setup` function, which is where you'll put all of your config in.
It also contains general compositor actions like `quit` and `reload_config`.




## Functions

### <Badge type="function" text="function" /> quit

<div class="language-lua"><pre><code>function Pinnacle.quit()</code></pre></div>

Quits Pinnacle.






### <Badge type="function" text="function" /> reload_config

<div class="language-lua"><pre><code>function Pinnacle.reload_config()</code></pre></div>

Reloads the active config.






### <Badge type="function" text="function" /> backend

<div class="language-lua"><pre><code>function Pinnacle.backend()
    -> "tty" | "window"</code></pre></div>

Gets the currently running backend.




#### Returns

1. <code>"tty" | "window"</code> - `"tty"` if Pinnacle is running in a tty, or `"window"` if it's running in a nested window




### <Badge type="function" text="function" /> init

<div class="language-lua"><pre><code>function Pinnacle.init()</code></pre></div>

Initializes the protobuf backend and connects to Pinnacle's gRPC socket.

If the Snowcap Lua API is installed and Snowcap is running, this will also setup Snowcap and
connect to its socket as well.






### <Badge type="function" text="function" /> setup

<div class="language-lua"><pre><code>function Pinnacle.setup(config_fn: fun())</code></pre></div>

Sets up a Pinnacle config.

This receives a function that contains your config.

If you want to run a function with the config without blocking, see `Pinnacle.run`.



#### Parameters

`config_fn`: <code>fun()</code>





#### See also

- <code><a href="/lua-reference/classes/Pinnacle#run">Pinnacle.run</a></code>
### <Badge type="function" text="function" /> run

<div class="language-lua"><pre><code>function Pinnacle.run(run_fn: fun())</code></pre></div>

Runs a function with the Pinnacle API.

If you are writing a config, use `Pinnacle.setup` instead.

This receives a function that runs anything in this API.
However, it will not block to receive compositor events.


#### Parameters

`run_fn`: <code>fun()</code>





