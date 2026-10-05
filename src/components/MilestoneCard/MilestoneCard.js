import { h } from '../../lib/h.js'
import './MilestoneCard.css'

export function MilestoneCard({ year, title, description }) {
  return h(
    'li',
    { class: 'milestone-card' },
    h('p', { class: 'milestone-card__year' }, year),
    h(
      'div',
      { class: 'milestone-card__text' },
      h('h3', { class: 'milestone-card__title' }, title),
      h('p', { class: 'milestone-card__description' }, description),
    ),
  )
}

/** Responsive grid of milestone cards (4 → 2 → 1 columns). */
export function MilestoneGrid({ items }) {
  return h('ol', { class: 'milestone-grid' }, items.map(MilestoneCard))
}
