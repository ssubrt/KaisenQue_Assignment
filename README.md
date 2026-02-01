# Pixel Perfect Pixels - Legal Services Website

A modern, responsive legal services website built with React, TypeScript, and Tailwind CSS.

## Project Overview

This is the Connect2Attorney legal services platform, providing information about various legal practice areas including cancer lawsuits, hernia mesh lawsuits, IVC filter lawsuits, and paraquat exposure cases.

## Tech Stack

- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn-ui (customized)
- **Icons**: Lucide React
- **State Management**: TanStack Query

## Available Scripts

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test
```

## Project Structure

```
src/
├── assets/          # Static assets (images, icons)
├── components/
│   ├── ui/          # Reusable UI components (shadcn-ui)
│   │   ├── accordion.tsx
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── toast.tsx
│   │   ├── toaster.tsx
│   │   ├── tooltip.tsx
│   │   └── use-toast.ts
│   ├── ContactForm.tsx
│   ├── CTABanner.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── LegalSolutions.tsx
│   ├── Marquee.tsx
│   ├── NavLink.tsx
│   ├── OurMission.tsx
│   ├── OurProcess.tsx
│   └── Resources.tsx
├── lib/
│   └── utils.ts     # Utility functions
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## UI Components Cleanup

This project has been optimized by removing 38 unused shadcn-ui components. Only the following actively used components remain in `src/components/ui/`:

- **accordion.tsx** - FAQ section
- **button.tsx** - Used throughout the site
- **input.tsx** - Contact form
- **textarea.tsx** - Contact form
- **toast.tsx** - Toast notifications
- **toaster.tsx** - Toast notification container
- **tooltip.tsx** - Tooltips
- **use-toast.ts** - Toast hook for notifications
- **sonner.tsx** - Alternative toast notifications

## Features

- Responsive design for all screen sizes
- Accessible UI components
- SEO-friendly structure
- Fast page loads with Vite
- Interactive FAQ section
- Contact form with validation
- Multiple legal practice area pages
- Process flow visualization

## Getting Started

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Open http://localhost:5173 in your browser

## License

Proprietary - Connect2Attorney

