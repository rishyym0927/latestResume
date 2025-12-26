# Rishiraj Mukherjee - Portfolio

A stunning, Awwwards-style portfolio website showcasing my work as a Full-Stack Developer & Competitive Programmer.

## ✨ Features

- 🎨 Modern, premium design with smooth animations
- 🚀 GSAP-powered animations with ScrollTrigger
- 🌊 Lenis smooth scrolling
- 🎯 Custom cursor with hover effects
- ✨ Text splitting animations with Splitting.js
- 📱 Fully responsive design
- ♿ Accessibility optimized
- ⚡ Performance optimized production build

## 🛠️ Tech Stack

- HTML5, CSS3, JavaScript (ES6+)
- GSAP (GreenSock Animation Platform)
- Lenis (Smooth Scroll)
- Splitting.js (Text Animations)

## 📁 Project Structure

```
resume2/
├── css/                    # Modular CSS files
│   ├── base.css           # Variables & reset
│   ├── cursor.css         # Custom cursor
│   ├── loader.css         # Page loader
│   ├── navbar.css         # Navigation
│   ├── hero.css           # Hero section
│   ├── sections.css       # Common styles
│   ├── story.css          # About section
│   ├── expertise.css      # Skills section
│   ├── projects.css       # Portfolio grid
│   ├── responsive.css     # Media queries
│   └── ...
├── js/                     # Modular JavaScript
│   ├── core/              # Core functionality
│   │   ├── lenis.js       # Smooth scrolling
│   │   ├── loader.js      # Page loader
│   │   ├── cursor.js      # Custom cursor
│   │   └── navbar.js      # Navigation
│   ├── animations/        # Animation modules
│   │   ├── hero.js        # Hero animations
│   │   ├── scroll.js      # Scroll triggers
│   │   ├── counters.js    # Number animations
│   │   └── parallax.js    # Parallax effects
│   ├── components/        # UI components
│   │   ├── magnetic.js    # Magnetic buttons
│   │   ├── carousel.js    # Carousels
│   │   └── interactions.js# Hover effects
│   └── utils/             # Utilities
│       ├── helpers.js     # Helper functions
│       ├── accessibility.js
│       └── performance.js
├── scripts/
│   └── build.js           # Production build script
├── dist/                   # Production build output
├── .github/workflows/
│   └── deploy.yml         # GitHub Pages deployment
├── vercel.json            # Vercel configuration
├── netlify.toml           # Netlify configuration
├── index.html             # Main HTML file
├── styles.css             # CSS entry point
└── package.json           # Project config
```

## 🚀 Deployment

### Option 1: GitHub Pages (Recommended)

1. Push to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

2. GitHub Actions will automatically build and deploy!

3. Go to **Settings → Pages** and your site will be live at:
   `https://YOUR_USERNAME.github.io/portfolio`

### Option 2: Vercel

```bash
npx vercel --prod
```

### Option 3: Netlify

```bash
npx netlify deploy --prod --dir=dist
```

Or drag & drop the `dist` folder at [netlify.com](https://app.netlify.com/drop)

## 🔧 Development

### Local Development

```bash
# Serve with live reload (using any local server)
npx serve .
# or
python -m http.server 5500
```

### Production Build

```bash
# Build optimized files to dist/
npm run build

# Preview the build
npm run preview
```

### Build Commands

```bash
npm run build        # Full production build
npm run build:css    # Bundle CSS only
npm run build:js     # Bundle JS only
npm run clean        # Remove dist folder
```

## 📊 Performance

The build script:

- ✅ Bundles 18 CSS files → 1 minified file
- ✅ Bundles 14 JS files → 1 minified file
- ✅ ~40-50% size reduction through minification
- ✅ Long-term caching headers configured
- ✅ Security headers included

## 📝 License

MIT License - Feel free to use this as a template!

## 👤 Author

**Rishiraj Mukherjee**

- 🔗 [LinkedIn](https://linkedin.com/in/rishiraj-mukherjee)
- 💻 [GitHub](https://github.com/rishyym0927)
- 🏆 [Codeforces](https://codeforces.com/profile/rishyy09)
- 📧 rishirajmukherjee09@gmail.com
