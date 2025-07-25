import { MouseEvent, TouchEvent, useCallback, useEffect, useRef, useState } from 'react'

export type PopupPositions = { x: number; y: number }

interface IUsePopupHook {
  isOpen: boolean
  clickPosition?: PopupPositions
  onClose: () => void
}

const usePopup = ({ isOpen, clickPosition, onClose }: IUsePopupHook) => {
  const $popupRef = useRef<HTMLElement>(null)
  const $dragPosition = useRef<PopupPositions | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState<PopupPositions>({ x: 0, y: 0 })
  const bodyRect = document.documentElement.getBoundingClientRect()

  const handleMouseMove = useCallback(
    (e: globalThis.MouseEvent) => {
      requestAnimationFrame(() => {
        if (!isDragging || !$dragPosition.current || !$popupRef.current || !e.buttons) return
        e.preventDefault()
        const rect = $popupRef.current.getBoundingClientRect()
        const deltaX = e.clientX - $dragPosition.current.x
        const deltaY = e.clientY - $dragPosition.current.y
        const minX = 0
        const minY = 0
        const maxX = bodyRect.width - rect.width
        const maxY = bodyRect.height - rect.height
        $dragPosition.current = { x: e.clientX, y: e.clientY }
        setPosition(prev => {
          let newX = prev.x + deltaX
          let newY = prev.y + deltaY
          newX = Math.max(minX, Math.min(newX, maxX))
          newY = Math.max(minY, Math.min(newY, maxY))
          return { x: newX, y: newY }
        })
      })
    },
    [bodyRect, isDragging]
  )

  const handleTouchMove = useCallback(
    (e: globalThis.TouchEvent) => {
      if (!isDragging || !$dragPosition.current || !$popupRef.current) return
      e.preventDefault()
      const touch = e.touches[0]
      const rect = $popupRef.current.getBoundingClientRect()
      const deltaX = touch.clientX - $dragPosition.current.x
      const deltaY = touch.clientY - $dragPosition.current.y
      const minX = 0
      const minY = 0
      const maxX = bodyRect.width - rect.width
      const maxY = bodyRect.height - rect.height
      $dragPosition.current = { x: touch.clientX, y: touch.clientY }
      setPosition(prev => {
        let newX = prev.x + deltaX
        let newY = prev.y + deltaY
        newX = Math.max(minX, Math.min(newX, maxX))
        newY = Math.max(minY, Math.min(newY, maxY))
        return { x: newX, y: newY }
      })
    },
    [bodyRect, isDragging]
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
    $popupRef.current?.classList.remove('block-children-events')
  }, [])

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
    $popupRef.current?.classList.remove('block-children-events')
  }, [])

  const bringPopupToFront = useCallback(() => {
    if (!$popupRef.current) return

    const popups = document.querySelectorAll('.popup')
    popups.forEach(popup => {
      if (!(popup instanceof HTMLElement)) return
      popup.style.zIndex = '10'
    })
    if ($popupRef.current) $popupRef.current.style.zIndex = '11'
  }, [$popupRef])

  const handleMouseDown = (e: MouseEvent) => {
    const moveOnHeader = (e.target as HTMLElement).closest('#popup-header')
    if (!$popupRef.current) return

    if (moveOnHeader || e.ctrlKey) {
      $popupRef.current?.classList.add('block-children-events')
      $dragPosition.current = { x: e.clientX, y: e.clientY }
      setIsDragging(true)
      bringPopupToFront()
    }
  }

  const handleTouchStart = (e: TouchEvent) => {
    const touch = e.touches[0]
    const moveOnHeader = (touch.target as HTMLElement).closest('#popup-header')
    if (!$popupRef.current || !moveOnHeader) return
    setIsDragging(true)
    bringPopupToFront()
    $dragPosition.current = { x: touch.clientX, y: touch.clientY }
  }

  const calculateInitialPosition = useCallback(
    (rect: DOMRect) => {
      if (!clickPosition) return

      $popupRef.current?.classList.add('animate')
      const { width: popupWidth, height: popupHeight } = rect
      const { width: innerWidth, height: innerHeight } = bodyRect
      let { x: newX, y: newY } = clickPosition
      if (newX === 0 && newY === 0) {
        newX = innerWidth / 2 - popupWidth / 2
        newY = innerHeight / 2 - popupHeight / 2
      }

      newX = Math.min(newX, innerWidth - popupWidth)
      newY = Math.min(newY, innerHeight - popupHeight)

      handleRemoveAnimatedClass()

      return { x: newX, y: newY }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [bodyRect]
  )

  const handleRemoveAnimatedClass = useCallback(() => {
    if (!$popupRef.current) return

    const removeClass = () => {
      $popupRef.current?.classList.remove('animate')
      $popupRef.current?.removeEventListener('animationend', removeClass)
    }

    $popupRef.current.addEventListener('animationend', removeClass)
  }, [])

  useEffect(() => {
    bringPopupToFront()
  }, [isOpen, bringPopupToFront])

  useEffect(() => {
    if (!$popupRef.current || !isOpen) return
    const rect = $popupRef.current.getBoundingClientRect()
    const newPosition = calculateInitialPosition(rect)
    if (!newPosition) return
    if (position.x !== newPosition.x || position.y !== newPosition.y) {
      setPosition(newPosition)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  useEffect(() => {
    const currentPopupRef = $popupRef.current
    if (!isOpen || !currentPopupRef) return
    const handleKeyEvent = (e: KeyboardEvent): void => {
      if (!(e.ctrlKey && (e.key === 'x' || e.key === 'Escape'))) return
      onClose()
    }
    currentPopupRef.addEventListener('keydown', handleKeyEvent)
    return () => {
      currentPopupRef?.removeEventListener('keydown', handleKeyEvent)
    }
  }, [isOpen, onClose])

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('touchmove', handleTouchMove, { passive: false })
    document.addEventListener('touchend', handleTouchEnd)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd])

  return {
    $popupRef,
    handleMouseDown,
    handleTouchStart,
    position,
    isDragging
  }
}

export default usePopup
