import * as React from 'react'
import clsx from 'clsx'

import styles from './Hide.module.css'

type HideProps = {
  children: React.ReactNode
  at?: 'sm' | 'md' | 'lg' | 'xl'
}

function Hide(props: HideProps) {
  const { children, at } = props
  return <div className={clsx(styles.root, at && styles[at])}>{children}</div>
}

export { Hide }
