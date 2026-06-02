// Premium museum-archive heritage SVG elements

/* ANCIENT COMPASS ROSE — like an old maritime/cartographer compass */
export function AncientCompass({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none">
      <defs>
        <radialGradient id="compassGrad">
          <stop offset="0" stopColor="#FFE89E" />
          <stop offset="0.5" stopColor="#D4A437" />
          <stop offset="1" stopColor="#8B5E16" />
        </radialGradient>
      </defs>
      {/* Outer decorative circle */}
      <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.6" />
      <circle cx="100" cy="100" r="86" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.5" />

      {/* Tick marks - 360 degrees */}
      {[...Array(72)].map((_, i) => {
        const angle = (i * 5 * Math.PI) / 180;
        const isMajor = i % 9 === 0;
        const len = isMajor ? 10 : 4;
        const x1 = 100 + 80 * Math.cos(angle);
        const y1 = 100 + 80 * Math.sin(angle);
        const x2 = 100 + (80 - len) * Math.cos(angle);
        const y2 = 100 + (80 - len) * Math.sin(angle);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth={isMajor ? 1 : 0.4} />;
      })}

      {/* Cardinal direction labels */}
      <text x="100" y="22" textAnchor="middle" fontSize="11" fontWeight="700" fill="currentColor" fontFamily="serif">N</text>
      <text x="180" y="105" textAnchor="middle" fontSize="11" fontWeight="700" fill="currentColor" fontFamily="serif">E</text>
      <text x="100" y="190" textAnchor="middle" fontSize="11" fontWeight="700" fill="currentColor" fontFamily="serif">S</text>
      <text x="20" y="105" textAnchor="middle" fontSize="11" fontWeight="700" fill="currentColor" fontFamily="serif">W</text>

      {/* 8-point compass star */}
      <g transform="translate(100,100)">
        {/* Major points (N, E, S, W) */}
        {[0, 90, 180, 270].map(rot => (
          <g key={rot} transform={`rotate(${rot})`}>
            <path d="M 0 0 L 4 -10 L 0 -65 L -4 -10 Z" fill="currentColor" opacity="0.85" />
            <path d="M 0 0 L 0 -65 L -4 -10 Z" fill="currentColor" opacity="0.4" />
          </g>
        ))}
        {/* Minor points (NE, SE, SW, NW) */}
        {[45, 135, 225, 315].map(rot => (
          <g key={rot} transform={`rotate(${rot})`}>
            <path d="M 0 0 L 3 -8 L 0 -45 L -3 -8 Z" fill="currentColor" opacity="0.5" />
          </g>
        ))}
        {/* Center jewel */}
        <circle r="6" fill="#7A1418" stroke="currentColor" strokeWidth="1" />
        <circle r="2" fill="currentColor" />
      </g>

      {/* Decorative outer flourish */}
      <text x="100" y="45" textAnchor="middle" fontSize="6" letterSpacing="3" fill="currentColor" opacity="0.6" fontFamily="serif">SWARAJYA · 1674</text>
    </svg>
  );
}

