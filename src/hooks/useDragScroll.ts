import * as React from 'react'
import { useGesture } from 'react-use-gesture'
import { useSpring, config } from '@react-spring/web'

function clamp(min: number, val: number, max: number) {
  return Math.min(Math.max(min, val), max)
}

const isServer = typeof window === 'undefined'

function useDragScroll(currentWindow?: Window) {
  const win = isServer ? undefined : currentWindow || window
  const documentElement = win?.document.documentElement
  const scrollX = win ? win.scrollX : 0
  const scrollY = win ? win.scrollY : 0

  const [values] = useSpring(
    {
      // @ts-ignore bug with react-spring types
      from: {
        x: scrollX,
        y: scrollY,
      },
      onChange: {
        x(value: number) {
          if (!documentElement) return
          documentElement.scrollLeft = value
        },
        y(value: number) {
          if (!documentElement) return
          documentElement.scrollTop = value
        },
      },
      config: config.slow,
    },
    [],
  )

  function setX(
    movement: number,
    down: boolean,
    direction: number,
    velocity: number,
  ) {
    if (!documentElement) return
    const { scrollWidth, clientWidth } = documentElement
    const minScrollLeft = 0
    const maxScrollLeft = scrollWidth - clientWidth
    const value = down ? movement : movement + direction * velocity * 200
    const to = clamp(minScrollLeft, value, maxScrollLeft)
    if (down) values.x.set(to)
    else values.x.start({ to })
  }

  function setY(
    movement: number,
    down: boolean,
    direction: number,
    velocity: number,
  ) {
    if (!documentElement) return
    const { scrollHeight, clientHeight } = documentElement
    const minScrollTop = 0
    const maxScrollTop = scrollHeight - clientHeight
    const value = down ? movement : movement + direction * velocity * 200
    const to = clamp(minScrollTop, value, maxScrollTop)
    if (down) values.y.set(to)
    else values.y.start({ to })
  }

  useGesture(
    {
      onDrag(props) {
        const {
          down,
          vxvy: [vx, vy],
          direction: [directionX, directionY],
          movement: [movementX, movementY],
        } = props
        setX(-movementX, down, -directionX, Math.abs(vx))
        setY(-movementY, down, -directionY, Math.abs(vy))
      },
      onWheel() {
        if (!win) return
        if (values.x.isAnimating) values.x.stop()
        if (values.y.isAnimating) values.y.stop()
        values.x.set(win.scrollX)
        values.y.set(win.scrollY)
      },
    },
    {
      drag: {
        initial: () => {
          return documentElement
            ? [-documentElement.scrollLeft, -documentElement.scrollTop]
            : [0, 0]
        },
      },
      window: win,
      domTarget: win,
    },
  )

  React.useEffect(() => {
    win?.document.body.classList.add('hide-scrollbar')
    return () => {
      win?.document.body.classList.remove('hide-scrollbar')
    }
  })

  return {
    isAnimating() {
      return values.x.isAnimating || values.y.isAnimating
    },
  }
}

export { useDragScroll }
