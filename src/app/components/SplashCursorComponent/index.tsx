'use client'

import SplashCursor from '@/shared/components/SplashCursor'
import { type FC, useEffect, useState } from 'react'

const SplashCursorComponent: FC = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 990)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return !isMobile && <SplashCursor />
}

export default SplashCursorComponent
