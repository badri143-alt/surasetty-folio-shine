# Weather App

A beautiful and responsive weather application built with React, TypeScript, and Tailwind CSS.

## Features

- **City Search**: Search for weather in major cities worldwide (50+ cities supported)
- **Current Weather**: Display current temperature, conditions, and location
- **5-Day Forecast**: Extended weather outlook with precipitation chances
- **Weather Details**: Wind speed, humidity, visibility, and pressure
- **Today's Highlights**: UV index, air quality, sunrise/sunset times
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Beautiful UI**: Modern glassmorphism design with weather-appropriate icons

## Supported Cities

### India
Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, Jaipur, Surat

### International
New York, London, Tokyo, Paris, Sydney, Los Angeles, Chicago, Houston, Miami, Toronto, Vancouver, Berlin, Madrid, Rome, Amsterdam, Moscow, Dubai, Singapore, Hong Kong, Seoul, Bangkok, and many more!

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Custom gradients
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React (weather-specific icons)
- **State Management**: React Hooks

## Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd weather-app

# Install dependencies
npm install

# Start development server
npm run dev
```

## Usage

1. **Search Cities**: Enter a city name in the search bar
2. **View Weather**: See current conditions, temperature, and details
3. **Check Forecast**: View 5-day weather outlook
4. **Monitor Highlights**: Check UV index, air quality, and more

## Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
├── projects/
│   └── weather/
│       ├── WeatherPage.tsx      # Main weather component
│       └── README.md            # This file
└── hooks/                  # Custom React hooks
```

## Key Features

### Weather Icons
Dynamic icons based on weather conditions:
- ☀️ Sunny
- ⛅ Partly Cloudy
- ☁️ Cloudy
- 🌧️ Rainy
- ❄️ Snowy

### Smart Search
Intelligent city search with:
- Case-insensitive matching
- Support for major global cities
- Error handling for invalid cities
- Instant results

### Comprehensive Data
Each weather query provides:
- Current temperature and "feels like"
- Weather conditions and descriptions
- Wind speed and direction
- Humidity percentage
- Visibility distance
- Atmospheric pressure
- UV index with safety levels

## API Integration

Currently uses mock data with a comprehensive city database. To integrate with real weather APIs:

1. **OpenWeatherMap API**:
   ```javascript
   const API_KEY = 'your-api-key';
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
   ```

2. **WeatherAPI**:
   ```javascript
   const API_KEY = 'your-api-key';
   const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
   ```

## Customization

### Adding New Cities
Update the `cityDatabase` object in `WeatherPage.tsx`:
```typescript
const cityDatabase: Record<string, { country: string, temp: number, condition: string }> = {
  'new-city': { country: 'Country', temp: 25, condition: 'Sunny' },
  // ... other cities
};
```

### Styling
Modify Tailwind classes or add custom CSS for different themes and color schemes.

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/weather-feature`)
3. Commit changes (`git commit -am 'Add weather feature'`)\\n4. Push to branch (`git push origin feature/weather-feature`)
5. Create Pull Request

## License

MIT License - see LICENSE file for details

## Future Enhancements

- [ ] Real weather API integration
- [ ] Location-based weather detection
- [ ] Weather alerts and notifications
- [ ] Historical weather data
- [ ] Weather maps integration
- [ ] Multiple location tracking
- [ ] Weather widgets
