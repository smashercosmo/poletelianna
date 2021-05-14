declare module '*.svg' {
  import type React from 'react'

  const ReactComponent: React.ComponentClass<React.SVGProps<SVGSVGElement>>
  export { ReactComponent }
}
