import { Section } from '../../../components/Section/Section.js'
import { SectionHeader } from '../../../components/SectionHeader/SectionHeader.js'
import { MilestoneGrid } from '../../../components/MilestoneCard/MilestoneCard.js'
import './Timeline.css'

export function Timeline({ kicker, title, milestones }) {
  return Section({
    class: 'timeline',
    labelledBy: 'timeline-title',
    children: [
      SectionHeader({ kicker, title, id: 'timeline-title', size: 'md' }),
      MilestoneGrid({ items: milestones }),
    ],
  })
}
