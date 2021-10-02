import { H1, H2, H3, H4, H5, H6 } from '../Base/H'

import type { HProps } from '../Base/H'

interface HeadingProps extends HProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
}

const headings = [H1, H2, H3, H4, H5, H6] as const

function Heading(props: HeadingProps) {
  const { level, ...rest } = props
  const Component = headings[level - 1]

  return <Component m={0} {...rest} />
}

export { Heading }
