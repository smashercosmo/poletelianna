import React from 'react'
import clsx from 'clsx'

import './Base.css'

type Colors = string
type FontSize = 16 | 20 | 32 | 40 | 56
type FontStyle = 'italic'
type FontWeight = 'normal' | 'bold'
type FontFamily = 'object-sans' | 'transgender'
type LineHeight = 0 | 1
type TextAlign = 'left' | 'center' | 'right'
type VerticalAlign = 'baseline' | 'middle' | 'bottom' | 'top'

type BaseProps = {
  color?: Colors
  fontSize?: FontSize
  fontStyle?: FontStyle
  fontWeight?: FontWeight
  fontFamily?: FontFamily
  lineHeight?: LineHeight
  textAlign?: TextAlign
  verticalAlign?: VerticalAlign
  __dangerousClassName?: string
  __dangerousStyle?: React.CSSProperties
}

function useProps<P>({
  props,
}: {
  props: BaseProps & P
  componentClassName?: string
}) {
  const {
    color,
    fontSize,
    fontStyle,
    fontWeight,
    fontFamily,
    lineHeight,
    textAlign,
    verticalAlign,
    __dangerousStyle,
    __dangerousClassName,
    ...rest
  } = props

  const className = clsx('root', __dangerousClassName)

  const style = {
    ...(color !== undefined && { ['--c']: color }),
    ...(fontSize !== undefined && { ['--fz']: fontSize }),
    ...(fontStyle !== undefined && { ['--fs']: fontStyle }),
    ...(fontWeight !== undefined && { ['--fw']: fontWeight }),
    ...(fontFamily !== undefined && { ['--ff']: `var(--ff-${fontFamily})` }),
    ...(lineHeight !== undefined && { ['--lh']: lineHeight }),
    ...(textAlign !== undefined && { ['--ta']: textAlign }),
    ...(verticalAlign !== undefined && { ['--va']: verticalAlign }),
    ...__dangerousStyle,
  }

  return {
    style,
    className,
    props: rest,
  }
}

type HtmlPropsWithoutClassNameAndStyle<
  T extends keyof JSX.IntrinsicElements | HTMLElement,
> = Omit<
  T extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[T]
    : React.DetailedHTMLProps<React.HTMLAttributes<T>, T>,
  'className' | 'style'
>

function Text(props: BaseProps & HtmlPropsWithoutClassNameAndStyle<'span'>) {
  const { children } = props
  const {
    style,
    className,
    props: rest,
  } = useProps<HtmlPropsWithoutClassNameAndStyle<'span'>>({
    props,
  })
  return (
    <span className={className} style={style} {...rest}>
      {children}
    </span>
  )
}

export { Text }
