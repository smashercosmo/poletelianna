declare module '*.svg' {
  import React from 'react'

  const ReactComponent: React.ComponentClass<React.SVGProps<SVGSVGElement>>
  export { ReactComponent }
}
