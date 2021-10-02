import { Article } from '../Base/Article'
import { Link } from '../Link/Link'
import { Heading } from '../Heading/Heading'
import { Image } from '../Image/Image'
import { useResizedImage } from '../../hooks/useResizedImage'

import type { FocusEventHandler, MouseEventHandler } from 'react'
import type { IGatsbyImageData } from 'gatsby-plugin-image'

interface PagePicsPicProps {
  title: string
  to: string
  pic: IGatsbyImageData
  background?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
  onFocus?: FocusEventHandler<HTMLAnchorElement>
  onBlur?: FocusEventHandler<HTMLAnchorElement>
  onMouseOut?: MouseEventHandler<HTMLAnchorElement>
  onMouseOver?: MouseEventHandler<HTMLAnchorElement>
}

function PagePicsPic(props: PagePicsPicProps) {
  const {
    title,
    to,
    background,
    onClick,
    onFocus,
    onBlur,
    onMouseOver,
    onMouseOut,
    pic,
  } = props
  const image = useResizedImage({ image: pic, maxSize: 450 })

  return (
    <Article height="100%">
      {image ? (
        <div>
          <Link
            to={to}
            data-background={background}
            onClick={onClick}
            onFocus={onFocus}
            onBlur={onBlur}
            onMouseOut={onMouseOut}
            onMouseOver={onMouseOver}
            // Firefox doesn't respect 'draggable' attribute
            onDragStart={(event) => event.preventDefault()}>
            <Image image={image} alt="" />
          </Link>
        </div>
      ) : null}
      <div>
        <Link
          to={to}
          onClick={onClick}
          // Firefox doesn't respect 'draggable' attribute
          onDragStart={(event) => event.preventDefault()}>
          <Heading level={1} fontSize={20} pt={16}>
            {title}
          </Heading>
        </Link>
      </div>
    </Article>
  )
}

export { PagePicsPic }
