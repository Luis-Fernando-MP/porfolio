'use client'

import { type JSX, type ReactNode, useLayoutEffect, useState } from 'react'

import LoaderPage from './LoaderPage'
import useLoadStore from './useLoadStore'

interface IHydration {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
}

const Hydration = ({ children }: IHydration): JSX.Element => {
  const [isHydrated, setIsHydrated] = useState(false)
  useLoadStore()

  useLayoutEffect(() => {
    setIsHydrated(true)
  }, [])

  return <>{isHydrated ? <>{children}</> : <LoaderPage />}</>
  // return <>{children}</>
}

export default Hydration
