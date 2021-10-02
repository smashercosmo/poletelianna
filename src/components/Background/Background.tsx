import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import { Box } from '../Base/Box'

interface BackgroundProps {
  color: string
}

function Background(props: BackgroundProps) {
  const { color } = props
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    setShouldRender(true)
  }, [])

  if (!shouldRender) {
    return null
  }

  return ReactDOM.createPortal(
    <Box
      __dangerousStyle={{ backgroundColor: color }}
      position="absolute"
      top={0}
      bottom={0}
      left={0}
      right={0}
      zIndex={-1}
    />,
    document.body,
  )
}

export { Background }
