---
outline: [2, 3]
---

# Class `pinnacle.process.CommandOpts`


Options for a command.

## Fields

### cmd

`cmd`: <code>string | string[]</code>

The command to be run

### shell_cmd <Badge type="danger" text="nullable" />

`shell_cmd?`: <code>string[]</code>

An optional shell command that will be prefixed with `cmd`.
Use this to spawn something with a shell.

### envs <Badge type="danger" text="nullable" />

`envs?`: <code>table&lt;string, string></code>

Any environment variables that should be set for the spawned process.

### unique <Badge type="danger" text="nullable" />

`unique?`: <code>boolean</code>

Causes the spawn to fizzle if the process is already running.

### once <Badge type="danger" text="nullable" />

`once?`: <code>boolean</code>

Causes the command to only spawn the process if it hasn't been spawned before within the
lifetime of the compositor.


