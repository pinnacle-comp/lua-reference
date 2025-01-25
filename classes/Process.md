---
outline: [2, 3]
---

# Class `Process`


Process management.

This module provides utilities to spawn processes and capture their output.



## Functions

### <Badge type="function" text="function" /> spawn

<div class="language-lua"><pre><code>function Process.spawn(...: string)
    -> <a href="/lua-reference/classes/pinnacle.process.Child">pinnacle.process.Child</a></code></pre></div>

Spawns a process, returning a `Child` with the process's standard IO if successful.

Receives the arguments of the command to be spawned, either as varargs or as a table.

For more control over the spawn, use `Process.command` instead.




#### Parameters

`...`: <code>string</code>



#### Returns

1. <code><a href="/lua-reference/classes/pinnacle.process.Child">pinnacle.process.Child</a></code>



#### See also

- <code><a href="/lua-reference/classes/Process#command">Process.command</a></code>: A way to spawn processes with more control.
### <Badge type="function" text="function" /> spawn_once

<div class="language-lua"><pre><code>function Process.spawn_once(...: string)
    -> <a href="/lua-reference/classes/pinnacle.process.Child">pinnacle.process.Child</a></code></pre></div>

Spawns a process if it hasn't been spawned before,
returning a `Child` with the process's standard IO if successful.

Receives the arguments of the command to be spawned, either as varargs or as a table.

For more control over the spawn, use `Process.command` instead.




#### Parameters

`...`: <code>string</code>



#### Returns

1. <code><a href="/lua-reference/classes/pinnacle.process.Child">pinnacle.process.Child</a></code>



#### See also

- <code><a href="/lua-reference/classes/Process#command">Process.command</a></code>: A way to spawn processes with more control.
### <Badge type="function" text="function" /> spawn_unique

<div class="language-lua"><pre><code>function Process.spawn_unique(...: string)
    -> <a href="/lua-reference/classes/pinnacle.process.Child">pinnacle.process.Child</a></code></pre></div>

Spawns a process if it isn't already running,
returning a `Child` with the process's standard IO if successful.

Receives the arguments of the command to be spawned, either as varargs or as a table.

For more control over the spawn, use `Process.command` instead.




#### Parameters

`...`: <code>string</code>



#### Returns

1. <code><a href="/lua-reference/classes/pinnacle.process.Child">pinnacle.process.Child</a></code>



#### See also

- <code><a href="/lua-reference/classes/Process#command">Process.command</a></code>: A way to spawn processes with more control.
### <Badge type="function" text="function" /> command

<div class="language-lua"><pre><code>function Process.command(cmd: <a href="/lua-reference/classes/CommandOpts">CommandOpts</a>)
    -> <a href="/lua-reference/classes/Command">Command</a></code></pre></div>

Creates a `Command` from the given options.

A `Command` represents a to-be-spawned process.



#### Parameters

`cmd`: <code><a href="/lua-reference/classes/CommandOpts">CommandOpts</a></code>



#### Returns

1. <code><a href="/lua-reference/classes/Command">Command</a></code>



