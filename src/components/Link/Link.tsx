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
      <GatsbyLink {...rest} className={classes} tabIndex={0}>
        <div className={styles.content} tabIndex={-1}>
          {children}
        </div>
      </GatsbyLink>
    )
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    <a {...rest} className={classes} tabIndex={0}>
      <div className={styles.content} tabIndex={-1}>
        {children}
      </div>
    </a>
  )
}

export { Link }
