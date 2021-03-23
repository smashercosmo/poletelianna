// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import CMS from 'netlify-cms-app'

import { PageSeriesPreview } from './previews/PageSeriesPreview'

const config =
  process.env.NODE_ENV === 'development'
    ? { local_backend: { url: 'http://localhost:8000/api/v1' } }
    : {
        backend: {
          name: 'git-gateway',
          branch: process.env.GATSBY_BRANCH || 'main',
        },
      }

CMS.registerPreviewTemplate('series', PageSeriesPreview)

CMS.init({ config })
