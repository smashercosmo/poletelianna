import { useProps } from './useBaseProps'

import type {
  BaseProps,
  HtmlPropsWithoutClassNameAndStyle,
} from './useBaseProps'

type FormProps = BaseProps & HtmlPropsWithoutClassNameAndStyle<'form'>

function Form(props: FormProps) {
  const { children } = props
  const {
    style,
    className,
    props: rest,
  } = useProps<HtmlPropsWithoutClassNameAndStyle<'form'>>({
    props,
  })
  return (
    <form className={className} style={style} {...rest}>
      {children}
    </form>
  )
}

export type { FormProps }
export { Form }
