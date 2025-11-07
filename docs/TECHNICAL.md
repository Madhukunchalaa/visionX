# Technical Documentation

## Architecture Overview

The StudioX website is built using a **vanilla JavaScript** architecture with modular code organization. The project follows a component-based structure without any build process, making it easy to understand and maintain.

### Architecture Diagram

```
┌─────────────────────────────────────────┐
│           HTML Pages                     │
│  (index, about, service, contact)       │
└──────────────┬──────────────────────────┘
               │
               ├── Loads CSS
               │   └── styles.css (organized by sections)
               │
               └── Loads JavaScript (in order)
                   ├── common.js (shared utilities)
                   ├── main.js (general utilities)
                   └── page-specific.js (page features)
```

### Design Principles

1. **Separation of Concerns** - HTML, CSS, and JavaScript are kept separate
2. **Modular JavaScript** - Each page/feature has its own JS file
3. **No Build Process** - Pure vanilla JavaScript, no compilation needed
4. **Progressive Enhancement** - Works without JavaScript, enhanced with it
5. **Mobile-First** - Responsive design starting from mobile

---

## File Structure

### JavaScript Modules

#### `assets/js/common.js`
**Purpose:** Shared functionality used across all pages

**Functions:**
- `loadNavbar()` - Dynamically loads navbar HTML
- `loadFooter()` - Dynamically loads footer HTML
- `initNavbarScroll()` - Handles navbar scroll effects
- `initSmoothScroll()` - Implements smooth scrolling for anchor links

**Usage:**
```javascript
// Automatically called on DOMContentLoaded
// No manual initialization needed
```

#### `assets/js/navbar.js`
**Purpose:** Navigation and mobile menu functionality

**Features:**
- Mobile menu toggle
- Overlay handling
- Scroll-based navbar styling
- Dropdown menu support

**Initialization:**
- Automatically initializes when navbar HTML is loaded
- Uses IIFE (Immediately Invoked Function Expression) pattern

#### `assets/js/index.js`
**Purpose:** Homepage-specific features

**Functions:**
- `initVideoControls()` - Sets up play/pause and mute/unmute for video controls

**Video Controls:**
- Play/Pause buttons with icon toggling
- Mute/Unmute buttons with icon toggling
- Error handling for autoplay restrictions

#### `assets/js/about.js`
**Purpose:** About page scroll animations

**Functions:**
- `initAboutAnimations()` - Sets up Intersection Observer for scroll animations

**Animation Types:**
- `about-fadeInUp` - Fade in from bottom
- `about-scaleIn` - Scale in animation
- `about-slideInLeft` - Slide in from left
- `about-slideInRight` - Slide in from right

**Usage:**
- Add `about-animate-on-scroll` class to elements
- Animations trigger when element enters viewport

#### `assets/js/contact.js`
**Purpose:** Contact page functionality

**Functions:**
- `toggleFAQ(button)` - Toggles FAQ accordion items
- `initFAQ()` - Initializes FAQ functionality
- `initVideoControls()` - Video controls (same as index page)

**FAQ Implementation:**
- Only one FAQ item open at a time
- Smooth open/close animations
- Accessible keyboard navigation

#### `assets/js/service.js`
**Purpose:** Services page morphing animations

**Features:**
- Service selector with morphing content
- Video background switching
- Auto-rotation every 5 seconds
- Smooth transitions between services

**Service Data:**
```javascript
const svcMorphServices = [
    {
        title: 'Brand Videos',
        bestFor: 'Marketing campaigns',
        timeline: '3-5 days',
        description: '...'
    },
    // ... more services
];
```

#### `assets/js/main.js`
**Purpose:** Additional utilities and features

**Features:**
- Service selection functionality
- Video lazy loading
- Intersection Observer utilities
- Video card interactions

---

## CSS Organization

### Structure

The CSS file (`assets/css/styles.css`) is organized into clear sections:

1. **CSS Variables & Global Styles** (Lines 1-40)
   - Root variables
   - Bootstrap overrides
   - Theme colors

