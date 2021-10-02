import { Frame } from './src/components/Frame/Frame.tsx'
import navigation from './content/blocks/navigation.json'

export function wrapPageElement({ element, props }) {
  const { location } = props

  return (
    <Frame currentPath={location.pathname} navigationItems={navigation.items}>
      {element}
    </Frame>
  )
}
