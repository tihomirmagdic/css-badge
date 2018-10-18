# CSS-Badge

CSS-only badge is actually based on two implementations:
- any element with data-badge attribute - displays non-formatted element content
- class for full HTML formatting

## Usage
## Any element with data-badge attribute

Assign badge content to data-badge attribute:

    <button data-badge="new" class="badge">action</button>
    
    <div style="border: 1px solid red" data-badge="new" class="badge">line 1<br />line 2</div>

## Badge alignment

### Corners - inside element content

By default badge is displayed on top-right corner inside element content (with 7px border overlapping).

For explicit **top-right** alignment use class **badge-top-right**:

    <button data-badge="new" class="badge badge-top-right">top-right</button>

For **top-left** alignment use class **badge-top-left**:

    <button data-badge="new" class="badge badge-top-left">top-left</button>

For **bottom-right** alignment use class **badge-bottom-right**:

    <button data-badge="new" class="badge badge-bottom-right">bottom-right</button>

For **bottom-left** alignment use class **badge-bottom-left**:

    <button data-badge="new" class="badge badge-bottom-left">bottom-left</button>

### Sides - inside HTML content

For **right** side alignment use class **badge-right**:

    <button data-badge="new" class="badge badge-right">right</button>

For **left** side alignment use class **badge-left**:

    <button data-badge="new" class="badge badge-left">left</button>

For **top** side alignment use class **badge-top**:

    <button data-badge="new" class="badge badge-top">top</button>

For **bottom** side alignment use class **badge-bottom**:

    <button data-badge="new" class="badge badge-bottom">bottom</button>

### Badge outside HTML content

Use class **badge-outside** to display badge outside of element content (2px border overlapping).

    <button data-badge="new" class="badge badge-outside">top-right - outside</button>

    <button data-badge="new" class="badge badge-top-left badge-outside">top-left - outside</button>

    <button data-badge="new" class="badge badge-bottom-right badge-outside">bottom-right - outside</button>

    <button data-badge="new" class="badge badge-bottom-left badge-outside">bottom-left - outside</button>

## Classes overview

| CSS class | Alignment | Note |
| :----------- | :----------- | :----------- |
| badge-top-right       | top-right | default |
| badge-top-left      | top-left      |    |
| badge-bottom-right | bottom-right      |     |
| badge-bottom-left | bottom-left      |     |
| badge-right | right      |     |
| badge-left | left      |     |
| badge-top | top      |     |
| badge-bottom | bottom      |     |

By default badge is displayed inside element content.

Every class can be combined with class **badge-outside** to display a badge outside of the element content.

## Style classes
| CSS class   |  Note        |
| :----------- |  :----------- |
| badge-red      | red badge, white text |
| badge-blue      | blue badge, white text & border, shadow (default) |
| badge-black      | black badge, white text |
| badge-noborder      | badge without border |
| badge-noshadow      | badge without shadow |
| badge-l      | large badge |
| badge-xl      | extra large badge |
| badge-xxl      | more larger badge |
| badge-s      | small badge |
| badge-xs     | extra small badge |
