import * as React from 'react'
import clsx from 'clsx'

import styles from './Show.module.css'

type ShowProps = {
  children: React.ReactNode
  when?: boolean
  at?: 'sm' | 'md' | 'lg' | 'xl'
}

function Show(props: ShowProps) {
  const { children, when, at } = props
  return (
    <div className={clsx(styles.root, when && styles.shown, at && styles[at])}>
      {children}
    </div>
  )
}

export { Show }
