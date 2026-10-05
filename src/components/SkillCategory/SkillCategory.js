import { h } from '../../lib/h.js'
import { BadgeList } from '../Badge/Badge.js'
import './SkillCategory.css'

/** Card grouping skill badges under a code-comment style title, e.g. "// Frontend Stack". */
export function SkillCategory({ title, skills }) {
  return h(
    'article',
    { class: 'skill-category' },
    h('h2', { class: 'skill-category__title' }, `// ${title}`),
    BadgeList({ items: skills }),
  )
}
