import { Frame } from './src/components/Frame/Frame.tsx'
import navigation from './content/blocks/navigation.json'
import './src/styles/globals.css'
// TODO for some reason gatsby doesn't load global css
//  from any other location
import './src/components/Base/Base.css'

export function wrapPageElement({ element, props }) {
  const { location } = props

  return (
    <Frame currentPath={location.pathname} navigationItems={navigation.items}>
      {element}
    </Frame>
  )
}
