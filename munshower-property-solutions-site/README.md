# Munshower Property Solutions Website

A modern, responsive single-page dark-mode website for Munshower Property Solutions.

## Included
- Black / warm-gold / white brand system based on the supplied logo
- "BUILT TO LAST." hero
- Services section
- Responsive project carousel
- Lead capture / quote form
- Phone and email contact links
- Calendly booking button
- Mobile navigation
- No server required for the basic version

## Important: Calendly
Open `script.js` and set:

`const CALENDLY_URL = "YOUR_ACTUAL_CALENDLY_LINK";`

I intentionally did not invent a Calendly URL because the actual booking link was not supplied.

## Project photos
The carousel currently contains polished placeholders. Add project photos to `assets/projects/` and replace the placeholder blocks in `index.html` with image elements, or send me the project photos and I can wire them in for you.

## Lead form
The form opens the visitor's email app with a pre-filled message addressed to:

munshowerpropertysolutions@gmail.com

For true database-backed lead capture, connect the form to a service such as Formspree, Basin, Netlify Forms, or your own backend.
