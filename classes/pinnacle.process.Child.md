---
outline: [2, 3]
---

# Class `pinnacle.process.Child`




## Fields

### pid

`pid`: <code>integer</code>



### stdin <Badge type="danger" text="nullable" />

`stdin?`: <code><a href="/lua-reference/classes/pinnacle.process.ChildStdin">pinnacle.process.ChildStdin</a></code>



### stdout <Badge type="danger" text="nullable" />

`stdout?`: <code><a href="/lua-reference/classes/pinnacle.process.ChildStdout">pinnacle.process.ChildStdout</a></code>



### stderr <Badge type="danger" text="nullable" />

`stderr?`: <code><a href="/lua-reference/classes/pinnacle.process.ChildStderr">pinnacle.process.ChildStderr</a></code>




## Functions

### <Badge type="method" text="method" /> wait

<div class="language-lua"><pre><code>function pinnacle.process.Child:wait()
    -> { exit_code: integer, exit_msg: string }</code></pre></div>

Waits for this child process to exit.

This will block the calling thread.

Returns the exit status of the process.




#### Returns

1. <code>{ exit_code: integer, exit_msg: string }</code>




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



