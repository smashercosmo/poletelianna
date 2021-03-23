import * as React from 'react'
import clsx from 'clsx'
import { Link } from 'gatsby'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { FocusOn } from 'react-focus-on'

import { Hide } from '../Hide/Hide'
import { Show } from '../Show/Show'
import { Logo } from '../Logo/Logo'
import { Heading } from '../Heading/Heading'
import { Navigation } from '../Navigation/Navigation'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu'

import { useExpanded } from './useExpanded'

import styles from './Header.module.css'

type HeaderProps = {
  navigationItems: ReadonlyArray<{ name: string; href: string }>
  currentPath: string
}

function Header(props: HeaderProps) {
  const { navigationItems, currentPath } = props
  const [isExpanded, setIsExpanded] = useExpanded({
    collapseAt: 'md',
    currentPath,
  })

  return (
    <FocusOn
      enabled={isExpanded}
      autoFocus
      onEscapeKey={() => setIsExpanded(false)}>
      <header
        className={clsx(styles.header, { [styles.expanded]: isExpanded })}>
        <Link to="/" className={styles.logo}>
          <Heading level={1}>
            <Logo />
            <VisuallyHidden>PoleteliAnna.com</VisuallyHidden>
          </Heading>
        </Link>
        <div className={clsx(styles.nav, { [styles.expanded]: isExpanded })}>
          <Show at="md" when={isExpanded}>
            <Navigation
              navigationItems={navigationItems}
              orientation={isExpanded ? 'vertical' : 'horizontal'}
            />
          </Show>
        </div>
        <div className={clsx(styles.toggle, { [styles.expanded]: isExpanded })}>
          <Hide at="md">
            <BurgerMenu
              isExpanded={isExpanded}
              onClick={() =>
                setIsExpanded((currentExpanded) => !currentExpanded)
              }
            />
          </Hide>
        </div>
      </header>
    </FocusOn>
  )
}

export { Header }
