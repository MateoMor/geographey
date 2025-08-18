# Geographey 🌍

An interactive geography quiz game built with React where players can test their knowledge of world countries by clicking on interactive maps.

## 🎮 Game Features

- **Multiple Map Regions**: Choose from World, Americas, Asia, Europe, or Africa
- **Interactive Maps**: Click on countries to guess them
- **Real-time Scoring**: Track your progress with a visual score bar and trophy system
- **Timer**: Race against time with an integrated stopwatch
- **Statistics**: View detailed game statistics including correct/wrong answers
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Trophy System**: Earn bronze (20%), silver (50%), gold (80%), or diamond (100%) trophies

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS with custom theme
- **Maps**: React Simple Maps for interactive geography visualization
- **Icons**: React Icons
- **Timer**: React Timer Hook
- **Build Tool**: Vite


## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MateoMor/geographey.git
cd geographey
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🎯 How to Play

1. **Select a Region**: Choose from World, Americas, Asia, Europe, or Africa on the home page
2. **Start Playing**: The game will display a country name and flag
3. **Click the Country**: Find and click the corresponding country on the map
4. **Track Progress**: Monitor your score, time, and statistics in the game panel
5. **Complete the Game**: Try to guess all countries in the region
6. **View Results**: See your final score and trophy achievement

### Game Controls

- **Menu Button**: Access game menu (resume, restart, main menu)
- **Hint Button**: Get helpful hints for the current country
- **Skip Button**: Skip the current country if you're stuck
- **Result Button**: View detailed results (appears when game is finished)

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── buttons/         # Game control buttons
│   ├── gameElements/    # Map chart and game UI
│   ├── gameHeader/      # Country name and flag display
│   ├── mainPage/        # Home page components
│   └── resultWindowElements/ # Score and statistics components
├── containers/          # Layout containers
├── context/            # Global state management
├── constants/          # App configuration and route data
├── data/              # GeoJSON map data and country information
└── pages/             # Main page components
```

## 🗺️ Map Data

The game uses custom GeoJSON data for different regions:

- **World**: Global map excluding Antarctica
- **Americas**: North and South American countries
- **Asia**: Asian countries and territories
- **Europe**: European countries
- **Africa**: African countries

## 🎨 Theming

The project uses a custom color scheme defined in Tailwind configuration:

- **Primary**: Orange (#F0A500)
- **Secondary**: Blue (#3F72AF)
- **Page Background**: Light Blue (#0092CA)
- **Neutral**: Light Gray (#dfdfe2)
- **Trophy Colors**: Bronze, Silver, Gold gradients

## 🏆 Scoring System

- **Bronze Trophy**: 20% or higher
- **Silver Trophy**: 50% or higher
- **Gold Trophy**: 80% or higher
- **Diamond Trophy**: 100% (perfect score)

Score is calculated based on correct answers divided by total countries in the region.

## 📱 Responsive Design

The game is fully responsive with specific optimizations for:

- **Desktop**: Full-featured experience with optimal map sizing
- **Tablet**: Adjusted layout and touch-friendly controls
- **Mobile**: Compact UI with responsive map scaling
- **Landscape/Portrait**: Automatic orientation handling

## 🔧 Configuration

### Base Path

The app is configured to run at `/geographey/` base path (configurable in `vite.config.js` and `constants/appData.js`).

## 📄 License

This project is licensed under the GNU Affero General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

**Enjoy exploring the world with Geographey!** 🌍✨