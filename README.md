# Personal Info Node.js Site

A simple Node.js web server that serves static HTML pages styled with modern CSS. This project demonstrates basic routing, custom error handling, and responsive design for a personal information site.

## Features

- Node.js HTTP server (no frameworks)
- Serves multiple HTML pages: Home, About, Contact, 404
- Modern, responsive CSS styling
- FontAwesome icons for visual enhancement
- Custom 404 error page with navigation
- Simple file-based routing

## File Structure

```
├── index.js         # Node.js server
├── index.html       # Home page
├── about.html       # About page
├── contact.html     # Contact page
├── 404.html         # Custom error page
├── styles.css       # Central stylesheet
└── README.md        # Project documentation
```

## Getting Started

1. **Install Node.js** (if not already installed)
2. **Clone this repository**
3. **Start the server:**
   ```bash
   node index.js
   ```
4. **Open your browser:**
   Visit [http://localhost:8080](http://localhost:8080)

## Customization

- Edit the HTML files to update your personal info, skills, or contact details.
- Modify `styles.css` to change the site's appearance.
- Extend `index.js` to add more routes or serve additional static assets.
