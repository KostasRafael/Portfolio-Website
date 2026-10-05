import { h } from '../../lib/h.js'
import { Icon } from '../Icon/Icon.js'
import './Badge.css'

export function Badge({ label, icon }) {
  return h('li', { class: 'badge' }, icon && Icon({ name: icon }), label)
}

/** Wrapping row of badges. */
export function BadgeList({ items }) {
  return h('ul', { class: 'badge-list' }, items.map(Badge))
}
