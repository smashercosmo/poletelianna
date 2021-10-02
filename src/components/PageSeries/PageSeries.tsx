import { PageSeriesAlbum } from '../PageSeriesAlbum/PageSeriesAlbum'
import { Gallery } from '../Gallery/Gallery'
import { Link } from '../Link/Link'
import { useAnimateBackground } from '../../hooks/useAnimateBackground'
import { useDragScroll } from '../../hooks/useDragScroll'
import styles from './PageSeries.module.css'

import type { IGatsbyImageData } from 'gatsby-plugin-image'

export interface Album {
  title: string
  description: string
  background: string
  slug: string
  cover: IGatsbyImageData
}

interface PageSeriesProps {
  title: string
  albums: ReadonlyArray<Album>
  isPreview?: boolean
  currentWindow?: Window
}

const DEFAULT_BG = [245, 234, 234]
const DEFAULT_BG_STRING =
  `rgb(${DEFAULT_BG[0]}, ${DEFAULT_BG[1]}, ${DEFAULT_BG[2]})` as const

function PageSeries(props: PageSeriesProps) {
  const { title, albums, isPreview = false, currentWindow } = props
  const { isAnimating } = useDragScroll(currentWindow)
  const { animateOnMouseOutOrBlur, animateOnMouseOverOrFocus } =
    useAnimateBackground(DEFAULT_BG_STRING)

  return (
    <Gallery title={title} currentWindow={currentWindow} isPreview={isPreview}>
      {albums.map((album) => {
        const {
          title: albumTitle,
          background,
          description,
          slug,
          cover,
        } = album

        return (
          <Link
            // Firefox doesn't respect 'draggable' attribute
            onDragStart={(event) => event.preventDefault()}
            key={albumTitle}
            to={`/series${slug}`}
            className={styles.album}
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
            <div>
              <PageSeriesAlbum
                title={albumTitle}
                description={description}
                cover={cover}
              />
            </div>
          </Link>
        )
      })}
    </Gallery>
  )
}

export { PageSeries }
