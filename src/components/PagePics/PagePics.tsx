import { Link } from 'gatsby'

import { PagePicsPic } from '../PagePicsPic/PagePicsPic'
import { Gallery } from '../Gallery/Gallery'
import { useAnimateBackground } from '../../hooks/useAnimateBackground'
import { useDragScroll } from '../../hooks/useDragScroll'
import styles from './PagePics.module.css'

import type { ImageProps } from '../Image/Image'

export interface Pic {
  title: string
  background: string
  slug: string
  image: ImageProps['image']
}

interface PageSeriesProps {
  title: string
  pics: ReadonlyArray<Pic>
  isPreview?: boolean
  currentWindow?: Window
}

const DEFAULT_BG = [245, 234, 234]
const DEFAULT_BG_STRING =
  `rgb(${DEFAULT_BG[0]}, ${DEFAULT_BG[1]}, ${DEFAULT_BG[2]})` as const

function PagePics(props: PageSeriesProps) {
  const { title, pics, isPreview = false, currentWindow } = props
  const { isAnimating } = useDragScroll(currentWindow)
  const { animateOnMouseOutOrBlur, animateOnMouseOverOrFocus } =
    useAnimateBackground(DEFAULT_BG_STRING)

  return (
    <Gallery title={title} currentWindow={currentWindow} isPreview={isPreview}>
      {pics.map((pic) => {
        const { title: albumTitle, background, slug, image } = pic

        return (
          <Link
            // Firefox doesn't respect 'draggable' attribute
            onDragStart={(event) => event.preventDefault()}
            key={albumTitle}
            to={`/pics${slug}`}
            className={styles.pic}
            data-background={background}
            onClick={(event) => {
              // Otherwise every drag attempt will result in page transition
              if (isAnimating()) {
                event.preventDefault()
              }
            }}
            onFocus={animateOnMouseOverOrFocus}
            onBlur={animateOnMouseOutOrBlur}
            onMouseOut={animateOnMouseOutOrBlur}
            onMouseOver={animateOnMouseOverOrFocus}>
            <PagePicsPic title={albumTitle} pic={image} />
          </Link>
        )
      })}
    </Gallery>
  )
}

export { PagePics }
