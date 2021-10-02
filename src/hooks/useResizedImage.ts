import { useMemo } from 'react'

import { calculateAspectRatioFit } from '../lib/calculateAspectRatioFit'

import type { IGatsbyImageData } from 'gatsby-plugin-image'

function resizeImage(args: { image: IGatsbyImageData; maxSize: number }) {
  const { image, maxSize } = args
  const { width, height } = calculateAspectRatioFit({
    width: image.width,
    height: image.height,
    maxWidth: maxSize,
    maxHeight: maxSize,
  })

  // TODO https://github.com/gatsbyjs/gatsby/discussions/30572
  const clone = JSON.parse(JSON.stringify(image)) as IGatsbyImageData
  clone.width = width
  clone.height = height

  return clone
}

function useResizedImage(args: { image?: IGatsbyImageData; maxSize: number }) {
  const { image, maxSize } = args

  return useMemo(() => {
    if (!image) return undefined
    return resizeImage({ image, maxSize })
  }, [image, maxSize])
}

function useResizedImages(args: {
  images: ReadonlyArray<IGatsbyImageData>
  maxSize: number
}) {
  const { images, maxSize } = args
  return useMemo(() => {
    return images.map((image) => resizeImage({ image, maxSize }))
  }, [images, maxSize])
}

export { useResizedImage }
export { useResizedImages }
