import { useProps } from './useBaseProps'

import type {
  BaseProps,
  HtmlPropsWithoutClassNameAndStyle,
} from './useBaseProps'

type ArticleProps = BaseProps & HtmlPropsWithoutClassNameAndStyle<'article'>

function Article(props: ArticleProps) {
  const { children } = props
  const {
    style,
    className,
    props: rest,
  } = useProps<HtmlPropsWithoutClassNameAndStyle<'article'>>({
    props,
  })
  return (
    <article className={className} style={style} {...rest}>
      {children}
    </article>
  )
}

export type { ArticleProps }
export { Article }
