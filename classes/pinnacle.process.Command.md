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




## Functions

### <Badge type="method" text="method" /> spawn

<div class="language-lua"><pre><code>function pinnacle.process.Command:spawn()
    -> <a href="/lua-reference/classes/pinnacle.process.Child">pinnacle.process.Child</a></code></pre></div>

Spawns this process, returning a `Child` that contains the process's standard IO if successful.




#### Returns

1. <code><a href="/lua-reference/classes/pinnacle.process.Child">pinnacle.process.Child</a></code>



