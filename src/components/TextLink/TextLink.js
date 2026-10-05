import { h } from '../../lib/h.js'
import { Icon } from '../Icon/Icon.js'
import './TextLink.css'

/** Accent-coloured mono link with a trailing icon. External links open in a new tab. */
export function TextLink({ label, href, icon, external = false }) {
  return h(
    'a',
    {
      class: 'text-link',
      href,
      target: external && '_blank',
      rel: external && 'noopener noreferrer',
    },
    label,
    icon && Icon({ name: icon, size: 14 }),
  )
}
