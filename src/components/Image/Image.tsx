import React, { ImgHTMLAttributes } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import type { GatsbyImageProps } from 'gatsby-plugin-image'

type SimpleImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'width' | 'height' | 'style'
> & {
  imgStyle: Pick<ImgHTMLAttributes<HTMLImageElement>, 'style'>
  image: {
    src: string
    width: number
    height: number
  }
}

type ImageProps = SimpleImageProps | GatsbyImageProps

function isSimpleImageProps(props: ImageProps): props is SimpleImageProps {
  return 'src' in props.image
}

function Image(props: ImageProps) {
  if (isSimpleImageProps(props)) {
    const { image, imgStyle, alt } = props
    return (
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          display: 'inline-block',
        }}>
        <div style={{ maxWidth: image.width }}>
          <img
            alt=""
            aria-hidden="true"
            src={`data:image/svg+xml;charset=utf-8,%3Csvg height='${image.height}' width='${image.width}' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E`}
            style={{ maxWidth: '100%', display: 'block' }}
          />
        </div>
        <img
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            left: 0,
            top: 0,
          }}
          src={image.src}
          alt={alt}
        />
      </div>
    )
  }
  const { image, ...rest } = props
  return <GatsbyImage image={image} {...rest} />
}

export type { ImageProps }
export type { SimpleImageProps }
export type { GatsbyImageProps }
export { Image }
