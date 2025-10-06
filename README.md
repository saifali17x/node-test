# Personal Info Express Website

A modern, responsive website built with Express.js that serves static HTML pages with elegant CSS styling. This project demonstrates routing, static file serving, custom error handling, and responsive design patterns for a personal information site.

## Features

- Express.js web server for efficient routing
- Static file serving (HTML, CSS, images)
- Multiple responsive pages: Home, About, Contact
- Custom 404 error page with helpful navigation
- Modern CSS with variables, animations, and card components
- Mobile-friendly responsive design
- FontAwesome icons integration
- Clean, well-structured codebase

## File Structure

```
├── index.js         # Express.js server
├── index.html       # Home page
├── about.html       # About page
├── contact.html     # Contact page
├── 404.html         # Custom error page
├── styles.css       # Central stylesheet with modern components
├── package.json     # Project dependencies
└── README.md        # Project documentation
```

## Getting Started

1. **Install Node.js** (if not already installed)
2. **Clone this repository**
3. **Install dependencies:**
   ```bash
   npm install express
   ```
4. **Start the server:**
   ```bash
   node index.js
   ```
5. **Open your browser:**
   Visit [http://localhost:8080](http://localhost:8080)

## Page Structure

- **Home (index.html)**: Landing page with welcome message and card grid layout
- **About (about.html)**: Personal information, skills, and experience showcase
- **Contact (contact.html)**: Contact form and alternative contact methods
- **404 (404.html)**: Custom error page with navigation assistance

## CSS Features

- CSS variables for consistent theming
- Responsive flexbox and grid layouts
- Animated components and transitions
- Card component system
- Form styling with validation states
- Mobile-first responsive design

## Customization

- Edit the HTML files to update your personal info, skills, or contact details
- Modify `styles.css` to change the site's appearance:
  - Update CSS variables in the `:root` selector to change colors
  - Adjust card and component styles to match your design preferences
- Extend `index.js` to add more routes or additional functionality
- Add JavaScript for form validation or interactive elements

## Development

### Prerequisites

- Node.js (v14.x or higher recommended)
- npm (v6.x or higher)

### Adding New Pages

1. Create a new HTML file in the root directory
2. Add proper HTML structure with header, navigation, and footer
3. Link to the stylesheet: `<link rel="stylesheet" href="styles.css" />`
4. Add FontAwesome if needed: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />`
5. Optionally add a specific route in index.js

### Enhancing Styles

The CSS is organized into sections for easier management:

- Variables at the top for consistent theming
- General styles for common elements
- Component-specific styles (cards, forms, buttons)
- Page-specific styles at the end

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Express Server Details

The Express.js server provides:

- Static file serving for all files in the project directory
- Specific routes for main pages for cleaner URL handling
- Custom 404 error page handling for missing resources
- Console feedback when server starts

## License

MIT
