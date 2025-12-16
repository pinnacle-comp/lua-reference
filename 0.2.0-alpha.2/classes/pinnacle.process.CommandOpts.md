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

Prevents the spawn from occurring if the process is already running.

### once <Badge type="danger" text="nullable" />

`once?`: <code>boolean</code>

Causes the command to only spawn the process if it hasn't been spawned before within the
lifetime of the compositor.

### pipe_stdin <Badge type="danger" text="nullable" />

`pipe_stdin?`: <code>boolean</code>

Sets up a pipe to allow the config to write to the process's stdin.

The pipe will be available through the spawned child's `stdin`.

### pipe_stdout <Badge type="danger" text="nullable" />

`pipe_stdout?`: <code>boolean</code>

Sets up a pipe to allow the config to read from the process's stdout.

The pipe will be available through the spawned child's `stdout`.

### pipe_stderr <Badge type="danger" text="nullable" />

`pipe_stderr?`: <code>boolean</code>

Sets up a pipe to allow the config to read from the process's stderr.

The pipe will be available through the spawned child's `stderr`.


