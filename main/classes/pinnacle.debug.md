---
outline: [2, 3]
---

# Class `pinnacle.debug`


Debugging utilities.

> [!WARNING]
> This module is not governed by the API stability guarantees.




## Functions

### <Badge type="function" text="function" /> set_damage_visualization

<div class="language-lua"><pre><code>function pinnacle.debug.set_damage_visualization(set: boolean)</code></pre></div>

Sets damage visualization.

When on, parts of the screen that are damaged after rendering will have
red rectangles drawn where the damage is.


#### Parameters

`set`
	| <code>boolean</code>






### <Badge type="function" text="function" /> toggle_damage_visualization

<div class="language-lua"><pre><code>function pinnacle.debug.toggle_damage_visualization()</code></pre></div>

Toggles damage visualization.

When on, parts of the screen that are damaged after rendering will have
red rectangles drawn where the damage is.






### <Badge type="function" text="function" /> set_opaque_region_visualization

<div class="language-lua"><pre><code>function pinnacle.debug.set_opaque_region_visualization(set: boolean)</code></pre></div>

Sets opaque region visualization.

When on, parts of the screen that are opaque will have a transparent blue rectangle
drawn over it, while parts that are not opaque will have a transparent red rectangle
drawn.


#### Parameters

`set`
	| <code>boolean</code>






### <Badge type="function" text="function" /> toggle_opaque_region_visualization

<div class="language-lua"><pre><code>function pinnacle.debug.toggle_opaque_region_visualization()</code></pre></div>

Toggles opaque region visualization.

When on, parts of the screen that are opaque will have a transparent blue rectangle
drawn over it, while parts that are not opaque will have a transparent red rectangle
drawn.






### <Badge type="function" text="function" /> set_cursor_plane_scanout

<div class="language-lua"><pre><code>function pinnacle.debug.set_cursor_plane_scanout(set: boolean)</code></pre></div>

Sets cursor plane scanout.


#### Parameters

`set`
	| <code>boolean</code>






### <Badge type="function" text="function" /> toggle_cursor_plane_scanout

<div class="language-lua"><pre><code>function pinnacle.debug.toggle_cursor_plane_scanout()</code></pre></div>

Toggles cursor plane scanout.






### <Badge type="function" text="function" /> set_process_piping

<div class="language-lua"><pre><code>function pinnacle.debug.set_process_piping(set: boolean)</code></pre></div>

Enables or disables process spawning setting up pipes to give fds to the config.


#### Parameters

`set`
	| <code>boolean</code>






### <Badge type="function" text="function" /> toggle_process_piping

<div class="language-lua"><pre><code>function pinnacle.debug.toggle_process_piping()</code></pre></div>

Toggles process spawning setting up pipes to give fds to the config.





