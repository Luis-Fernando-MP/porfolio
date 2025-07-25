'use client'

import useSound from '@/shared/hook/useSound'
import IconButton from '@/shared/ui/IconButton'
import { MenuIcon } from 'lucide-react'
import { Dispatch, FC, SetStateAction } from 'react'

interface Props {
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
}

const HamburgerToggle: FC<Props> = ({ show, setShow }) => {
  const [openPlay] = useSound('MENU_OPEN', { interrupt: true })
  const [closePlay] = useSound('MENU_CLOSE', { interrupt: true })

  const handleToggleMenu = (): void => {
    if (show) closePlay()
    else openPlay()
    setShow(!show)
  }

  return (
    <IconButton onClick={handleToggleMenu} transparent noSound>
      <MenuIcon />
      <h4>Menu</h4>
    </IconButton>
  )
}

export default HamburgerToggle
