const base = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export function GlobeIcon({ stroke = '#17A9BD' }) {
  return (
    <svg {...base} stroke={stroke}>
      <circle cx="12" cy="12" r="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <ellipse cx="12" cy="12" rx="4.5" ry="9" />
    </svg>
  )
}

export function BrokenCircleIcon({ stroke = '#17A9BD' }) {
  return (
    <svg {...base} stroke={stroke}>
      <circle cx="12" cy="12" r="9" strokeDasharray="24 10" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  )
}

export function TrendDownIcon({ stroke = '#17A9BD' }) {
  return (
    <svg {...base} stroke={stroke}>
      <polyline points="3,7 10,14 14,10 21,18" />
      <polyline points="21,13 21,18 16,18" />
    </svg>
  )
}

export function ClipboardIcon({ stroke = '#8FE3EF' }) {
  return (
    <svg {...base} stroke={stroke}>
      <rect x="5" y="4" width="14" height="17" rx="2.5" />
      <line x1="9" y1="9.5" x2="15" y2="9.5" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="16.5" x2="12.5" y2="16.5" />
    </svg>
  )
}

export function ClockIcon({ stroke = '#8FE3EF' }) {
  return (
    <svg {...base} stroke={stroke}>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12,7 12,12 16,14.5" />
    </svg>
  )
}

export function CameraIcon({ stroke = '#17A9BD' }) {
  return (
    <svg {...base} stroke={stroke}>
      <rect x="3" y="7" width="18" height="13" rx="3" />
      <circle cx="12" cy="13.5" r="4" />
      <line x1="9" y1="7" x2="10.5" y2="4" />
      <line x1="15" y1="7" x2="13.5" y2="4" />
    </svg>
  )
}

export function ScanSearchIcon({ stroke = '#17A9BD' }) {
  return (
    <svg {...base} stroke={stroke}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <line x1="15.5" y1="15.5" x2="20.5" y2="20.5" />
      <polyline points="8,12 10,8.5 12.5,13 14,10.5" />
    </svg>
  )
}

export function CompassIcon({ stroke = '#17A9BD' }) {
  return (
    <svg {...base} stroke={stroke}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="2.5" />
      <line x1="12" y1="3" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="21" />
      <line x1="3" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="21" y2="12" />
    </svg>
  )
}

export function TrendUpIcon({ stroke = '#17A9BD' }) {
  return (
    <svg {...base} stroke={stroke}>
      <line x1="4" y1="20" x2="20" y2="20" />
      <polyline points="5,16 10,11 14,14 20,6" />
      <polyline points="20,10 20,6 16,6" />
    </svg>
  )
}

export function BarsIcon({ stroke = '#17A9BD' }) {
  return (
    <svg {...base} stroke={stroke}>
      <line x1="4" y1="20" x2="20" y2="20" />
      <line x1="7" y1="20" x2="7" y2="12" />
      <line x1="12" y1="20" x2="12" y2="7" />
      <line x1="17" y1="20" x2="17" y2="14" />
    </svg>
  )
}

export function ShieldCheckIcon({ stroke = '#17A9BD' }) {
  return (
    <svg {...base} stroke={stroke}>
      <path d="M12 3.5 19 6.2 19 12 A9 9 0 0 1 12 20.5 A9 9 0 0 1 5 12 L5 6.2 Z" />
      <polyline points="9,12 11.5,14.5 15.5,9.5" />
    </svg>
  )
}

export function TargetIcon({ stroke = '#17A9BD' }) {
  return (
    <svg {...base} stroke={stroke}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5.5" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

export function HeartIcon({ stroke = '#17A9BD' }) {
  return (
    <svg {...base} stroke={stroke}>
      <path d="M12 20 C7 16 3 12.5 3 8.5 C3 5.8 5.1 4 7.5 4 C9.4 4 11 5.1 12 6.8 C13 5.1 14.6 4 16.5 4 C18.9 4 21 5.8 21 8.5 C21 12.5 17 16 12 20 Z" />
    </svg>
  )
}

