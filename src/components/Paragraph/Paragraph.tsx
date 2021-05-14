import clsx from 'clsx'

import styles from './Paragraph.module.css'

import type { DetailedHTMLProps, HTMLAttributes } from 'react'

type ParagraphProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>

function Paragraph(props: ParagraphProps) {
  const { className, ...rest } = props
  return <p {...rest} className={clsx(styles.root, className)} />
}

export { Paragraph }
