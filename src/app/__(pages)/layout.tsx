import type { JSX, ReactNode } from 'react'

import MainApp from '../components/MainApp'

interface IRootLayout {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
}

const RootLayout = async ({ children }: IRootLayout): Promise<JSX.Element> => {
  return <MainApp>{children}</MainApp>
}

export default RootLayout
