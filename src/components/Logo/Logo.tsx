import { pxToRem } from '../../lib/pxToRem'
import { ReactComponent as LogoImage } from './logo.svg'
import styles from './Logo.module.css'

type LogoProps = {
  width?: number
}

function Logo(props: LogoProps) {
  const { width: widthInPixels } = props
  const widthInRems = pxToRem(widthInPixels)
  return (
    <LogoImage
      aria-hidden
      focusable={false}
      width={widthInRems}
      className={styles.root}
    />
  )
}

export { Logo }
