/**
 * Production Build Script
 * Bundles and optimizes CSS/JS files for deployment
 */

const fs = require("fs");
const path = require("path");

// Configuration
const config = {
  srcDir: __dirname.replace("/scripts", ""),
  distDir: path.join(__dirname.replace("/scripts", ""), "dist"),

  // CSS files in order
  cssFiles: [
    "css/base.css",
    "css/cursor.css",
    "css/loader.css",
    "css/glow.css",
    "css/navbar.css",
    "css/hero.css",
    "css/sections.css",
    "css/story.css",
    "css/expertise.css",
    "css/experience.css",
    "css/projects.css",
    "css/achievements.css",
    "css/skills.css",
    "css/testimonials.css",
    "css/awards.css",
    "css/contact.css",
    "css/footer.css",
    "css/enhancements.css",
    "css/responsive.css",
  ],

  // JS files in order (dependencies first)
  jsFiles: [
    "js/utils/helpers.js",
    "js/utils/accessibility.js",
    "js/utils/performance.js",
    "js/core/lenis.js",
    "js/core/loader.js",
    "js/core/cursor.js",
    "js/core/navbar.js",
    "js/animations/hero.js",
    "js/animations/scroll.js",
    "js/animations/counters.js",
    "js/animations/parallax.js",
    "js/animations/project-parallax.js",
    "js/components/magnetic.js",
    "js/components/carousel.js",
    "js/components/interactions.js",
    "js/components/enhancements.js",
    "js/animations.js",
    "js/main.js",
  ],
};

// Parse command line arguments
const args = process.argv.slice(2);
const cssOnly = args.includes("--css-only");
const jsOnly = args.includes("--js-only");

// Utility functions
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function readFile(filePath) {
  const fullPath = path.join(config.srcDir, filePath);
  if (fs.existsSync(fullPath)) {
    return fs.readFileSync(fullPath, "utf8");
  }
  console.warn(`⚠️  File not found: ${filePath}`);
  return "";
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content, "utf8");
}

function minifyCSS(css) {
  return (
    css
      // Remove comments
      .replace(/\/\*[\s\S]*?\*\//g, "")
      // Remove extra whitespace
      .replace(/\s+/g, " ")
      // Remove spaces around special characters
      .replace(/\s*([{}:;,>+~])\s*/g, "$1")
      // Remove trailing semicolons before closing braces
      .replace(/;}/g, "}")
      // Remove empty rules
      .replace(/[^{}]+\{\}/g, "")
      .trim()
  );
}

function minifyJS(js) {
  return (
    js
      // Remove single-line comments (but not URLs)
      .replace(/(?<!:)\/\/.*$/gm, "")
      // Remove multi-line comments
      .replace(/\/\*[\s\S]*?\*\//g, "")
      // Reduce multiple newlines
      .replace(/\n\s*\n/g, "\n")
      // Trim lines
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .join("\n")
  );
}

function copyFile(src, dest) {
  const srcPath = path.join(config.srcDir, src);
  const destPath = path.join(config.distDir, src);

  ensureDir(path.dirname(destPath));

  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    return true;
  }
  return false;
}

// Build functions
function buildCSS() {
  console.log("📦 Bundling CSS...");

  let bundledCSS = `/* 
 * Rishiraj Mukherjee Portfolio
 * Bundled CSS - Generated ${new Date().toISOString()}
 */\n\n`;

  config.cssFiles.forEach((file) => {
    const content = readFile(file);
    if (content) {
      bundledCSS += `/* === ${file} === */\n${content}\n\n`;
    }
  });

  // Write unminified version
  const bundledPath = path.join(config.distDir, "styles.bundle.css");
  writeFile(bundledPath, bundledCSS);
  console.log(
    `  ✅ Created: styles.bundle.css (${(bundledCSS.length / 1024).toFixed(
      2
    )} KB)`
  );

  // Write minified version
  const minifiedCSS = minifyCSS(bundledCSS);
  const minifiedPath = path.join(config.distDir, "styles.min.css");
  writeFile(minifiedPath, minifiedCSS);
  console.log(
    `  ✅ Created: styles.min.css (${(minifiedCSS.length / 1024).toFixed(
      2
    )} KB)`
  );

  const savings = ((1 - minifiedCSS.length / bundledCSS.length) * 100).toFixed(
    1
  );
  console.log(`  📉 Size reduction: ${savings}%`);
}

