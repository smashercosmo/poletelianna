import { useState } from 'react'

import { hex2rgb } from '../lib/hex2rgb'
import { DEFAULT_BG_STRING } from '../lib/constants'

import type { MouseEvent, FocusEvent } from 'react'

function useAnimateBackground(
  initialBg?: `rgb(${number}, ${number}, ${number})`,
) {
  const defaultBg = initialBg || DEFAULT_BG_STRING
  const [backgroundColor, setBackgroundColor] = useState(defaultBg)

  function animateOnMouseOverOrFocus(event: MouseEvent | FocusEvent) {
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
          setBackgroundColor(`rgb(${r}, ${g}, ${b})` as const)
        }
      } else {
        setBackgroundColor(defaultBg)
      }
    }
  }

  function animateOnMouseOutOrBlur(event: MouseEvent | FocusEvent) {
    if (
      event.type === 'blur' ||
      (event.target && event.target instanceof HTMLImageElement)
    ) {
      setBackgroundColor(defaultBg)
    }
  }

  return {
    backgroundColor,
    animateOnMouseOverOrFocus,
    animateOnMouseOutOrBlur,
  }
}

export { useAnimateBackground }
