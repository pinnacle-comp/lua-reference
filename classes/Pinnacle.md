---
outline: [2, 3]
---

# Class `Pinnacle`


The entry point to configuration.

This module contains the `setup` function, which is how you'll access all the ways to configure Pinnacle.

## Fields

### input

`input`: <code><a href="/lua-reference/classes/Input">Input</a></code> = `require("pinnacle.input")`



### tag

`tag`: <code><a href="/lua-reference/classes/Tag">Tag</a></code> = `require("pinnacle.tag")`



### output

`output`: <code><a href="/lua-reference/classes/Output">Output</a></code> = `require("pinnacle.output")`



### window

`window`: <code><a href="/lua-reference/classes/Window">Window</a></code> = `require("pinnacle.window")`



### process

`process`: <code><a href="/lua-reference/classes/Process">Process</a></code> = `require("pinnacle.process")`



### util

`util`: <code><a href="/lua-reference/classes/Util">Util</a></code> = `require("pinnacle.util")`



### layout

`layout`: <code><a href="/lua-reference/classes/Layout">Layout</a></code> = `require("pinnacle.layout")`



### render

`render`: <code><a href="/lua-reference/classes/Render">Render</a></code> = `require("pinnacle.render")`



### snowcap

`snowcap`: <code><a href="/lua-reference/classes/pinnacle.Snowcap">pinnacle.Snowcap</a></code> = `nil`




## Functions

### <Badge type="function" text="function" /> quit

<div class="language-lua"><pre><code>function Pinnacle.quit()</code></pre></div>

Quit Pinnacle.






### <Badge type="function" text="function" /> reload_config

<div class="language-lua"><pre><code>function Pinnacle.reload_config()</code></pre></div>

Reload the active config.






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

<div class="language-lua"><pre><code>function Pinnacle.setup(config_fn: fun(pinnacle: <a href="/lua-reference/classes/Pinnacle">Pinnacle</a>))</code></pre></div>

Setup a Pinnacle config.

You must pass in a function that takes in the `Pinnacle` table. This table is how you'll access the other config modules.

You can also `require` the other modules. Just be sure not to call any of their functions outside this
setup function.

If you want to run a function with the config without blocking at the end, see `Pinnacle.run`.



#### Parameters

`config_fn`: <code>fun(pinnacle: <a href="/lua-reference/classes/Pinnacle">Pinnacle</a>)</code>





#### See also

- <code><a href="/lua-reference/classes/Pinnacle#run">Pinnacle.run</a></code>
### <Badge type="function" text="function" /> run

<div class="language-lua"><pre><code>function Pinnacle.run(run_fn: fun(pinnacle: <a href="/lua-reference/classes/Pinnacle">Pinnacle</a>))</code></pre></div>

Run a function with the Pinnacle API.

If you are writing a config, use `Pinnacle.setup` instead.

Like `Pinnacle.setup`, this function takes in a function that takes in the `Pinnacle` table.
This allows you to run anything that `setup` can run.

*Unlike* `setup`, this will **not** listen to the compositor for incoming key presses, signals, and the like.
This means that this function will not block and can be used to integrate with external applications
like taskbars and widget systems like eww, but it will not allow you to set usable keybinds or
call signal callbacks. This is useful for things like querying compositor information for outputs and
windows.


#### Parameters

`run_fn`: <code>fun(pinnacle: <a href="/lua-reference/classes/Pinnacle">Pinnacle</a>)</code>





