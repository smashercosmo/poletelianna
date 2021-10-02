import { graphql } from 'gatsby'

import { PageAlbum } from '../../components/PageAlbum/PageAlbum'

import type { PageProps } from 'gatsby'
import type { AlbumPageQuery } from '../../types/generated/graphql'

export const query = graphql`
  query AlbumPage($id: String!) {
    content: albumsJson(id: { eq: $id }) {
      title
      description
      background
      images {
        url {
          childImageSharp {
            gatsbyImageData(width: 620, transformOptions: { fit: CONTAIN })
          }
        }
      }
    }
  }
`

function Album(props: PageProps<AlbumPageQuery>) {
  const { data } = props
  const { title, description, images, background } = data.content

  const simplifiedImages = images.map((image) => {
    return image.url.childImageSharp.gatsbyImageData
  })

  return (
    <PageAlbum
      title={title}
      description={description}
      images={simplifiedImages}
      background={background}
    />
  )
}

export default Album
