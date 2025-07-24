import dynamic from 'next/dynamic'

/**
 * A draggable popup component that renders content in a modal window
 * @param {ReactNode} children - Content to display in popup
 * @param {string} className - Additional CSS classes
 * @param {boolean} isOpen - Controls popup visibility
 * @param {() => void} onClose - Close handler
 * @param {string} title - Popup title
 * @param {PopupPositions} clickPosition - Initial position
 * @returns {JSX.Element | null} Rendered Popup component
 */
const Popup = dynamic(() => import('./PopupComponent'), {
  ssr: false
})

export default Popup
