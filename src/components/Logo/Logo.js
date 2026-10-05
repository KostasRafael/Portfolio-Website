import { h } from '../../lib/h.js'
import './Logo.css'

export function Logo({ initials = 'AC', href = '/' } = {}) {
  return h(
    'a',
    { class: 'logo', href, 'aria-label': 'Home' },
    h('span', { class: 'logo__bracket' }, '<'),
    h('span', { class: 'logo__initials' }, initials),
    h('span', { class: 'logo__bracket' }, '/>'),
  )
}
