# Zane on Fire Digital 🔥

A bold, modern agency website showcasing AI-powered web development services. This is a demo site that demonstrates what Zane on Fire Digital can build for clients.

**Live Demo:** [https://zaneonfire.vercel.app](https://zaneonfire.vercel.app)

## Features

- **Modern Single-Page Design**: Bold, vibrant design with orange/red/yellow fire theme
- **8 Complete Sections**: Hero, Value Proposition, Services/Pricing, Projects, Process, Testimonials, CTA, Footer
- **AI-Powered Chatbot**: Sales-focused chatbot (Spark) with lead qualification built on Anthropic's Claude
- **Mobile Responsive**: Fully responsive design that looks great on all devices
- **Smooth Animations**: Gradient animations, hover effects, and transitions throughout
- **Conversion Optimized**: Multiple CTAs, clear value propositions, and streamlined user journey

## Tech Stack

- **Framework**: Next.js 15.5+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **AI**: Anthropic Claude 3 Haiku (via API)
- **Deployment**: Optimized for Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- An Anthropic API key ([get one here](https://console.anthropic.com/))

### Installation

1. **Clone or navigate to the project**:
   ```bash
   cd zaneonfire
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env
   ```

   Then edit `.env` and add your Anthropic API key:
   ```
   ANTHROPIC_API_KEY=your_actual_api_key_here
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
zaneonfire/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # Chatbot API endpoint with Anthropic integration
│   ├── components/
│   │   └── Chatbot.tsx            # AI chatbot component
│   ├── globals.css                # Global styles and Tailwind imports
│   ├── layout.tsx                 # Root layout with metadata
│   └── page.tsx                   # Main landing page with all sections
├── .env.example                   # Environment variables template
├── .gitignore                     # Git ignore rules
├── next.config.js                 # Next.js configuration
├── package.json                   # Dependencies and scripts
├── README.md                      # This file
└── tsconfig.json                  # TypeScript configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub** (if you haven't already)

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository

3. **Add Environment Variables**:
   - In Vercel project settings, add `ANTHROPIC_API_KEY`

4. **Deploy**:
   - Vercel will automatically build and deploy
   - Your site will be live at `your-project.vercel.app`

### Custom Domain Setup

1. In Vercel project settings, go to "Domains"
2. Add `zaneonfire.com` (or your domain)
3. Follow DNS configuration instructions

## Chatbot Features

The AI chatbot (Spark) is designed for lead qualification and includes:

- **Proactive greeting** with value proposition
- **Lead qualification** questions (budget, timeline, needs)
- **Package recommendations** based on requirements
- **Contact capture** (name, email, phone)
- **Discovery call booking** assistance
- **Objection handling** strategies

### Customizing the Chatbot

Edit the system prompt in `app/api/chat/route.ts` to customize:
- Personality and tone
- Services and pricing
- Qualification questions
- Response strategies

## Design Features

- **Fire Theme**: Orange/red gradient color scheme
- **Gradient Animations**: Animated background gradients
- **Glow Effects**: Subtle glow on CTAs for emphasis
- **Smooth Scrolling**: Anchor links with smooth scroll behavior
- **Hover Animations**: Scale and color transitions on interactive elements
- **Mobile First**: Responsive breakpoints using Tailwind

## Customization Guide

### Change Colors

Edit CSS variables in `app/globals.css`:
```css
:root {
  --flame-orange: #ff6b35;
  --flame-red: #f7931e;
  --flame-yellow: #fdc500;
}
```

### Update Content

- **Hero section**: Edit `app/page.tsx` starting at line ~20
- **Services/Pricing**: Update packages starting at line ~150
- **Projects**: Modify showcase items starting at line ~280

### Modify Chatbot Personality

Edit the `SYSTEM_PROMPT` in `app/api/chat/route.ts` to change:
- Tone and personality
- Qualification strategy
- Pricing information
- Sales approach

## Performance

- **Lighthouse Score**: 95+ (run `npm run build` and test)
- **Core Web Vitals**: Optimized for performance
- **SEO**: Metadata configured in `app/layout.tsx`

## Support

For questions or issues:
- Visit [zanepriddle.com](https://zanepriddle.com)
- Open an issue on GitHub
- Contact through the chatbot on the live site

## License

MIT License - feel free to use this as a template for your own projects!

---

**Built with 🔥 by Zane on Fire Digital**

Demonstrating what modern web development with AI automation can do for your business.
