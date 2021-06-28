import { getProperty } from './getProperty'

import type { Margin } from './Base'

function getMargin(props: {
  m?: Margin
  mx?: Margin
  my?: Margin
  ml?: Margin
  mr?: Margin
  mt?: Margin
  mb?: Margin
}) {
  const { m, mx, my, ml: _ml, mr: _mr, mt: _mt, mb: _mb } = props

  const names = {
    ml: 'ml',
    mr: 'mr',
    mt: 'mt',
    mb: 'mb',
  }

  const values = {
    ml: _ml ?? mx ?? m,
    mr: _mr ?? mx ?? m,
    mt: _mt ?? my ?? m,
    mb: _mb ?? my ?? m,
  }

  const ml = getProperty({
    name: names.ml,
    value: values.ml,
  })

  const mr = getProperty({
    name: names.mr,
    value: values.mr,
  })

  const mt = getProperty({
    name: names.mt,
    value: values.mt,
  })

  const mb = getProperty({
    name: names.mb,
    value: values.mb,
  })

  return {
    ...ml,
    ...mr,
    ...mt,
    ...mb,
  }
}

export { getMargin }
