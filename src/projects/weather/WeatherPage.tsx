import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Cloud, 
  Sun, 
  CloudRain, 
  CloudSnow, 
  Wind, 
  Droplets, 
  Eye, 
  Thermometer,
  MapPin,
  Search
} from 'lucide-react';

interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  feelsLike: number;
  uvIndex: number;
  pressure: number;
}

interface ForecastDay {
  day: string;
  high: number;
  low: number;
  condition: string;
  precipitation: number;
}

const WeatherPage = () => {
  const [searchCity, setSearchCity] = useState('');
  const [currentWeather, setCurrentWeather] = useState<WeatherData>({
    city: 'New York',
    country: 'USA',
    temperature: 22,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    visibility: 10,
    feelsLike: 25,
    uvIndex: 6,
    pressure: 1013
  });

  const [forecast, setForecast] = useState<ForecastDay[]>([
    { day: 'Today', high: 24, low: 18, condition: 'Partly Cloudy', precipitation: 20 },
    { day: 'Tomorrow', high: 26, low: 19, condition: 'Sunny', precipitation: 0 },
    { day: 'Wednesday', high: 23, low: 16, condition: 'Rainy', precipitation: 80 },
    { day: 'Thursday', high: 21, low: 14, condition: 'Cloudy', precipitation: 40 },
    { day: 'Friday', high: 25, low: 17, condition: 'Sunny', precipitation: 10 }
  ]);

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <Sun className="h-8 w-8 text-yellow-500" />;
      case 'partly cloudy':
        return <Cloud className="h-8 w-8 text-gray-500" />;
      case 'rainy':
        return <CloudRain className="h-8 w-8 text-blue-500" />;
      case 'cloudy':
        return <Cloud className="h-8 w-8 text-gray-600" />;
      case 'snowy':
        return <CloudSnow className="h-8 w-8 text-blue-200" />;
      default:
        return <Sun className="h-8 w-8 text-yellow-500" />;
    }
  };

  const handleSearch = () => {
    if (searchCity.trim()) {
      // Simulate API call with comprehensive city database
      const cityDatabase: Record<string, { country: string, temp: number, condition: string }> = {
        // Major cities worldwide
        'london': { country: 'UK', temp: 15, condition: 'Rainy' },
        'tokyo': { country: 'Japan', temp: 28, condition: 'Sunny' },
        'paris': { country: 'France', temp: 20, condition: 'Cloudy' },
        'sydney': { country: 'Australia', temp: 25, condition: 'Partly Cloudy' },
        'new york': { country: 'USA', temp: 22, condition: 'Partly Cloudy' },
        'mumbai': { country: 'India', temp: 32, condition: 'Sunny' },
        'delhi': { country: 'India', temp: 30, condition: 'Sunny' },
        'bangalore': { country: 'India', temp: 26, condition: 'Cloudy' },
        'hyderabad': { country: 'India', temp: 29, condition: 'Partly Cloudy' },
        'chennai': { country: 'India', temp: 33, condition: 'Sunny' },
        'kolkata': { country: 'India', temp: 31, condition: 'Cloudy' },
        'pune': { country: 'India', temp: 27, condition: 'Partly Cloudy' },
        'ahmedabad': { country: 'India', temp: 34, condition: 'Sunny' },
        'jaipur': { country: 'India', temp: 28, condition: 'Sunny' },
        'surat': { country: 'India', temp: 32, condition: 'Partly Cloudy' },
        'beijing': { country: 'China', temp: 18, condition: 'Cloudy' },
        'shanghai': { country: 'China', temp: 23, condition: 'Partly Cloudy' },
        'los angeles': { country: 'USA', temp: 24, condition: 'Sunny' },
        'chicago': { country: 'USA', temp: 16, condition: 'Cloudy' },
        'houston': { country: 'USA', temp: 26, condition: 'Partly Cloudy' },
        'miami': { country: 'USA', temp: 28, condition: 'Sunny' },
        'toronto': { country: 'Canada', temp: 14, condition: 'Rainy' },
        'vancouver': { country: 'Canada', temp: 17, condition: 'Cloudy' },
        'berlin': { country: 'Germany', temp: 13, condition: 'Cloudy' },
        'madrid': { country: 'Spain', temp: 21, condition: 'Sunny' },
        'rome': { country: 'Italy', temp: 19, condition: 'Partly Cloudy' },
        'amsterdam': { country: 'Netherlands', temp: 12, condition: 'Rainy' },
        'moscow': { country: 'Russia', temp: 8, condition: 'Cloudy' },
        'dubai': { country: 'UAE', temp: 38, condition: 'Sunny' },
        'singapore': { country: 'Singapore', temp: 30, condition: 'Partly Cloudy' },
        'hong kong': { country: 'Hong Kong', temp: 25, condition: 'Cloudy' },
        'seoul': { country: 'South Korea', temp: 20, condition: 'Partly Cloudy' },
        'bangkok': { country: 'Thailand', temp: 34, condition: 'Sunny' },
        'kuala lumpur': { country: 'Malaysia', temp: 31, condition: 'Rainy' },
        'jakarta': { country: 'Indonesia', temp: 29, condition: 'Rainy' },
        'manila': { country: 'Philippines', temp: 32, condition: 'Partly Cloudy' },
        'cairo': { country: 'Egypt', temp: 27, condition: 'Sunny' },
        'cape town': { country: 'South Africa', temp: 18, condition: 'Partly Cloudy' },
        'lagos': { country: 'Nigeria', temp: 31, condition: 'Rainy' },
        'nairobi': { country: 'Kenya', temp: 22, condition: 'Partly Cloudy' },
        'rio de janeiro': { country: 'Brazil', temp: 26, condition: 'Sunny' },
        'sao paulo': { country: 'Brazil', temp: 21, condition: 'Cloudy' },
        'buenos aires': { country: 'Argentina', temp: 17, condition: 'Partly Cloudy' },
        'mexico city': { country: 'Mexico', temp: 19, condition: 'Cloudy' },
        'istanbul': { country: 'Turkey', temp: 16, condition: 'Rainy' },
        'athens': { country: 'Greece', temp: 23, condition: 'Sunny' },
        'vienna': { country: 'Austria', temp: 14, condition: 'Cloudy' },
        'zurich': { country: 'Switzerland', temp: 11, condition: 'Rainy' },
        'stockholm': { country: 'Sweden', temp: 9, condition: 'Cloudy' },
        'oslo': { country: 'Norway', temp: 7, condition: 'Rainy' },
        'copenhagen': { country: 'Denmark', temp: 10, condition: 'Cloudy' },
        'helsinki': { country: 'Finland', temp: 6, condition: 'Cloudy' }
      };
      
      const searchKey = searchCity.trim().toLowerCase();
      const cityData = cityDatabase[searchKey];
      
      if (cityData) {
        // Found the city in our database
        setCurrentWeather({
          city: searchCity.trim().split(' ').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          ).join(' '),
          country: cityData.country,
          temperature: cityData.temp,
          condition: cityData.condition,
          humidity: Math.floor(Math.random() * 40) + 40,
          windSpeed: Math.floor(Math.random() * 20) + 5,
          visibility: Math.floor(Math.random() * 5) + 8,
          feelsLike: cityData.temp + Math.floor(Math.random() * 6) - 3,
          uvIndex: Math.floor(Math.random() * 10) + 1,
          pressure: Math.floor(Math.random() * 50) + 1000
        });
        
        // Update forecast for the searched city
        const conditions = ['Sunny', 'Partly Cloudy', 'Cloudy', 'Rainy'];
        const newForecast = [
          { day: 'Today', high: cityData.temp + 2, low: cityData.temp - 4, condition: cityData.condition, precipitation: Math.floor(Math.random() * 30) },
          { day: 'Tomorrow', high: cityData.temp + 3, low: cityData.temp - 3, condition: conditions[Math.floor(Math.random() * conditions.length)], precipitation: Math.floor(Math.random() * 40) },
          { day: 'Wednesday', high: cityData.temp + 1, low: cityData.temp - 5, condition: conditions[Math.floor(Math.random() * conditions.length)], precipitation: Math.floor(Math.random() * 60) },
          { day: 'Thursday', high: cityData.temp - 1, low: cityData.temp - 6, condition: conditions[Math.floor(Math.random() * conditions.length)], precipitation: Math.floor(Math.random() * 50) },
          { day: 'Friday', high: cityData.temp + 2, low: cityData.temp - 4, condition: conditions[Math.floor(Math.random() * conditions.length)], precipitation: Math.floor(Math.random() * 30) }
        ];
        setForecast(newForecast);
      } else {
        // City not found in database
        alert(`City "${searchCity}" not found. Try searching for major cities like New York, London, Tokyo, Mumbai, Delhi, etc.`);
        return;
      }
      
      setSearchCity('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border/40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Weather App
              </h1>
              <p className="text-muted-foreground mt-2">
                Get accurate weather forecasts for any location
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Input
                placeholder="Search city..."
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="w-64"
              />
              <Button onClick={handleSearch} className="bg-gradient-primary">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Weather */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border/20 mb-8">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h2 className="text-2xl font-bold">
                        {currentWeather.city}, {currentWeather.country}
                      </h2>
                    </div>
                    <p className="text-muted-foreground">
                      {new Date().toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                  <div className="text-center">
                    {getWeatherIcon(currentWeather.condition)}
                    <p className="text-sm text-muted-foreground mt-2">
                      {currentWeather.condition}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      {currentWeather.temperature}°
                    </div>
                    <p className="text-muted-foreground text-lg">
                      Feels like {currentWeather.feelsLike}°
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weather Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Card className="bg-gradient-card border-border/20">
                <CardContent className="p-4 text-center">
                  <Wind className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Wind Speed</p>
                  <p className="text-lg font-semibold">{currentWeather.windSpeed} km/h</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-border/20">
                <CardContent className="p-4 text-center">
                  <Droplets className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Humidity</p>
                  <p className="text-lg font-semibold">{currentWeather.humidity}%</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-border/20">
                <CardContent className="p-4 text-center">
                  <Eye className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Visibility</p>
                  <p className="text-lg font-semibold">{currentWeather.visibility} km</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-border/20">
                <CardContent className="p-4 text-center">
                  <Thermometer className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Pressure</p>
                  <p className="text-lg font-semibold">{currentWeather.pressure} hPa</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 5-Day Forecast */}
          <div>
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle>5-Day Forecast</CardTitle>
                <CardDescription>Weather outlook for the next 5 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {forecast.map((day, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                      <div className="flex items-center space-x-3">
                        {getWeatherIcon(day.condition)}
                        <div>
                          <p className="font-medium">{day.day}</p>
                          <p className="text-sm text-muted-foreground">{day.condition}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold">{day.high}°</span>
                          <span className="text-muted-foreground">{day.low}°</span>
                        </div>
                        <div className="flex items-center space-x-1 mt-1">
                          <Droplets className="h-3 w-3 text-blue-500" />
                          <span className="text-xs text-muted-foreground">{day.precipitation}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="bg-gradient-card border-border/20 mt-6">
              <CardHeader>
                <CardTitle>Today's Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">UV Index</span>
                    <Badge variant={currentWeather.uvIndex > 7 ? 'destructive' : currentWeather.uvIndex > 4 ? 'secondary' : 'default'}>
                      {currentWeather.uvIndex} {currentWeather.uvIndex > 7 ? 'High' : currentWeather.uvIndex > 4 ? 'Moderate' : 'Low'}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Air Quality</span>
                    <Badge variant="default">Good</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Sunrise</span>
                    <span className="text-sm">6:45 AM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Sunset</span>
                    <span className="text-sm">7:32 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;