'use client'

import { type JSX, type ReactNode, useEffect, useState } from 'react'

import LoaderPage from './LoaderPage'
import useLoadStore from './useLoadStore'

interface IHydration {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
}

const Hydration = ({ children }: IHydration): JSX.Element => {
  const [isHydrated, setIsHydrated] = useState(false)
  useLoadStore()

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  // return <>{children}</>
  return <>{isHydrated ? <>{children}</> : <LoaderPage />}</>
  // return <LoaderPage />
}

export default Hydration
