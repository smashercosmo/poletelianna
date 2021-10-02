import clsx from 'clsx'

import { Article } from '../Base/Article'
import { PagePicsPic } from '../PagePicsPic/PagePicsPic'
import { Gallery } from '../Gallery/Gallery'
import { useAnimateBackground } from '../../hooks/useAnimateBackground'
import { useDragScroll } from '../../hooks/useDragScroll'
import { Heading } from '../Heading/Heading'
import { Paragraph } from '../Paragraph/Paragraph'
import styles from './PagePics.module.css'

import type { IGatsbyImageData } from 'gatsby-plugin-image'

export interface Pic {
  title: string
  description?: string
  background: string
  slug: string
  image?: IGatsbyImageData
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
        const {
          title: picTitle,
          description: picDescription,
          background,
          slug,
          image,
        } = pic

        if (!image) {
          return (
            // We use <section> tag here (which is not semantically correct)
            // to be able to target first of text-only blocks in css using first-of-type selector.
            // In future it will be possible to use :nth-child(1 of .class) selector
            // to achieve the same result.
            <section className={clsx(styles.pic, styles.text)}>
              <Article maxWidth={450}>
                <Heading
                  level={1}
                  lineHeight={1}
                  fontSize={40}
                  fontFamily="transgender"
                  mb={32}>
                  {picTitle}
                </Heading>
                {picDescription && <Paragraph>{picDescription}</Paragraph>}
              </Article>
            </section>
          )
        }

        return (
          <div key={picTitle} className={styles.pic}>
            <PagePicsPic
              title={picTitle}
              to={`/pics${slug}`}
              background={background}
              pic={image}
              onClick={(event) => {
                // Otherwise every drag attempt will result in page transition
                if (isAnimating()) {
                  event.preventDefault()
                }
              }}
              onFocus={animateOnMouseOverOrFocus}
              onBlur={animateOnMouseOutOrBlur}
              onMouseOut={animateOnMouseOutOrBlur}
              onMouseOver={animateOnMouseOverOrFocus}
            />
          </div>
        )
      })}
    </Gallery>
  )
}

export { PagePics }
