import type { FC, HtmlHTMLAttributes, ReactNode } from 'react'

interface Props extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
}

const BottomArrow: FC<Props> = ({ className, ...props }) => {
  return (
    <svg width='94' height='52' viewBox='0 0 94 52' fill='none' {...props}>
      <path
        d='M1.41315 4.31937C44.9767 -3.06063 121.953 -4.47513 81.3631 48.9069M80.5944 38.6056L79.2106 50.5981L90.2806 48.9069'
        stroke='rgb(var(--fnt-secondary))'
        strokeLinecap='round'
        strokeDasharray='4 4'
      />
    </svg>
  )
}

export default BottomArrow
