import { useState, useEffect } from 'react';
import { Cloud, Thermometer, Wind, Droplets } from 'lucide-react';
import { WeatherData } from '../types';

interface WeatherWidgetProps {
  latitude: number;
  longitude: number;
  fortName: string;
}

export default function WeatherWidget({ latitude, longitude, fortName }: WeatherWidgetProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        setLoading(true);
        // Using Open-Meteo API (free, no API key required)
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
        );
        if (!response.ok) throw new Error('Weather data unavailable');
        const data = await response.json();

        const weatherCode = data.current.weather_code;
        let description = 'Clear';
        if (weatherCode >= 1 && weatherCode <= 3) description = 'Partly Cloudy';
        else if (weatherCode >= 45 && weatherCode <= 48) description = 'Foggy';
        else if (weatherCode >= 51 && weatherCode <= 67) description = 'Rainy';
        else if (weatherCode >= 71 && weatherCode <= 77) description = 'Snowy';
        else if (weatherCode >= 80 && weatherCode <= 99) description = 'Stormy';

        setWeather({
          temperature: data.current.temperature_2m,
          description,
          humidity: data.current.relative_humidity_2m,
          windSpeed: data.current.wind_speed_10m,
          icon: weatherCode <= 3 ? '☀️' : weatherCode <= 48 ? '🌫️' : weatherCode <= 67 ? '🌧️' : '⛈️',
        });
      } catch (err) {
        setError('Unable to load weather');
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [latitude, longitude]);

  if (loading) {
    return (
      <div className="bg-blue-50 rounded-xl p-4 animate-pulse">
        <div className="h-4 bg-blue-200 rounded w-1/2 mb-2"></div>
        <div className="h-8 bg-blue-200 rounded w-1/3"></div>
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className="bg-stone-100 rounded-xl p-4 text-stone-500 text-sm">
        <Cloud className="w-5 h-5 mb-1" />
        Weather data unavailable
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl p-4 border border-blue-100">
      <h4 className="text-sm font-medium text-blue-800 mb-2">Weather at {fortName}</h4>
      <div className="flex items-center gap-3">
        <span className="text-3xl">{weather.icon}</span>
        <div>
          <p className="text-2xl font-bold text-stone-900">{weather.temperature}°C</p>
          <p className="text-sm text-stone-600">{weather.description}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-3 pt-3 border-t border-blue-100">
        <span className="flex items-center gap-1 text-xs text-stone-600">
          <Thermometer className="w-3.5 h-3.5" />
          {weather.temperature}°C
        </span>
        <span className="flex items-center gap-1 text-xs text-stone-600">
          <Droplets className="w-3.5 h-3.5" />
          {weather.humidity}%
        </span>
        <span className="flex items-center gap-1 text-xs text-stone-600">
          <Wind className="w-3.5 h-3.5" />
          {weather.windSpeed} km/h
        </span>
      </div>
    </div>
  );
}
