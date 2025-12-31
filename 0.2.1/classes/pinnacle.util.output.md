---
outline: [2, 3]
---

# Class `pinnacle.util.output`


Output utilities.



## Functions

### <Badge type="function" text="function" /> parse_modeline

<div class="language-lua"><pre><code>function pinnacle.util.output.parse_modeline(modeline: string)
    -> modeline: <a href="/lua-reference/0.2.1/classes/pinnacle.output.Modeline">pinnacle.output.Modeline</a> | nil, error: string | nil</code></pre></div>

Parses a modeline string.

The string must have the form
`"clock hdisplay hsync_start hsync_end htotal vdisplay vsync_start vsync_end hsync vsync"`.



#### Parameters

`modeline` - The modeline string.<br>
&emsp; ┃ <code>string</code><br>



#### Returns

1. `modeline`: <code><a href="/lua-reference/0.2.1/classes/pinnacle.output.Modeline">pinnacle.output.Modeline</a> | nil</code> - A modeline if successful
2. `error`: <code>string | nil</code> - An error message if any



