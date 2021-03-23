import * as React from 'react'
import type { IGatsbyImageData } from 'gatsby-plugin-image'

import { Heading } from '../Heading/Heading'
import { Image } from '../Image/Image'
import type { ImageProps } from '../Image/Image'

import { useResizedImage } from '../../hooks/useResizedImage'

import styles from './PagePicsPic.module.css'

interface PagePicsPicProps {
  title: string
  pic: ImageProps['image']
}

function PagePicsPic(props: PagePicsPicProps) {
  const { title, pic } = props
  const image = useResizedImage({ image: pic, maxSize: 450 })

  return (
    <article className={styles.root}>
      <div className={styles.image}>
        <Image image={image as IGatsbyImageData} alt="" />
      </div>
      <div>
        <Heading level={1} className={styles.title}>
          {title}
        </Heading>
      </div>
    </article>
  )
}

export { PagePicsPic }
