---
outline: [2, 3]
---

# Class `Window`


Window management.

This module helps you deal with setting windows to fullscreen and maximized, setting their size,
moving them between tags, and various other actions.



## Functions

### <Badge type="function" text="function" /> get_all

<div class="language-lua"><pre><code>function Window.get_all()
    -> windows: <a href="/classes/WindowHandle">WindowHandle</a>[]</code></pre></div>

Get all windows.

#### Example
```lua
local windows = Window.get_all()
for _, window in ipairs(windows) do
    print(window:props().class)
end
```



#### Returns

1. `windows`: <code><a href="/classes/WindowHandle">WindowHandle</a>[]</code> - Handles to all windows




### <Badge type="function" text="function" /> get_focused

<div class="language-lua"><pre><code>function Window.get_focused()
    -> window: <a href="/classes/WindowHandle">WindowHandle</a> | nil</code></pre></div>

Get the currently focused window.

#### Example
```lua
local focused = Window.get_focused()
if focused then
    print(focused:props().class)
end
```



#### Returns

1. `window`: <code><a href="/classes/WindowHandle">WindowHandle</a> | nil</code> - A handle to the currently focused window




### <Badge type="function" text="function" /> begin_move

<div class="language-lua"><pre><code>function Window.begin_move(button: <a href="/enums/MouseButton">MouseButton</a>)</code></pre></div>

Begin moving this window using the specified mouse button.

The button must be pressed at the time this method is called.
If the button is lifted, the move will end.

#### Example
```lua
Input.mousebind({ "super" }, "btn_left", function()
    Window.begin_move("btn_left")
end)
```

#### Parameters

`button`: <code><a href="/enums/MouseButton">MouseButton</a></code> - The button that will initiate the move






### <Badge type="function" text="function" /> begin_resize

<div class="language-lua"><pre><code>function Window.begin_resize(button: <a href="/enums/MouseButton">MouseButton</a>)</code></pre></div>

Begin resizing this window using the specified mouse button.

The button must be pressed at the time this method is called.
If the button is lifted, the resize will end.

#### Example
```lua
Input.mousebind({ "super" }, "btn_right", function()
    Window.begin_resize("btn_right")
end)
```

#### Parameters

`button`: <code><a href="/enums/MouseButton">MouseButton</a></code> - The button that will initiate the resize






### <Badge type="function" text="function" /> add_window_rule

<div class="language-lua"><pre><code>function Window.add_window_rule(rule: { cond: <a href="/classes/WindowRuleCondition">WindowRuleCondition</a>, rule: <a href="/classes/WindowRule">WindowRule</a> })</code></pre></div>

Add a window rule.

A window rule defines what properties a window will spawn with given certain conditions.
For example, if Firefox is spawned, you can set it to open on a specific tag.

This method takes in a table with two keys:

 - `cond`: The condition for `rule` to apply to a new window.
 - `rule`: What gets applied to the new window if `cond` is true.

There are some important mechanics you should know when using window rules:

 - All children inside an `all` block must be true for the block to be true.
 - At least one child inside an `any` block must be true for the block to be true.
 - The outermost block of a window rule condition is implicitly an `all` block.
 - Within an `all` block, all items in each array must be true for the attribute to be true.
 - Within an `any` block, only one item in each array needs to be true for the attribute to be true.

`cond` can be a bit confusing and quite table heavy. Examples are shown below for guidance.

#### Examples
```lua
 -- A simple window rule. This one will cause Firefox to open on tag "Browser".
Window.add_window_rule({
    cond = { classes = { "firefox" } },
    rule = { tags = { Tag.get("Browser") } },
})

 -- To apply rules when *all* provided conditions are true, use `all`.
 -- `all` takes an array of conditions and checks if all are true.
 -- The following will open Steam fullscreen only if it opens on tag "5".
Window.add_window_rule({
    cond = {
        all = {
            {
                classes = { "steam" },
                tags = { Tag.get("5") },
            }
        }
    },
    rule = { fullscreen_or_maximized = "fullscreen" },
})

 -- The outermost block of a `cond` is implicitly an `all` block.
 -- Thus, the above can be shortened to:
Window.add_window_rule({
    cond = {
        classes = { "steam" },
        tags = { Tag.get("5") },
    },
    rule = { fullscreen_or_maximized = "fullscreen" },
})

 -- `any` also exists to allow at least one provided condition to match.
 -- The following will open either xterm or Alacritty floating.
Window.add_window_rule({
    cond = {
        any = { { classes = { "xterm", "Alacritty" } } }
    },
    rule = { floating = true },
})

 -- You can arbitrarily nest `any` and `all` to achieve desired logic.
 -- The following will open Discord, Thunderbird, or Firefox floating if they
 -- open on either *all* of tags "A", "B", and "C" or both tags "1" and "2".
Window.add_window_rule({
    cond = {
        all = { -- This `all` block is needed because the outermost block cannot be an array.
            { any = {
                { classes = { "firefox", "thunderbird", "discord" } }
            } },
            { any = {
                -- Because `tag` is inside an `all` block,
                -- the window must have all these tags for this to be true.
                -- If it was in an `any` block, only one tag would need to match.
                { all = {
                    { tags = { Tag.get("A"), Tag.get("B"), Tag.get("C") } }
                } },
                { all = {
                    { tags = { Tag.get("1"), Tag.get("2") } }
                } },
            } }
        }
    },
    rule = { floating = true },
})
```


#### Parameters

`rule`: <code>{ cond: <a href="/classes/WindowRuleCondition">WindowRuleCondition</a>, rule: <a href="/classes/WindowRule">WindowRule</a> }</code> - The condition and rule






### <Badge type="function" text="function" /> connect_signal

<div class="language-lua"><pre><code>function Window.connect_signal(signals: <a href="/classes/WindowSignal">WindowSignal</a>)
    -> signal_handles: <a href="/classes/SignalHandles">SignalHandles</a></code></pre></div>

Connect to a window signal.

The compositor sends signals about various events. Use this function to run a callback when
some window signal occurs.

This function returns a table of signal handles with each handle stored at the same key used
to connect to the signal. See `SignalHandles` for more information.

# Example
```lua
Window.connect_signal({
    pointer_enter = function(window)
        print("Pointer entered", window:class())
    end
})
```




#### Parameters

`signals`: <code><a href="/classes/WindowSignal">WindowSignal</a></code> - The signal you want to connect to



#### Returns

1. `signal_handles`: <code><a href="/classes/SignalHandles">SignalHandles</a></code> - Handles to every signal you connected to wrapped in a table, with keys being the same as the connected signal.



#### See also

- <code><a href="/classes/SignalHandles#disconnect_all">SignalHandles.disconnect_all</a></code>: - To disconnect from these signals