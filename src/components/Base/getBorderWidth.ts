import { getProperty } from './getProperty'

function getBorderWidth(props: {
  borderWidth?: number
  borderLeftWidth?: number
  borderRightWidth?: number
  borderTopWidth?: number
  borderBottomWidth?: number
}) {
  const {
    borderWidth,
    borderLeftWidth: _borderLeftWidth,
    borderRightWidth: _borderRightWidth,
    borderTopWidth: _borderTopWidth,
    borderBottomWidth: _borderBottomWidth,
  } = props

  const names = {
    borderLeftWidth: 'bdlw',
    borderRightWidth: 'bdrw',
    borderTopWidth: 'bdtw',
    borderBottomWidth: 'bdbw',
  }

  const values = {
    borderLeftWidth: _borderLeftWidth ?? borderWidth,
    borderRightWidth: _borderRightWidth ?? borderWidth,
    borderTopWidth: _borderTopWidth ?? borderWidth,
    borderBottomWidth: _borderBottomWidth ?? borderWidth,
  }

  const borderLeftWidth = getProperty({
    name: names.borderLeftWidth,
    value: values.borderLeftWidth,
  })

  const borderRightWidth = getProperty({
    name: names.borderRightWidth,
    value: values.borderRightWidth,
  })

  const borderTopWidth = getProperty({
    name: names.borderTopWidth,
    value: values.borderTopWidth,
  })

  const borderBottomWidth = getProperty({
    name: names.borderBottomWidth,
    value: values.borderBottomWidth,
  })

  return {
    ...borderLeftWidth,
    ...borderRightWidth,
    ...borderTopWidth,
    ...borderBottomWidth,
  }
}

export { getBorderWidth }
