import { Heading } from '../Heading/Heading'
import { Paragraph } from '../Paragraph/Paragraph'
import { ResponsiveText } from '../ResponsiveText/ResponsiveText'
import styles from './AlbumCaption.module.css'

import type { ResponsiveFontSize } from '../ResponsiveText/ResponsiveText'

interface AlbumCaptionProps {
  title: string
  description: string
  titleSize: ResponsiveFontSize
  subtitleSize: ResponsiveFontSize
  descriptionSize: ResponsiveFontSize
}

function AlbumCaption(props: AlbumCaptionProps) {
  const { title, description, titleSize, subtitleSize, descriptionSize } = props

  return (
    <div>
      <Heading level={1} position="relative">
        <div className={styles.subtitle}>
          <ResponsiveText {...subtitleSize}>series</ResponsiveText>
        </div>
        <div className={styles.title}>
          <ResponsiveText {...titleSize}>{title}</ResponsiveText>
        </div>
      </Heading>
      <Paragraph className={styles.description}>
        <ResponsiveText {...descriptionSize}>{description}</ResponsiveText>
      </Paragraph>
    </div>
  )
}

export { AlbumCaption }
