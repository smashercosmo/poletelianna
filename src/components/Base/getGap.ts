import { getProperty } from './getProperty'

import type { Gap } from './Base'

function getGap(props: { gap?: Gap; rowGap?: Gap; columnGap?: Gap }) {
  const { gap, rowGap: _rowGap, columnGap: _columnGap } = props

  const names = {
    rowGap: 'r-gap',
    columnGap: 'c-gap',
  }

  const values = {
    rowGap: _rowGap ?? gap,
    columnGap: _columnGap ?? gap,
  }

  const rowGap = getProperty({
    name: names.rowGap,
    value: values.rowGap,
  })

  const columnGap = getProperty({
    name: names.columnGap,
    value: values.columnGap,
  })

  return {
    ...rowGap,
    ...columnGap,
  }
}

export { getGap }
