import * as React from 'react'

import { getMediaQueryList } from '../../lib/getMediaQueryList'
import type { breakpoints } from '../../lib/getMediaQueryList'

function useExpanded({
  collapseAt,
  currentPath,
}: {
  collapseAt: keyof typeof breakpoints
  currentPath: string
}) {
  const [isExpanded, setIsExpanded] = React.useState(false)

  // 1. Hide expanded sidebar on wide screens
  React.useEffect(() => {
    const mq = getMediaQueryList({ breakpoint: collapseAt })

    function onMediaChange(event: MediaQueryListEvent) {
      if (event.matches) {
        setIsExpanded(false)
      }
    }

    mq.addEventListener('change', onMediaChange)

    return () => {
      mq.removeEventListener('change', onMediaChange)
    }
  }, [collapseAt])

  // 2. Hide expanded sidebar when user clicks any link inside it
  React.useEffect(() => {
    setIsExpanded(false)
  }, [currentPath])

  return [isExpanded, setIsExpanded] as const
}

export { useExpanded }
