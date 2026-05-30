# 🏰 Swarajya Explorer

**Explore the Legacy of Swarajya — Discover, Trek, and Learn**

Swarajya Explorer is a web platform that helps users discover, learn about, and track visits to Maharashtra's historic forts through detailed history, trekking information, maps, weather updates, and interactive exploration tools.

## Features

- **Fort Explorer** — Browse and search forts by name, district, trek difficulty
- **Historical Information** — Detailed history, key events, architecture, strategic significance
- **Photo Gallery** — Fort images and scenic views
- **Interactive Map** — All forts on a Maharashtra map (Leaflet + OpenStreetMap)
- **Trek Guide** — Difficulty, duration, altitude, best season, water availability
- **Weather Updates** — Live weather data from Open-Meteo API
- **Trek Passport** — Mark visited forts, save favorites, create a wishlist
- **Swarajya Timeline** — Interactive timeline of Swarajya's expansion (1643–1674)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React, TypeScript, Tailwind CSS |
| Maps | Leaflet + OpenStreetMap |
| Backend/DB | Firebase + Firestore (ready to connect) |
| Weather | Open-Meteo API (free, no key required) |
| Build | Vite |
| Icons | Lucide React |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Firebase Setup (Optional)

1. Create a Firebase project at https://console.firebase.google.com
2. Copy `.env.example` to `.env`
3. Fill in your Firebase configuration values
4. The app works without Firebase using local storage for user data

## Project Structure

```
src/
├── components/     # Reusable UI components
├── config/         # Firebase configuration
├── context/        # React context (user state)
├── data/           # Fort data and timeline events
├── pages/          # Route pages
└── types/          # TypeScript interfaces
```

## Future Features

- Marathi + English language support
- Mobile application
- AI-based fort guide
- Nearby fort recommendations
- Trek achievements and badges

---

Built with ❤️ for Maharashtra's heritage.
