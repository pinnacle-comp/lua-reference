---
outline: [2, 3]
---

# Class `pinnacle.window.WindowSignal`




## Fields

### pointer_enter <Badge type="danger" text="nullable" />

`pointer_enter?`: <code>fun(window: <a href="/lua-reference/0.2.0/classes/pinnacle.window.WindowHandle">pinnacle.window.WindowHandle</a>)</code>

The pointer entered a window.

### pointer_leave <Badge type="danger" text="nullable" />

`pointer_leave?`: <code>fun(window: <a href="/lua-reference/0.2.0/classes/pinnacle.window.WindowHandle">pinnacle.window.WindowHandle</a>)</code>

The pointer left a window.

### focused <Badge type="danger" text="nullable" />

`focused?`: <code>fun(window: <a href="/lua-reference/0.2.0/classes/pinnacle.window.WindowHandle">pinnacle.window.WindowHandle</a>)</code>

The window got keyboard focus.

### title_changed <Badge type="danger" text="nullable" />

`title_changed?`: <code>fun(window: <a href="/lua-reference/0.2.0/classes/pinnacle.window.WindowHandle">pinnacle.window.WindowHandle</a>, title: string)</code>

A window's title changed.

### layout_mode_changed <Badge type="danger" text="nullable" />

`layout_mode_changed?`: <code>fun(window: <a href="/lua-reference/0.2.0/classes/pinnacle.window.WindowHandle">pinnacle.window.WindowHandle</a>, layout_mode: <a href="/lua-reference/0.2.0/aliases/pinnacle.window.LayoutMode">pinnacle.window.LayoutMode</a>)</code>

A window's layout mode changed.

### created <Badge type="danger" text="nullable" />

`created?`: <code>fun(window: <a href="/lua-reference/0.2.0/classes/pinnacle.window.WindowHandle">pinnacle.window.WindowHandle</a>)</code>

A window was created.

### destroyed <Badge type="danger" text="nullable" />

`destroyed?`: <code>fun(window: <a href="/lua-reference/0.2.0/classes/pinnacle.window.WindowHandle">pinnacle.window.WindowHandle</a>, title: string, app_id: string)</code>

A window was closed.


