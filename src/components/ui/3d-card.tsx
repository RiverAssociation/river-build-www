'use client'
import { cn } from '@/lib/utils'
import React, { createContext, useContext, useEffect, useRef, useState } from 'react'

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined)

export const CardContainer = ({
  children,
  className,
  containerClassName,
  onClick,
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  onClick?: () => void
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMouseEntered, setIsMouseEntered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) / 25
    const y = (e.clientY - top - height / 2) / 25
    let w = containerRef.current.clientWidth
    let h = containerRef.current.clientHeight
    let b = containerRef.current.getBoundingClientRect()

    let X = (e.clientX - b.left) / w
    let Y = (e.clientY - b.top) / h
    let rX = -(X - 0.5) * 26
    let rY = (Y - 0.5) * 26

    let bgX = 40 + 20 * X
    let bgY = 40 + 20 * Y

    document.documentElement.style.setProperty('--x-layer', 100 * X + '%')
    document.documentElement.style.setProperty('--y-layer', 100 * Y + '%')

    document.documentElement.style.setProperty('--bg-x', bgX + '%')
    document.documentElement.style.setProperty('--bg-y', bgY + '%')

    document.documentElement.style.setProperty('--r-x', rX + 'deg')
    document.documentElement.style.setProperty('--r-y', rY + 'deg')

    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseEntered(true)
    if (!containerRef.current) return
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    setIsMouseEntered(false)
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`
  }
  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn('flex items-center justify-center py-20', containerClassName)}
        style={{
          perspective: '1000px',
        }}
        onClick={onClick}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            'relative flex items-center justify-center transition-all duration-200 ease-linear',
            className,
          )}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {isMouseEntered && (
            <>
              <div className="card__layer1"></div>
              <div className="card__layer2"></div>
            </>
          )}
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  )
}

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'h-96 w-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]',
        className,
      )}
    >
      {children}
    </div>
  )
}

export const CardItem = ({
  as: Tag = 'div',
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  translateX?: number | string
  translateY?: number | string
  translateZ?: number | string
  rotateX?: number | string
  rotateY?: number | string
  rotateZ?: number | string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isMouseEntered] = useMouseEnter()

  useEffect(() => {
    handleAnimations()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMouseEntered])

  const handleAnimations = () => {
    if (!ref.current) return
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`
    }
  }
  return React.createElement(
    Tag,
    {
      ref,
      className: cn('w-fit transition duration-200 ease-linear', className),
      ...rest,
    },
    children,
  )
}

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext)
  if (context === undefined) {
    throw new Error('useMouseEnter must be used within a MouseEnterProvider')
  }
  return context
}
