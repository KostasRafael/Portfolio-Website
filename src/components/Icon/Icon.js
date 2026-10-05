import { h } from '../../lib/h.js'
import './Icon.css'

/** Decorative SVG icon from /public/icons. */
export function Icon({ name, size = 16 }) {
  return h('img', {
    class: 'icon',
    src: `/icons/${name}.svg`,
    width: size,
    height: size,
    alt: '',
    'aria-hidden': 'true',
  })
}
