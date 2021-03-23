import React from 'react'
import type { ReactNode } from 'react'

import styles from './ResponsiveText.module.css'

type FontSize = string | 16 | 20 | 32 | 40 | 56

interface ResponsiveFontSize {
  xs?: FontSize
  sm?: FontSize
  md?: FontSize
  lg?: FontSize
  xl?: FontSize
}

interface ResponsiveTextProps extends ResponsiveFontSize {
  children: ReactNode
}

function getFontSize(fontSize: FontSize) {
  if (typeof fontSize === 'string') return fontSize
  return `var(--fz-${fontSize})`
}

function ResponsiveText(props: ResponsiveTextProps) {
  const { children, xs, sm, md, lg, xl } = props

  const style = {
    ...(xs && { [`--r-fz-xs`]: getFontSize(xs) }),
    ...(sm && { [`--r-fz-sm`]: getFontSize(sm) }),
    ...(md && { [`--r-fz-md`]: getFontSize(md) }),
    ...(lg && { [`--r-fz-lg`]: getFontSize(lg) }),
    ...(xl && { [`--r-fz-xl`]: getFontSize(xl) }),
  }

  return (
    <span className={styles.root} style={style}>
      {children}
    </span>
  )
}

export type { ResponsiveFontSize }
export { ResponsiveText }
