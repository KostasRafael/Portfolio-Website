import { h } from '../../lib/h.js'
import './Portrait.css'

/** Bordered, rounded photo frame; the image covers the frame. */
export function Portrait({ src, alt }) {
  return h(
    'div',
    { class: 'portrait' },
    h('img', { class: 'portrait__image', src, alt, width: 928, height: 1152, loading: 'eager' }),
  )
}
