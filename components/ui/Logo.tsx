import React from 'react'

interface LogoProps {
  className?: string
  width?: number
  height?: number
  variant?: 'full' | 'icon' | 'text'
}

export function Logo({ className = '', width = 200, height = 60, variant = 'full' }: LogoProps) {
  if (variant === 'icon') {
    return (
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 44 44" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#1e40af', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="iconAccent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#f59e0b', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#f97316', stopOpacity: 1 }} />
          </linearGradient>
          <pattern id="iconTexture" patternUnits="userSpaceOnUse" width="3" height="3">
            <rect width="3" height="3" fill="#1e40af"/>
            <circle cx="1" cy="1" r="0.4" fill="#3b82f6" opacity="0.3"/>
            <circle cx="2.5" cy="2.5" r="0.2" fill="#60a5fa" opacity="0.2"/>
          </pattern>
        </defs>
        
        <g transform="translate(6, 6)">
          <path d="M2 16 L30 15 L30 23 L2 24 Z" fill="url(#iconGradient)" stroke="#1e40af" strokeWidth="0.5"/>
          <path d="M2 16 L30 15 L30 23 L2 24 Z" fill="url(#iconTexture)" opacity="0.2"/>
          <path d="M2 24 L30 23 L32 27 L4 28 Z" fill="#1e3a8a" opacity="0.8"/>
          <path d="M2 16 L30 15 L30 19 L2 20 Z" fill="url(#iconAccent)" opacity="0.1"/>
          <circle cx="26" cy="17" r="1.2" fill="url(#iconAccent)" opacity="0.6"/>
        </g>
      </svg>
    )
  }

  if (variant === 'text') {
    return (
      <div className={`flex items-center ${className}`}>
        <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
          NewCountertops
        </span>
        <span className="text-lg font-semibold text-secondary-500">.com</span>
      </div>
    )
  }

  // Full logo with icon and text
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 200 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <pattern id="graniteTexture" patternUnits="userSpaceOnUse" width="4" height="4">
          <rect width="4" height="4" fill="#1e40af"/>
          <circle cx="1" cy="1" r="0.5" fill="#3b82f6" opacity="0.3"/>
          <circle cx="3" cy="3" r="0.3" fill="#60a5fa" opacity="0.2"/>
        </pattern>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#1e40af', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#f59e0b', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#f97316', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      <g transform="translate(8, 8)">
        <path d="M2 20 L34 18 L34 28 L2 30 Z" fill="url(#logoGradient)" stroke="#1e40af" strokeWidth="0.5"/>
        <path d="M2 20 L34 18 L34 28 L2 30 Z" fill="url(#graniteTexture)" opacity="0.2"/>
        <path d="M2 30 L34 28 L36 32 L4 34 Z" fill="#1e3a8a" opacity="0.8"/>
        <path d="M2 20 L34 18 L34 22 L2 24 Z" fill="url(#accentGradient)" opacity="0.1"/>
        <circle cx="30" cy="20" r="1.5" fill="url(#accentGradient)" opacity="0.6"/>
      </g>
      
      <text x="48" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontSize="18" fontWeight="700" fill="url(#logoGradient)">
        New
      </text>
      <text x="48" y="42" fontFamily="system-ui, -apple-system, sans-serif" fontSize="18" fontWeight="700" fill="url(#logoGradient)">
        Countertops
      </text>
      <text x="168" y="30" fontFamily="system-ui, -apple-system, sans-serif" fontSize="12" fontWeight="600" fill="url(#accentGradient)">
        .com
      </text>
      
      <circle cx="45" cy="48" r="1" fill="url(#accentGradient)" opacity="0.4"/>
      <circle cx="155" cy="15" r="0.8" fill="url(#accentGradient)" opacity="0.3"/>
    </svg>
  )
}
