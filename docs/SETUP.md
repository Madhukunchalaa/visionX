# Setup & Installation Guide

## Prerequisites

Before setting up the project, ensure you have:

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A code editor (VS Code, Sublime Text, or any preferred editor)
- A local web server (optional, but recommended)

### Optional Tools

- **Git** - For version control
- **Node.js** - For using npm packages (if needed)
- **Python** - For simple HTTP server
- **PHP** - For PHP built-in server

---

## Installation Methods

### Method 1: Direct File Access (Simplest)

1. **Download or clone the project:**
   ```bash
   git clone <repository-url>
   cd VisionX
   ```

2. **Open directly in browser:**
   - Navigate to the project folder
   - Double-click `index.html`
   - Website opens in default browser

**Note:** Some features may not work with `file://` protocol. Use a local server for full functionality.

### Method 2: Local Web Server (Recommended)

#### Option A: Python HTTP Server

1. **Navigate to project directory:**
   ```bash
   cd VisionX
   ```

2. **Start server:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

3. **Access website:**
   - Open browser
   - Go to `http://localhost:8000`

#### Option B: Node.js HTTP Server

1. **Install http-server (if not installed):**
   ```bash
   npm install -g http-server
   ```

2. **Navigate to project directory:**
   ```bash
   cd VisionX
   ```

3. **Start server:**
   ```bash
   http-server -p 8000
   ```

4. **Access website:**
   - Open browser
   - Go to `http://localhost:8000`

#### Option C: PHP Built-in Server

1. **Navigate to project directory:**
   ```bash
   cd VisionX
   ```

2. **Start server:**
   ```bash
   php -S localhost:8000
   ```

3. **Access website:**
   - Open browser
   - Go to `http://localhost:8000`

#### Option D: VS Code Live Server

1. **Install Live Server extension** in VS Code

2. **Right-click on `index.html`**

3. **Select "Open with Live Server"**

4. **Website opens automatically**

---

## Development Environment Setup

### 1. Project Structure

Ensure your project has this structure:

```
VisionX/
├── index.html
├── about.html
├── service.html
├── contact.html
├── navbar.html
├── footer.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── common.js
│   │   ├── navbar.js
│   │   ├── index.js
│   │   ├── about.js
│   │   ├── contact.js
│   │   ├── service.js
│   │   └── main.js
│   ├── images/
│   └── videos/
└── docs/
```

### 2. Verify Dependencies

The project uses CDN resources, so internet connection is required:

- **Bootstrap 5.3** - Loaded from CDN
- **Google Fonts (Inter)** - Loaded from CDN
- **Bootstrap Icons** - Loaded from CDN

### 3. File Permissions

Ensure files are readable:
```bash
# Linux/Mac
chmod -R 755 VisionX

# Windows
# No special permissions needed
```

---

## Configuration

### No Configuration Required

The project works out of the box with no configuration files needed. All settings are in:

- **CSS Variables** - `assets/css/styles.css` (top of file)
- **JavaScript** - No config needed
- **HTML** - No config needed

### Optional Customization

See [TECHNICAL.md](TECHNICAL.md) for customization guide.

---

## Testing the Installation

### 1. Basic Functionality Test

1. Open `index.html` in browser
2. Check that:
   - Page loads without errors
   - Navbar appears at top
   - Videos play (if autoplay allowed)
   - Footer appears at bottom

### 2. Navigation Test

1. Click navigation links
2. Verify pages load correctly:
   - Home → `index.html`
   - About → `about.html`
   - Services → `service.html`
   - Contact → `contact.html`

### 3. Interactive Features Test

1. **Homepage:**
   - Test video play/pause buttons
   - Test mute/unmute buttons
   - Scroll to see animations

2. **About Page:**
   - Scroll to trigger animations
   - Check video backgrounds

3. **Services Page:**
   - Click service selector cards
   - Verify content morphs
   - Check auto-rotation

4. **Contact Page:**
   - Click FAQ items
   - Verify accordion works
   - Check form fields

### 4. Responsive Test