function buildJS() {
  console.log("📦 Bundling JavaScript...");

  let bundledJS = `/* 
 * Rishiraj Mukherjee Portfolio
 * Bundled JavaScript - Generated ${new Date().toISOString()}
 */\n\n`;

  config.jsFiles.forEach((file) => {
    const content = readFile(file);
    if (content) {
      bundledJS += `/* === ${file} === */\n${content}\n\n`;
    }
  });

  // Write unminified version
  const bundledPath = path.join(config.distDir, "script.bundle.js");
  writeFile(bundledPath, bundledJS);
  console.log(
    `  ✅ Created: script.bundle.js (${(bundledJS.length / 1024).toFixed(
      2
    )} KB)`
  );

  // Write minified version
  const minifiedJS = minifyJS(bundledJS);
  const minifiedPath = path.join(config.distDir, "script.min.js");
  writeFile(minifiedPath, minifiedJS);
  console.log(
    `  ✅ Created: script.min.js (${(minifiedJS.length / 1024).toFixed(2)} KB)`
  );

  const savings = ((1 - minifiedJS.length / bundledJS.length) * 100).toFixed(1);
  console.log(`  📉 Size reduction: ${savings}%`);
}

function buildHTML() {
  console.log("📦 Building production HTML...");

  let html = readFile("index.html");

  // Replace CSS imports with bundled version
  html = html.replace(
    /<link rel="stylesheet" href="styles\.css" \/>/,
    '<link rel="stylesheet" href="styles.min.css" />'
  );

  // Replace individual JS scripts with bundled version
  const jsScriptPattern =
    /<!-- JavaScript Modules -->[\s\S]*?<script src="js\/main\.js"><\/script>/;
  html = html.replace(
    jsScriptPattern,
    '<!-- Bundled JavaScript -->\n    <script src="script.min.js"></script>'
  );

  const htmlPath = path.join(config.distDir, "index.html");
  writeFile(htmlPath, html);
  console.log(`  ✅ Created: index.html`);
}

function copyAssets() {
  console.log("📦 Copying assets...");

  // Copy any additional assets (images, fonts, etc.)
  const assetDirs = ["assets", "images", "fonts"];

  assetDirs.forEach((dir) => {
    const srcPath = path.join(config.srcDir, dir);
    if (fs.existsSync(srcPath)) {
      const destPath = path.join(config.distDir, dir);
      fs.cpSync(srcPath, destPath, { recursive: true });
      console.log(`  ✅ Copied: ${dir}/`);
    }
  });

  // Copy PDF if exists
  if (fs.existsSync(path.join(config.srcDir, "google-9.pdf"))) {
    fs.copyFileSync(
      path.join(config.srcDir, "google-9.pdf"),
      path.join(config.distDir, "google-9.pdf")
    );
    console.log(`  ✅ Copied: google-9.pdf`);
  }
}

// Main build process
function build() {
  console.log("\n🚀 Starting production build...\n");
  console.log(`📂 Source: ${config.srcDir}`);
  console.log(`📂 Output: ${config.distDir}\n`);

  // Ensure dist directory exists
  ensureDir(config.distDir);

  // Build based on flags
  if (!jsOnly) buildCSS();
  if (!cssOnly) buildJS();
  if (!cssOnly && !jsOnly) {
    buildHTML();
    copyAssets();
  }

  console.log("\n✨ Build complete!\n");
  console.log("📋 Next steps:");
  console.log("   npm run preview     - Preview the build locally");
  console.log("   npm run deploy:vercel  - Deploy to Vercel");
  console.log("   npm run deploy:netlify - Deploy to Netlify");
  console.log("   git push            - Auto-deploy to GitHub Pages\n");
}

// Run build
build();
