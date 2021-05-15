import clsx from 'clsx'

import styles from './Show.module.css'

import type { ReactNode } from 'react'

type ShowProps = {
  children: ReactNode
  when?: boolean
  at?: 'sm' | 'md' | 'lg' | 'xl'
  mode?: 'display' | 'visibility'
}

function Show(props: ShowProps) {
  const { children, when, at, mode = 'display' } = props
  return (
    <div
      className={clsx(
        styles.root,
        when && styles.shown,
        at && styles[at],
        mode && styles[mode],
      )}>
      {children}
    </div>
  )
}

export { Show }
