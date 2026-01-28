# Project Guidelines

## Commit Messages

- **NEVER commit automatically** - always ask the user first
- Keep messages concise and descriptive
- This is a PUBLIC repository - be mindful of what you share
- Focus on WHAT changed, not lengthy explanations
- Example: "Add bilingual support for contact button"

## Code Style

- Keep code clean and simple
- Avoid over-engineering
- This is a personal portfolio, not enterprise software

## Bilingual Support (EN/DE)

- **IMPORTANT:** This site is fully bilingual
- Any content added in English MUST be translated to German
- Both languages should have identical structure and features
- SEO/meta tags remain English-only (for international reach)
- Language auto-detection based on browser settings with ?lang parameter override
- All user-facing text goes in content.js under both `en` and `de` objects

## Content & Translation

- UI text (labels, buttons, navigation) must support EN/DE via content.js
- Timeline entries, skills, languages sections - all need both translations
- No personal data (emails, phone numbers) should ever be in plain text
- All content data lives in content.js

## Security

- All external links use rel="noopener noreferrer"
- CSP is configured in HTML meta tag
- No user input or forms on this site
- Contact via obfuscated email function

## Tech Stack

- Vanilla JavaScript (no frameworks)
- CSS-based animations with minimal JS
- Wind farm animation uses playbackRate API
- Mobile-first responsive design (breakpoint at 768px)
- Google Fonts (Outfit) for typography
- No dependencies, no npm, no bundler

## Design

- Blue color scheme (primary: #6ba3d6)
- Green accent for life events
- Dark theme only
- Smooth transitions and animations
- Print-friendly layout

## Structure

- index.html - Main HTML structure
- script.js - Application logic and rendering
- content.js - All content data (bilingual)
- styles.css - All styling
- favicon.svg - Site icon
- images/ - Company logos and life event images

## Hosting

- GitHub Pages at jameslafa.github.io
- Static site, no backend
- Push to main = automatic deployment
