import { Link } from '../Link/Link'
import { Text } from '../Base/Text'
import styles from './AlbumBackButtonProps.module.css'

function AlbumBackButton() {
  return (
    <Link to="/">
      <span className={styles.content}>
        <svg
          viewBox="0 0 28 23"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          aria-hidden="true"
          className={styles.arrow}>
          <path d="M1.34914e-07 11.3138L0.707107 12.0209L0.707168 12.0208L11.3138 22.6274L12.0209 21.9203L1.928 11.8274L28 11.8274L28 10.8274L1.90055 10.8274L12.0208 0.707178L11.3137 7.07068e-05L0.707182 10.6066L7.56453e-05 11.3137L1.34914e-07 11.3138Z" />
        </svg>
        <Text fontSize={16}>go back</Text>
      </span>
    </Link>
  )
}

export { AlbumBackButton }
