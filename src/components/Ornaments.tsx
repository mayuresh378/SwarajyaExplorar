// Authentic Maratha heritage ornaments based on Shivaji Maharaj's symbols

/* THE RAJMUDRA - Shivaji Maharaj's actual royal seal
   Original Sanskrit text: "प्रतिपच्चंद्रलेखेव वर्धिष्णुर्विश्ववंदिता शाहसूनोः शिवस्यैषा मुद्रा भद्राय राजते"
*/
export function Rajmudra({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none">
      <defs>
        <radialGradient id="rajGrad" cx="50%" cy="50%">
          <stop offset="0" stopColor="#FFE89E" />
          <stop offset="0.5" stopColor="#D4A437" />
          <stop offset="1" stopColor="#8B5E16" />
        </radialGradient>
        <linearGradient id="rajRed" x1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#9A2F08" />
          <stop offset="1" stopColor="#5C0F12" />
        </linearGradient>
        <path id="topArc" d="M 100,100 m -78,0 a 78,78 0 1 1 156,0" fill="none" />
        <path id="bottomArc" d="M 100,100 m -78,0 a 78,78 0 1 0 156,0" fill="none" />
      </defs>

      {/* Outer circle */}
      <circle cx="100" cy="100" r="95" fill="url(#rajRed)" stroke="url(#rajGrad)" strokeWidth="2.5" />

      {/* Sun rays */}
      {[...Array(36)].map((_, i) => {
        const angle = (i * 10 * Math.PI) / 180;
        const x1 = 100 + 90 * Math.cos(angle);
        const y1 = 100 + 90 * Math.sin(angle);
        const x2 = 100 + 95 * Math.cos(angle);
        const y2 = 100 + 95 * Math.sin(angle);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#D4A437" strokeWidth="1" />;
      })}

      {/* Inner border */}
      <circle cx="100" cy="100" r="78" stroke="url(#rajGrad)" strokeWidth="1.5" fill="none" />
      <circle cx="100" cy="100" r="74" stroke="#D4A437" strokeWidth="0.5" fill="none" opacity="0.6" />

      {/* Sanskrit text on top arc - shortened authentic Rajmudra inscription */}
      <text fontSize="9" fontWeight="600" fill="#FFE89E" letterSpacing="2">
        <textPath href="#topArc" startOffset="14%">प्रतिपच्चंद्रलेखेव  वर्धिष्णुर्विश्ववंदिता</textPath>
      </text>
      <text fontSize="9" fontWeight="600" fill="#FFE89E" letterSpacing="2">
        <textPath href="#bottomArc" startOffset="6%">शाहसूनोः  शिवस्यैषा  मुद्रा  भद्राय  राजते</textPath>
      </text>

      {/* Center medallion - 8-petal star */}
      <g transform="translate(100,100)">
        {[...Array(8)].map((_, i) => (
          <path
            key={i}
            d="M 0 -28 L 5 -10 L 0 0 L -5 -10 Z"
            fill="url(#rajGrad)"
            stroke="#5C0F12"
            strokeWidth="0.6"
            transform={`rotate(${i * 45})`}
          />
        ))}
        <circle cx="0" cy="0" r="8" fill="url(#rajGrad)" stroke="#5C0F12" strokeWidth="1" />
        <circle cx="0" cy="0" r="3" fill="#5C0F12" />
      </g>
    </svg>
  );
}

