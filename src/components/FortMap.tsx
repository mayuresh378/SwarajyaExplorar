import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { Fort } from '../types';
import { useLanguage } from '../context/LanguageContext';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

interface FortMapProps {
  forts: Fort[];
  center?: [number, number];
  zoom?: number;
  className?: string;
}

export default function FortMap({ forts, center = [18.5, 73.8], zoom = 7, className = 'h-[500px]' }: FortMapProps) {
  const { t } = useLanguage();

  return (
    <MapContainer center={center} zoom={zoom} className={`${className} rounded-xl shadow-md z-0`}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {forts.map(fort => (
        <Marker key={fort.id} position={[fort.latitude, fort.longitude]}>
          <Popup>
            <div className="text-center">
              <h3 className="font-bold text-sm">{t(fort.name)}</h3>
              <p className="text-xs text-stone-600">{t(fort.district)}</p>
              <p className="text-xs mt-1">{fort.trekDifficulty} • {fort.altitude}m</p>
              <Link to={`/fort/${fort.id}`} className="inline-block mt-2 text-xs text-orange-700 font-semibold hover:underline">
                View Details →
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
