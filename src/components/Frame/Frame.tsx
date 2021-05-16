import { Link } from '../Link/Link'
import { Header } from '../Header/Header'
import { Show } from '../Show/Show'
import styles from './Frame.module.css'

import type { ReactNode } from 'react'

type FrameProps = {
  children: ReactNode
  navigationItems: ReadonlyArray<{ name: string; href: string }>
  currentPath: string
}

function Frame(props: FrameProps) {
  const { children, navigationItems, currentPath } = props

  return (
    <div className={styles.root}>
      <Show at="md">
        <div className={styles.left} />
        <div className={styles.right} />
      </Show>
      <div className={styles.top}>
        <Header navigationItems={navigationItems} currentPath={currentPath} />
      </div>
      <main className={styles.main}>{children}</main>
      <Show at="md">
        <div className={styles.telegram}>
          <Link href="https://t.me/poletelianna">telegram</Link>
        </div>
        <div className={styles.instagram}>
          <Link href="https://www.instagram.com/poletelianna">instagram</Link>
        </div>
      </Show>
      <footer className={`${styles.bottom} ${styles.footer}`}>
        &copy; poleteli anna, {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export { Frame }
