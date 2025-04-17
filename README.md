# Gyrotic

**Gyrotic** is a lightweight JavaScript library for building elegant, customizable radial menus on touch screens. Perfect for mobile-first web apps that need fast, gesture-based interaction.

## Features

- Radial menus built for **touch** interaction
- Configurable **radius**, **angle**, and **animation**
- Supports **tap**, **long press**, or **manual trigger**
- Clean, no-dependency design
- Fully **customizable** styling and behavior
- Works well with icons, labels, or both

## Installation

You can include Gyrotic directly in your HTML:

```html
<script src="gyrotic.min.js"></script>
<link rel="stylesheet" href="gyrotic.css">
```

Or install via npm (planned):

```bash
npm install gyrotic
```

## Usage

```html
<div id="menuTrigger"></div>

<script>
  const menu = new Gyrotic('#menuTrigger', {
    items: [
      { icon: '🔍', label: 'Search', onSelect: () => doSearch() },
      { icon: '✉️', label: 'Message', onSelect: () => openMessages() },
      { icon: '⚙️', label: 'Settings', onSelect: () => openSettings() },
    ],
    radius: 80,
    startAngle: -90,
    totalAngle: 180,
    theme: 'dark',
  });
</script>
```

## API

### Constructor

```js
const menu = new Gyrotic(targetSelector, options);
```

### Options

| Option        | Type     | Description |
|---------------|----------|-------------|
| `items`       | Array    | Menu items (see below) |
| `radius`      | Number   | Radius in px (default: `100`) |
| `startAngle`  | Number   | Start angle in degrees (default: `-90`) |
| `totalAngle`  | Number   | Total angle span (default: `360`) |
| `theme`       | String   | `'light'`, `'dark'`, or custom |
| `trigger`     | String   | `'tap'`, `'longpress'`, `'custom'` |
| `onOpen`      | Function | Called when menu opens |
| `onClose`     | Function | Called when menu closes |

### Menu Item Format

```js
{
  icon: '⚡',            // Emoji, SVG, or class
  label: 'Boost',       // Optional text
  onSelect: () => {}    // Callback on selection
}
```

## Methods

```js
menu.open(x, y);     // Opens menu at given position
menu.close();        // Closes the menu
menu.destroy();      // Removes listeners and DOM
```

## Events

```js
menu.on('open', () => { ... });
menu.on('select', (item) => { ... });
menu.on('close', () => { ... });
```

## License

MIT

## Roadmap

- [ ] SVG-based animation for smoother UI
- [ ] Haptic feedback support (where available)
- [ ] Support for nested/secondary radial menus
- [ ] Gesture-only mode (no visible trigger element)

## Demo

Coming soon — stay tuned!
