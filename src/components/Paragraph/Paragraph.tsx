import * as React from 'react'
import clsx from 'clsx'

import styles from './Paragraph.module.css'

type ParagraphProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>

function Paragraph(props: ParagraphProps) {
  const { className, ...rest } = props
  return <p {...rest} className={clsx(styles.root, className)} />
}

export { Paragraph }
