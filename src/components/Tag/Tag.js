import { h } from '../../lib/h.js'
import './Tag.css'

/** Compact mono label, e.g. a technology used in a project. */
export function Tag({ label }) {
  return h('li', { class: 'tag' }, label)
}

export function TagList({ items, label }) {
  return h(
    'ul',
    { class: 'tag-list', 'aria-label': label },
    items.map((item) => Tag({ label: item })),
  )
}
