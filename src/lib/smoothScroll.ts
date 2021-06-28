import {
  isSmoothScrollSupported,
  isPassiveOptionSupported,
} from './isSupported'

function easingOutQuint(x: number, t: number, b: number, c: number, d: number) {
  // eslint-disable-next-line no-param-reassign, no-return-assign
  return c * ((t = t / d - 1) * t * t * t * t + 1) + b
}

function smoothScrollPolyfill(node: HTMLElement, scrollPosition: number) {
  const startTime = Date.now()
  const offset = node.scrollLeft
  const gap = scrollPosition - offset
  const duration = 1000
  let interrupt = false

  function cancel() {
    interrupt = true
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    cleanup()
  }

  function cleanup() {
    node.removeEventListener('wheel', cancel)
    node.removeEventListener('touchstart', cancel)
  }

  function step() {
    const elapsed = Date.now() - startTime
    const percentage = elapsed / duration

    if (interrupt) {
      return
    }

    if (percentage > 1) {
      cleanup()
      return
    }

    // eslint-disable-next-line no-param-reassign
    node.scrollLeft = easingOutQuint(0, elapsed, offset, gap, duration)
    window.requestAnimationFrame(step)
  }

  node.addEventListener(
    'wheel',
    cancel,
    isPassiveOptionSupported ? { passive: true } : false,
  )
  node.addEventListener(
    'touchstart',
    cancel,
    isPassiveOptionSupported ? { passive: true } : false,
  )

  step()

  return cancel
}

export function smoothScroll(node: HTMLElement, left: number) {
  if (isSmoothScrollSupported) {
    node.scrollTo({
      left,
      behavior: 'smooth',
    })
  } else {
    smoothScrollPolyfill(node, left)
  }
}
