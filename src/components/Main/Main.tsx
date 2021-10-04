import styles from './Main.module.css'

import type { ReactNode } from 'react'

interface MainProps {
  children: ReactNode
  backgroundColor?: string
}

function Main(props: MainProps) {
  const { backgroundColor, children } = props
  return (
    <main className={styles.root} style={{ backgroundColor }}>
      {children}
    </main>
  )
}

export { Main }
