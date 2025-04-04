import React, { useEffect, useMemo, useRef, useState } from 'react'

import './style.scss'

interface MasonryItem {
  id: string | number
  height: number
}

interface MasonryProps {
  data: MasonryItem[]
  children: (item: MasonryItem) => React.ReactNode
}

const Masonry: React.FC<MasonryProps> = ({ data, children }) => {
  const [columns, setColumns] = useState<number>(2)

  useEffect(() => {
    const updateColumns = () => {
      if (window.matchMedia('(min-width: 1500px)').matches) {
        setColumns(5)
      } else if (window.matchMedia('(min-width: 1000px)').matches) {
        setColumns(4)
      } else if (window.matchMedia('(min-width: 600px)').matches) {
        setColumns(3)
      } else {
        setColumns(1)
      }
    }

    updateColumns()
    window.addEventListener('resize', updateColumns)
    return () => window.removeEventListener('resize', updateColumns)
  }, [])

  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const gridItems = useMemo(() => {
    const columnHeights = new Array(columns).fill(0)
    return data.map(child => {
      const column = columnHeights.indexOf(Math.min(...columnHeights))
      const x = (width / columns) * column
      const y = columnHeights[column]
      columnHeights[column] += child.height / 2
      return {
        ...child,
        x,
        y,
        width: width / columns,
        height: child.height / 2
      }
    })
  }, [columns, data, width])

  return (
    <div ref={ref} className='masonry' style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {gridItems.map(item => (
        <div key={item.id} className='masonry-item' style={{ height: item.height }}>
          {children(item)}
        </div>
      ))}
    </div>
  )
}

export default Masonry
