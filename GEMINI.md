# Viet Tran Portfolio - Gemini Configuration

## Project Overview
This is a Next.js portfolio website for Viet Tran, an Integration Developer specializing in enterprise system integration, ERP systems, and API development.

## Tech Stack
- **Framework**: Next.js 15.3.4 (App Router)
- **Language**: TypeScript/JavaScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Image Optimization**: Next.js Image component
- **Icons**: Lucide React

## Project Structure
```
src/
├── app/
│   ├── about/
│   │   ├── cv/
│   │   │   ├── CVComponent.tsx
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── projects/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── interfaces.tsx
├── components/
│   └── Navigation.tsx
├── data/
│   └── projectsData.tsx
└── utils/
    └── slugify.tsx
```

## Key Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **CV Component**: Professional CV with PDF download functionality
- **Project Showcase**: Dynamic project pages with slug-based routing
- **Contact Information**: Professional contact page with social links
- **SEO Optimized**: Structured data and metadata optimization
- **Print Styles**: Optimized CV printing with custom CSS

## Next.js App Router Features Used
- **Server Components**: Default server-side rendering
- **Client Components**: Interactive components with 'use client' directive
- **Dynamic Routes**: Project pages with [slug] parameter
- **Image Optimization**: Next.js Image component with lazy loading
- **Font Optimization**: Custom font loading
- **Metadata API**: SEO and social media optimization

## Vercel Deployment Configuration
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

## Environment Variables
```
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=https://viettran.dev
```

## Performance Optimizations
- **Image Optimization**: Automatic WebP conversion and responsive images
- **Code Splitting**: Automatic with Next.js App Router
- **Static Generation**: Pre-rendered pages where possible
- **Font Loading**: Optimized with Next.js font system

## CV Features
- **PDF Generation**: Browser-based printing to PDF
- **Structured Data**: JSON-LD for search engines
- **Professional Layout**: Two-column design with sidebar
- **Print Optimization**: Custom CSS for print media
- **Responsive Design**: Mobile and desktop optimized

## Development Commands
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Deployment Notes
- **Platform**: Vercel (recommended for Next.js)
- **Domain**: Custom domain configuration
- **SSL**: Automatic HTTPS
- **CDN**: Global edge network
- **Analytics**: Vercel Analytics integration available

## Professional Profile
- **Name**: Viet Tran
- **Role**: Integration Developer
- **Location**: Helsinki, Finland
- **Specializations**: 
  - Microsoft Dynamics 365 Integration
  - ERP Systems (SAP, Business Central)
  - API Development (REST, SOAP)
  - Database Administration
  - .NET and C# Development
  - Python Development
  - Event Log Analysis and Bug Fixing

## Contact Information
- **Email**: viet_tran@windowslive.com
- **LinkedIn**: [Viet Tran](https://www.linkedin.com/in/viet-tran-a9a492a8/)
- **Phone**: 0451339339

## Recent Updates
- Added .NET, C#, and Python to technical skills
- Enhanced Frends task development experience
- Highlighted bug fixing and event log analysis expertise
- Updated work experience with latest achievements

## Future Enhancements
- [ ] Add dark/light theme toggle
- [ ] Implement blog functionality
- [ ] Add project filtering and search
- [ ] Integrate contact form with email service
- [ ] Add analytics and performance monitoring
- [ ] Implement internationalization (i18n)

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility
- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Screen reader compatibility
- High contrast support

## License
Private portfolio project - All rights reserved 