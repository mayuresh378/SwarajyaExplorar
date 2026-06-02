// Heritage SVG ornaments based on Maratha visual culture

export function CrossedSwordsOrnament({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" className={className} fill="none">
      <defs>
        <linearGradient id="bladeGrad" x1="0" x2="1">
          <stop offset="0" stopColor="#D4A437" />
          <stop offset="0.5" stopColor="#FFE89E" />
          <stop offset="1" stopColor="#B08020" />
        </linearGradient>
      </defs>
      {/* Sword 1 (top-left to bottom-right) */}
      <g stroke="url(#bladeGrad)" strokeWidth="2.2" strokeLinecap="round">
        <line x1="20" y1="18" x2="92" y2="62" />
        <line x1="14" y1="22" x2="22" y2="14" strokeWidth="3.5" />
      </g>
      <circle cx="18" cy="18" r="3" fill="#C2410C" stroke="#D4A437" strokeWidth="1" />
      {/* Sword 2 (top-right to bottom-left) */}
      <g stroke="url(#bladeGrad)" strokeWidth="2.2" strokeLinecap="round">
        <line x1="100" y1="18" x2="28" y2="62" />
        <line x1="106" y1="22" x2="98" y2="14" strokeWidth="3.5" />
      </g>
      <circle cx="102" cy="18" r="3" fill="#C2410C" stroke="#D4A437" strokeWidth="1" />
      {/* Center medallion */}
      <circle cx="60" cy="40" r="6" fill="#7A1418" stroke="#D4A437" strokeWidth="1.5" />
      <circle cx="60" cy="40" r="2" fill="#D4A437" />
    </svg>
  );
}

export function BhagwaFlag({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 90" className={className} fill="none">
      {/* Pole */}
      <rect x="6" y="2" width="2.5" height="86" fill="#5C4528" rx="1" />
      <circle cx="7.2" cy="3" r="2.5" fill="#D4A437" />
      {/* Flag with swallow tail */}
      <path d="M 8.5 6 L 50 12 L 38 24 L 50 36 L 8.5 32 Z" fill="#C2410C" stroke="#9A2F08" strokeWidth="0.5" />
      {/* Subtle highlight */}
      <path d="M 8.5 6 L 50 12 L 8.5 10 Z" fill="#EA580C" opacity="0.6" />
    </svg>
  );
}

export function FortSilhouette({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 120" className={className} preserveAspectRatio="none">
      <path
        d="M 0 120 L 0 90 L 30 90 L 30 70 L 50 70 L 50 60 L 70 60 L 70 70 L 90 70 L 90 80 L 120 80 L 120 50 L 140 50 L 140 35 L 160 35 L 160 50 L 180 50 L 180 75 L 220 75 L 220 60 L 240 60 L 240 45 L 260 45 L 260 30 L 280 30 L 280 45 L 300 45 L 300 60 L 320 60 L 320 70 L 360 70 L 360 50 L 380 50 L 380 30 L 400 30 L 400 15 L 420 15 L 420 30 L 440 30 L 440 50 L 460 50 L 460 65 L 500 65 L 500 80 L 540 80 L 540 60 L 560 60 L 560 45 L 580 45 L 580 60 L 600 60 L 600 75 L 640 75 L 640 65 L 660 65 L 660 50 L 680 50 L 680 65 L 700 65 L 700 80 L 740 80 L 740 70 L 770 70 L 770 90 L 800 90 L 800 120 Z"
        fill="currentColor"
      />
      {/* Crenellation peaks (small triangles for fort battlements) */}
      <g fill="currentColor">
        <rect x="148" y="33" width="3" height="4" />
        <rect x="153" y="33" width="3" height="4" />
        <rect x="268" y="28" width="3" height="4" />
        <rect x="273" y="28" width="3" height="4" />
        <rect x="408" y="13" width="3" height="4" />
        <rect x="413" y="13" width="3" height="4" />
        <rect x="568" y="43" width="3" height="4" />
        <rect x="573" y="43" width="3" height="4" />
        <rect x="668" y="48" width="3" height="4" />
        <rect x="673" y="48" width="3" height="4" />
      </g>
    </svg>
  );
}

