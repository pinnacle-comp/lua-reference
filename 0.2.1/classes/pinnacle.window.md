---
outline: [2, 3]
---

# Class `pinnacle.window`


Window management.

This module helps you deal with setting windows to fullscreen and maximized, setting their size,
moving them between tags, and various other actions.



## Functions

### <Badge type="function" text="function" /> get_all

<div class="language-lua"><pre><code>function pinnacle.window.get_all()
    -> windows: <a href="/lua-reference/0.2.1/classes/pinnacle.window.WindowHandle">pinnacle.window.WindowHandle</a>[]</code></pre></div>

Gets all windows.




#### Returns

1. `windows`: <code><a href="/lua-reference/0.2.1/classes/pinnacle.window.WindowHandle">pinnacle.window.WindowHandle</a>[]</code> - Handles to all windows




### <Badge type="function" text="function" /> get_focused

<div class="language-lua"><pre><code>function pinnacle.window.get_focused()
    -> window: <a href="/lua-reference/0.2.1/classes/pinnacle.window.WindowHandle">pinnacle.window.WindowHandle</a> | nil</code></pre></div>

Gets the currently focused window.




#### Returns

1. `window`: <code><a href="/lua-reference/0.2.1/classes/pinnacle.window.WindowHandle">pinnacle.window.WindowHandle</a> | nil</code> - A handle to the currently focused window




### <Badge type="function" text="function" /> begin_move

<div class="language-lua"><pre><code>function pinnacle.window.begin_move(button: <a href="/lua-reference/0.2.1/enums/pinnacle.input.MouseButton">pinnacle.input.MouseButton</a>)</code></pre></div>

Begins moving this window using the specified mouse button.

The button must be pressed at the time this method is called.
If the button is lifted, the move will end.

#### Example
```lua
Input.mousebind({ "super" }, "btn_left", function()
    Window.begin_move("btn_left")
end)
```

#### Parameters

`button` - The button that will initiate the move<br>
&emsp; ┃ <code><a href="/lua-reference/0.2.1/enums/pinnacle.input.MouseButton">pinnacle.input.MouseButton</a></code><br>






### <Badge type="function" text="function" /> begin_resize

<div class="language-lua"><pre><code>function pinnacle.window.begin_resize(button: <a href="/lua-reference/0.2.1/enums/pinnacle.input.MouseButton">pinnacle.input.MouseButton</a>)</code></pre></div>

Begins resizing this window using the specified mouse button.

The button must be pressed at the time this method is called.
If the button is lifted, the resize will end.

#### Example
```lua
Input.mousebind({ "super" }, "btn_right", function()
    Window.begin_resize("btn_right")
end)
```

#### Parameters

`button` - The button that will initiate the resize<br>
&emsp; ┃ <code><a href="/lua-reference/0.2.1/enums/pinnacle.input.MouseButton">pinnacle.input.MouseButton</a></code><br>






### <Badge type="function" text="function" /> connect_signal

<div class="language-lua"><pre><code>function pinnacle.window.connect_signal(signals: <a href="/lua-reference/0.2.1/classes/pinnacle.window.WindowSignal">pinnacle.window.WindowSignal</a>)
    -> signal_handles: <a href="/lua-reference/0.2.1/classes/pinnacle.signal.SignalHandles">pinnacle.signal.SignalHandles</a></code></pre></div>

Connects to a window signal.

`signals` is a table containing the signal(s) you want to connect to along with
a corresponding callback that will be called when the signal is signalled.

This function returns a table of signal handles with each handle stored at the same key used
to connect to the signal. See `SignalHandles` for more information.

# Example
```lua
Window.connect_signal({
    pointer_enter = function(window)
        print("Pointer entered", window:app_id())
    end
})
```




#### Parameters

`signals` - The signal you want to connect to<br>
&emsp; ┃ <code><a href="/lua-reference/0.2.1/classes/pinnacle.window.WindowSignal">pinnacle.window.WindowSignal</a></code><br>



#### Returns

1. `signal_handles`: <code><a href="/lua-reference/0.2.1/classes/pinnacle.signal.SignalHandles">pinnacle.signal.SignalHandles</a></code> - Handles to every signal you connected to wrapped in a table, with keys being the same as the connected signal.



#### See also

- <code><a href="/lua-reference/0.2.1/classes/pinnacle#signal.SignalHandles.disconnect_all">pinnacle.signal.SignalHandles.disconnect_all</a></code>: - To disconnect from these signals
### <Badge type="function" text="function" /> add_window_rule

<div class="language-lua"><pre><code>function pinnacle.window.add_window_rule(rule: fun(window: <a href="/lua-reference/0.2.1/classes/pinnacle.window.WindowHandle">pinnacle.window.WindowHandle</a>))</code></pre></div>

Adds a window rule.

Instead of using a declarative window rule system with match conditions,
you supply a closure that acts on a newly opened window.
You can use standard `if` statements and apply properties using the same
methods that are used everywhere else in this API.

Note: this function is special in that if it is called, Pinnacle will wait for
the provided closure to finish running before it sends windows an initial configure event.
*Do not block here*. At best, short blocks will increase the time it takes for a window to
open. At worst, a complete deadlock will prevent windows from opening at all.

#### Example

```lua
Window.add_window_rule(function(window)
    if window:app_id() == "Alacritty" then
        window:set_tag(Tag.get("Terminal"), true)
    end
end)
```


#### Parameters

`rule` - A function that will run with all new, unmapped windows.<br>
&emsp; ┃ <code>fun(window: <a href="/lua-reference/0.2.1/classes/pinnacle.window.WindowHandle">pinnacle.window.WindowHandle</a>)</code><br>





