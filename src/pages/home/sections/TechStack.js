import { Section } from '../../../components/Section/Section.js'
import { SectionHeader } from '../../../components/SectionHeader/SectionHeader.js'
import { BadgeList } from '../../../components/Badge/Badge.js'

export function TechStack({ kicker, title, skills }) {
  return Section({
    labelledBy: 'tech-stack-title',
    children: [
      SectionHeader({ kicker, title, id: 'tech-stack-title' }),
      BadgeList({ items: skills }),
    ],
  })
}
