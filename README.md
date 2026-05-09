# Voice Pill Landing Page

A modern, dark-themed landing page for a voice enhancement mobile app. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Dark Theme** - Premium black background with white text and subtle glows
- 📱 **Fully Responsive** - Works beautifully on mobile, tablet, and desktop
- ✨ **Smooth Animations** - Subtle hover effects and animated waveforms
- 🚀 **Fast Performance** - Built with Next.js 16 and Tailwind CSS v4
- 🎯 **Clean Design** - Minimal, modern, and professional

## Sections

1. **Navbar** - Fixed header with navigation links and CTA button
2. **Hero** - Large headline with "Speak With Presence" and download buttons
3. **Visual** - Animated phone mockup with waveform visualization
4. **Features** - 4 feature cards highlighting key benefits
5. **About** - Mission statement with key metrics
6. **Final CTA** - Call-to-action section for downloads
7. **Footer** - Simple footer with links

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Lucide React** - Icons
- **Radix UI** - Accessible components

## Project Structure

```
add/
├── app/
│   ├── layout.tsx       # Root layout with fonts
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles and theme
├── components/
│   ├── landing/         # Landing page sections
│   │   ├── navbar.tsx
│   │   ├── hero.tsx
│   │   ├── visual.tsx
│   │   ├── features.tsx
│   │   ├── about.tsx
│   │   ├── final-cta.tsx
│   │   └── footer.tsx
│   └── ui/
│       └── button.tsx   # Reusable button component
└── lib/
    └── utils.ts         # Utility functions
```

## Customization

- **Colors**: Edit CSS variables in `app/globals.css`
- **Content**: Update text in component files under `components/landing/`
- **Logo**: Replace the placeholder logo in `components/landing/navbar.tsx`
- **Fonts**: Change fonts in `app/layout.tsx`

## Build for Production

```bash
npm run build
npm start
```

## License

MIT
