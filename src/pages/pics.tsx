import { graphql } from 'gatsby'

import { PagePics } from '../components/PagePics/PagePics'

import type { PicsPageQuery } from '../types/generated/graphql'

export const query = graphql`
  query PicsPage {
    page: picsJson {
      title
      pictures {
        background
        title
        description
        fields {
          slug
        }
        image {
          childImageSharp {
            gatsbyImageData(width: 450, transformOptions: { fit: CONTAIN })
          }
        }
      }
    }
  }
`

function Pics(props: { data: PicsPageQuery }) {
  const { data } = props
  const { pictures, title: pageTitle } = data.page

  const simplifiedPics = pictures.map((picture) => {
    const {
      background,
      title: picTitle,
      description: picDescription,
      image,
      fields,
    } = picture
    return {
      background,
      title: picTitle,
      description: picDescription,
      picture,
      slug: fields.slug,
      image: image ? image.childImageSharp.gatsbyImageData : undefined,
    }
  })

  return <PagePics pics={simplifiedPics} title={pageTitle} />
}

export default Pics
