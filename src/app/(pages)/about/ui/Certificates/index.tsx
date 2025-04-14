'use client'

import { relevantCertificates } from '@/constants/certificates'
import Popup from '@/shared/components/Popup'
import { PopupPositions } from '@/shared/components/Popup/usePopup'
import SpotlightCard from '@/shared/components/SpotlightCard'
import { GraduationCapIcon } from 'lucide-react'
import { type FC, MouseEvent, useState } from 'react'

import './style.scss'
import './userMobile.scss'

const Certificates: FC = () => {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState<PopupPositions>({ x: 0, y: 0 })

  const handleOpen = (e: MouseEvent): void => {
    setOpen(!open)
    setPosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <>
      <SpotlightCard className='certificates-spotlight border' aria-label='Certificados y títulos académicos'>
        <button className='certificates' onClick={handleOpen} aria-expanded={open} aria-controls='certificates-popup'>
          <div className='certificates-left'>
            <div className='borderIcon' aria-hidden='true'>
              <GraduationCapIcon />
            </div>
            <h2>
              Certificados y <br /> Títulos
            </h2>
          </div>

          <div className='certificates-right'>
            <p>
              Todos los días trato de aprender algo nuevo. Estos certificados y títulos son los que he obtenido hasta ahora,
              pronto habrá más!!
            </p>
            <ul className='certificates-relevant' aria-label='Certificados más relevantes'>
              {relevantCertificates.slice(0, 3).map(certificate => {
                const { grade } = certificate
                return <li key={grade}>{grade}</li>
              })}
            </ul>
          </div>
        </button>
      </SpotlightCard>

      <Popup isOpen={open} onClose={() => setOpen(!open)} clickPosition={position} title='Títulos y certificados'>
        holita
      </Popup>
    </>
  )
}

export default Certificates
