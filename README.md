# StudioX AI Video Solutions

> Professional AI-powered video production agency website

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Services](#services)
- [Technology Stack](#technology-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Pages Overview](#pages-overview)
- [Development](#development)
- [Documentation](#documentation)
- [License](#license)

## 🎯 About

StudioX is an AI-powered video production agency that creates professional video content for businesses. We specialize in:

- **Brand Video Production** - Cinematic storytelling for brand awareness
- **YouTube Content** - Algorithm-optimized videos for channel growth
- **AI Avatar Creation** - Realistic digital presenters in 60+ languages
- **Learning Video Production** - Educational content for training and e-learning

Our website showcases our services, company story, and provides an easy way for clients to get in touch.

## ✨ Features

### Core Features

- ✅ **Responsive Design** - Fully responsive on all devices (mobile, tablet, desktop)
- ✅ **Modern UI/UX** - Clean, professional design with smooth animations
- ✅ **Video Showcase** - Interactive video galleries with play/pause controls
- ✅ **Contact Form** - Professional contact form with validation
- ✅ **FAQ Section** - Accordion-style FAQ for common questions
- ✅ **Smooth Animations** - Scroll-triggered animations and transitions
- ✅ **Mobile Menu** - Hamburger menu for mobile navigation
- ✅ **SEO Friendly** - Semantic HTML structure

### Technical Features

- ✅ **Modular JavaScript** - Organized, maintainable code structure
- ✅ **Consistent Typography** - Professional Inter font family throughout
- ✅ **CSS Variables** - Easy theme customization
- ✅ **No Inline Scripts** - All JavaScript in separate files
- ✅ **Cross-Browser Compatible** - Works on all modern browsers

## 🎬 Services

### 1. Brand Video Production
Cinematic storytelling that captures attention and drives action. Perfect for product launches, brand awareness campaigns, and social advertising.

**Delivery Time:** 3-5 days

### 2. YouTube Video Production
Algorithm-optimized videos designed to grow your channel. Educational content, thought leadership, or entertainment.

**Delivery Time:** 3-4 days per video

### 3. AI Avatar Videos
Realistic digital presenters that deliver your message in 60+ languages. Perfect for scaling content across markets.

**Delivery Time:** 2-3 days

### 4. Learning Video Production
Transform education into experience. Simplify complex ideas with clarity, creativity, and AI-enhanced storytelling.

**Delivery Time:** 4-6 days

## 🛠 Technology Stack

### Frontend

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables and responsive design
- **JavaScript (ES6+)** - Modern JavaScript with modular architecture
- **Bootstrap 5.3** - Responsive framework
- **Google Fonts (Inter)** - Professional typography
- **Bootstrap Icons** - Icon library

### Development Tools

- No build process required (vanilla JavaScript)
- Works with any static file server
- Compatible with modern development tools

## 🚀 Quick Start

### Prerequisites

- A modern web browser
- A local web server (optional, for development)

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd VisionX
   ```

2. **Open in browser**
   - Simply open `index.html` in your browser, or
   - Use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Access the website**
   - Open `http://localhost:8000` in your browser

### Development Setup

No special setup required! The project uses vanilla JavaScript and CSS, so you can start editing files immediately.

## 📁 Project Structure

```
VisionX/
├── index.html              # Homepage
├── about.html              # About page
├── service.html            # Services page
├── contact.html            # Contact page
├── navbar.html             # Navigation component
├── footer.html             # Footer component
├── PROJECT_SUMMARY.md      # Client-facing project summary
├── README.md               # This file
├── docs/                   # Documentation folder
│   ├── TECHNICAL.md        # Technical documentation
│   ├── SETUP.md            # Setup guide
│   ├── FEATURES.md         # Feature documentation
│   └── DEPLOYMENT.md       # Deployment guide
└── assets/
    ├── css/
    │   └── styles.css      # Main stylesheet
    ├── js/
    │   ├── common.js       # Shared functionality
    │   ├── navbar.js       # Navigation features
    │   ├── index.js        # Homepage features
    │   ├── about.js        # About page features
    │   ├── contact.js      # Contact page features
    │   ├── service.js      # Services page features
    │   └── main.js         # Additional utilities
    ├── images/             # Image assets
    └── videos/             # Video assets
```

## 📄 Pages Overview

### Homepage (`index.html`)
- Full-screen video banner
- AI capabilities showcase
- Interactive video cards
- Video showcase gallery
- AI image collection

### About Page (`about.html`)
- Company story and mission
- Problem and solution sections
- Industry-specific services
- Traditional vs StudioX comparison
- Team showcase

### Services Page (`service.html`)
- Detailed service descriptions
- Interactive service selector
- Feature lists for each service
- Delivery timelines
- Custom solutions section

### Contact Page (`contact.html`)
- Contact form
- Direct contact information
- FAQ section
- Video background

## 💻 Development

### Code Organization

The project follows a modular architecture:

- **HTML** - Semantic structure, no inline scripts
- **CSS** - Organized by sections, uses CSS variables
- **JavaScript** - Modular files, one per page/feature

### Adding New Pages

1. Create new HTML file (e.g., `newpage.html`)
2. Include the same head structure (fonts, CSS, Bootstrap)
3. Add navbar and footer placeholders
4. Create corresponding JS file if needed (e.g., `newpage.js`)
5. Link scripts in order: `common.js` → `main.js` → `newpage.js`

### Customization

#### Changing Colors

Edit CSS variables in `assets/css/styles.css`:

```css
:root {
  --btn-color: #FF3951;      /* Primary button color */
  --theme-color: #FF3951;    /* Theme color */
  --theme-hover: #e02f46;    /* Hover color */
}
```

#### Changing Fonts

The project uses Inter font. To change:

1. Update Google Fonts link in HTML files
2. Update `font-family` in CSS `:root` and `body`

#### Adding Content

- Edit HTML files directly
- Update images in `assets/images/`
- Add videos to `assets/videos/`

## 📚 Documentation

Comprehensive documentation is available:

- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Client-facing project summary
- **[docs/TECHNICAL.md](docs/TECHNICAL.md)** - Technical documentation for developers
- **[docs/SETUP.md](docs/SETUP.md)** - Detailed setup guide
- **[docs/FEATURES.md](docs/FEATURES.md)** - Feature documentation
- **[docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)** - Deployment guide

## 🌐 Browser Support

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is proprietary. All rights reserved.

## 📞 Contact

For questions or support, please refer to the contact page on the website or check the technical documentation.

---

**Built with ❤️ for StudioX AI Video Solutions**