/* HAND-DRAWN FORT SKETCH — Raigad style mountain fort with sketch lines */
export function HandDrawnFort({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 240" className={className} fill="none">
      <g stroke="currentColor" strokeWidth="0.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Base mountain ridge */}
        <path d="M 10 230 L 30 200 L 50 215 L 80 180 L 110 195 L 140 160 L 180 175 L 220 140 L 260 155 L 290 130 L 320 145 L 350 120 L 380 130 L 395 150 L 395 230 Z" fill="currentColor" fillOpacity="0.04" />

        {/* Mountain crosshatching - subtle texture */}
        <g opacity="0.3" strokeWidth="0.4">
          <path d="M 90 200 L 110 185" />
          <path d="M 120 195 L 140 175" />
          <path d="M 200 165 L 220 150" />
          <path d="M 230 158 L 250 145" />
          <path d="M 280 145 L 300 130" />
          <path d="M 330 135 L 350 120" />
        </g>

        {/* Lower fort wall with crenellations */}
        <path d="M 140 160 L 142 145 L 148 145 L 148 152 L 156 152 L 156 145 L 162 145 L 162 152 L 170 152 L 170 145 L 176 145 L 176 152 L 184 152 L 184 145 L 190 145 L 190 152 L 198 152 L 198 145 L 204 145 L 204 152 L 220 152 L 220 140" />

        {/* Wall body with arched gateway */}
        <path d="M 140 160 L 140 180 L 220 180 L 220 160" />
        <path d="M 175 180 L 175 168 Q 175 160 185 160 Q 195 160 195 168 L 195 180" fill="currentColor" fillOpacity="0.06" />

        {/* Stone block lines on wall */}
        <line x1="148" y1="170" x2="218" y2="170" strokeWidth="0.4" opacity="0.5" />
        <line x1="155" y1="160" x2="155" y2="180" strokeWidth="0.4" opacity="0.4" />
        <line x1="170" y1="160" x2="170" y2="170" strokeWidth="0.4" opacity="0.4" />
        <line x1="200" y1="160" x2="200" y2="170" strokeWidth="0.4" opacity="0.4" />
        <line x1="210" y1="160" x2="210" y2="180" strokeWidth="0.4" opacity="0.4" />

        {/* Upper bastion / tower */}
        <path d="M 250 155 L 252 130 L 258 130 L 258 138 L 266 138 L 266 130 L 272 130 L 272 138 L 280 138 L 280 130 L 286 130 L 286 138 L 294 138 L 294 130 L 300 130 L 300 155" />
        <path d="M 250 155 L 250 175 L 300 175 L 300 155" />

        {/* Tower roof / dome */}
        <path d="M 268 130 Q 275 116 282 130" fill="currentColor" fillOpacity="0.04" />

        {/* Highest peak with flag */}
        <path d="M 320 145 L 322 100 L 326 100 L 326 108 L 334 108 L 334 100 L 338 100 L 338 145" />
        <path d="M 320 145 L 320 165 L 338 165 L 338 145" />

        {/* Bhagwa flag on highest point */}
        <line x1="328" y1="100" x2="328" y2="80" strokeWidth="0.6" />
        <path d="M 328 80 L 348 84 L 343 90 L 348 96 L 328 92 Z" fill="#C2410C" stroke="#5C0F12" strokeWidth="0.4" />

        {/* Stairs leading up */}
        <path d="M 220 180 L 235 175 L 235 170 L 245 170 L 245 165 L 255 165" strokeWidth="0.5" />

        {/* Trees / vegetation dots */}
        <g fill="currentColor" opacity="0.5">
          <circle cx="60" cy="218" r="2" />
          <circle cx="68" cy="215" r="1.5" />
          <circle cx="100" cy="200" r="1.8" />
          <circle cx="370" cy="160" r="2" />
          <circle cx="378" cy="158" r="1.5" />
        </g>

        {/* Sketch hatching for shadows */}
        <g opacity="0.25" strokeWidth="0.3">
          <line x1="220" y1="180" x2="225" y2="190" />
          <line x1="225" y1="180" x2="230" y2="190" />
          <line x1="230" y1="180" x2="235" y2="190" />
          <line x1="300" y1="175" x2="305" y2="185" />
          <line x1="305" y1="175" x2="310" y2="185" />
          <line x1="310" y1="175" x2="315" y2="185" />
        </g>
      </g>

      {/* Caption label */}
      <text x="200" y="225" textAnchor="middle" fontSize="8" letterSpacing="3" fill="currentColor" opacity="0.5" fontFamily="serif" fontStyle="italic">RAIGAD · CAPITAL OF SWARAJYA</text>
    </svg>
  );
}

