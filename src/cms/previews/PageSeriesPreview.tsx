import { useState, useEffect } from 'react'
import slugify from '@sindresorhus/slugify'

import { PageSeries } from '../../components/PageSeries/PageSeries'

import type { PreviewTemplateComponentProps } from 'netlify-cms-core'

// TODO make PR to netlify-cms to add 'window' and 'document' props
type PageSeriesPreviewProps = PreviewTemplateComponentProps & {
  window: Window
}

function PageSeriesPreview(props: PageSeriesPreviewProps) {
  const { window, entry, fieldsMetaData } = props
  const data = entry.get('data')
  const pageTitle = data.get('title')
  const albumTitles = data.get('albums')
  const [loadedAlbums, setLoadedAlbums] = useState<any[] | undefined>()

  useEffect(() => {
    async function loadData() {
      const albums = albumTitles
        .map((album: string) => {
          return fieldsMetaData.getIn(['albums', 'albums', album])
        })
        .toJSON()
        .filter(Boolean)

      if (albums.length) {
        const loadedAlbumsData = await Promise.all(
          albums.map((album: any) => {
            const { background, description, title: albumTitle, images } = album
            const cover = images.find((image: any) => image.cover) || images[0]
            return new Promise((resolve) => {
              const img = new Image()
              img.src = cover.url
              img.onload = () => {
                resolve({
                  background,
                  description,
                  title: albumTitle,
                  slug: `/${slugify(albumTitle)}/`,
                  cover: {
                    src: cover.url,
                    width: img.naturalWidth,
                    height: img.naturalHeight,
                  },
                })
              }
            })
          }),
        )
        setLoadedAlbums(loadedAlbumsData)
      }
    }
    loadData()
  }, [albumTitles, fieldsMetaData])

  if (!loadedAlbums) return null

  return (
    <PageSeries
      title={pageTitle}
      albums={loadedAlbums}
      currentWindow={window}
      isPreview
    />
  )
}

export { PageSeriesPreview }
