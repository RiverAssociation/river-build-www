import * as React from 'react'

import { cn } from '@/lib/utils'

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    disableHover?: boolean
  }
>(
  (
    {
      className,
      children,
      disableHover,
      onMouseLeave,
      onMouseEnter,
      ...props
    }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement> & { disableHover?: boolean }>,
    ref,
  ) => {
    const [hovered, setHovered] = React.useState(false)

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      if (onMouseEnter) {
        onMouseEnter(e)
      }
      setHovered(true)
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      if (onMouseLeave) {
        onMouseLeave(e)
      }
      setHovered(false)
    }

    return (
      <div
        ref={ref}
        className={cn(
          '!rounded-3xl transition-all',
          hovered && !disableHover ? 'background-gradient p-[1.5px]' : 'bg-[#ffffff20] p-[1.5px]',
        )}
        {...props}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={cn('w-full rounded-3xl bg-gray-80', className)}>{children}</div>
      </div>
    )
  },
)
Card.displayName = 'Card'

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
  ),
)
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  ),
)
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-neutral-500 dark:text-neutral-400', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  ),
)
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
  ),
)
CardFooter.displayName = 'CardFooter'

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
