import ThemeController from '@/shared/components/ThemeController'
import ShumDev from '@/shared/ui/ShumDev'
import type { JSX } from 'react'

const Home = (): JSX.Element => {
  return (
    <div>
      <ShumDev />
      <ThemeController />
    </div>
  )
}

export default Home
