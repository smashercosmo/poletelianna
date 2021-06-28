import { getProperty } from './getProperty'

import type { Padding } from './Base'

function getPadding(props: {
  p?: Padding
  px?: Padding
  py?: Padding
  pl?: Padding
  pr?: Padding
  pt?: Padding
  pb?: Padding
}) {
  const { p, px, py, pl: _pl, pr: _pr, pt: _pt, pb: _pb } = props

  const names = {
    pl: 'pl',
    pr: 'pr',
    pt: 'pt',
    pb: 'pb',
  }

  const values = {
    pl: _pl ?? px ?? p,
    pr: _pr ?? px ?? p,
    pt: _pt ?? py ?? p,
    pb: _pb ?? py ?? p,
  }

  const pl = getProperty({
    name: names.pl,
    value: values.pl,
  })

  const pr = getProperty({
    name: names.pr,
    value: values.pr,
  })

  const pt = getProperty({
    name: names.pt,
    value: values.pt,
  })

  const pb = getProperty({
    name: names.pb,
    value: values.pb,
  })

  return {
    ...pl,
    ...pr,
    ...pt,
    ...pb,
  }
}

export { getPadding }
