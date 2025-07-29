'use client'

import { type Audio } from '@/constants/audio'
import { acl } from '@/shared/acl'
import useSound from '@/shared/hook/useSound'
import Link from 'next/link'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, FC, MouseEvent, ReactNode, Ref } from 'react'

import LabelText from '../LabelText'
import './style.scss'

type CommonProps = {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
  label?: string
  label_position?: 'top' | 'bottom' | 'left' | 'right'
  outline?: boolean
  className?: string
  transparent?: boolean
  active?: boolean
  contentClass?: string
  isLink?: boolean
  disable?: boolean
  noSound?: boolean
  soundType?: Audio
  noPadding?: boolean
}

type ButtonProps = CommonProps & {
  isLink?: false
  ref?: Ref<HTMLButtonElement>
} & ButtonHTMLAttributes<HTMLButtonElement>

type LinkProps = CommonProps & {
  isLink: true
  href: string
  ref?: Ref<HTMLAnchorElement>
} & AnchorHTMLAttributes<HTMLAnchorElement>

type Props = ButtonProps | LinkProps

/**
 * IconButton component
 *
 * Renders a styled button or a Next.js link with optional label and icon.
 * By default, plays a sound on click unless explicitly disabled.
 *
 * @param {ReactNode} children - The icon or visual element inside the button.
 * @param {string} label - Optional text label displayed around the icon.
 * @param {'top' | 'bottom' | 'left' | 'right'} label_position - Where the label appears relative to the icon.
 * @param {boolean} outline - Applies outline style.
 * @param {boolean} transparent - Applies transparent style.
 * @param {boolean} active - Applies active style.
 * @param {string} className - Additional custom class names.
 * @param {string} contentClass - Class name for the inner content wrapper.
 * @param {boolean} isLink - When true, renders a Next.js link instead of a button.
 * @param {boolean} disable - Prevents any interaction and applies disabled style.
 * @param {boolean} noSound - If true, prevents sound from playing on click.
 * @param {Audio} soundType - Type of sound to play. Defaults to 'BUTTON_ON'.
 * @param {boolean} noPadding - If true, removes default padding from the button.
 * @param {string} href - URL destination for the link (required if isLink is true).
 *
 * @example
 * // Render as a button with sound
 * <IconButton
 *   label="Play"
 *   label_position="bottom"
 *   outline
 * >
 *   <PlayIcon />
 * </IconButton>
 *
 * // Render as a link with no sound
 * <IconButton
 *   label="Go"
 *   isLink
 *   href="/dashboard"
 *   noSound
 * >
 *   <ArrowIcon />
 * </IconButton>
 *
 * // Render with a custom sound type
 * <IconButton
 *   label="Menu!"
 *   soundType="MENU_OPEN"
 * >
 *   <MenuIcon />
 * </IconButton>
 *
 * // Render with no padding
 * <IconButton
 *   noPadding
 * >
 *   <SmallIcon />
 * </IconButton>
 */
const IconButton: FC<Props> = ({
  ref,
  children,
  label,
  label_position = 'top',
  outline = false,
  className = '',
  transparent = false,
  active = false,
  contentClass = '',
  isLink = false,
  disable = false,
  noSound = false,
  soundType = 'BUTTON_ON',
  noPadding = false,
  onClick,
  ...props
}) => {
  const [playSound] = useSound(soundType, { interrupt: true })

  const parsedClassName = `iconButton ${acl(outline, 'outline')} ${acl(transparent, 'transparent')} ${acl(active, 'active')} ${acl(disable, 'disabled')} ${acl(noPadding, 'noPadding')} ${className}`

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    if (disable) return
    if (e.target instanceof HTMLButtonElement) e.preventDefault()
    if (!noSound) playSound()
    onClick?.(e as any)
  }

  const content = (
    <>
      <div className={`iconButton-content ${contentClass}`}>{children}</div>
      {label && <LabelText className={`iconButton-label border ${label_position}`}>{label}</LabelText>}
    </>
  )

  if (isLink && 'href' in props && !disable) {
    return (
      <Link
        ref={ref as Ref<HTMLAnchorElement>}
        href={props.href}
        className={parsedClassName}
        onClick={handleClick}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      ref={ref as Ref<HTMLButtonElement>}
      className={parsedClassName}
      disabled={disable}
      onClick={handleClick}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  )
}

export default IconButton
