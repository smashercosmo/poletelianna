import { useProps } from './useBaseProps'

import type {
  BaseProps,
  HtmlPropsWithoutClassNameAndStyle,
} from './useBaseProps'

type TextProps = BaseProps & HtmlPropsWithoutClassNameAndStyle<'span'>

function Text(props: TextProps) {
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

export type { TextProps }
export { Text }