/* BHAVANI TALWAR — Shivaji's legendary sword */
export function BhavaniTalwar({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 200" className={className} fill="none">
      <defs>
        <linearGradient id="bladeGrad2" x1="0" x2="1">
          <stop offset="0" stopColor="#8B7355" />
          <stop offset="0.4" stopColor="#FFE89E" />
          <stop offset="0.6" stopColor="#FFE89E" />
          <stop offset="1" stopColor="#8B7355" />
        </linearGradient>
      </defs>
      {/* Pommel */}
      <ellipse cx="15" cy="6" rx="6" ry="5" fill="#7A1418" stroke="#D4A437" strokeWidth="0.8" />
      <circle cx="15" cy="6" r="1.5" fill="#D4A437" />

      {/* Grip with wrapping */}
      <rect x="12" y="11" width="6" height="22" fill="#5C0F12" rx="1" />
      {[...Array(4)].map((_, i) => (
        <line key={i} x1="12" y1={14 + i * 5} x2="18" y2={14 + i * 5} stroke="#D4A437" strokeWidth="0.6" />
      ))}

      {/* Crossguard with curved tips */}
      <path d="M 4 33 Q 8 35 12 34 L 18 34 Q 22 35 26 33 L 26 38 Q 22 39 18 38 L 12 38 Q 8 39 4 38 Z" fill="#D4A437" stroke="#5C0F12" strokeWidth="0.5" />

      {/* Blade with central groove (fuller) */}
      <path d="M 11 39 L 19 39 L 17 195 L 15 200 L 13 195 Z" fill="url(#bladeGrad2)" stroke="#5C4528" strokeWidth="0.4" />
      <line x1="15" y1="42" x2="15" y2="190" stroke="#8B7355" strokeWidth="0.5" opacity="0.6" />
    </svg>
  );
}

/* CROSSED BHAVANI SWORDS — Shivaji's iconic emblem */
export function CrossedSwordsOrnament({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 100" className={className} fill="none">
      <defs>
        <linearGradient id="cBlade" x1="0" x2="1">
          <stop offset="0" stopColor="#D4A437" />
          <stop offset="0.5" stopColor="#FFE89E" />
          <stop offset="1" stopColor="#B08020" />
        </linearGradient>
      </defs>
      {/* Sword 1 — top-left to bottom-right */}
      <g transform="rotate(35 70 50)">
        <line x1="20" y1="50" x2="115" y2="50" stroke="url(#cBlade)" strokeWidth="2.5" strokeLinecap="round" />
        {/* Crossguard */}
        <rect x="14" y="46" width="14" height="8" fill="#D4A437" stroke="#5C0F12" strokeWidth="0.5" rx="1" />
        {/* Pommel */}
        <circle cx="11" cy="50" r="4" fill="#7A1418" stroke="#D4A437" strokeWidth="0.8" />
        <circle cx="11" cy="50" r="1.2" fill="#D4A437" />
      </g>
      {/* Sword 2 — top-right to bottom-left */}
      <g transform="rotate(-35 70 50)">
        <line x1="20" y1="50" x2="115" y2="50" stroke="url(#cBlade)" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="14" y="46" width="14" height="8" fill="#D4A437" stroke="#5C0F12" strokeWidth="0.5" rx="1" />
        <circle cx="11" cy="50" r="4" fill="#7A1418" stroke="#D4A437" strokeWidth="0.8" />
        <circle cx="11" cy="50" r="1.2" fill="#D4A437" />
      </g>
      {/* Center medallion with ॐ-style ornament */}
      <circle cx="70" cy="50" r="9" fill="#7A1418" stroke="#D4A437" strokeWidth="1.5" />
      <circle cx="70" cy="50" r="6" fill="none" stroke="#D4A437" strokeWidth="0.6" />
      <circle cx="70" cy="50" r="2.5" fill="#D4A437" />
    </svg>
  );
}