/* SWARAJYA MAP — large detailed map of Maharashtra with all forts */
export function SwarajyaMap({ className = '' }: { className?: string }) {
  // Real-ish Maharashtra outline + actual fort positions
  const forts = [
    { x: 140, y: 245, name: 'Sindhudurg' },
    { x: 155, y: 235, name: 'Vijaydurg' },
    { x: 175, y: 200, name: 'Pratapgad' },
    { x: 220, y: 195, name: 'Rajgad' },
    { x: 215, y: 200, name: 'Torna' },
    { x: 225, y: 178, name: 'Sinhagad' },
    { x: 230, y: 165, name: 'Lohagad' },
    { x: 245, y: 155, name: 'Shivneri' },
    { x: 165, y: 215, name: 'Raigad' },
    { x: 180, y: 270, name: 'Panhala' },
  ];

  return (
    <svg viewBox="0 0 500 400" className={className} fill="none">
      <defs>
        <pattern id="mapGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.15" />
        </pattern>
      </defs>

      {/* Grid background */}
      <rect width="500" height="400" fill="url(#mapGrid)" />

      {/* Maharashtra outline (stylized) */}
      <path
        d="M 80 130 Q 70 110 95 100 L 130 80 Q 150 70 180 78 L 230 70 Q 270 60 310 75 L 360 80 Q 400 88 420 115 L 440 145 Q 450 180 440 215 L 425 250 Q 405 285 370 295 L 320 305 Q 280 312 240 305 L 195 300 Q 155 295 125 275 L 90 250 Q 70 220 75 185 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.04"
      />
      <path
        d="M 80 130 Q 70 110 95 100 L 130 80 Q 150 70 180 78 L 230 70 Q 270 60 310 75 L 360 80 Q 400 88 420 115 L 440 145 Q 450 180 440 215 L 425 250 Q 405 285 370 295 L 320 305 Q 280 312 240 305 L 195 300 Q 155 295 125 275 L 90 250 Q 70 220 75 185 Z"
        stroke="currentColor"
        strokeWidth="0.4"
        fill="none"
        strokeDasharray="2 3"
        opacity="0.4"
      />

      {/* Mountain ridges (Sahyadri) */}
      <g stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4">
        <path d="M 160 160 Q 180 155 200 165 Q 220 158 240 168" />
        <path d="M 165 175 Q 185 170 205 180" />
        <path d="M 200 200 Q 220 195 240 205 Q 260 198 280 208" />
      </g>

      {/* Western coast wave lines */}
      <g stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3">
        <path d="M 60 180 Q 70 185 75 192 Q 80 199 75 206" />
        <path d="M 50 220 Q 60 225 65 232" />
        <path d="M 55 260 Q 65 265 70 272" />
      </g>

      {/* Connecting routes between forts (historical trade routes) */}
      <g stroke="currentColor" strokeWidth="0.7" fill="none" strokeDasharray="3 4" opacity="0.5">
        <path d="M 245 155 Q 235 162 230 165" />
        <path d="M 230 165 Q 228 172 225 178" />
        <path d="M 225 178 Q 222 188 220 195" />
        <path d="M 220 195 L 215 200" />
        <path d="M 215 200 Q 195 205 175 200" />
        <path d="M 175 200 Q 170 207 165 215" />
        <path d="M 165 215 Q 165 240 155 235" />
        <path d="M 155 235 Q 145 240 140 245" />
        <path d="M 140 245 Q 160 258 180 270" />
        <path d="M 165 215 Q 175 220 180 270" />
      </g>

      {/* Forts as marker stars */}
      {forts.map((f, i) => (
        <g key={i} transform={`translate(${f.x},${f.y})`}>
          <circle r="6" fill="currentColor" opacity="0.15" />
          <path d="M 0 -5 L 1.2 -1.2 L 5 0 L 1.2 1.2 L 0 5 L -1.2 1.2 L -5 0 L -1.2 -1.2 Z" fill="currentColor" />
          <text y="-9" textAnchor="middle" fontSize="6" fill="currentColor" fontFamily="serif" fontStyle="italic">{f.name}</text>
        </g>
      ))}

      {/* Decorative cartouche */}
      <g transform="translate(370,340)">
        <rect x="-50" y="-18" width="100" height="36" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.05" rx="2" />
        <text textAnchor="middle" y="-3" fontSize="7" letterSpacing="2" fill="currentColor" fontFamily="serif">SWARAJYA</text>
        <text textAnchor="middle" y="9" fontSize="6" letterSpacing="3" fill="currentColor" fontFamily="serif" opacity="0.7">MAHARASHTRA · १६७४</text>
      </g>

      {/* Compass mini in corner */}
      <g transform="translate(440,80)">
        <circle r="14" stroke="currentColor" strokeWidth="0.6" fill="none" />
        <path d="M 0 0 L 0 -12 L 1.5 -3 L -1.5 -3 Z" fill="currentColor" />
        <path d="M 0 0 L 0 12 L 1.5 3 L -1.5 3 Z" fill="currentColor" opacity="0.5" />
        <path d="M 0 0 L 12 0 L 3 1.5 L 3 -1.5 Z" fill="currentColor" opacity="0.5" />
        <path d="M 0 0 L -12 0 L -3 1.5 L -3 -1.5 Z" fill="currentColor" opacity="0.5" />
        <text y="-16" textAnchor="middle" fontSize="6" fill="currentColor" fontWeight="700">N</text>
      </g>
    </svg>
  );
}

/* MANUSCRIPT SCROLL ELEMENT */
export function ScrollEdge({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 30" className={className} preserveAspectRatio="none" fill="none">
      <g stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.05">
        <path d="M 0 15 Q 50 5 100 15 T 200 15 L 200 30 L 0 30 Z" />
      </g>
      <g stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5">
        <path d="M 0 15 Q 50 5 100 15 T 200 15" />
        <path d="M 0 18 Q 50 8 100 18 T 200 18" />
      </g>
      {/* Scroll seal */}
      <g transform="translate(100,15)">
        <circle r="4" fill="#7A1418" />
        <circle r="2" fill="#D4A437" />
      </g>
    </svg>
  );
}

