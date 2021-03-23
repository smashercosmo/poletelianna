import * as React from 'react'

import { hex2rgb } from '../lib/hex2rgb'

function changeBackgroundColor(bg: `rgb(${number}, ${number}, ${number})`) {
  document.body.style.backgroundColor = bg
}

function useAnimateBackground(
  defaultBg: `rgb(${number}, ${number}, ${number})`,
) {
  React.useEffect(() => {
    document.body.style.transition = 'background-color 0.5s linear'
    return () => {
      document.body.removeAttribute('style')
    }
  }, [])

  function animateOnMouseOverOrFocus(
    event: React.MouseEvent | React.FocusEvent,
  ) {
    if (
      event.currentTarget &&
      event.currentTarget instanceof HTMLElement &&
      (event.type === 'focus' ||
        (event.target && event.target instanceof HTMLImageElement))
    ) {
      const { background } = event.currentTarget.dataset
      if (background) {
        const rgbBackground = hex2rgb(background)
        if (rgbBackground) {
          const [r, g, b] = rgbBackground
          changeBackgroundColor(`rgb(${r}, ${g}, ${b})` as const)
        }
      } else {
        changeBackgroundColor(defaultBg)
      }
    }
  }

  function animateOnMouseOutOrBlur(event: React.MouseEvent | React.FocusEvent) {
    if (
      event.type === 'blur' ||
      (event.target && event.target instanceof HTMLImageElement)
    ) {
      changeBackgroundColor(defaultBg)
    }
  }

  return {
    animateOnMouseOverOrFocus,
    animateOnMouseOutOrBlur,
  }
}

export { useAnimateBackground }
