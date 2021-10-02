import styles from './AlbumScrollerInstruction.module.css'

import type { ReactNode } from 'react'

interface AlbumScrollerInstructionProps {
  children: ReactNode
}

function AlbumScrollerInstruction(props: AlbumScrollerInstructionProps) {
  const { children } = props

  return (
    <div className={styles.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 42 23"
        className={styles.icon}
        focusable="false"
        aria-hidden="true">
        <path d="M28 11.82H1.92l10.1 10.1-.71.7L.7 12.02l-.7-.71h-.01l.71-.71L11.32.01l.7.71L1.9 10.82H14v-.02h26.07L29.97.7l.71-.7L41.3 10.61l.7.7v.01l-.71.7-10.61 10.6-.7-.7L40.1 11.8H28v.02z" />
      </svg>
      <div>{children}</div>
    </div>
  )
}

export { AlbumScrollerInstruction }
