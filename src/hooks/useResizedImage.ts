import * as React from 'react'

import { calculateAspectRatioFit } from '../lib/calculateAspectRatioFit'

import type { ImageProps } from '../components/Image/Image'

function resizeImage(args: { image: ImageProps['image']; maxSize: number }) {
  const { image, maxSize } = args
  const { width, height } = calculateAspectRatioFit({
    width: image.width,
    height: image.height,
    maxWidth: maxSize,
    maxHeight: maxSize,
  })

  // TODO https://github.com/gatsbyjs/gatsby/discussions/30572
  const clone = JSON.parse(JSON.stringify(image)) as ImageProps['image']
  clone.width = width
  clone.height = height

  return clone
}

function useResizedImage(args: {
  image: ImageProps['image']
  maxSize: number
}) {
  const { image, maxSize } = args
  return React.useMemo(() => {
    return resizeImage({ image, maxSize })
  }, [image, maxSize])
}

function useResizedImages(args: {
  images: ReadonlyArray<ImageProps['image']>
  maxSize: number
}) {
  const { images, maxSize } = args
  return React.useMemo(() => {
    return images.map((image) => resizeImage({ image, maxSize }))
  }, [images, maxSize])
}

export { useResizedImage }
export { useResizedImages }
