import React from 'react'
import Image from 'next/image'
import logoImg from '@/assets/images/logo.png'

interface LogoProps {
  width?: number
  height?: number
  className?: string
}

export function Logo({ width, height, className }: LogoProps) {
  return (
    <Image
      src={logoImg}
      alt="BrestCare Logo"
      width={width || 180}
      height={height || 40}
      className={className}
      priority
      style={{
        objectFit: 'contain',
        maxHeight: '100px' // Ensures consistent height
      }}
    />
  )
}