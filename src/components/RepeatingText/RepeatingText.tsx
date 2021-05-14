import styles from './RepeatingText.module.css'

interface RepeatingText {
  children: string
}

function RepeatingText(props: RepeatingText) {
  const { children } = props
  return (
    <div className={styles.root} aria-hidden="true">
      <span className={styles.text}>
        <span className={styles.before}>{` ${children}`.repeat(6)}</span>
        <span>&nbsp;{children}&nbsp;</span>
        <span className={styles.after}>{`${children} `.repeat(6)}</span>
      </span>
    </div>
  )
}

export { RepeatingText }
