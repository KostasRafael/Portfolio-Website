import { h } from '../../lib/h.js'
import './PromptList.css'

/** List whose items are prefixed with a terminal-style ">" marker. */
export function PromptList({ items }) {
  return h(
    'ul',
    { class: 'prompt-list' },
    items.map((item) => h('li', { class: 'prompt-list__item' }, item)),
  )
}
