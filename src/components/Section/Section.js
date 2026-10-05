import { h, cx } from '../../lib/h.js'
import './Section.css'

/** Full-width page section with the site gutter; vertical rhythm comes from `class`. */
export function Section({ class: className, labelledBy, children }) {
  return h('section', { class: cx('section', className), 'aria-labelledby': labelledBy }, children)
}
