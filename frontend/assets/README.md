# Assets Directory Structure

This directory contains all static assets for the BrestCare breast cancer awareness website.

## Directory Structure

```
assets/
├── images/          # Image files (logos, icons, illustrations)
│   └── logo.svg     # BrestCare logo with pink ribbon heart
├── styles/          # CSS and styling files
│   └── logo.css     # Logo-specific styles and responsive behavior
├── scripts/         # JavaScript files for interactive functionality
│   └── modal.js     # Modal controller and utility functions
└── README.md        # This file
```

## File Descriptions

### Images
- **logo.svg**: Vector logo featuring a pink ribbon forming a heart shape with "BRESTCARE" text
  - Responsive design that scales appropriately
  - Optimized for both desktop and mobile displays
  - Uses breast cancer awareness color scheme (pink tones)

### Styles
- **logo.css**: CSS styles for logo responsiveness and hover effects
  - Mobile-first responsive design
  - Smooth transitions and hover effects
  - High-DPI display optimization

### Scripts
- **modal.js**: JavaScript utilities for modal functionality
  - ModalController class for managing popup dialogs
  - Responsive utility functions
  - Logo interaction utilities

## Usage

### Logo Component
```tsx
import { Logo } from '@/components/logo'

// Basic usage
<Logo />

// With custom dimensions
<Logo height={40} width={200} className="custom-class" />
```

### Modal Controller
```javascript
import { ModalController } from '@/assets/scripts/modal.js'

const modalController = new ModalController()
modalController.registerModal('health-priority', trigger, content, {
  autoShow: true,
  delay: 2000
})
```

## Design Guidelines

- **Colors**: Primary pink (#ec4899), secondary pink (#be185d), light pink (#fdf2f8)
- **Typography**: Clean sans-serif fonts (Arial, system fonts)
- **Responsive**: Mobile-first approach with breakpoints at 480px, 768px, 1024px
- **Accessibility**: High contrast ratios, proper ARIA labels, keyboard navigation

## Maintenance

- Keep SVG files optimized for web use
- Update responsive breakpoints as needed
- Test on various devices and screen sizes
- Ensure accessibility compliance 