import * as React from 'react'
import clsx from 'clsx'
import { Link } from 'gatsby'

import styles from './Navigation.module.css'

type NavigationProps = {
  navigationItems: ReadonlyArray<{ name: string; href: string }>
  orientation?: 'vertical' | 'horizontal'
}

function Navigation(props: NavigationProps) {
  const { navigationItems, orientation = 'horizontal' } = props

  return (
    <nav className={clsx(styles.root, styles[orientation])}>
      {navigationItems.map((navigationItem) => {
        return (
          <Link
            tabIndex={0}
            key={navigationItem.href}
            to={navigationItem.href}
            className={clsx(styles.item, styles[orientation])}>
            {navigationItem.name}
          </Link>
        )
      })}
    </nav>
  )
}

export { Navigation }
