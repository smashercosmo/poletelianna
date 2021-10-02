import { AlbumCaption } from '../AlbumCaption/AlbumCaption'
import { Image } from '../Image/Image'
import { useResizedImage } from '../../hooks/useResizedImage'
import styles from './PageSeriesAlbum.module.css'

import type { IGatsbyImageData } from 'gatsby-plugin-image'

interface PageSeriesAlbumProps {
  title: string
  description: string
  cover: IGatsbyImageData
}

function PageSeriesAlbum(props: PageSeriesAlbumProps) {
  const { title, description, cover } = props
  const image = useResizedImage({ image: cover, maxSize: 450 })

  return (
    <article className={styles.root}>
      <div className={styles.image}>
        {image && <Image image={image} alt="" />}
      </div>
      <AlbumCaption
        title={title}
        description={description}
        titleSize={{ xs: 32, md: 56 }}
        subtitleSize={{ xs: 16 }}
        descriptionSize={{ xs: 16 }}
      />
    </article>
  )
}

export { PageSeriesAlbum }
