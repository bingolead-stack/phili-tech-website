# Philitech Website

Professional website for Philitech, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Modern Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- 🎨 **Brand Identity**: Custom color palette with cyan (#00D4FF) and navy (#0A1628)
- 📱 **Responsive Design**: Mobile-first approach with adaptive layouts
- ✨ **Smooth Animations**: Framer Motion for engaging user interactions
- 🔍 **SEO Optimized**: Metadata, sitemap, and robots.txt configuration
- ♿ **Accessible**: WCAG compliant with semantic HTML and ARIA labels
- 📧 **Contact Form**: Validated form with rate limiting and spam protection

## Pages

- **Home**: Hero section, services showcase, and call-to-action
- **About Us**: Company story, mission/vision/values, leadership team, and join team section
- **Contact**: Contact form and company information

## Getting Started

### Prerequisites

- Node.js 18+ 
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

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
philitech-website/
├── app/                    # Next.js App Router pages
│   ├── about/             # About Us page
│   ├── api/                # API routes
│   │   └── contact/        # Contact form API endpoint
│   ├── contact/            # Contact page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── robots.ts           # SEO robots.txt
│   └── sitemap.ts          # SEO sitemap
├── components/             # Reusable React components
│   ├── Navigation.tsx      # Main navigation
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx           # Homepage hero section
│   ├── Services.tsx       # Services showcase
│   ├── CTA.tsx            # Call-to-action section
│   ├── AboutHero.tsx      # About page hero
│   ├── Story.tsx          # Company story section
│   ├── MissionVisionValues.tsx # Mission, Vision, Values
│   ├── Leadership.tsx     # Leadership team
│   ├── Team.tsx           # Join team section
│   ├── ContactHero.tsx    # Contact page hero
│   └── ContactForm.tsx    # Contact form component
├── types/                 # TypeScript type definitions
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## Technologies

- **Next.js 14.2.0**: React framework with App Router
- **TypeScript 5.3.0**: Type safety
- **Tailwind CSS 3.4.0**: Utility-first CSS framework
- **Framer Motion 11.0.0**: Animation library
- **Lucide React 0.344.0**: Icon system

## Brand Colors

- **Primary Cyan**: #00D4FF
- **Cyan Light**: #33DDFF
- **Cyan Dark**: #00A8CC
- **Brand Navy**: #0A1628
- **Navy Light**: #162B45
- **Navy Dark**: #050B14

## API Endpoints

### POST /api/contact

Submit contact form with validation and rate limiting.

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "company": "string (optional)",
  "phone": "string (optional)",
  "message": "string (required, min 10 chars)"
}
```

**Rate Limit:** 5 requests per minute per IP

## Development

- Run linting: `npm run lint`
- Type checking: TypeScript is configured in `tsconfig.json`

## License

© 2024 Philitech. All rights reserved.
