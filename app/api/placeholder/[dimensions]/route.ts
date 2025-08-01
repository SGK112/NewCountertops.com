import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { dimensions: string } }
) {
  try {
    const [width, height] = params.dimensions.split('x').map(Number)
    
    if (!width || !height || width > 1200 || height > 800) {
      throw new Error('Invalid dimensions')
    }

    // Generate SVG placeholder
    const svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)"/>
        <text x="50%" y="50%" font-family="system-ui" font-size="${Math.min(width, height) * 0.1}" 
              fill="white" text-anchor="middle" dominant-baseline="middle" font-weight="bold">
          ${width}×${height}
        </text>
      </svg>
    `

    return new NextResponse(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=31536000',
      },
    })
  } catch (error) {
    // Return a simple SVG if something goes wrong
    const defaultSvg = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#f3f4f6"/>
        <text x="50%" y="50%" font-family="system-ui" font-size="16" 
              fill="#6b7280" text-anchor="middle" dominant-baseline="middle">
          No Image
        </text>
      </svg>
    `
    
    return new NextResponse(defaultSvg, {
      headers: {
        'Content-Type': 'image/svg+xml',
      },
    })
  }
}
