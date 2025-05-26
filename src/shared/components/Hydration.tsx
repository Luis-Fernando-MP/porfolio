'use client'

import useAppTheme from '@/app/components/ThemesSelector/hooks/useAppTheme'
import { type JSX, type ReactNode, useLayoutEffect, useState } from 'react'

import LoaderPage from './LoaderPage'

interface IHydration {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
}

const Hydration = ({ children }: IHydration): JSX.Element => {
  const [isHydrated, setIsHydrated] = useState(false)
  useAppTheme()

  useLayoutEffect(() => {
    setIsHydrated(true)
  }, [])

  return <>{isHydrated ? <>{children}</> : <LoaderPage />}</>
  // return <>{children}</>
}

export default Hydration
