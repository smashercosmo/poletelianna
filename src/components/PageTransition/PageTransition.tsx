import { animated, useTransition } from '@react-spring/web'

import type { ReactNode } from 'react'

function PageTransition({ children }: { children: ReactNode }) {
  const transitions = useTransition(children, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 },
  })

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {transitions((style, page) => (
        <animated.div style={style}>{page}</animated.div>
      ))}
    </div>
  )
}

export { PageTransition }
