import clsx from 'clsx'

import styles from './Hide.module.css'

import type { ReactNode } from 'react'

type HideProps = {
  children: ReactNode
  when?: boolean
  at?: 'sm' | 'md' | 'lg' | 'xl'
  mode?: 'display' | 'visibility'
}

function Hide(props: HideProps) {
  const { children, when, at, mode = 'display' } = props
  return (
    <div
      className={clsx(
        styles.root,
        when && styles.hidden,
        at && styles[at],
        mode && styles[mode],
      )}>
      {children}
    </div>
  )
}

export { Hide }
