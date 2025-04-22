---
outline: [2, 3]
---

# Class `pinnacle.process.Command`


A command representing a to-be-spawned process.

## Fields

### cmd

`cmd`: <code>string | string[]</code>



### shell_cmd <Badge type="danger" text="nullable" />

`shell_cmd?`: <code>string[]</code>



### envs <Badge type="danger" text="nullable" />

`envs?`: <code>table&lt;string, string></code>



### unique <Badge type="danger" text="nullable" />

`unique?`: <code>boolean</code>



### once <Badge type="danger" text="nullable" />

`once?`: <code>boolean</code>



### pipe_stdin <Badge type="danger" text="nullable" />

`pipe_stdin?`: <code>boolean</code>



### pipe_stdout <Badge type="danger" text="nullable" />

`pipe_stdout?`: <code>boolean</code>



### pipe_stderr <Badge type="danger" text="nullable" />

`pipe_stderr?`: <code>boolean</code>




## Functions

### <Badge type="method" text="method" /> spawn

<div class="language-lua"><pre><code>function pinnacle.process.Command:spawn()
    -> <a href="/lua-reference/0.1.0-beta.1/classes/pinnacle.process.Child">pinnacle.process.Child</a>?</code></pre></div>

Spawns this process, returning a `Child` that contains the process's standard IO if successful.




#### Returns

1. <code><a href="/lua-reference/0.1.0-beta.1/classes/pinnacle.process.Child">pinnacle.process.Child</a></code> - A child with the process's standard IO, or `nil` if the process failed to spawn or doesn't exist.



