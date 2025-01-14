import { motion, useAnimate } from 'framer-motion'

export const MaxButton = ({ onClick }: { onClick: () => void }) => {
  const [scope, animate] = useAnimate()

  return (
    <motion.button
      type="button"
      ref={scope}
      className="h-auto p-0 text-sm"
      style={{
        background: '-webkit-linear-gradient(rgba(140,132,247,1), rgba(228,130,144,1))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
      onClick={() => {
        animate(
          [
            [scope.current, { scale: 0.85 }],
            [scope.current, { scale: 1 }],
          ],
          {
            defaultTransition: { ease: 'easeOut' },
            duration: 0.1,
          },
        )
        onClick()
      }}
    >
      MAX
    </motion.button>
  )
}
