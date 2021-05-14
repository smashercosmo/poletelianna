import clsx from 'clsx'
import { VisuallyHidden } from '@react-aria/visually-hidden'

import styles from './BurgerMenu.module.css'

interface BurgerMenuProps {
  isExpanded?: boolean
  onClick: () => void
}

function BurgerMenu(props: BurgerMenuProps) {
  const { onClick, isExpanded = false } = props

  return (
    <button
      type="button"
      className={clsx(styles.root, { [styles.expanded]: isExpanded })}
      onClick={onClick}
      aria-expanded={isExpanded}>
      <div className={styles.content} aria-hidden="true">
        <div className={styles.outline} />
        <div>
          <div className={styles.line} />
          <div className={styles.line} />
          <div className={styles.line} />
        </div>
      </div>
      <VisuallyHidden>{isExpanded ? 'Close menu' : 'Open menu'}</VisuallyHidden>
    </button>
  )
}

export { BurgerMenu }
