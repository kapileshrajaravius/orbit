# Orbit

Orbit is a custom page that displays NASA's Astronomy Picture of the Day (APOD), accompanied by a live clock and time-based greeting. The interface is styled with a dark, space-inspired design.

## Overview

This project retrieves daily astronomical imagery and accompanying descriptions from NASA's public APOD API and presents them alongside a real-time clock. The application is built using vanilla JavaScript and deployed via GitHub Actions to GitHub Pages.

## Features

- Retrieves data from NASA's APOD API (the previous day's entry is used to avoid delays associated with the current day's entry not yet being published)
- Displays a live clock with a greeting that adjusts according to the time of day
- Custom visual design featuring a dark purple and black color palette, with decorative zigzag elements implemented using CSS `clip-path`
- Typography sourced from Google Fonts: Orbitron for headings and Space Mono for body text
- Supports both image and video media types returned by the API
- Continuous deployment configured through GitHub Actions

## Technology Stack

- HTML, CSS, and JavaScript (Vanilla)
- Vite (build tool and development server)
- NASA APOD API
- GitHub Actions (continuous integration and deployment)
- GitHub Pages (hosting)

## Local Development

1. Clone the repository: