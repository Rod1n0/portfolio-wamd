# Personal Portfolio

**Student:** Boudissa Farouk Radouane 
**Group:** SS21

## Description

A responsive, single-page personal portfolio with a dark, terminal-inspired design. It presents my background as a web developer and 4th-year systems security student (ENSTA), along with my skills, projects, education, and contact links.

- **Live site:** https://rod1n0.github.io/portfolio-wamd/

## Technologies Used

- **HTML5**: semantic structure
- **CSS3**: custom properties, Grid, Flexbox, media queries, animations
- **JavaScript (vanilla)**: DOM manipulation, `IntersectionObserver`
- **Google Fonts**: IBM Plex Sans and IBM Plex Mono

## Implemented Features

- Typing "terminal" intro (`$ whoami`) that reveals the hero section
- Sticky header with blur effect and smooth-scroll navigation
- Active nav link highlighting based on the section in view
- Fully responsive layout with a mobile hamburger menu (closes on link click or `Esc`)
- Sections: About, Skills, Projects, Education, Contact
- Project cards with links to source/demo
- Social and email contact links (GitHub, LinkedIn, Instagram, Email)
- Accessibility: skip link, ARIA attributes, visible focus states, `prefers-reduced-motion` support
- Auto-updating footer year

## Project Structure

```
├──  index.html
├──  style.css
└──  script.js
```
