# Design System

*Philosophy*
The products provide the color. The UI provides the stage.
Let the platform be a neutral, elegant base with one configurable accent color.

## Design Goals

The UI should feel:

- Friendly
- Modern
- Calm
- Premium
- Trustworthy
- Fast

## Colour System

**Default Theme**

| Attribute | Color |
| -- | -- |
| Primary  | Emerald |
| Secondary | Amber |
| Accent | Rose |
| Background     |   White |
| Surface        |  Light Gray |
| Surface Hover |     Slightly Darker Gray |
| Primary Text   |  Near Black |
| Secondary Text |    Slate Gray |
| Muted Text |        Gray |
| Border |            Light Gray |

## Typography

### Fonts

- Heading - Poppins
- Body - Inter

### Sizes 

| Text | Size |
| -- | -- |
|Hero|3xl-5xl|
|Section Heading|2xl|
|Card Heading|lg|
|Body| base|
|Caption|sm|

## Spacing
- 8 point system - multiples of 8 only.
- 4, 8, 16, 24, 32, 48, 64

## Border Radius

| Component | Size |
| -- | -- |
| Button | 12 px |
| Card | 16px |
| Image | 20px |
| Chip | 9999px |

## Shadow

| Component | Size |
| -- | -- |
| Card | small |
| Hover | medium |
| Hero | large |

## Component Guidelines 
### Button

- Primary - filled accent color, white text 
- Secondary - outline primary color, 

### Card

- Rounded corners.
- Consistent padding.
- Soft shadow.
- Lift slightly on hover (desktop only).
- Large image area.
- Clean typography.

### Icons

- Lucide

### Motion

Keep animations subtle.

## Theme Structure
``` css
--color-primary
--color-secondary
--color-accent
--color-surface
--color-background
--color-text
```

## Responsive Breakpoints

|Screen|size|
|--|--|
| Mobile | Default|
| Tablet | md | 
| Laptop | lg |
| Desktop | xl |

## Images

- Images are first-class citizens.
- Prefer large imagery.
- Maintain consistent aspect ratios.
- Rounded corners.
- Gracefully handle missing images.
- Lazy load where appropriate.

## Accessibility

- Minimum touch target 44px.
- Images include alt text.
- Keyboard navigation supported.
- Sufficient color contrast.
- Visible focus states.