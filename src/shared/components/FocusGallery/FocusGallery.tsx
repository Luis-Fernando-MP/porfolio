'use client'

import { acl } from '@/shared/acl'
import IconButton from '@/shared/ui/IconButton'
import { Image } from '@unpic/react/nextjs'
import { ArrowLeft, ArrowRight, ExternalLink, X, ZoomIn, ZoomOut } from 'lucide-react'
import { createPortal } from 'react-dom'

import './style.scss'
import { useFocusGallery } from './useFocusGallery'
import './userMobile.scss'

const FocusGalleryComponent = () => {
  const body = document?.body
  const modal = useFocusGallery()

  const {
    isModalOpen,
    activeImage,
    currentImageIndex,
    isImageZoomed,
    panPosition,
    canNavigateToPrevious,
    canNavigateToNext,
    hasMultipleImages,
    imageGallery,
    modalContainerRef,
    mainImageRef,
    btnCloseRef,
    zoomScale,
    closeModal,
    navigateToPrevious,
    navigateToNext,
    navigateToIndex,
    toggleImageZoom,
    handleMouseDown,
    handleMouseUp,
    HandleCloseOverlay
  } = modal

  if (!isModalOpen || !activeImage) return null

  const { src, caption, action, actionText } = activeImage
  const transform = `scale(${zoomScale}) translate(${panPosition.x}px, ${panPosition.y}px)`

  const Modal = (
    <div
      role='dialog'
      aria-modal='true'
      aria-label='Image gallery modal'
      className='gallery fade'
      ref={modalContainerRef}
      onClick={HandleCloseOverlay}
    >
      <nav className='gallery-controls gallery-block frow' aria-label='Gallery controls'>
        <IconButton onClick={navigateToPrevious} disable={!canNavigateToPrevious}>
          <ArrowLeft />
          <span className='sr-only'>Previous image</span>
          <h4 aria-hidden='true'>Anterior</h4>
        </IconButton>

        <IconButton onClick={closeModal} ref={btnCloseRef} soundType='BUTTON_OFF'>
          <X />
          <span className='sr-only'>Close gallery</span>
          <h4 aria-hidden='true'>Cerrar</h4>
        </IconButton>

        {hasMultipleImages && (
          <h6 aria-live='polite'>
            {currentImageIndex + 1} / {imageGallery.length}
          </h6>
        )}

        <IconButton onClick={toggleImageZoom}>
          {isImageZoomed ? <ZoomOut /> : <ZoomIn />}
          <span className='sr-only'>{isImageZoomed ? 'Zoom out' : 'Zoom in'}</span>
          <h4 aria-hidden='true'>{isImageZoomed ? 'Reducir zoom' : 'Ampliar zoom'}</h4>
        </IconButton>

        <IconButton onClick={navigateToNext} disable={!canNavigateToNext}>
          <span className='sr-only'>Next image</span>
          <h4 aria-hidden='true'>Siguiente</h4>
          <ArrowRight />
        </IconButton>
      </nav>

      <figure
        className='gallery-figure'
        onClick={e => e.stopPropagation()}
        onDoubleClick={toggleImageZoom}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <header className={`gallery-header ${acl(!!caption, 'whitCaption gallery-block')}`} aria-label='Image information'>
          {action && (
            <IconButton isLink active href={action} target='_blank' rel='noopener noreferrer' aria-label='Open related link'>
              <ExternalLink />
              <h4>{actionText}</h4>
            </IconButton>
          )}
          {caption && <figcaption aria-live='polite' dangerouslySetInnerHTML={{ __html: caption }} />}
        </header>
        {!isImageZoomed && (
          <div className='gallery-keyboard gallery-block fade mflex border'>
            <p>
              <kbd>Esc</kbd> Close
            </p>
            <p>
              <kbd>←</kbd> <kbd>→</kbd> Navigate
            </p>
            <p>
              <kbd>Enter</kbd> <kbd>Space</kbd> Zoom
            </p>
            <p>
              <kbd>Wheel</kbd> <kbd>DblClick</kbd> Zoom
            </p>
          </div>
        )}
        <img
          src={src}
          ref={mainImageRef}
          draggable={false}
          fetchPriority='high'
          alt={caption ?? 'Image from gallery'}
          style={{ transform: isImageZoomed ? transform : undefined }}
          className={`gallery-mainImage ${acl(isImageZoomed, 'zoomed')}`}
        />
      </figure>

      {hasMultipleImages && (
        <nav className='gallery-navigation gallery-block border' aria-label='Image thumbnails navigation'>
          <div className='gallery-thumbnails frow'>
            {imageGallery.map((galleryImage, imageIndex) => {
              const key = `thumbnail-${imageIndex}`
              return (
                <IconButton
                  key={key}
                  noPadding
                  className={`gallery-thumbnail ${acl(imageIndex === currentImageIndex, 'showing')}`}
                  onClick={() => navigateToIndex(imageIndex)}
                  aria-label={`Thumbnail ${imageIndex + 1}`}
                >
                  <Image
                    src={galleryImage.src}
                    width={60}
                    height={60}
                    loading='lazy'
                    fetchPriority='low'
                    background='/fallback.webp'
                    alt={`Thumbnail ${imageIndex + 1}`}
                  />
                </IconButton>
              )
            })}
          </div>
        </nav>
      )}
    </div>
  )

  return createPortal(Modal, body)
}

export default FocusGalleryComponent
