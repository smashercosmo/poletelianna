import * as React from 'react'

import styles from './AlbumControl.module.css'

interface AlbumControlProps {
  direction: 'left' | 'right'
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

function AlbumControl(props: AlbumControlProps) {
  const { disabled, onClick, direction } = props

  return (
    <button
      type="button"
      className={styles.root}
      aria-disabled={disabled}
      aria-label={
        direction === 'left' ? 'Show previous slide' : 'Show next slide'
      }
      tabIndex={0}
      onClick={onClick}>
      <div className={styles.content} tabIndex={-1}>
        <div className={styles.outline} />
        <svg
          viewBox="0 0 28 23"
          xmlns="http://www.w3.org/2000/svg"
          className={direction === 'left' ? styles.left : styles.right}
          focusable="false"
          aria-hidden="true">
          <path d="M1.34914e-07 11.3138L0.707107 12.0209L0.707168 12.0208L11.3138 22.6274L12.0209 21.9203L1.928 11.8274L28 11.8274L28 10.8274L1.90055 10.8274L12.0208 0.707178L11.3137 7.07068e-05L0.707182 10.6066L7.56453e-05 11.3137L1.34914e-07 11.3138Z" />
        </svg>
      </div>
    </button>
  )
}

export { AlbumControl }
