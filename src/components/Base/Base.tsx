import React from 'react'
import clsx from 'clsx'

import { getPadding } from './getPadding'
import { getMargin } from './getMargin'
import { getGap } from './getGap'
import { getDimensions } from './getDimensions'
import { getBorderWidth } from './getBorderWidth'

import './Base.css'

type Space = string | number
type Padding = Space
type Margin = Space
type Gap = Space
type Dimensions = string | number
type Stroke = number
type Display =
  | 'flex'
  | 'grid'
  | 'inline'
  | 'block'
  | 'inline-block'
  | 'list-item'
  | 'none'
  | 'table-row'
  | 'table-header-group'
  | 'table-row-group'
type Colors =
  | 'white'
  | 'gray-50'
  | 'gray-100'
  | 'gray-200'
  | 'gray-300'
  | 'blue-700'
type FontSize = number
type FontStyle = 'italic'
type FontWeight = 'normal' | 'bold'
type FontFamily = 'ember' | 'ember-cd'
type LineHeight = 0 | 1
type TextAlign = 'left' | 'center' | 'right'
type VerticalAlign = 'baseline' | 'middle' | 'bottom' | 'top'
type AlignItems = 'baseline' | 'center' | 'start' | 'end'
type JustifyContent = 'start' | 'end' | 'center' | 'space-between'

type BaseProps = {
  p?: Padding
  px?: Padding
  py?: Padding
  pl?: Padding
  pr?: Padding
  pt?: Padding
  pb?: Padding
  m?: Margin
  mx?: Margin
  my?: Margin
  ml?: Margin
  mr?: Margin
  mt?: Margin
  mb?: Margin
  gap?: Gap
  rowGap?: Gap
  columnGap?: Gap
  width?: Dimensions
  height?: Dimensions
  minHeight?: Dimensions
  minWidth?: Dimensions
  maxHeight?: Dimensions
  maxWidth?: Dimensions
  display?: Display
  color?: Colors
  fontSize?: FontSize
  fontStyle?: FontStyle
  fontWeight?: FontWeight
  fontFamily?: FontFamily
  lineHeight?: LineHeight
  textAlign?: TextAlign
  verticalAlign?: VerticalAlign
  backgroundColor?: Colors
  borderColor?: Colors
  borderWidth?: Stroke
  borderLeftWidth?: Stroke
  borderRightWidth?: Stroke
  borderTopWidth?: Stroke
  borderBottomWidth?: Stroke
  alignItems?: AlignItems
  justifyContent?: JustifyContent
  __dangerousClassName?: string
  __dangerousStyle?: React.CSSProperties
}

function useProps<P>({
  props,
  componentClassName,
}: {
  props: BaseProps & P
  componentClassName?: string
}) {
  const {
    p,
    px,
    py,
    pl,
    pr,
    pt,
    pb,
    m,
    mx,
    my,
    ml,
    mr,
    mt,
    mb,
    gap,
    rowGap,
    columnGap,
    width,
    height,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    display,
    color,
    fontSize,
    fontStyle,
    fontWeight,
    fontFamily,
    lineHeight,
    textAlign,
    verticalAlign,
    backgroundColor,
    borderColor,
    borderWidth,
    borderLeftWidth,
    borderRightWidth,
    borderTopWidth,
    borderBottomWidth,
    alignItems,
    justifyContent,
    __dangerousStyle,
    __dangerousClassName,
    ...rest
  } = props

  const className = clsx('root', componentClassName, __dangerousClassName)

  const style = {
    ...getPadding({ p, px, py, pl, pr, pt, pb }),
    ...getMargin({ m, mx, my, ml, mr, mt, mb }),
    ...getGap({ gap, rowGap, columnGap }),
    ...getDimensions({
      width,
      height,
      maxWidth,
      maxHeight,
      minWidth,
      minHeight,
    }),
    ...(display !== undefined && { ['--d']: display }),
    ...(color !== undefined && { ['--c']: `var(--${color})` }),
    ...(fontSize !== undefined && { ['--fz']: fontSize }),
    ...(fontStyle !== undefined && { ['--fs']: fontStyle }),
    ...(fontWeight !== undefined && { ['--fw']: fontWeight }),
    ...(fontFamily !== undefined && { ['--ff']: `var(--ff-${fontFamily})` }),
    ...(lineHeight !== undefined && { ['--lh']: lineHeight }),
    ...(textAlign !== undefined && { ['--ta']: textAlign }),
    ...(verticalAlign !== undefined && { ['--va']: verticalAlign }),
    ...(backgroundColor !== undefined && {
      ['--bgc']: `var(--${backgroundColor})`,
    }),
    ...(borderColor !== undefined && {
      ['--bdc']: `var(--${borderColor})`,
    }),
    ...getBorderWidth({
      borderWidth,
      borderLeftWidth,
      borderRightWidth,
      borderTopWidth,
      borderBottomWidth,
    }),
    ...(alignItems !== undefined && { ['--fx-ai']: alignItems }),
    ...(justifyContent !== undefined && { ['--fx-jc']: justifyContent }),
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

const [Box, Grid, Flex] = (
  [
    { displayName: 'Box', tag: 'div', className: 'box' },
    { displayName: 'Grid', tag: 'div', className: 'grid' },
    { displayName: 'Flex', tag: 'div', className: 'flex' },
  ] as const
).map(function createBoxElements({
  displayName,
  tag: Tag,
  className: componentClassName,
}) {
  function Component(
    props: BaseProps & HtmlPropsWithoutClassNameAndStyle<'div'>,
  ) {
    const { children } = props
    const {
      style,
      className,
      props: rest,
    } = useProps<HtmlPropsWithoutClassNameAndStyle<'div'>>({
      props,
      componentClassName,
    })
    return (
      <Tag className={className} style={style} {...rest}>
        {children}
      </Tag>
    )
  }
  Component.displayName = displayName
  return Component
})

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

type HProps = BaseProps & HtmlPropsWithoutClassNameAndStyle<HTMLHeadingElement>

const [H1, H2, H3, H4, H5, H6] = (
  [
    { displayName: 'H1', tag: 'h1', className: 'h' },
    { displayName: 'H2', tag: 'h2', className: 'h' },
    { displayName: 'H3', tag: 'h3', className: 'h' },
    { displayName: 'H4', tag: 'h4', className: 'h' },
    { displayName: 'H5', tag: 'h5', className: 'h' },
    { displayName: 'H6', tag: 'h6', className: 'h' },
  ] as const
).map(function createHeading({
  displayName,
  tag: Tag,
  className: componentClassName,
}) {
  function Component(props: HProps) {
    const { children } = props
    const {
      style,
      className,
      props: rest,
    } = useProps<HtmlPropsWithoutClassNameAndStyle<HTMLHeadingElement>>({
      props,
      componentClassName,
    })
    return (
      <Tag className={className} style={style} {...rest}>
        {children}
      </Tag>
    )
  }
  Component.displayName = displayName
  return Component
})

export type { Space }
export type { Padding }
export type { Margin }
export type { Gap }
export type { Dimensions }
export type { Stroke }
export type { Colors }
export type { HProps }
export { Box }
export { Grid }
export { Flex }
export { Text }
export { H1, H2, H3, H4, H5, H6 }
