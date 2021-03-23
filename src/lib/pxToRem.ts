const BASE_FONT_SIZE = 16

function pxToRem(valueInPixels?: number) {
  if (!valueInPixels) return undefined
  return `${Number((valueInPixels / BASE_FONT_SIZE).toFixed(3))}rem`
}

export { pxToRem }
