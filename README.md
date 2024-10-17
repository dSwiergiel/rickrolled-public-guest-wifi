# Guest Wi-Fi Connection Rickroll Prank

Tired of guests constantly asking for your Wi-Fi password?

This web app has you covered! It mimics a typical public guest Wi-Fi connection page, but with a fun twist. When users press the “Connect” button, it secretly triggers a hidden video player that plays the classic rickroll video, using the browser’s play button API. After a few moments of laughter, the Wi-Fi details are revealed, and the password is automatically copied to their clipboard. To make it even easier, print out a QR code that links to your hosted web app, so guests can simply scan to “join the Wi-Fi.”

[Live Demo](https://rickrolled-public-guest-wifi.vercel.app)

## Key Features

- Mimics a standard guest Wi-Fi login page.
- Sinister use of the browser's play button API to bypass autoplay sound restrictions imposed by browers, ensuring the rickroll plays with sound when the user presses "Connect."
- After the rickroll, Wi-Fi details are displayed and the password is copied to the clipboard.

## Optional Hardware Component

Include a 3D-modeled and printed QR code stand labeled "Join Wi-Fi" making it easy for users to scan and access the page.

## Setup

- Update the wifi_details object with your Wi-Fi info in the app.js file
- Host the project on a web server, display the QR code stand, and let the prank begin!
