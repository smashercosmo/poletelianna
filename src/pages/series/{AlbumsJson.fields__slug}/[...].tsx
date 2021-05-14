import { graphql } from 'gatsby'

import { PageAlbum } from '../../../components/PageAlbum/PageAlbum'

import type { PageProps } from 'gatsby'
import type { AlbumPageQuery } from '../../../types/generated/graphql'

export const query = graphql`
  query AlbumPage($id: String!) {
    content: albumsJson(id: { eq: $id }) {
      title
      description
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
  const { data, uri } = props
  const { title, description, images } = data.content

  const simplifiedImages = images.map((image) => {
    return image.url.childImageSharp.gatsbyImageData
  })

  return (
    <PageAlbum
      title={title}
      url={uri}
      description={description}
      images={simplifiedImages}
    />
  )
}

export default Album
