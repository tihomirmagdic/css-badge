# CSS-Badge

CSS-only badge can be used in two ways:
- any element with data-badge attribute - displays non-formatted element content
- class for full HTML formatting

## Usage

### Any element with **data-badge** attribute and class **hasbadge**

Assign badge content to data-badge attribute:

```html
    <button data-badge="new" class="hasbadge">action</button>
    
    <div style="border: 1px solid red" data-badge="new" class="hasbadge">line 1<br />line 2</div>
```

### Class **badge**

```html
    <div>List of messages<span class="badge">new</span></div>

    <div>List of messages badge-primary<span class="badge badge-primary">new</span></div>

    <div>List of messages badge-primary badge-inverse<span class="badge badge-primary badge-inverse">new</span></div>
```

## Detailed usage of **data-badge** and class **hasbadge**

### Badge alignment

#### Corners - in element content (little border overlapping)

By default badge is displayed on top-right corner in element content.

For explicit **top-right** alignment use class **badge-top-right**:

    <button data-badge="new" class="hasbadge badge-top-right">top-right</button>

For **top-left** alignment use class **badge-top-left**:

    <button data-badge="new" class="hasbadge badge-top-left">top-left</button>

For **bottom-right** alignment use class **badge-bottom-right**:

    <button data-badge="new" class="hasbadge badge-bottom-right">bottom-right</button>

For **bottom-left** alignment use class **badge-bottom-left**:

    <button data-badge="new" class="hasbadge badge-bottom-left">bottom-left</button>

#### Sides - in element content (little border overlapping)

For **right** side alignment use class **badge-right**:

    <button data-badge="new" class="hasbadge badge-right">right</button>

For **left** side alignment use class **badge-left**:

    <button data-badge="new" class="hasbadge badge-left">left</button>

For **top** side alignment use class **badge-top**:

    <button data-badge="new" class="hasbadge badge-top">top</button>

For **bottom** side alignment use class **badge-bottom**:

    <button data-badge="new" class="hasbadge badge-bottom">bottom</button>

#### Badge outside element content

Use class **badge-outside** to display badge outside of the element content (2px border overlapping).

    <button data-badge="new" class="hasbadge badge-outside">top-right - outside</button>

    <button data-badge="new" class="hasbadge badge-top-left badge-outside">top-left - outside</button>

    <button data-badge="new" class="hasbadge badge-bottom-right badge-outside">bottom-right - outside</button>

    <button data-badge="new" class="hasbadge badge-bottom-left badge-outside">bottom-left - outside</button>

#### Badge inside element content

Use class **badge-inside** to display badge inside of the element content.

    <button data-badge="new" class="hasbadge badge-inside">top-right - inside</button>

    <button data-badge="new" class="hasbadge badge-top-left badge-inside">top-left - inside</button>

    <button data-badge="new" class="hasbadge badge-bottom-right badge-inside">bottom-right - inside</button>

    <button data-badge="new" class="hasbadge badge-bottom-left badge-inside">bottom-left - inside</button>

### Classes overview

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

By default badge is displayed in the element content with little border overlapping.

Every class can be combined with class **badge-outside** to display a badge outside of the element content or
with class **badge-inside** to display a badge inside of the element content.

### Style classes
| CSS class   |  Note        |
| :----------- |  :----------- |
| badge-primary      | predefined with scss variables |
| badge-secondary      | predefined with scss variables |
| badge-success      | predefined with scss variables |
| badge-danger      | predefined with scss variables |
| badge-warning      | predefined with scss variables |
| badge-info      | predefined with scss variables |
| badge-light      | predefined with scss variables |
| badge-dark      | predefined with scss variables |
| badge-noborder      | badge without border |
| badge-noshadow      | badge without shadow |
| badge-circled      | circled badge |
| badge-squared      | squared badge |
| badge-l      | large badge |
| badge-xl      | extra large badge |
| badge-xxl      | more larger badge |
| badge-s      | small badge |
| badge-xs     | extra small badge |
| badge-xxs     | more smaller badge |
| badge-dot     | dot in the badge (requires Font Awesome) |

Note: Also, default style (text, background and border) is predefined with scss variables.

## Detailed usage of class **badge**

### Badge alignment

Alignment is defined by inner element. With class **badge-top** badge is positioned little upper.

```html
    <div>
        <span class="badge">15 items</span>
        List of messages
        <span class="badge badge-top">15 items</span>
    </div>
```
Style classes are same as style classes for class **hasbadge**.
