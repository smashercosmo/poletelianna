import { getProperty } from './getProperty'

import type { Dimensions } from './Base'

function getDimensions(props: {
  width?: Dimensions
  height?: Dimensions
  minWidth?: Dimensions
  maxWidth?: Dimensions
  minHeight?: Dimensions
  maxHeight?: Dimensions
}) {
  const { width, height, minWidth, minHeight, maxWidth, maxHeight } = props

  const names = {
    width: 'w',
    height: 'h',
    minWidth: 'min-w',
    minHeight: 'min-h',
    maxWidth: 'max-w',
    maxHeight: 'max-h',
  }

  return {
    ...getProperty({ name: names.width, value: width }),
    ...getProperty({ name: names.height, value: height }),
    ...getProperty({ name: names.minWidth, value: minWidth }),
    ...getProperty({ name: names.minHeight, value: minHeight }),
    ...getProperty({ name: names.maxWidth, value: maxWidth }),
    ...getProperty({ name: names.maxHeight, value: maxHeight }),
  }
}

export { getDimensions }
