'use client'

import { INFO } from '@/constants'
import HauiDevLogo from '@/shared/ui/HauiDevLogo'
import React, { useEffect, useRef, useState } from 'react'

import './style.scss'

const LoaderPage = () => {
  const [loading, setLoading] = useState(true)
  const $loaderRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (!loading) return null

  return (
    <section
      ref={$loaderRef}
      className='loaderApp'
      role='status'
      aria-label='Loading page'
      style={{
        opacity: loading ? 1 : 0
      }}
    >
      <div className='loaderApp-content'>
        <HauiDevLogo size='lg' radius='rounded' aria-label='Developer logo' />
        <h4>{INFO.devName}</h4>
      </div>
      <p className='sr-only'>Loading content, please wait...</p>
    </section>
  )
}

export default LoaderPage
