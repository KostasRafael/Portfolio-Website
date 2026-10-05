import { h } from '../../lib/h.js'
import './ProgressBar.css'

/** Labelled progress bar; `value` is a percentage (0–100), `level` is the text shown on the right. */
export function ProgressBar({ label, level, value }) {
  return h(
    'li',
    { class: 'progress' },
    h(
      'div',
      { class: 'progress__labels' },
      h('span', { class: 'progress__label' }, label),
      h('span', { class: 'progress__level' }, level),
    ),
    h(
      'div',
      {
        class: 'progress__track',
        role: 'progressbar',
        'aria-label': label,
        'aria-valuemin': 0,
        'aria-valuemax': 100,
        'aria-valuenow': value,
        'aria-valuetext': level,
      },
      h('div', { class: 'progress__fill', style: `width: ${value}%` }),
    ),
  )
}

export function ProgressList({ items }) {
  return h('ul', { class: 'progress-list' }, items.map(ProgressBar))
}
