// TODO share media queries between css and js
const breakpoints = {
  sm: 480,
  md: 720,
  lg: 1024,
  xl: 1280,
} as const

function getMediaQueryList(
  args: { breakpoint: keyof typeof breakpoints } | { media: string },
) {
  if ('breakpoint' in args) {
    return window.matchMedia(`(min-width: ${breakpoints[args.breakpoint]}px)`)
  }

  return window.matchMedia(`(${args.media})`)
}

export { breakpoints }
export { getMediaQueryList }
