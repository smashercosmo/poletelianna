import { useProps } from './useBaseProps'

import type {
  BaseProps,
  HtmlPropsWithoutClassNameAndStyle,
} from './useBaseProps'

type LabelProps = BaseProps & HtmlPropsWithoutClassNameAndStyle<'label'>

function Label(props: LabelProps) {
  const { children } = props
  const {
    style,
    className,
    props: rest,
  } = useProps<HtmlPropsWithoutClassNameAndStyle<'label'>>({
    props,
  })
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={className} style={style} {...rest}>
      {children}
    </label>
  )
}

export type { LabelProps }
export { Label }
