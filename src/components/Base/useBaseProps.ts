import clsx from 'clsx'

import { getPadding } from './getPadding'
import { getMargin } from './getMargin'
import { getGap } from './getGap'
import { getDimensions } from './getDimensions'
import { getBorderWidth } from './getBorderWidth'
import { getColor } from './getColor'
import { getProperty } from './getProperty'

import type { CSSProperties, DetailedHTMLProps, HTMLAttributes } from 'react'

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
type Overflow = 'hidden' | 'visible' | 'scroll' | 'auto'
type Colors =
  | 'white'
  | 'gray-50'
  | 'gray-100'
  | 'gray-200'
  | 'gray-300'
  | 'blue-300'
  | 'blue-700'
  | 'blue-800'
  | 'red-400'
  | 'status-red'
  | 'status-yellow'
  | 'status-green'
  | 'status-pink'
  | 'squidink'
  | 'transparent'
type FontSize = number
type FontStyle = 'italic'
type FontWeight = 'normal' | 'bold'
type FontFamily = 'transgender' | 'object-sans'
type LineHeight = 0 | 1
type TextDecoration = 'none' | 'underline'
type TextAlign = 'left' | 'center' | 'right'
type VerticalAlign = 'baseline' | 'middle' | 'bottom' | 'top'
type Flex = 1 | 'none'
type FlexDirection = 'column'
type AlignItems = 'baseline' | 'center' | 'flex-start' | 'flex-end'
type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between'
type Position = 'relative' | 'absolute' | 'fixed' | 'sticky'
type Coordinates = 0 | '100%' | '-100%'
type ZIndex = -1 | 0 | 1 | 2
type BorderRadius = number | '50%'

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
  position?: Position
  top?: Coordinates
  bottom?: Coordinates
  left?: Coordinates
  right?: Coordinates
  zIndex?: ZIndex
  display?: Display
  overflow?: Overflow
  color?: Colors
  fontSize?: FontSize
  fontStyle?: FontStyle
  fontWeight?: FontWeight
  fontFamily?: FontFamily
  lineHeight?: LineHeight
  textDecoration?: TextDecoration
  textAlign?: TextAlign
  verticalAlign?: VerticalAlign
  backgroundColor?: Colors
  borderColor?: Colors
  borderWidth?: Stroke
  borderLeftWidth?: Stroke
  borderRightWidth?: Stroke
  borderTopWidth?: Stroke
  borderBottomWidth?: Stroke
  borderRadius?: BorderRadius
  flex?: Flex
  flexDirection?: FlexDirection
  alignItems?: AlignItems
  justifyContent?: JustifyContent
  __dangerousClassName?: string
  __dangerousStyle?: CSSProperties
}

type HtmlPropsWithoutClassNameAndStyle<
  T extends keyof JSX.IntrinsicElements | HTMLElement,
> = Omit<
  T extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[T]
    : DetailedHTMLProps<HTMLAttributes<T>, T>,
  'className' | 'style'
>

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
    position,
    top,
    bottom,
    left,
    right,
    zIndex,
    display,
    overflow,
    color,
    fontSize,
    fontStyle,
    fontWeight,
    fontFamily,
    lineHeight,
    textDecoration,
    textAlign,
    verticalAlign,
    backgroundColor,
    borderColor,
    borderWidth,
    borderLeftWidth,
    borderRightWidth,
    borderTopWidth,
    borderBottomWidth,
    borderRadius,
    flex,
    flexDirection,
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
    ...(position !== undefined && { ['--pos']: position }),
    ...(top !== undefined && { ['--t']: top }),
    ...(bottom !== undefined && { ['--b']: bottom }),
    ...(left !== undefined && { ['--l']: left }),
    ...(right !== undefined && { ['--r']: right }),
    ...(zIndex !== undefined && { ['--z']: zIndex }),
    ...(display !== undefined && { ['--d']: display }),
    ...(overflow !== undefined && { ['--o']: overflow }),
    ...(color !== undefined && { ['--c']: getColor(color) }),
    ...(fontSize !== undefined && { ['--fz']: fontSize }),
    ...(fontStyle !== undefined && { ['--fs']: fontStyle }),
    ...(fontWeight !== undefined && { ['--fw']: fontWeight }),
    ...(fontFamily !== undefined && { ['--ff']: `var(--ff-${fontFamily})` }),
    ...(lineHeight !== undefined && { ['--lh']: lineHeight }),
    ...(textDecoration !== undefined && { ['--td']: textDecoration }),
    ...(textAlign !== undefined && { ['--ta']: textAlign }),
    ...(verticalAlign !== undefined && { ['--va']: verticalAlign }),
    ...(backgroundColor !== undefined && {
      ['--bgc']: getColor(backgroundColor),
    }),
    ...(borderColor !== undefined && {
      ['--bdc']: getColor(borderColor),
    }),
    ...getBorderWidth({
      borderWidth,
      borderLeftWidth,
      borderRightWidth,
      borderTopWidth,
      borderBottomWidth,
    }),
    ...(borderRadius !== undefined &&
      getProperty({
        name: 'bdrs',
        value: borderRadius,
      })),
    ...(flex !== undefined && { [`--fx`]: flex }),
    ...(flexDirection !== undefined && { [`--fx-d`]: flexDirection }),
    ...(alignItems !== undefined && { ['--fx-ai']: alignItems }),
    ...(justifyContent !== undefined && { ['--fx-jc']: justifyContent }),
    ...__dangerousStyle,
  }

  return {
    style,
    className,
    // TODO this is a bug in TS https://github.com/Microsoft/TypeScript/issues/28938#issuecomment-450636046
    props: rest as P,
  }
}

export { useProps }
export type { BaseProps }
export type { AlignItems }
export type { JustifyContent }
export type { Space }
export type { Padding }
export type { Margin }
export type { Gap }
export type { Dimensions }
export type { Stroke }
export type { Colors }
export type { HtmlPropsWithoutClassNameAndStyle }
