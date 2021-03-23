import { useSpring, config } from '@react-spring/web'

import { getMediaQueryList } from '../lib/getMediaQueryList'
import type { breakpoints } from '../lib/getMediaQueryList'

const isBrowser = typeof window !== 'undefined'

function useAnimateScale({
  animateAt,
  disable = false,
  currentWindow,
}: {
  animateAt?: keyof typeof breakpoints
  disable?: boolean
  currentWindow?: Window
}) {
  const isDesktop =
    isBrowser && animateAt
      ? getMediaQueryList({ breakpoint: animateAt }).matches
      : false
  const prefersReducedMotion = isBrowser
    ? getMediaQueryList({
        media: 'prefers-reduced-motion: reduce',
      }).matches
    : false

  const style = useSpring({
    from: { scale: 0.1 },
    to: { scale: 1 },
    onChange: {
      scale() {
        if (isDesktop) {
          const { documentElement } = (currentWindow || window).document
          const { scrollWidth, clientWidth, scrollHeight, clientHeight } =
            documentElement
          const maxScrollLeft = scrollWidth - clientWidth
          const maxScrollTop = scrollHeight - clientHeight
          documentElement.scrollLeft = maxScrollLeft / 2
          documentElement.scrollTop = maxScrollTop / 2
        }
      },
    },
    immediate: !isDesktop || prefersReducedMotion || disable,
    config: config.slow,
  })

  return { style }
}

export { useAnimateScale }