1. Open browser DevTools (F12)
2. Toggle device toolbar
3. Test different screen sizes:
   - Mobile (375px)
   - Tablet (768px)
   - Desktop (1920px)
4. Verify:
   - Mobile menu works
   - Layout adapts
   - Text is readable

---

## Troubleshooting

### Issue: Page Not Loading

**Symptoms:** Blank page or 404 error

**Solutions:**
1. Check file paths are correct
2. Verify `index.html` exists in root
3. Ensure using `http://` not `file://`
4. Check browser console for errors

### Issue: Styles Not Applying

**Symptoms:** Unstyled page

**Solutions:**
1. Check `assets/css/styles.css` exists
2. Verify CSS file path in HTML
3. Clear browser cache (Ctrl+Shift+R)
4. Check browser console for 404 errors

### Issue: JavaScript Not Working

**Symptoms:** Interactive features don't work

**Solutions:**
1. Check browser console for errors
2. Verify JavaScript files exist
3. Ensure scripts load in correct order
4. Check JavaScript is enabled in browser

### Issue: Videos Not Playing

**Symptoms:** Videos don't autoplay or show

**Solutions:**
1. Check video file paths
2. Verify video files exist in `assets/videos/`
3. Check browser autoplay policies
4. Try clicking play button manually
5. Check video format (MP4 recommended)

### Issue: Navbar/Footer Not Loading

**Symptoms:** Empty placeholders

**Solutions:**
1. Check `navbar.html` and `footer.html` exist
2. Verify `common.js` loads before page scripts
3. Check browser console for fetch errors
4. Ensure using local server (not file://)

### Issue: Fonts Not Loading

**Symptoms:** Default fonts instead of Inter

**Solutions:**
1. Check internet connection (fonts load from CDN)
2. Verify Google Fonts link in HTML
3. Check browser console for network errors
4. Fonts have fallbacks, so page still works

### Issue: Mobile Menu Not Working

**Symptoms:** Hamburger menu doesn't open

**Solutions:**
1. Check `navbar.js` loads correctly
2. Verify `navbar.html` includes menu structure
3. Check browser console for errors
4. Test on actual mobile device

---

## Development Workflow

### Making Changes

1. **Start local server** (if not already running)

2. **Edit files:**
   - HTML: Edit `.html` files directly
   - CSS: Edit `assets/css/styles.css`
   - JavaScript: Edit files in `assets/js/`

3. **Save files**

4. **Refresh browser** (Ctrl+R or Cmd+R)

5. **View changes immediately**

### Hot Reload (Optional)

For automatic browser refresh:

1. **Install browser extension:**
   - Chrome: LiveReload
   - Firefox: Auto Reload

2. **Or use VS Code Live Server** (auto-reloads)

### Version Control

If using Git:

```bash
# Initialize repository
git init

# Add files
git add .

# Commit
git commit -m "Initial commit"

# Create .gitignore (optional)
echo "node_modules/" >> .gitignore
echo ".DS_Store" >> .gitignore
```

---

## Production Setup

### Pre-Deployment Checklist

- [ ] Test all pages
- [ ] Test all interactive features
- [ ] Test responsive design
- [ ] Optimize images
- [ ] Compress videos (if possible)
- [ ] Check browser compatibility
- [ ] Verify all links work
- [ ] Test contact form (if backend connected)
- [ ] Check SEO meta tags
- [ ] Verify analytics (if added)

### Deployment Steps

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment guide.

---

## Environment Variables

**No environment variables needed** - This is a static website.

If adding backend features later:
- Create `.env` file (don't commit to Git)
- Add to `.gitignore`
- Load in JavaScript if needed

---

## Additional Resources

- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Google Fonts](https://fonts.google.com/specimen/Inter)

---

## Support

For issues or questions:

1. Check [TECHNICAL.md](TECHNICAL.md) for technical details
2. Check browser console for errors
3. Review this guide for common issues
4. Contact development team

---

**Last Updated:** Current Date  
**Version:** 1.0

