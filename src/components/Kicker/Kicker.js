import { h } from '../../lib/h.js'
import './Kicker.css'

/** Small mono label rendered as a tag, e.g. "< INTRO />". */
export function Kicker({ label }) {
  return h(
    'p',
    { class: 'kicker' },
    h('span', { class: 'kicker__bracket' }, '<'),
    label,
    h('span', { class: 'kicker__bracket' }, '/>'),
  )
}
