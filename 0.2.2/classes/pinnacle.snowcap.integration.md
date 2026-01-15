---
outline: [2, 3]
---

# Class `pinnacle.snowcap.integration`


Builtins and integrations with Snowcap.



## Functions

### <Badge type="function" text="function" /> quit_prompt

<div class="language-lua"><pre><code>function pinnacle.snowcap.integration.quit_prompt()
    -> <a href="/lua-reference/0.2.2/classes/pinnacle.snowcap.integration.QuitPrompt">pinnacle.snowcap.integration.QuitPrompt</a></code></pre></div>

Creates the default quit prompt.

Some of its characteristics can be changed by altering its fields.




#### Returns

1. <code><a href="/lua-reference/0.2.2/classes/pinnacle.snowcap.integration.QuitPrompt">pinnacle.snowcap.integration.QuitPrompt</a></code>




### <Badge type="function" text="function" /> bind_overlay

<div class="language-lua"><pre><code>function pinnacle.snowcap.integration.bind_overlay()
    -> <a href="/lua-reference/0.2.2/classes/pinnacle.snowcap.integration.BindOverlay">pinnacle.snowcap.integration.BindOverlay</a></code></pre></div>

Creates the default bind overlay.

Some of its characteristics can be changed by altering its fields.




#### Returns

1. <code><a href="/lua-reference/0.2.2/classes/pinnacle.snowcap.integration.BindOverlay">pinnacle.snowcap.integration.BindOverlay</a></code>




### <Badge type="function" text="function" /> focus_border

<div class="language-lua"><pre><code>function pinnacle.snowcap.integration.focus_border(window: <a href="/lua-reference/0.2.2/classes/pinnacle.window.WindowHandle">pinnacle.window.WindowHandle</a>)
    -> <a href="/lua-reference/0.2.2/classes/pinnacle.snowcap.integration.FocusBorder">pinnacle.snowcap.integration.FocusBorder</a></code></pre></div>

Creates the default focus border without a titlebar.



#### Parameters

`window`<br>
&emsp; ┃ <code><a href="/lua-reference/0.2.2/classes/pinnacle.window.WindowHandle">pinnacle.window.WindowHandle</a></code><br>



#### Returns

1. <code><a href="/lua-reference/0.2.2/classes/pinnacle.snowcap.integration.FocusBorder">pinnacle.snowcap.integration.FocusBorder</a></code>




### <Badge type="function" text="function" /> focus_border_with_titlebar

<div class="language-lua"><pre><code>function pinnacle.snowcap.integration.focus_border_with_titlebar(window: <a href="/lua-reference/0.2.2/classes/pinnacle.window.WindowHandle">pinnacle.window.WindowHandle</a>)
    -> <a href="/lua-reference/0.2.2/classes/pinnacle.snowcap.integration.FocusBorder">pinnacle.snowcap.integration.FocusBorder</a></code></pre></div>

Creates the default focus border with a titlebar.



#### Parameters

`window`<br>
&emsp; ┃ <code><a href="/lua-reference/0.2.2/classes/pinnacle.window.WindowHandle">pinnacle.window.WindowHandle</a></code><br>



#### Returns

1. <code><a href="/lua-reference/0.2.2/classes/pinnacle.snowcap.integration.FocusBorder">pinnacle.snowcap.integration.FocusBorder</a></code>