2. **Navbar Styles** (Lines 18-38)
   - Navbar base styles
   - Scroll effects
   - Button styles

3. **Typography & Base Styles** (Lines 40-94)
   - Body styles
   - Heading hierarchy
   - Paragraph styles
   - Button base styles

4. **Video Banner Section** (Lines 96-140)
   - Full-screen video banner
   - Video overlay
   - Content positioning

5. **AI Capabilities Section** (Lines 143-230)
   - Feature rows
   - Video cards
   - Content layout

6. **Page-Specific Styles**
   - Contact page styles
   - About page styles
   - Service page styles

### CSS Variables

```css
:root {
  /* Bootstrap Overrides */
  --bs-primary: #ffffff;
  --bs-dropdown-link-active-bg: #ffffff;
  --bs-dropdown-link-active-color: #000000;
  --bs-link-color: #ffffff;
  --bs-link-hover-color: #cccccc;
  
  /* Theme Colors */
  --btn-color: #FF3951;
  --theme-color: #FF3951;
  --theme-hover: #e02f46;
}
```

### Typography Scale

```css
h1 { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; }
h2 { font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; }
h3 { font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 600; }
h4 { font-size: clamp(1.25rem, 2.5vw, 1.5rem); font-weight: 600; }
p  { font-size: 1rem; line-height: 1.7; }
```

### Responsive Design

- Uses `clamp()` for fluid typography
- Bootstrap 5.3 grid system
- Mobile-first media queries
- Flexible layouts with flexbox

---

## HTML Structure

### Page Template

Every page follows this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags -->
    <!-- Bootstrap CSS -->
    <!-- Google Fonts -->
    <!-- Custom CSS -->
    <!-- Bootstrap Icons -->
</head>
<body>
    <!-- Navbar Placeholder -->
    <div id="navbar-placeholder"></div>
    
    <!-- Page Content -->
    
    <!-- Footer Placeholder -->
    <div id="footer-placeholder"></div>
    
    <!-- Scripts -->
    <script src="bootstrap.js"></script>
    <script src="assets/js/common.js"></script>
    <script src="assets/js/main.js"></script>
    <script src="assets/js/page-specific.js"></script>
</body>
</html>
```

### Component Loading

Navbar and footer are loaded dynamically via JavaScript:

```javascript
// In common.js
fetch('navbar.html')
    .then(res => res.text())
    .then(data => {
        navbarPlaceholder.innerHTML = data;
        // Execute any scripts from navbar
    });
```

---

## Customization Guide

### Changing Theme Colors

1. **Edit CSS Variables:**
   ```css
   :root {
     --btn-color: #YOUR_COLOR;
     --theme-color: #YOUR_COLOR;
     --theme-hover: #DARKER_COLOR;
   }
   ```

2. **Update Specific Components:**
   - Buttons use `var(--btn-color)`
   - Links use `var(--bs-link-color)`

### Adding New Pages

1. **Create HTML file:**
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <!-- Copy head from existing page -->
   </head>
   <body>
       <div id="navbar-placeholder"></div>
       <!-- Your content -->
       <div id="footer-placeholder"></div>
       <!-- Scripts -->
   </body>
   </html>
   ```

2. **Create JavaScript file (if needed):**
   ```javascript
   // assets/js/newpage.js
   document.addEventListener('DOMContentLoaded', function() {
       // Your page-specific code
   });
   ```

3. **Link in HTML:**
   ```html
   <script src="assets/js/common.js"></script>
   <script src="assets/js/main.js"></script>
   <script src="assets/js/newpage.js"></script>
   ```

### Modifying Animations

**About Page Animations:**
- Edit `assets/js/about.js`
- Modify Intersection Observer options
- Change animation names in CSS

**Service Morph Animations:**
- Edit `assets/js/service.js`
- Modify `svcMorphServices` array
- Adjust timing in `setTimeout` calls

### Adding New Video Controls

