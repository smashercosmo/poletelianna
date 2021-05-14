import { graphql } from 'gatsby'

import { PagePics } from '../components/PagePics/PagePics'

import type { PicsPageQuery } from '../types/generated/graphql'

export const query = graphql`
  query PicsPage {
    page: picsJson {
      title
      pics {
        background
        title
        image {
          childImageSharp {
            gatsbyImageData(width: 450, transformOptions: { fit: CONTAIN })
          }
        }
      }
    }
  }
`

function Series(props: { data: PicsPageQuery }) {
  const { data } = props
  const { pics, title: pageTitle } = data.page

  const simplifiedPics = pics.map((pic) => {
    const { background, title: albumTitle, image } = pic
    return {
      background,
      title: albumTitle,
      slug: '/',
      image: image.childImageSharp.gatsbyImageData,
    }
  })

  return <PagePics pics={simplifiedPics} title={pageTitle} />
}

export default Series
