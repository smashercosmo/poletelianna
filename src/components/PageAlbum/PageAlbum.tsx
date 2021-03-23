import React, { useEffect, useState, useRef } from 'react'
import { navigate } from 'gatsby'
import type { IGatsbyImageData } from 'gatsby-plugin-image'

import { Image } from '../Image/Image'
import { AlbumCaption } from '../AlbumCaption/AlbumCaption'
import type { ImageProps } from '../Image/Image'

import { useResizedImages } from '../../hooks/useResizedImage'

import styles from './PageAlbum.module.css'

interface PageAlbumProps {
  title: string
  description: string
  url: string
  images: ReadonlyArray<ImageProps['image']>
}

function PageAlbum(props: PageAlbumProps) {
  const { title, description, url, images } = props
  const [scrolledItem, setScrolledItem] = useState(0)
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const scrollItems = images.length
  const resizedImages = useResizedImages({ images, maxSize: 620 })

  useEffect(() => {
    let scrollerNode: HTMLDivElement | undefined
    let scrollTimeout: number | null = null
    let wheelTimeout: number | null = null
    let isBeingManuallyScrolled = false

    function getCurrentItem() {
      if (!scrollerNode) return undefined
      const { scrollLeft, scrollWidth } = scrollerNode
      return Math.round((scrollLeft / scrollWidth) * scrollItems)
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
  }, [scrollItems])

  useEffect(() => {
    const path = `${url}/${scrolledItem}`
    window.history.replaceState({ path }, '', path)
  }, [scrolledItem, url])

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.scroller} ref={scrollerRef}>
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
        <div className={styles.caption}>
          <AlbumCaption
            title={title}
            description={description}
            titleSize={{ xs: 32, md: 56 }}
            subtitleSize={{ xs: 16, md: 20 }}
            descriptionSize={{ xs: 16, md: 20 }}
          />
        </div>
      </div>
    </div>
  )
}

export { PageAlbum }
