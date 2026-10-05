import { h } from '../../lib/h.js'
import { Icon } from '../Icon/Icon.js'
import './SocialLink.css'

export function SocialLink({ label, icon, href }) {
  return h('a', { class: 'social-link', href }, Icon({ name: icon, size: 14 }), label)
}
