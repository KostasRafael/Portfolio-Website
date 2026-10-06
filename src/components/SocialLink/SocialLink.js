import { h } from '../../lib/h.js'
import { Icon } from '../Icon/Icon.js'
import './SocialLink.css'

export function SocialLink({ label, icon, href, external = false }) {
  return h(
    'a',
    { class: 'social-link', href, target: external && '_blank', rel: external && 'noopener noreferrer' },
    Icon({ name: icon, size: 14 }),
    label,
  )
}
