import { forwardRef } from 'react'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { a } from '@react-spring/web'
import clsx from 'clsx'

import { Heading } from '../Heading/Heading'
import { RepeatingText } from '../RepeatingText/RepeatingText'
import { Hide } from '../Hide/Hide'
import { useAnimateScale } from '../../hooks/useAnimateScale'
import styles from './Gallery.module.css'

import type { ForwardedRef, ReactNode } from 'react'

interface GalleryProps {
  title: string
  children: ReactNode
  isPreview?: boolean
  currentWindow?: Window
}

function Gallery(props: GalleryProps, ref: ForwardedRef<HTMLDivElement>) {
  const { title, children, isPreview = false, currentWindow } = props

  const { style: animationStyle } = useAnimateScale({
    animateAt: 'md',
    disable: isPreview,
    currentWindow,
  })

  return (
    <div
      ref={ref}
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

const _Gallery = forwardRef(Gallery)
export { _Gallery as Gallery }
