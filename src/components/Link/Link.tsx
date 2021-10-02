import clsx from 'clsx'
import { Link as GatsbyLink } from 'gatsby'

import styles from './Link.module.css'

import type { GatsbyLinkProps } from 'gatsby'
import type { AllHTMLAttributes } from 'react'

type AnchorProps = AllHTMLAttributes<HTMLAnchorElement>
type LinkProps<TState> = Omit<GatsbyLinkProps<TState>, 'ref'> | AnchorProps

function Link<TState>(props: LinkProps<TState>) {
  const { children, className, ...rest } = props
  const classes = clsx(className, styles.root)

  if ('to' in rest) {
    return (
      <GatsbyLink {...rest} className={classes}>
        <div className={styles.content}>{children}</div>
      </GatsbyLink>
    )
  }

  return (
    <a {...rest} className={classes}>
      <div className={styles.content}>{children}</div>
    </a>
  )
}

export { Link }
