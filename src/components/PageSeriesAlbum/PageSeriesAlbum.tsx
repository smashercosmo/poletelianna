import { AlbumCaption } from '../AlbumCaption/AlbumCaption'
import { Image } from '../Image/Image'
import { useResizedImage } from '../../hooks/useResizedImage'
import styles from './PageSeriesAlbum.module.css'

import type { ImageProps } from '../Image/Image'
import type { IGatsbyImageData } from 'gatsby-plugin-image'

interface PageSeriesAlbumProps {
  title: string
  description: string
  cover: ImageProps['image']
}

function PageSeriesAlbum(props: PageSeriesAlbumProps) {
  const { title, description, cover } = props
  const image = useResizedImage({ image: cover, maxSize: 450 })

  return (
    <article className={styles.root}>
      <div className={styles.image}>
        <Image image={image as IGatsbyImageData} alt="" />
      </div>
      <div>
        <AlbumCaption
          title={title}
          description={description}
          titleSize={{ xs: 32, md: 56 }}
          subtitleSize={{ xs: 16, md: 20 }}
          descriptionSize={{ xs: 16, md: 20 }}
        />
      </div>
    </article>
  )
}

export { PageSeriesAlbum }
