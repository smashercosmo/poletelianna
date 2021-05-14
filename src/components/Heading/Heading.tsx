import clsx from 'clsx'

import styles from './Heading.module.css'

import type { DetailedHTMLProps, HTMLAttributes } from 'react'

type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  level: 1 | 2 | 3 | 4 | 5 | 6
}

const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const

function Heading(props: HeadingProps) {
  const { level, className, ...rest } = props
  const Component = headings[level - 1]

  return <Component {...rest} className={clsx(styles.root, className)} />
}

export { Heading }