/* HAND-DRAWN MOUNTAIN RIDGE - Sahyadri sketch */
export function MountainRidge({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 120" className={className} preserveAspectRatio="none" fill="none">
      <g stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.04">
        <path d="M 0 120 L 0 80 L 60 60 L 100 80 L 150 40 L 200 65 L 250 30 L 310 55 L 360 25 L 420 50 L 470 20 L 520 45 L 580 30 L 640 55 L 700 35 L 760 60 L 800 50 L 800 120 Z" />
      </g>
      {/* Crosshatch shadows on ridges */}
      <g stroke="currentColor" strokeWidth="0.3" opacity="0.3">
        <line x1="60" y1="65" x2="80" y2="100" />
        <line x1="70" y1="68" x2="90" y2="105" />
        <line x1="150" y1="48" x2="170" y2="85" />
        <line x1="160" y1="50" x2="180" y2="90" />
        <line x1="250" y1="38" x2="280" y2="80" />
        <line x1="260" y1="40" x2="290" y2="85" />
        <line x1="360" y1="33" x2="390" y2="75" />
        <line x1="470" y1="28" x2="500" y2="70" />
        <line x1="580" y1="38" x2="610" y2="80" />
        <line x1="700" y1="43" x2="730" y2="85" />
      </g>
      {/* Distant mountain layer */}
      <path d="M 0 120 L 0 90 L 80 80 L 160 95 L 240 75 L 340 90 L 420 70 L 500 85 L 580 70 L 680 90 L 800 80 L 800 120 Z" fill="currentColor" fillOpacity="0.03" />
    </svg>
  );
}

/* MANUSCRIPT CORNER FLOURISH */
export function ManuscriptCorner({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <g stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round">
        {/* Outer L */}
        <path d="M 5 5 L 60 5" strokeWidth="1.2" />
        <path d="M 5 5 L 5 60" strokeWidth="1.2" />
        {/* Inner curl ornaments */}
        <path d="M 5 25 Q 25 25 25 5" strokeWidth="0.7" />
        <path d="M 5 40 Q 40 40 40 5" strokeWidth="0.5" opacity="0.6" />
        {/* Central rosette */}
        <circle cx="20" cy="20" r="3.5" strokeWidth="0.7" />
        <circle cx="20" cy="20" r="1.2" fill="currentColor" />
        {/* Petal flourishes */}
        <path d="M 20 12 Q 23 9 26 12 Q 23 15 20 12 Z" fill="currentColor" opacity="0.7" />
        <path d="M 12 20 Q 9 23 12 26 Q 15 23 12 20 Z" fill="currentColor" opacity="0.7" />
        {/* Trailing flourish */}
        <path d="M 30 15 Q 50 15 50 30" strokeWidth="0.4" opacity="0.5" />
        <path d="M 15 30 Q 15 50 30 50" strokeWidth="0.4" opacity="0.5" />
        {/* Tiny beads on flourishes */}
        <circle cx="50" cy="30" r="1" fill="currentColor" opacity="0.7" />
        <circle cx="30" cy="50" r="1" fill="currentColor" opacity="0.7" />
      </g>
    </svg>
  );
}

/* HISTORICAL ROUTE LINE - dashed connecting paths */
export function RouteLines({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 1000 300" className={className} preserveAspectRatio="none" fill="none">
      <g stroke="currentColor" strokeWidth="0.8" fill="none" strokeDasharray="3 5" opacity="0.4">
        <path d="M 50 80 Q 200 50 350 100 T 650 130 T 950 90" />
        <path d="M 80 200 Q 250 230 400 180 T 700 220 T 950 200" />
        <path d="M 100 280 Q 300 250 500 280 T 850 270" />
      </g>
      {/* Marker dots along routes */}
      <g fill="currentColor" opacity="0.4">
        <circle cx="50" cy="80" r="2" />
        <circle cx="350" cy="100" r="2" />
        <circle cx="650" cy="130" r="2" />
        <circle cx="950" cy="90" r="2" />
        <circle cx="80" cy="200" r="2" />
        <circle cx="400" cy="180" r="2" />
        <circle cx="700" cy="220" r="2" />
      </g>
    </svg>
  );
}
