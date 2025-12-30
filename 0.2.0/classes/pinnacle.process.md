---
outline: [2, 3]
---

# Class `pinnacle.process`


Process management.

This module provides utilities to spawn processes and capture their output.



## Functions

### <Badge type="function" text="function" /> spawn

<div class="language-lua"><pre><code>function pinnacle.process.spawn(...: string)
    -> <a href="/lua-reference/0.2.0/classes/pinnacle.process.Child">pinnacle.process.Child</a>?</code></pre></div>

Spawns a process, returning a `Child` with the process's standard IO if successful.

Receives the arguments of the command to be spawned, either as varargs or as a table.

For more control over the spawn, use `Process.command` instead.





#### Parameters

`...` - The arguments of the command.<br>
&emsp; ┃ <code>string</code><br>



#### Returns

1. <code><a href="/lua-reference/0.2.0/classes/pinnacle.process.Child">pinnacle.process.Child</a></code> - A child with the process's standard IO, or `nil` if the process failed to spawn or doesn't exist.



#### See also

- <code><a href="/lua-reference/0.2.0/classes/pinnacle.process#Process.command">pinnacle.process.Process.command</a></code>: A way to spawn processes with more control.
### <Badge type="function" text="function" /> spawn_once

<div class="language-lua"><pre><code>function pinnacle.process.spawn_once(...: string)
    -> <a href="/lua-reference/0.2.0/classes/pinnacle.process.Child">pinnacle.process.Child</a>?</code></pre></div>

Spawns a process if it hasn't been spawned before,
returning a `Child` with the process's standard IO if successful.

Receives the arguments of the command to be spawned, either as varargs or as a table.

For more control over the spawn, use `Process.command` instead.





#### Parameters

`...` - The arguments of the command.<br>
&emsp; ┃ <code>string</code><br>



#### Returns

1. <code><a href="/lua-reference/0.2.0/classes/pinnacle.process.Child">pinnacle.process.Child</a></code> - A child with the process's standard IO, or `nil` if the process failed to spawn or doesn't exist.



#### See also

- <code><a href="/lua-reference/0.2.0/classes/pinnacle.process#Process.command">pinnacle.process.Process.command</a></code>: A way to spawn processes with more control.
### <Badge type="function" text="function" /> spawn_unique

<div class="language-lua"><pre><code>function pinnacle.process.spawn_unique(...: string)
    -> <a href="/lua-reference/0.2.0/classes/pinnacle.process.Child">pinnacle.process.Child</a>?</code></pre></div>

Spawns a process if it isn't already running,
returning a `Child` with the process's standard IO if successful.

Receives the arguments of the command to be spawned, either as varargs or as a table.

For more control over the spawn, use `Process.command` instead.





#### Parameters

`...` - The arguments of the command.<br>
&emsp; ┃ <code>string</code><br>



#### Returns

1. <code><a href="/lua-reference/0.2.0/classes/pinnacle.process.Child">pinnacle.process.Child</a></code> - A child with the process's standard IO, or `nil` if the process failed to spawn or doesn't exist.



#### See also

- <code><a href="/lua-reference/0.2.0/classes/pinnacle.process#Process.command">pinnacle.process.Process.command</a></code>: A way to spawn processes with more control.
### <Badge type="function" text="function" /> command

<div class="language-lua"><pre><code>function pinnacle.process.command(cmd: <a href="/lua-reference/0.2.0/classes/pinnacle.process.CommandOpts">pinnacle.process.CommandOpts</a>)
    -> <a href="/lua-reference/0.2.0/classes/pinnacle.process.Command">pinnacle.process.Command</a></code></pre></div>

Creates a `Command` from the given options.

A `Command` represents a to-be-spawned process.



#### Parameters

`cmd` - Options for the command.<br>
&emsp; ┃ <code><a href="/lua-reference/0.2.0/classes/pinnacle.process.CommandOpts">pinnacle.process.CommandOpts</a></code><br>



#### Returns

1. <code><a href="/lua-reference/0.2.0/classes/pinnacle.process.Command">pinnacle.process.Command</a></code> - An object that allows you to spawn this command.




### <Badge type="function" text="function" /> set_env

<div class="language-lua"><pre><code>function pinnacle.process.set_env(key: string, value: string)</code></pre></div>

Adds an environment variable that all newly spawned processes will inherit.


#### Parameters

`key` - The environment variable's key.<br>
&emsp; ┃ <code>string</code><br>

`value` - The environment variable's value.<br>
&emsp; ┃ <code>string</code><br>





