const HEX_REGEX = /[a-f0-9]{6}|[a-f0-9]{3}/i

function hex2rgb(hex: string) {
  const match = hex.match(HEX_REGEX)
  if (!match) {
    return undefined
  }

  let colorString = match[0]

  if (match[0].length === 3) {
    colorString = colorString
      .split('')
      .map((char) => {
        return char + char
      })
      .join('')
  }

  const integer = parseInt(colorString, 16)
  // eslint-disable-next-line no-bitwise
  const r = (integer >> 16) & 0xff
  // eslint-disable-next-line no-bitwise
  const g = (integer >> 8) & 0xff
  // eslint-disable-next-line no-bitwise
  const b = integer & 0xff

  return [r, g, b]
}

export { hex2rgb }
