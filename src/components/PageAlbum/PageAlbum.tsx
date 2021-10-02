import { useState, useRef, useEffect } from 'react'

import { Image } from '../Image/Image'
import { Show } from '../Show/Show'
import { AlbumCaption } from '../AlbumCaption/AlbumCaption'
import { AlbumControl } from '../AlbumControl/AlbumControl'
import { AlbumBackButton } from '../AlbumBackButton/AlbumBackButton'
import { AlbumScrollerInstruction } from '../AlbumScrollerInstruction/AlbumScrollerInstruction'
import { useResizedImages } from '../../hooks/useResizedImage'
import { smoothScroll } from '../../lib/smoothScroll'
import styles from './PageAlbum.module.css'

import type { IGatsbyImageData } from 'gatsby-plugin-image'

interface PageAlbumProps {
  title: string
  description: string
  images: ReadonlyArray<IGatsbyImageData>
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
  const [scrolledItem, setScrolledItem] = useState(page)
  const [scrollerVisible, setScrollerVisible] = useState(false)
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const resizedImages = useResizedImages({ images, maxSize: 620 })

  useEffect(() => {
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

  useEffect(() => {
    const path = `${window.location.pathname}?page=${scrolledItem}`
    window.history.replaceState({ path }, '', path)
  }, [scrolledItem])

  useEffect(() => {
    if (!scrollerRef.current) return
    const node = scrollerRef.current
    const params = new URLSearchParams(window.location.search)
    const page = getIndex(params.get('page'), scrollItemsCount)
    const scrollLeft = Math.floor(node.scrollWidth * (page / scrollItemsCount))
    scrollerRef.current.scrollTo(scrollLeft, 0)
    setScrollerVisible(true)
  }, [scrollItemsCount])

  function scrollTo(itemToScroll: number) {
    if (
      !scrollerRef.current ||
      itemToScroll === scrolledItem ||
      itemToScroll < 0 ||
      itemToScroll > scrollItemsCount - 1
    ) {
      return
    }

    const scrollLeft = Math.floor(
      scrollerRef.current.scrollWidth * (itemToScroll / scrollItemsCount),
    )
    setScrolledItem(itemToScroll)
    smoothScroll(scrollerRef.current, scrollLeft)
  }

  return (
    <div className={styles.root}>
      <Show when={scrollerVisible} mode="visibility">
        <div className={styles.content}>
          <div className={styles.column}>
            <div className={styles.back}>
              <AlbumBackButton />
            </div>
            <div className={styles.text} id="scroller-caption">
              <div className={styles.caption}>
                <AlbumCaption
                  title={title}
                  description={description}
                  titleSize={{ xs: 40, md: 56 }}
                  subtitleSize={{ xs: 16 }}
                  descriptionSize={{ xs: 16 }}
                />
              </div>
              <Show at="lg">
                {scrollItemsCount > 1 && (
                  <div className={styles.controls}>
                    <div className={styles.prev}>
                      <AlbumControl
                        disabled={scrolledItem === 0}
                        onClick={() => {
                          scrollTo(scrolledItem - 1)
                        }}
                        direction="left"
                      />
                    </div>
                    <AlbumControl
                      disabled={scrolledItem === scrollItemsCount - 1}
                      onClick={() => {
                        scrollTo(scrolledItem + 1)
                      }}
                      direction="right"
                    />
                  </div>
                )}
              </Show>
              {scrollItemsCount > 1 && (
                <div className={styles.instruction}>
                  <AlbumScrollerInstruction>
                    swipe or scroll left and right
                  </AlbumScrollerInstruction>
                </div>
              )}
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
                    image={image}
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
