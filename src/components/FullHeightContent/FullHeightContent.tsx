import styles from './FullHeightContent.module.css'

import type { ReactNode } from 'react'

interface FullHeightContentProps {
  width: number
  height: number
  children: ReactNode
}

export function FullHeightContent(props: FullHeightContentProps) {
  const { width, height, children } = props

  return (
    <div className={styles.root}>
      <img
        className={styles.placeholder}
        alt=""
        role="presentation"
        aria-hidden="true"
        src={`data:image/svg+xml;charset=utf-8,%3Csvg height='${
          height || 0
        }' width='${
          width || 0
        }' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E`}
      />
      <div className={styles.content}>{children}</div>
    </div>
  )
}
