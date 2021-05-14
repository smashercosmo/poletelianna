import { graphql } from 'gatsby'

import { PageSeries } from '../components/PageSeries/PageSeries'

import type { SeriesPageQuery } from '../types/generated/graphql'

export const query = graphql`
  query SeriesPage {
    page: seriesJson {
      title
      albums {
        background
        description
        title
        fields {
          slug
        }
        images {
          cover
          url {
            childImageSharp {
              gatsbyImageData(width: 450, transformOptions: { fit: CONTAIN })
            }
          }
        }
      }
    }
  }
`

function Series(props: { data: SeriesPageQuery }) {
  const { data } = props
  const { albums, title: pageTitle } = data.page

  const simplifiedAlbums = albums.map((album) => {
    const { background, description, title: albumTitle, images, fields } = album
    const cover = images.find((image) => image.cover) || images[0]
    return {
      background,
      description,
      title: albumTitle,
      slug: fields.slug,
      cover: cover.url.childImageSharp.gatsbyImageData,
    }
  })

  return <PageSeries albums={simplifiedAlbums} title={pageTitle} />
}

export default Series