/* BHAGWA DHWAJ — The saffron Maratha flag */
export function BhagwaFlag({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 70 100" className={className} fill="none">
      <defs>
        <linearGradient id="bhagwaGrad" x1="0" x2="1">
          <stop offset="0" stopColor="#EA580C" />
          <stop offset="1" stopColor="#9A2F08" />
        </linearGradient>
      </defs>
      {/* Pole */}
      <rect x="6" y="2" width="2.5" height="96" fill="#5C4528" rx="1" />
      <circle cx="7.2" cy="3" r="3" fill="#D4A437" stroke="#5C0F12" strokeWidth="0.5" />
      {/* Trident finial atop pole */}
      <path d="M 7.2 -1 L 7.2 -8 M 4 -3 L 4 -7 M 10.5 -3 L 10.5 -7" stroke="#D4A437" strokeWidth="0.8" />

      {/* Flag — swallow tail (dovetail) shape */}
      <path d="M 8.5 8 L 60 14 L 46 28 L 60 42 L 8.5 36 Z" fill="url(#bhagwaGrad)" stroke="#5C0F12" strokeWidth="0.6" />

      {/* Fold highlight */}
      <path d="M 8.5 8 L 60 14 L 8.5 12 Z" fill="#FB923C" opacity="0.5" />

      {/* Center symbol on flag — eight-pointed star */}
      <g transform="translate(28,22)">
        {[...Array(4)].map((_, i) => (
          <path
            key={i}
            d="M 0 -5 L 1.2 -1.2 L 5 0 L 1.2 1.2 L 0 5 L -1.2 1.2 L -5 0 L -1.2 -1.2 Z"
            fill="#D4A437"
            transform={`rotate(${i * 45})`}
          />
        ))}
      </g>
    </svg>
  );
}

/* SHIVAJI'S CROWN / SHIRPECHA - the royal coronation crown */
export function ShivajiCrown({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 70" className={className} fill="none">
      <defs>
        <linearGradient id="crownGrad" x1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFE89E" />
          <stop offset="0.5" stopColor="#D4A437" />
          <stop offset="1" stopColor="#8B5E16" />
        </linearGradient>
      </defs>
      {/* Crown base band */}
      <path d="M 10 50 L 90 50 L 88 60 L 12 60 Z" fill="url(#crownGrad)" stroke="#5C0F12" strokeWidth="0.8" />

      {/* Three peaks (Shivaji's crown style) */}
      <path d="M 10 50 L 25 18 L 35 35 L 50 8 L 65 35 L 75 18 L 90 50 Z" fill="url(#crownGrad)" stroke="#5C0F12" strokeWidth="1" />

      {/* Pearl at each peak */}
      <circle cx="25" cy="16" r="2.5" fill="#FFE89E" stroke="#5C0F12" strokeWidth="0.5" />
      <circle cx="50" cy="6" r="3" fill="#7A1418" stroke="#D4A437" strokeWidth="0.8" />
      <circle cx="75" cy="16" r="2.5" fill="#FFE89E" stroke="#5C0F12" strokeWidth="0.5" />

      {/* Central jewel */}
      <ellipse cx="50" cy="45" rx="4" ry="3" fill="#7A1418" stroke="#D4A437" strokeWidth="0.6" />
      <ellipse cx="50" cy="44" rx="2" ry="1.5" fill="#FFE89E" opacity="0.8" />

      {/* Side jewels */}
      <circle cx="30" cy="46" r="2" fill="#7A1418" stroke="#D4A437" strokeWidth="0.4" />
      <circle cx="70" cy="46" r="2" fill="#7A1418" stroke="#D4A437" strokeWidth="0.4" />

      {/* Decorative band lines */}
      <line x1="15" y1="54" x2="85" y2="54" stroke="#5C0F12" strokeWidth="0.4" />
      <line x1="15" y1="57" x2="85" y2="57" stroke="#5C0F12" strokeWidth="0.4" opacity="0.6" />
    </svg>
  );
}

/* JIREH-TOPI / SAFA — Shivaji's distinctive pointed turban silhouette */
export function ShivajiSilhouette({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 100" className={className} fill="currentColor">
      {/* Pointed turban (jiretopi) */}
      <path d="M 22 22 Q 18 12 28 8 Q 35 5 40 8 Q 45 5 52 8 Q 62 12 58 22 Q 56 28 50 30 L 30 30 Q 24 28 22 22 Z" />
      {/* Turban tail (shemla) */}
      <path d="M 50 22 L 62 18 L 60 28 Z" />
      {/* Forehead band line */}
      <path d="M 26 26 L 54 26" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.6" />
      {/* Face outline */}
      <path d="M 30 30 Q 28 38 32 50 Q 36 60 40 62 Q 44 60 48 50 Q 52 38 50 30 L 30 30 Z" />
      {/* Beard */}
      <path d="M 32 50 Q 36 64 40 64 Q 44 64 48 50 Q 46 56 40 58 Q 34 56 32 50 Z" />
      {/* Shoulders / robe */}
      <path d="M 14 100 Q 14 72 30 65 L 50 65 Q 66 72 66 100 Z" />
      {/* Chest jewel */}
      <circle cx="40" cy="80" r="2" />
    </svg>
  );
}

