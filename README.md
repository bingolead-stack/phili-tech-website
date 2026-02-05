# Infralyft LLC Website

Professional website for Infralyft LLC, built with Next.js, TypeScript, and Tailwind CSS.

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
infralyft-website/
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

Submit contact form with validation and rate limiting. Form submissions are automatically sent to a configured Telegram bot.

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

## Telegram Bot Setup

The contact form sends notifications to a Telegram bot. To set this up:

1. **Create a Telegram Bot:**
   - Open Telegram and search for [@BotFather](https://t.me/botfather)
   - Send `/newbot` and follow the instructions
   - Copy the bot token you receive

2. **Get Your Chat ID:**
   - Start a conversation with your bot
   - Send any message to your bot
   - Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
   - Find the `"chat":{"id":` value in the response - this is your chat ID

3. **Configure Environment Variables:**
   - Copy `.env.example` to `.env.local`
   - Add your bot token and chat ID:
     ```
     TELEGRAM_BOT_TOKEN=your_bot_token_here
     TELEGRAM_CHAT_ID=your_chat_id_here
     ```

4. **Restart your development server** for changes to take effect

**Note:** The contact form will still work without Telegram configuration, but notifications won't be sent. Check your server logs for any configuration errors.

## Development

- Run linting: `npm run lint`
- Type checking: TypeScript is configured in `tsconfig.json`

## License

© 2024 Infralyft LLC. All rights reserved.

## Logo Setup

Add your company logo as `logo.png` in the `public/` directory. See `public/README.md` for details.
