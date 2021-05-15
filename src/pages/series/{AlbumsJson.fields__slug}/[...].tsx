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

function getIndex(mayBeIndexString: string | undefined, maxIndex: number) {
  const mayBeIndexNumber = Number(mayBeIndexString)

  if (Number.isInteger(mayBeIndexNumber)) {
    if (mayBeIndexNumber < 0) return 0
    else if (mayBeIndexNumber > maxIndex) return maxIndex
    else return mayBeIndexNumber
  }

  return 0
}

function Album(props: PageProps<AlbumPageQuery>) {
  const { data, uri, params } = props
  const { title, description, images } = data.content
  const { '*': mayBeIndex } = params
  const index = getIndex(mayBeIndex, images.length - 1)

  const simplifiedImages = images.map((image) => {
    return image.url.childImageSharp.gatsbyImageData
  })

  return (
    <PageAlbum
      title={title}
      uri={uri}
      index={index}
      description={description}
      images={simplifiedImages}
    />
  )
}

export default Album
