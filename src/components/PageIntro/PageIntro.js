import { h, cx } from '../../lib/h.js'
import { Section } from '../Section/Section.js'
import { Kicker } from '../Kicker/Kicker.js'
import { Button } from '../Button/Button.js'
import './PageIntro.css'

/**
 * Top-of-page section: kicker, page title (h1), a lead paragraph and an optional call-to-action button.
 * `align: 'center'` centres the block; `class` lets a page adjust its spacing.
 */
export function PageIntro({ kicker, title, lead, cta, id = 'page-title', align = 'start', class: className }) {
  return Section({
    class: cx('page-intro', align === 'center' && 'page-intro--center', className),
    labelledBy: id,
    children: [
      Kicker({ label: kicker }),
      h('h1', { class: 'page-intro__title', id }, title),
      lead && h('p', { class: 'page-intro__lead' }, lead),
      cta && h('div', { class: 'page-intro__cta' }, Button(cta)),
    ],
  })
}
