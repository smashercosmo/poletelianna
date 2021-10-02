import type { Colors } from './useBaseProps'

const nonThemeColors = new Set(['transparent', 'white', 'black'])

function getColor(color: Colors) {
  if (nonThemeColors.has(color)) {
    return color
  }

  return `var(--${color})`
}

export { getColor }
