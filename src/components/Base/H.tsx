import { useProps } from './useBaseProps'

import type {
  BaseProps,
  HtmlPropsWithoutClassNameAndStyle,
} from './useBaseProps'

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

export type { HProps }
export { H1 }
export { H2 }
export { H3 }
export { H4 }
export { H5 }
export { H6 }
