import * as React from 'react'

import { Link } from '../Link/Link'
import { Image } from '../Image/Image'
import { Text } from '../Base/Base'
import { Show } from '../Show/Show'
import { AlbumCaption } from '../AlbumCaption/AlbumCaption'
import { useResizedImages } from '../../hooks/useResizedImage'
import { ReactComponent as BackIcon } from './back-icon.svg'
import styles from './PageAlbum.module.css'

import type { ImageProps } from '../Image/Image'
import type { IGatsbyImageData } from 'gatsby-plugin-image'

interface PageAlbumProps {
  title: string
  description: string
  images: ReadonlyArray<ImageProps['image']>
}

function getIndex(
  mayBeIndexString: string | undefined | null,
  maxIndex: number,
) {
  const mayBeIndexNumber = Number(mayBeIndexString)

  if (Number.isInteger(mayBeIndexNumber)) {
    if (mayBeIndexNumber < 0) return 0
    else if (mayBeIndexNumber > maxIndex) return maxIndex
    else return mayBeIndexNumber
  }

  return 0
}

function PageAlbum(props: PageAlbumProps) {
  const { title, description, images } = props
  const mayBePage =
    typeof window === 'undefined'
      ? '0'
      : new URLSearchParams(window.location.search).get('page')
  const scrollItemsCount = images.length
  const page = getIndex(mayBePage, scrollItemsCount)
  const [scrolledItem, setScrolledItem] = React.useState(page)
  const [scrollerVisible, setScrollerVisible] = React.useState(false)
  const scrollerRef = React.useRef<HTMLDivElement | null>(null)
  const resizedImages = useResizedImages({ images, maxSize: 620 })

  React.useEffect(() => {
    let scrollerNode: HTMLDivElement | undefined
    let scrollTimeout: number | null = null
    let wheelTimeout: number | null = null
    let isBeingManuallyScrolled = false

    function getCurrentItem() {
      if (!scrollerNode) return undefined
      const { scrollLeft, scrollWidth } = scrollerNode
      return Math.round((scrollLeft / scrollWidth) * scrollItemsCount)
    }

    function onScrollEnd() {
      isBeingManuallyScrolled = false
    }

    function onWheelEnd() {
      isBeingManuallyScrolled = false
    }

    function onTouchMove() {
      isBeingManuallyScrolled = true
    }

    function onScroll() {
      if (isBeingManuallyScrolled) {
        const currentPage = getCurrentItem()
        if (typeof currentPage === 'number') setScrolledItem(currentPage)
      }

      if (scrollTimeout) window.clearTimeout(scrollTimeout)
      scrollTimeout = window.setTimeout(onScrollEnd, 100)
    }

    function onWheel() {
      isBeingManuallyScrolled = true
      if (wheelTimeout) window.clearTimeout(wheelTimeout)
      wheelTimeout = window.setTimeout(onWheelEnd, 100)
    }

    if (scrollerRef.current) {
      scrollerNode = scrollerRef.current
      scrollerNode.addEventListener('scroll', onScroll)
      scrollerNode.addEventListener('wheel', onWheel)
      scrollerNode.addEventListener('touchmove', onTouchMove)
    }

    return function onTeardown() {
      if (scrollerNode) {
        scrollerNode.removeEventListener('scroll', onScroll)
        scrollerNode.removeEventListener('wheel', onWheel)
        scrollerNode.removeEventListener('touchmove', onTouchMove)
      }
    }
  }, [scrollItemsCount])

  React.useEffect(() => {
    const path = `${window.location.pathname}?page=${scrolledItem}`
    window.history.replaceState({ path }, '', path)
  }, [scrolledItem])

  React.useEffect(() => {
    if (!scrollerRef.current) return
    const node = scrollerRef.current
    const params = new URLSearchParams(window.location.search)
    const page = getIndex(params.get('page'), scrollItemsCount)
    const scrollLeft = Math.floor(node.scrollWidth * (page / scrollItemsCount))
    scrollerRef.current.scrollTo(scrollLeft, 0)
    setScrollerVisible(true)
  }, [scrollItemsCount])

  return (
    <div className={styles.root}>
      <Show when={scrollerVisible} mode="visibility">
        <div className={styles.content}>
          <div className={styles.caption}>
            <div className={styles.back}>
              <Link to="/">
                <span className={styles.backLinkContent}>
                  <BackIcon className={styles.arrow} />
                  <Text fontSize={16}>go back</Text>
                </span>
              </Link>
            </div>
            <div className={styles.text} id="scroller-caption">
              <AlbumCaption
                title={title}
                description={description}
                titleSize={{ xs: 40, md: 56 }}
                subtitleSize={{ xs: 16 }}
                descriptionSize={{ xs: 16 }}
              />
              <div className={styles.instruction}>
                Swipe or scroll left and right or use arrow keys
              </div>
            </div>
          </div>
          <div
            className={styles.scroller}
            ref={scrollerRef}
            /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */
            tabIndex={0}
            aria-labelledby="scroller-caption">
            {resizedImages.map((image, index) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <div key={`item-${index}`} className={styles.item}>
                  <Image
                    image={image as IGatsbyImageData}
                    imgStyle={{ maxWidth: '100%', maxHeight: '100%' }}
                    alt=""
                  />
                </div>
              )
            })}
          </div>
        </div>
      </Show>
    </div>
  )
}

export { PageAlbum }
