import { useProps } from './useBaseProps'

import type {
  BaseProps,
  HtmlPropsWithoutClassNameAndStyle,
} from './useBaseProps'

type BoxProps = BaseProps & HtmlPropsWithoutClassNameAndStyle<'div'>

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

export { Box }
export { Grid }
export { Flex }
export type { BoxProps }
export type { BoxProps as GridProps }
export type { BoxProps as FlexProps }
