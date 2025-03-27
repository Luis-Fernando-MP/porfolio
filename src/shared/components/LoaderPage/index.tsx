'use client'

import Logo from '@/shared/assets/Logo'
import ShumLogo from '@/shared/assets/ShumLogo'
import ShumDev from '@/shared/ui/ShumDev'
import React, { useEffect, useRef, useState } from 'react'

import './style.scss'

const LoaderPage = () => {
  const [loading, setLoading] = useState(true)
  const $loaderRef = useRef<HTMLElement>(null)

  // useEffect(() => {
  //   setLoading(false)
  // }, [])

  if (!loading) return null

  return (
    <section ref={$loaderRef} className='loaderApp' style={{ opacity: loading ? 1 : 0 }}>
      <ShumDev size='lg' transparent className='loaderApp-logo' />
      <h2>Shumi dev</h2>
    </section>
  )
}

export default LoaderPage