/* FORT BATTLEMENTS - mountain fort skyline (Sahyadri range) */
export function FortSilhouette({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 120" className={className} preserveAspectRatio="none">
      <path
        d="M 0 120 L 0 90 L 30 90 L 30 70 L 50 70 L 50 60 L 70 60 L 70 70 L 90 70 L 90 80 L 120 80 L 120 50 L 140 50 L 140 35 L 160 35 L 160 50 L 180 50 L 180 75 L 220 75 L 220 60 L 240 60 L 240 45 L 260 45 L 260 30 L 280 30 L 280 45 L 300 45 L 300 60 L 320 60 L 320 70 L 360 70 L 360 50 L 380 50 L 380 30 L 400 30 L 400 15 L 420 15 L 420 30 L 440 30 L 440 50 L 460 50 L 460 65 L 500 65 L 500 80 L 540 80 L 540 60 L 560 60 L 560 45 L 580 45 L 580 60 L 600 60 L 600 75 L 640 75 L 640 65 L 660 65 L 660 50 L 680 50 L 680 65 L 700 65 L 700 80 L 740 80 L 740 70 L 770 70 L 770 90 L 800 90 L 800 120 Z"
        fill="currentColor"
      />
      {/* Bhagwa flag flying on tallest peak */}
      <g transform="translate(400, 0)">
        <line x1="10" y1="15" x2="10" y2="-10" stroke="#5C4528" strokeWidth="1" />
        <path d="M 10 -10 L 24 -7 L 18 -3 L 24 1 L 10 -2 Z" fill="#EA580C" stroke="#5C0F12" strokeWidth="0.3" />
      </g>
      <g transform="translate(270, 15)">
        <line x1="10" y1="15" x2="10" y2="-8" stroke="#5C4528" strokeWidth="0.8" />
        <path d="M 10 -8 L 22 -5 L 17 -2 L 22 2 L 10 0 Z" fill="#EA580C" />
      </g>
      <g transform="translate(610, 30)">
        <line x1="10" y1="15" x2="10" y2="-6" stroke="#5C4528" strokeWidth="0.8" />
        <path d="M 10 -6 L 20 -3 L 16 0 L 20 3 L 10 1 Z" fill="#EA580C" />
      </g>
    </svg>
  );
}

