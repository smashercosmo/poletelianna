import { useState, useEffect } from 'react'

import { PageAlbum } from '../../components/PageAlbum/PageAlbum'

import type { PreviewTemplateComponentProps } from 'netlify-cms-core'

// TODO make PR to netlify-cms to add 'window' and 'document' props
type PageAlbumPreviewProps = PreviewTemplateComponentProps & {
  window: Window
}

function PageAlbumPreview(props: PageAlbumPreviewProps) {
  const { window, entry, fieldsMetaData } = props
  const data = entry.get('data')
  const pageTitle = data.get('title')
  const pageDescription = data.get('description')
  const pageBackground = data.get('background')
  const images = data.get('images')
  const [loadedImages, setLoadedImages] = useState<any[] | undefined>()

  useEffect(() => {
    async function loadData() {
      if (images.size) {
        const loadedAlbumsData = await Promise.all(
          images.toJS().map((image: any) => {
            return new Promise((resolve) => {
              const img = new Image()
              img.src = image.url
              img.onload = () => {
                resolve({
                  src: image.url,
                  width: img.naturalWidth,
                  height: img.naturalHeight,
                })
              }
            })
          }),
        )
        setLoadedImages(loadedAlbumsData)
      }
    }
    loadData()
  }, [images])

  if (!loadedImages) return null

  return (
    <PageAlbum
      title={pageTitle}
      description={pageDescription}
      background={pageBackground}
      images={loadedImages}
      currentWindow={window}
      isPreview
    />
  )
}

export { PageAlbumPreview }