export function Rajmudra({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <defs>
        <radialGradient id="rajmudraGrad">
          <stop offset="0" stopColor="#FFE89E" />
          <stop offset="0.6" stopColor="#D4A437" />
          <stop offset="1" stopColor="#B08020" />
        </radialGradient>
      </defs>
      {/* Outer ring */}
      <circle cx="50" cy="50" r="46" stroke="url(#rajmudraGrad)" strokeWidth="2" fill="none" />
      <circle cx="50" cy="50" r="40" stroke="#7A1418" strokeWidth="0.5" fill="none" />
      {/* Sun rays around outer */}
      {[...Array(16)].map((_, i) => {
        const angle = (i * 22.5 * Math.PI) / 180;
        const x1 = 50 + 46 * Math.cos(angle);
        const y1 = 50 + 46 * Math.sin(angle);
        const x2 = 50 + 50 * Math.cos(angle);
        const y2 = 50 + 50 * Math.sin(angle);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#D4A437" strokeWidth="1.2" strokeLinecap="round" />;
      })}
      {/* Inner ornament — eight petal star */}
      <g transform="translate(50,50)">
        {[...Array(8)].map((_, i) => (
          <path
            key={i}
            d="M 0 -28 L 4 -8 L 0 0 L -4 -8 Z"
            fill="#7A1418"
            stroke="#D4A437"
            strokeWidth="0.5"
            transform={`rotate(${i * 45})`}
          />
        ))}
        <circle cx="0" cy="0" r="6" fill="url(#rajmudraGrad)" stroke="#7A1418" strokeWidth="0.8" />
      </g>
    </svg>
  );
}

export function JharokhaArch({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 60" className={className} fill="none">
      <path
        d="M 5 60 L 5 25 Q 5 5 25 5 L 50 0 L 75 5 Q 95 5 95 25 L 95 60"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Pinnacle */}
      <path d="M 48 -2 L 50 -8 L 52 -2 Z" fill="currentColor" />
      <circle cx="50" cy="-2" r="1.5" fill="currentColor" />
      {/* Inner trefoil */}
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

export function CornerOrnament({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none">
      {/* Floral corner motif */}
      <g stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round">
        <path d="M 4 4 L 30 4 M 4 4 L 4 30" strokeWidth="1.5" />
        <path d="M 4 16 Q 16 16 16 4" />
        <path d="M 4 28 Q 28 28 28 4" opacity="0.6" />
        <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="20" cy="20" r="1.2" fill="currentColor" />
        {/* Petals */}
        <path d="M 20 14 Q 22 12 24 14 Q 22 16 20 14 Z" fill="currentColor" opacity="0.6" />
        <path d="M 14 20 Q 12 22 14 24 Q 16 22 14 20 Z" fill="currentColor" opacity="0.6" />
      </g>
    </svg>
  );
}

export function MaharashtraMapSilhouette({ className = '' }: { className?: string }) {
  // Stylized outline of Maharashtra state
  return (
    <svg viewBox="0 0 400 300" className={className} fill="none">
      <path
        d="M 60 120 Q 50 100 70 90 L 90 70 Q 100 60 120 65 L 150 60 Q 170 50 190 60 L 220 55 Q 250 50 280 60 L 310 70 Q 340 80 350 100 L 360 130 Q 365 160 350 180 L 340 210 Q 320 230 290 235 L 250 245 Q 220 250 190 245 L 160 240 Q 130 235 110 220 L 80 200 Q 60 180 60 160 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 4"
        fill="none"
      />
      {/* Fort markers */}
      <g fill="currentColor">
        <circle cx="120" cy="140" r="3" />
        <circle cx="180" cy="120" r="3" />
        <circle cx="220" cy="160" r="3" />
        <circle cx="160" cy="180" r="3" />
        <circle cx="280" cy="140" r="3" />
        <circle cx="240" cy="200" r="3" />
        <circle cx="290" cy="190" r="3" />
      </g>
      {/* Connecting lines */}
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

export function OrnamentalDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="flex-1 h-px bg-gradient-to-r from-transparent via-[color:var(--gold-bright)] to-transparent"></span>
      <svg viewBox="0 0 60 30" className="h-7 w-14" fill="none">
        <g stroke="currentColor" strokeWidth="1.2" fill="none">
          <path d="M 5 15 Q 15 5 25 15" style={{ color: 'var(--gold)' }} />
          <path d="M 35 15 Q 45 5 55 15" style={{ color: 'var(--gold)' }} />
          <path d="M 5 15 Q 15 25 25 15" style={{ color: 'var(--gold)' }} />
          <path d="M 35 15 Q 45 25 55 15" style={{ color: 'var(--gold)' }} />
        </g>
        <circle cx="30" cy="15" r="3" fill="#7A1418" stroke="#D4A437" strokeWidth="0.8" />
        <circle cx="30" cy="15" r="1" fill="#D4A437" />
      </svg>
      <span className="flex-1 h-px bg-gradient-to-r from-transparent via-[color:var(--gold-bright)] to-transparent"></span>
    </div>
  );
}