/* JHAROKHA - Indian palace window arch */
export function JharokhaArch({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 60" className={className} fill="none">
      <path
        d="M 5 60 L 5 25 Q 5 5 25 5 L 50 0 L 75 5 Q 95 5 95 25 L 95 60"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path d="M 48 -2 L 50 -8 L 52 -2 Z" fill="currentColor" />
      <circle cx="50" cy="-2" r="1.5" fill="currentColor" />
      <path
        d="M 15 60 L 15 28 Q 15 18 25 16 Q 50 12 75 16 Q 85 18 85 28 L 85 60"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

/* DHAL (shield) — Maratha warrior shield */
export function MarathaShield({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 100" className={className} fill="none">
      <defs>
        <radialGradient id="shieldGrad">
          <stop offset="0" stopColor="#D4A437" />
          <stop offset="0.6" stopColor="#B08020" />
          <stop offset="1" stopColor="#5C4528" />
        </radialGradient>
      </defs>
      {/* Round shield base */}
      <ellipse cx="40" cy="50" rx="35" ry="42" fill="url(#shieldGrad)" stroke="#5C0F12" strokeWidth="1.5" />
      {/* Concentric rings */}
      <ellipse cx="40" cy="50" rx="28" ry="34" stroke="#5C0F12" strokeWidth="0.6" fill="none" opacity="0.5" />
      <ellipse cx="40" cy="50" rx="20" ry="24" stroke="#5C0F12" strokeWidth="0.6" fill="none" opacity="0.5" />
      {/* Boss studs at cardinal points */}
      <circle cx="40" cy="14" r="3" fill="#7A1418" stroke="#D4A437" strokeWidth="0.6" />
      <circle cx="40" cy="86" r="3" fill="#7A1418" stroke="#D4A437" strokeWidth="0.6" />
      <circle cx="6" cy="50" r="3" fill="#7A1418" stroke="#D4A437" strokeWidth="0.6" />
      <circle cx="74" cy="50" r="3" fill="#7A1418" stroke="#D4A437" strokeWidth="0.6" />
      {/* Center boss */}
      <circle cx="40" cy="50" r="6" fill="#7A1418" stroke="#D4A437" strokeWidth="1" />
      <circle cx="40" cy="50" r="2.5" fill="#D4A437" />
    </svg>
  );
}

/* MAHARASHTRA STATE OUTLINE with fort points */
export function MaharashtraMapSilhouette({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} fill="none">
      <path
        d="M 60 120 Q 50 100 70 90 L 90 70 Q 100 60 120 65 L 150 60 Q 170 50 190 60 L 220 55 Q 250 50 280 60 L 310 70 Q 340 80 350 100 L 360 130 Q 365 160 350 180 L 340 210 Q 320 230 290 235 L 250 245 Q 220 250 190 245 L 160 240 Q 130 235 110 220 L 80 200 Q 60 180 60 160 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 4"
        fill="none"
      />
      <g fill="currentColor">
        <circle cx="120" cy="140" r="3" />
        <circle cx="180" cy="120" r="3" />
        <circle cx="220" cy="160" r="3" />
        <circle cx="160" cy="180" r="3" />
        <circle cx="280" cy="140" r="3" />
        <circle cx="240" cy="200" r="3" />
        <circle cx="290" cy="190" r="3" />
      </g>
      <g stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.6">
        <line x1="120" y1="140" x2="180" y2="120" />
        <line x1="180" y1="120" x2="220" y2="160" />
        <line x1="160" y1="180" x2="220" y2="160" />
        <line x1="220" y1="160" x2="280" y2="140" />
        <line x1="240" y1="200" x2="290" y2="190" />
      </g>
    </svg>
  );
}

/* CORNER FLORAL ORNAMENT */
export function CornerOrnament({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none">
      <g stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round">
        <path d="M 4 4 L 30 4 M 4 4 L 4 30" strokeWidth="1.5" />
        <path d="M 4 16 Q 16 16 16 4" />
        <path d="M 4 28 Q 28 28 28 4" opacity="0.6" />
        <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="20" cy="20" r="1.2" fill="currentColor" />
        <path d="M 20 14 Q 22 12 24 14 Q 22 16 20 14 Z" fill="currentColor" opacity="0.6" />
        <path d="M 14 20 Q 12 22 14 24 Q 16 22 14 20 Z" fill="currentColor" opacity="0.6" />
      </g>
    </svg>
  );
}

/* ORNAMENTAL DIVIDER with central jewel */
export function OrnamentalDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="flex-1 h-px bg-gradient-to-r from-transparent via-[color:var(--gold-bright)] to-transparent"></span>
      <svg viewBox="0 0 60 30" className="h-7 w-14" fill="none">
        <g stroke="#B08020" strokeWidth="1.2" fill="none">
          <path d="M 5 15 Q 15 5 25 15" />
          <path d="M 35 15 Q 45 5 55 15" />
          <path d="M 5 15 Q 15 25 25 15" />
          <path d="M 35 15 Q 45 25 55 15" />
        </g>
        <circle cx="30" cy="15" r="3" fill="#7A1418" stroke="#D4A437" strokeWidth="0.8" />
        <circle cx="30" cy="15" r="1" fill="#D4A437" />
      </svg>
      <span className="flex-1 h-px bg-gradient-to-r from-transparent via-[color:var(--gold-bright)] to-transparent"></span>
    </div>
  );
}
