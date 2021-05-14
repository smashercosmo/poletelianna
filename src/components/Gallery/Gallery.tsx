import { VisuallyHidden } from '@react-aria/visually-hidden'
import { a } from '@react-spring/web'
import clsx from 'clsx'

import { Heading } from '../Heading/Heading'
import { RepeatingText } from '../RepeatingText/RepeatingText'
import { Hide } from '../Hide/Hide'
import { useAnimateScale } from '../../hooks/useAnimateScale'
import styles from './Gallery.module.css'

import type { ReactNode } from 'react'

interface GalleryProps {
  title: string
  children: ReactNode
  isPreview?: boolean
  currentWindow?: Window
}

function Gallery(props: GalleryProps) {
  const { title, children, isPreview = false, currentWindow } = props

  // TODO currently you need to wait for animation to end before you can start dragging or scrolling
  const { style: animationStyle } = useAnimateScale({
    animateAt: 'md',
    disable: isPreview,
    currentWindow,
  })

  return (
    <div
      className={clsx(styles.root, {
        [styles.isPreview]: isPreview,
      })}>
      <Heading level={2}>
        <VisuallyHidden>{title} page</VisuallyHidden>
        <Hide at="md">
          <div className={styles.heading}>
            <RepeatingText>{title}</RepeatingText>
          </div>
        </Hide>
      </Heading>
      <a.div className={styles.inner} style={animationStyle}>
        {children}
      </a.div>
    </div>
  )
}

export { Gallery }
