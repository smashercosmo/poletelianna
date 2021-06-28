import { Frame } from './src/components/Frame/Frame.tsx'
import navigation from './content/blocks/navigation.json'
import './src/styles/globals.css'

export function wrapPageElement({ element, props }) {
  const { path } = props
  return (
    <Frame currentPath={path} navigationItems={navigation.items}>
      {element}
    </Frame>
  )
}
