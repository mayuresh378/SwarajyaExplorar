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
      } catch {
        setError('Unable to load weather');
      } finally {
        setLoading(false);
      }
    }
    fetchWeather();
  }, [latitude, longitude]);

  if (loading) {
    return (
      <div className="heritage-card-bg rounded-lg p-4 animate-pulse">
        <div className="h-4 rounded w-1/2 mb-2" style={{ background: 'rgba(168,122,30,0.2)' }}></div>
        <div className="h-8 rounded w-1/3" style={{ background: 'rgba(168,122,30,0.2)' }}></div>
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className="heritage-card-bg rounded-lg p-4 text-ink-soft text-sm">
        <Cloud className="w-5 h-5 mb-1 text-ink-soft" />
        Weather data unavailable
      </div>
    );
  }

  return (
    <div className="heritage-card-bg rounded-lg p-5">
      <p className="text-xs uppercase tracking-wider font-semibold mb-3" style={{ color: 'var(--maroon)' }}>Weather at {fortName}</p>
      <div className="flex items-center gap-3">
        <span className="text-3xl">{weather.icon}</span>
        <div>
          <p className="text-2xl font-bold text-ink">{weather.temperature}°C</p>
          <p className="text-sm text-ink-soft">{weather.description}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-4 pt-3" style={{ borderTop: '1px solid rgba(168,122,30,0.2)' }}>
        <span className="flex items-center gap-1 text-xs text-ink-soft">
          <Thermometer className="w-3.5 h-3.5" style={{ color: 'var(--saffron)' }} />{weather.temperature}°C
        </span>
        <span className="flex items-center gap-1 text-xs text-ink-soft">
          <Droplets className="w-3.5 h-3.5" style={{ color: 'var(--saffron)' }} />{weather.humidity}%
        </span>
        <span className="flex items-center gap-1 text-xs text-ink-soft">
          <Wind className="w-3.5 h-3.5" style={{ color: 'var(--saffron)' }} />{weather.windSpeed} km/h
        </span>
      </div>
    </div>
  );
}
