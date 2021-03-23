import React from 'react'

import { Frame } from './src/components/Frame/Frame.tsx'

import navigation from './content/blocks/navigation.json'

export function wrapPageElement({ element, props }) {
  const { path } = props
  return (
    <Frame currentPath={path} navigationItems={navigation.items}>
      {element}
    </Frame>
  )
}
