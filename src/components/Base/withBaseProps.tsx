import { useProps } from './useBaseProps'

import type { ComponentType, CSSProperties, ReactNode } from 'react'
import type { BaseProps } from './useBaseProps'

function withBaseProps<
  T extends {
    children?: ReactNode
    className?: string
    style?: CSSProperties
  },
>(WrappedComponent: ComponentType<T>) {
  function Component(props: T & BaseProps) {
    const {
      style,
      className,
      props: rest,
    } = useProps<T>({
      props,
    })

    return <WrappedComponent className={className} style={style} {...rest} />
  }
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  Component.displayName = `WithBaseProps(${displayName})`
  return Component
}

export { withBaseProps }
