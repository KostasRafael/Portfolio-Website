import { h } from '../../lib/h.js'
import { Kicker } from '../Kicker/Kicker.js'
import './SectionHeader.css'

/**
 * Kicker label + heading.
 * `level` sets the heading element (h1/h2); `size` is 'sm' (24px), 'md' (28px) or 'xl' (48px).
 */
export function SectionHeader({ kicker, title, id, level = 'h2', size = 'sm' }) {
  return h(
    'div',
    { class: 'section-header' },
    Kicker({ label: kicker }),
    h(level, { class: `section-header__title section-header__title--${size}`, id }, title),
  )
}
