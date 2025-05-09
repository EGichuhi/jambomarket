# Jambo Market - Kenyan Businesses in Canada

A marketplace connecting Kenyan small business owners in Canada with customers looking for authentic products and services.

## Development

To run this project locally:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

This project is configured for GitHub Pages deployment. To deploy:

1. Create a new repository on GitHub named `kenyan-marketplace`
2. Initialize git and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/[your-username]/kenyan-marketplace.git
   git push -u origin main
   ```
3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```
4. Go to your repository settings on GitHub:
   - Navigate to "Pages"
   - Under "Build and deployment", select:
     - Source: "Deploy from a branch"
     - Branch: "gh-pages" / "/(root)"
   - Click "Save"

The site will be available at: https://[your-username].github.io/kenyan-marketplace/

## Features

- Browse Kenyan businesses and products
- Search functionality
- Shopping cart
- Business owner registration
- Responsive design