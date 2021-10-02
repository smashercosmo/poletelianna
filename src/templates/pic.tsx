import { Link, graphql } from 'gatsby'

import { Image } from '../components/Image/Image'
import { Heading } from '../components/Heading/Heading'
import { useResizedImage } from '../hooks/useResizedImage'
import { ReactComponent as LongRightArrowIcon } from './long-right-arrow-icon.svg'
import styles from './pic.module.css'

import type { PageProps } from 'gatsby'
import type { PicPageQuery } from '../types/generated/graphql'

export const pageQuery = graphql`
  query PicPage($id: String!, $previousPicId: String, $nextPicId: String) {
    picture: picturesJson(id: { eq: $id }) {
      title
      description
      image {
        childImageSharp {
          gatsbyImageData(width: 620, transformOptions: { fit: CONTAIN })
        }
      }
    }
    previous: picturesJson(id: { eq: $previousPicId }) {
      title
      fields {
        slug
      }
    }
    next: picturesJson(id: { eq: $nextPicId }) {
      title
      fields {
        slug
      }
    }
  }
`

const longRightArrow = <LongRightArrowIcon width={207} />
const longLeftArrow = <LongRightArrowIcon width={207} transform="rotate(180)" />

function PicTemplate(props: PageProps<PicPageQuery>) {
  const { data } = props
  const { picture, previous, next } = data
  const { title, description, image } = picture
  const resizedImage = useResizedImage({
    image: image.childImageSharp.gatsbyImageData,
    maxSize: 620,
  })

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.header}>
          <Heading level={1} fontSize={56} fontFamily="transgender">{title}</Heading>
        </div>
        <div className={styles.left}>
          {previous && (
            <Link to={`/pics${previous.fields.slug}`} rel="prev">
              {longLeftArrow}
            </Link>
          )}
        </div>
        <div className={styles.image}>
          {resizedImage && (
            <Image
              image={resizedImage}
              imgStyle={{ maxWidth: '100%', maxHeight: '100%' }}
              alt=""
            />
          )}
        </div>
        <div className={styles.right}>
          {next && (
            <Link to={`/pics${next.fields.slug}`} rel="next">
              {longRightArrow}
            </Link>
          )}
        </div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  )
}

export default PicTemplate
