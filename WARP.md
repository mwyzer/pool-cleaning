# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

AquaClean Pool Services is a modern, responsive React-based landing page for a swimming pool cleaning service. The application features a main landing page, blog system with categorized posts, an image gallery with filtering capabilities, and integrated Google Maps for office location. Built with React 18, Vite, and React Router DOM for optimal performance and modern development experience.

## Development Commands

### Daily Development
```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint

# Auto-fix linting issues
npm run lint:fix
```

### Package Management
```bash
# Install dependencies
npm install

# Add new dependency
npm install <package-name>

# Add development dependency
npm install -D <package-name>
```

## Architecture & Code Structure

### Application Architecture
- **Single Page Application (SPA)** using React Router DOM
- **Component-based architecture** with reusable components
- **Static data approach** - blog posts and gallery images are stored as JavaScript objects in components
- **No backend dependencies** - fully client-side application suitable for static hosting

### Key Architectural Patterns

#### Routing Structure
```
/ - HomePage (Hero, Services, About, Gallery, Contact sections)
/blog - BlogPage (filterable blog post listing)
/blog/:slug - BlogPost (individual blog post pages)
```

#### Component Hierarchy
```
App.jsx (Main router + layout)
├── Header.jsx (Navigation)
├── Footer.jsx (Site footer)
├── HomePage.jsx (Landing page with multiple sections)
│   ├── ImageGallery.jsx (Filterable photo gallery with lightbox)
│   └── GoogleMap.jsx (Embedded map with office location)
├── BlogPage.jsx (Blog listing with category filtering)
└── BlogPost.jsx (Individual blog post display)
```

#### Data Management
- **Static Data Pattern**: Blog posts and gallery images are defined as JavaScript arrays within components
- **Component State**: Uses React hooks (useState) for UI state like filters and lightbox modals
- **No External API**: All content is embedded in the application code

### Key Components

#### ImageGallery.jsx
- **Reusable component** used both on HomePage and as standalone gallery
- **Props**: `showTitle` (boolean), `maxImages` (number) for flexible display
- **Features**: Category filtering, lightbox modal, keyboard accessibility
- **Data structure**: Images stored as objects with id, src, alt, title, and category

#### BlogPage.jsx
- **Category filtering system** with predefined categories
- **Static blog data** with slug-based routing
- **Post structure**: Each post has id, slug, title, excerpt, author, date, image, and category

#### GoogleMap.jsx
- **Embedded Google Maps** integration for office location display
- **Props**: `address` (string), `businessName` (string), `zoom` (number), `className` (string)
- **Features**: Interactive map, "Get Directions" button, hover overlay with business info
- **Fallback**: Displays address text and "View on Google Maps" link if map fails to load

### Styling Architecture
- **CSS-only styling** (no CSS frameworks)
- **Component-scoped CSS** organized in `/src/styles/`
- **Modern CSS features**: Grid, Flexbox, CSS Custom Properties
- **Responsive design patterns** throughout

## Development Guidelines

### Adding New Content

#### Blog Posts
1. Add new post objects to `samplePosts` array in `src/pages/BlogPage.jsx`
2. Create corresponding individual post content in `src/pages/BlogPost.jsx`
3. Ensure slug matches the route parameter
4. Update categories array if adding new categories

#### Gallery Images
1. Add image objects to `sampleImages` array in `src/components/ImageGallery.jsx`
2. Include proper alt text for accessibility
3. Assign appropriate category for filtering
4. Replace placeholder emojis with actual image URLs when available

#### Services
1. Update service cards in the services section of `src/pages/HomePage.jsx`
2. Modify the contact form service dropdown options accordingly
3. Update any related blog content or gallery categories

#### Office Location (Google Maps)
1. Update the `address` prop in the GoogleMap component in `src/pages/HomePage.jsx` (currently set to Indonesian address)
2. Modify the `businessName` prop if company name changes
3. Adjust `zoom` level (higher = more zoomed in) as needed - currently set to 17 for detailed view
4. For production: Replace demo map URL with actual Google Maps Embed API key

### Component Development Patterns

#### State Management
- Use `useState` for local component state
- Pass data down via props for parent-child communication
- Implement controlled components for forms and filters

#### Event Handling
- Use standard React event handlers
- Implement keyboard accessibility (onKeyDown) for interactive elements
- Include proper ARIA attributes and roles

### File Organization
- Place reusable components in `/src/components/`
- Place page-level components in `/src/pages/`
- Keep all CSS in `/src/styles/` directory
- Use descriptive, kebab-case file names

## Deployment Notes

### Build Output
- Production builds output to `dist/` directory
- Assets are placed in `dist/assets/` subdirectory
- All files are optimized and minified by Vite

### Static Hosting Compatible
This application is designed for static hosting services:
- Netlify
- Vercel  
- GitHub Pages
- Traditional web hosting

### Environment Configuration
- Development server runs on port 3000
- No environment variables currently used
- No backend API dependencies

### Google Maps API Setup
**For Development:** The current implementation uses a demo map that works without an API key.

**For Production:** 
1. Get a Google Maps JavaScript API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Enable the "Maps Embed API" for your project
3. Replace the `demoMapUrl` in `src/components/GoogleMap.jsx` with the proper embed URL using your API key
4. Update the `mapUrl` variable to use: `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodedAddress}&zoom=${zoom}`

## Known Limitations

### Content Management
- All content is hardcoded in JavaScript files
- No CMS or database integration
- Content updates require code changes and redeployment

### Images
- Currently uses emoji placeholders instead of actual images
- Real implementation would require actual image assets
- No image optimization pipeline currently implemented

### Contact Form
- Form submission not implemented (no backend)
- Would require backend service or third-party form handler for production use