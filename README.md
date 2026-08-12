# Sabbir Hassan — Portfolio

A modern, elegant portfolio website built with Next.js, Tailwind CSS, Three.js, and Lenis smooth scroll showcasing Sabbir Hassan's software engineering and Laravel development work.

## Features

- 🎨 **Three.js Background Animation** - Interactive particle system with moving geometry
- ✨ **Smooth Scroll** - Lenis-powered smooth scrolling experience
- 🎯 **Scroll Reveal Animations** - Elements animate as they come into view
- 📱 **Responsive Design** - Beautiful on all screen sizes
- ✨ **Custom Cursor** - Interactive hover effects
- ⚡ **Next.js 14** - Modern React framework with app router
- 🎭 **Intersection Observer** - Efficient scroll-based animations

## Tech Stack

- **Next.js 14** - React framework
- **Three.js** - 3D graphics library
- **Lenis** - Smooth scroll library
- **TypeScript** - Type safety
- **CSS3** - Animations and transitions

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── components/
│   ├── ThreeScene.tsx      # Three.js scene setup
│   ├── Navigation.tsx      # Fixed navigation bar
│   ├── LenisScroll.tsx     # Smooth scroll integration
│   ├── ScrollReveal.tsx    # Intersection observer setup
│   └── sections/
│       ├── Hero.tsx        # Hero section
│       ├── About.tsx       # About section
│       ├── Work.tsx        # Work/Projects section
│       ├── Skills.tsx      # Skills & tools section
│       ├── Contact.tsx     # Contact section
│       └── Footer.tsx      # Footer
├── layout.tsx              # Root layout
├── page.tsx                # Main page
└── globals.css             # Global styles
```

## Customization

### Update Contact Information

Edit [app/components/sections/Contact.tsx](app/components/sections/Contact.tsx) to update:

- Social media links
- Email address

### Update Project Information

Edit [app/components/sections/Work.tsx](app/components/sections/Work.tsx) to update:

- Project titles
- Project descriptions/tags
- Project numbers

### Modify Colors

Edit [app/globals.css](app/globals.css) to change:

- `--gold`: Primary accent color
- `--cream`: Text color
- `--dark`, `--mid`: Background colors

## Performance

- Efficient particle system with WebGL
- Lazy-loaded animations
- Optimized Three.js rendering
- Smooth scroll with 60fps performance

## License

© 2026 Sabbir Hassan — All rights reserved
