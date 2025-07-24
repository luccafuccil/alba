# Alba - The Tea Closet Web App

> A modern, in-development React web application designed to catalogue and manage your personal tea collection with an elegant, fluid interface and interactive floating cards.

**Alba** was developed as a final project for a Front-end Development Specialization program, showcasing advanced React patterns, responsive design, and modern web development practices, and is now being expanded.

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-6.x-CA4245?style=flat-square&logo=react-router)](https://reactrouter.com/)

---

## Features

**Tea Collection Management**
- Add, edit, and delete teas from your personal collection
- Rich tea profiles with type, brewing time, tasting notes, and descriptions
- Favorite teas system and advanced filtering by tea type

**Modern UI/UX**
- Fluid, colorful design with gradient backgrounds and smooth animations
- Interactive floating cards with tilt effects on desktop
- Responsive design optimized for both desktop and mobile

**Weather Integration**
- Real-time weather data using Open-Meteo API
- Smart tea suggestions based on current weather conditions (to be implemented)
- Location detection via browser geolocation (desktop only)

**Profile System**
- Profile page with dynamic routing (static for now, with no authentication yet)
- Tea level progression (Beginner → Connoisseur → Master)
- Collection overview with quick access to recent teas

---

## Quick Start

### Prerequisites
- Node.js 16.x or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/alba-web.git

# Navigate to project directory
cd alba-web

# Install dependencies
npm install

# Start development server
npm run dev

```
The application will be available at http://localhost:5173

---

## Project Structure

```
alba-web/
├── public/
│   ├── profile.json          # Static profile data
│   └── [tea-images]          # Tea type illustrations
├── src/
│   ├── components/           # Reusable UI components
│   ├── pages/               # Main page components
│   ├── routes/              # Route configuration
│   ├── context/             # React Context providers
│   ├── utils/               # Utility functions and hooks
│   ├── constants/           # Application constants
│   └── styles/              # CSS modules and styling
└── package.json
```
---

## Usage

### Managing your collection
- Navigate to the Closet page
- Click "Add new" card (desktop) or "+" button (mobile)
= Fill in tea details: name, type, brewing time, description, tasting notes
= Filter teas using type buttons or mark favorites with heart icons

---

## API Integration

### Weather Data
- Provider: [Open-Meteo](https://open-meteo.com/)
- Features: Current weather conditions and temperature

### Geolocation
- Provider: [Nominatim OpenStreetMap](https://nominatim.org/)
- Features: Reverse geocoding for location names
- Desktop only due to HTTPS requirements

---

## Technical Highlights

### Architecture
- Component-based architecture with reusable modules
- React Context API for global state management
- Local storage persistence for offline data retention
- Modern React patterns with hooks and functional components

### Performance
- Component memoization for expensive calculations
- Lazy loading of profile data
- Optimized re-renders using React hooks best practices

---

## What's next?

### Auth and Profiles
- Google Auth for customized profiles with profile picture and settings of your choosing
- Personalized algorithm suggesting teas based on weather, time of day and personal taste
- Tea Rituals for creating new daily meditations with tea
- Level progression through app use

### Shop Page
- Digital store integration for buying new teas
- Personalized suggestions

### Saved Programs
- Ready-made and custom meditation rituals combining tea brewing times, music and timer with visuals and sounds
- Save your favorites and sort by type

### Settings
- Personalize appearances and timer settings

---

Built as a Frontend Specialization final project for PUC-Rio
