---
outline: [2, 3]
---

# Class `Process`


Process management.

This module provides utilities to spawn processes and capture their output.



## Functions

### <Badge type="function" text="function" /> spawn

<div class="language-lua"><pre><code>function Process.spawn(args: string | string[], callbacks?: { stdout: fun(line: string), stderr: fun(line: string), exit: fun(code: integer, msg: string) })</code></pre></div>

Spawn a program with optional callbacks for its stdout, stderr, and exit information.

`callbacks` is an optional table with the following optional fields:
 - `stdout`: function(line: string)
 - `stderr`: function(line: string)
 - `exit`:   function(code: integer, msg: string)

Note: if `args` is a string then it will be wrapped in a table and sent to the compositor.
If you need multiple arguments, use a string array instead.

Note 2: If you spawn a window before tags are added it will spawn without any tags and
won't be displayed in the compositor. TODO: Do what awesome does and display on all tags instead

#### Example
```lua
Process.spawn("alacritty")

 -- With a table of arguments
Process.spawn({ "bash", "-c", "echo hello" })

 -- With callbacks
Process.spawn("alacritty", {
    stdout = function(line)
        print(line)
    end,
    -- You can ignore callbacks you don't need
    exit = function(code, msg)
        print("exited with code", code)
        print("exited with msg", msg)
    end,
})
```


#### Parameters

`args`: <code>string | string[]</code> - The program arguments; a string instead of an array should be for only 1 argument<br>
`callbacks?`: <code>{ stdout: fun(line: string), stderr: fun(line: string), exit: fun(code: integer, msg: string) }</code> - Callbacks that will be run whenever the program outputs to stdout, stderr, or exits.






### <Badge type="function" text="function" /> spawn_once

<div class="language-lua"><pre><code>function Process.spawn_once(args: string | string[], callbacks?: { stdout: fun(line: string), stderr: fun(line: string), exit: fun(code: integer, msg: string) })</code></pre></div>

Like `Process.spawn` but will only spawn the program if it isn't already running.



#### Parameters

`args`: <code>string | string[]</code><br>
`callbacks?`: <code>{ stdout: fun(line: string), stderr: fun(line: string), exit: fun(code: integer, msg: string) }</code>





#### See also

- <code><a href="/lua-reference/classes/Process#spawn">Process.spawn</a></code>
### <Badge type="function" text="function" /> set_env

<div class="language-lua"><pre><code>function Process.set_env(key: string, value: string)</code></pre></div>

Set an environment variable for the compositor.
This will cause any future spawned processes to have this environment variable.

#### Example
```lua
Process.set_env("ENV_NAME", "the value")
```


#### Parameters

`key`: <code>string</code> - The environment variable key<br>
`value`: <code>string</code> - The environment variable value