1. **HTML Structure:**
   ```html
   <button class="play-pause-btn" data-video="videoId">
       <span class="play-icon">▶</span>
       <span class="pause-icon" style="display:none;">⏸</span>
   </button>
   ```

2. **JavaScript:**
   - Uses existing `initVideoControls()` function
   - Automatically detects buttons with classes

---

## Browser Compatibility

### Supported Browsers

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Polyfills

No polyfills required for:
- ES6+ features (arrow functions, const/let, template literals)
- Fetch API
- Intersection Observer
- CSS Variables
- CSS Grid
- Flexbox

### Fallbacks

- Font fallbacks: System fonts if Inter fails to load
- Video fallbacks: Fallback text in video tags
- JavaScript: Progressive enhancement approach

---

## Performance Considerations

### Optimization Strategies

1. **Lazy Loading:**
   - Videos load on demand
   - Images can be lazy-loaded (if implemented)

2. **Code Splitting:**
   - Page-specific JS only loads on that page
   - Common JS loads once

3. **CSS:**
   - Single CSS file (consider splitting for large projects)
   - CSS variables for easy theming

4. **Assets:**
   - Optimize images before adding
   - Compress videos for web
   - Use appropriate formats (WebP for images, MP4 for videos)

### Best Practices

- Keep JavaScript files under 500 lines
- Use event delegation where possible
- Debounce scroll events if needed
- Minimize DOM queries (cache selectors)

---

## API Reference

### Common Functions

#### `loadNavbar()`
Loads navbar HTML into placeholder.

**Returns:** `void`

**Example:**
```javascript
// Called automatically, but can be called manually
loadNavbar();
```

#### `loadFooter()`
Loads footer HTML into placeholder.

**Returns:** `void`

#### `initNavbarScroll()`
Initializes scroll-based navbar styling.

**Returns:** `void`

#### `initSmoothScroll()`
Enables smooth scrolling for anchor links.

**Returns:** `void`

### Page-Specific Functions

#### `initVideoControls()` (index.js, contact.js)
Initializes video play/pause and mute/unmute controls.

**Returns:** `void`

#### `initAboutAnimations()` (about.js)
Sets up scroll-triggered animations.

**Returns:** `void`

#### `toggleFAQ(button)` (contact.js)
Toggles FAQ accordion item.

**Parameters:**
- `button` (HTMLElement) - The button that triggered the toggle

**Returns:** `void`

#### `initServiceMorph()` (service.js)
Initializes service morphing animations.

**Returns:** `void`

---

## Troubleshooting

### Common Issues

**Navbar not loading:**
- Check that `navbar.html` exists
- Verify `common.js` is loaded before page-specific scripts
- Check browser console for errors

**Animations not working:**
- Ensure elements have correct classes
- Check Intersection Observer support
- Verify JavaScript is enabled

**Videos not playing:**
- Check autoplay policies (browsers may block)
- Verify video file paths
- Check video format compatibility

**Styles not applying:**
- Clear browser cache
- Verify CSS file path
- Check for CSS syntax errors

---

## Development Workflow

### Making Changes

1. **Edit HTML** - Update content directly
2. **Edit CSS** - Modify styles in `styles.css`
3. **Edit JavaScript** - Update relevant JS file
4. **Test** - Refresh browser to see changes
5. **No build step** - Changes are immediate

### Testing

1. **Local Testing:**
   - Use local server (not file://)
   - Test in multiple browsers
   - Test on mobile devices

2. **Responsive Testing:**
   - Use browser dev tools
   - Test actual devices
   - Check different screen sizes

---

## Future Enhancements

### Potential Improvements

1. **Build Process:**
   - Add Webpack/Vite for bundling
   - Minify CSS and JS
   - Optimize assets

2. **Framework Migration:**
   - Consider React/Vue for complex features
   - Keep vanilla JS for simple pages

3. **Backend Integration:**
   - Connect contact form to backend
   - Add CMS integration
   - Implement user authentication

4. **Performance:**
   - Implement service workers
   - Add image lazy loading
   - Optimize video delivery

---

**Last Updated:** Current Date  
**Version:** 1.0

