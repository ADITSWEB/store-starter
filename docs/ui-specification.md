# Product Vision

Store Starter is a lightweight
catalogue website for small
businesses.

Customers browse products and
order through WhatsApp.

The emphasis is simplicity,
performance and ease of maintenance.

# Design Principles

- Mobile First
- Images First
- Catalogue
- Fast
- Simple
- Progressive Enhancement
- Static Hosting
- Accessible

# Information Architecture
Home

│
├── Featured
├── Categories
├── Contact
│
▼

Products

│

▼

Product Details

## Technology

- Astro
- Tailwind CSS
- Alpine.js (only where interaction is needed)
- GitHub Pages
- Google Apps Script REST API

## Design Constraints

- Every page must be usable on a 360px wide screen.
- Every primary action should be reachable within two taps.
- Product images should occupy more visual space than text.
- Components should not require JavaScript unless necessary.
- Avoid horizontal scrolling.
- Pages should remain functional if images fail to load.

# Non Goals (Version 1)

The following are intentionally excluded.

- Shopping Cart
- Online Payment
- User Login
- User Registration
- Product Reviews
- Wishlist
- Inventory Management
- Order Tracking
- Multi-language
- Multi-currency