# AquaClean Pool Services - Landing Page

A modern, responsive landing page for a swimming pool cleaning service built with React and Vite.

## Features

- 🏊‍♂️ **Professional Landing Page** - Hero section, services, about, and contact sections
- 📝 **Blog System** - Full blog functionality with categorized posts and individual post pages
- 🖼️ **Image Gallery** - Filterable gallery showcasing pool cleaning work
- 📱 **Responsive Design** - Mobile-friendly design that works on all devices
- ⚡ **Fast Performance** - Built with Vite for optimal development and build performance
- 🎨 **Modern UI** - Clean, professional design with smooth animations

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: CSS3 with modern features (Grid, Flexbox, CSS Variables)
- **Development**: ES6+, JSX

## Project Structure

```
pool-cleaning-service-website/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ImageGallery.jsx
│   ├── pages/            # Page components
│   │   ├── HomePage.jsx
│   │   ├── BlogPage.jsx
│   │   └── BlogPost.jsx
│   ├── styles/           # CSS files
│   │   ├── index.css
│   │   └── App.css
│   ├── utils/            # Utility functions
│   ├── App.jsx          # Main app component
│   └── main.jsx         # App entry point
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd pool-cleaning-service-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Features Overview

### Landing Page
- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **Services Section**: Grid layout showcasing different pool services
- **About Section**: Company information and benefits
- **Gallery Section**: Visual showcase of work with filtering
- **Contact Section**: Contact form and business information

### Blog System
- **Blog Listing**: Categorized blog posts with filtering
- **Individual Posts**: Full blog post pages with rich content
- **Categories**: Filter posts by maintenance, equipment, etc.
- **Responsive Layout**: Mobile-optimized blog reading experience

### Image Gallery
- **Filterable Gallery**: Sort images by category (cleaning, service, maintenance)
- **Lightbox View**: Click to view images in full-screen lightbox
- **Responsive Grid**: Adapts to different screen sizes

## Customization

### Colors and Branding
The color scheme can be easily modified in the CSS files:
- Primary Blue: `#3498db`
- Dark Blue: `#2980b9`
- Dark Gray: `#2c3e50`
- Light Gray: `#f8f9fa`

### Content
- Update company information in the Header and Footer components
- Modify service offerings in the HomePage component
- Add/edit blog posts in the BlogPage and BlogPost components
- Replace placeholder images with actual photos

### Styling
All styles are organized in the `src/styles/` directory:
- `index.css`: Base styles and utilities
- `App.css`: Component-specific styles

## Deployment

This project can be deployed to any static hosting service:

- **Netlify**: Connect your Git repository for automatic deployments
- **Vercel**: Simple deployment with Git integration
- **GitHub Pages**: Free hosting for public repositories
- **Traditional Web Hosting**: Upload the `dist` folder contents

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact [your-email@example.com]