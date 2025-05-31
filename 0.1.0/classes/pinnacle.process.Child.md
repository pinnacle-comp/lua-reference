---
outline: [2, 3]
---

# Class `pinnacle.process.Child`


The result of spawning a command.

## Fields

### pid

`pid`: <code>integer</code>

The pid of the spawned command.

### stdin <Badge type="danger" text="nullable" />

`stdin?`: <code><a href="/lua-reference/0.1.0/classes/pinnacle.process.ChildStdin">pinnacle.process.ChildStdin</a></code>

This process's standard input, if any.

This will only exist if `pipe_stdin` was set on the `Command` before spawning.

### stdout <Badge type="danger" text="nullable" />

`stdout?`: <code><a href="/lua-reference/0.1.0/classes/pinnacle.process.ChildStdout">pinnacle.process.ChildStdout</a></code>

This process's standard output, if any.

This will only exist if `pipe_stdout` was set on the `Command` before spawning.

### stderr <Badge type="danger" text="nullable" />

`stderr?`: <code><a href="/lua-reference/0.1.0/classes/pinnacle.process.ChildStderr">pinnacle.process.ChildStderr</a></code>

This process's standard error, if any.

This will only exist if `pipe_stderr` was set on the `Command` before spawning.


## Functions

### <Badge type="method" text="method" /> wait

<div class="language-lua"><pre><code>function pinnacle.process.Child:wait()
    -> { exit_code?: integer, exit_msg?: string }</code></pre></div>

Waits for this child process to exit.

This will block the calling thread.




#### Returns

1. <code>{ exit_code?: integer, exit_msg?: string }</code> - The exit status of the process.




### <Badge type="method" text="method" /> on_line_stdout

<div class="language-lua"><pre><code>function pinnacle.process.Child:on_line_stdout(on_line: fun(line: string))
    -> self: self</code></pre></div>

Runs a function with every line of the child process's standard output.



#### Parameters

`on_line`: <code>fun(line: string)</code>



#### Returns

1. `self`: <code>self</code> - This child for chaining




### <Badge type="method" text="method" /> on_line_stderr

<div class="language-lua"><pre><code>function pinnacle.process.Child:on_line_stderr(on_line: fun(line: string))
    -> self: self</code></pre></div>

Runs a function with every line of the child process's standard error.



#### Parameters

`on_line`: <code>fun(line: string)</code>



#### Returns

1. `self`: <code>self</code> - This child for chaining



