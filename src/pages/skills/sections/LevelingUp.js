import { Section } from '../../../components/Section/Section.js'
import { SectionHeader } from '../../../components/SectionHeader/SectionHeader.js'
import { ProgressList } from '../../../components/ProgressBar/ProgressBar.js'
import './LevelingUp.css'

export function LevelingUp({ kicker, title, items }) {
  return Section({
    class: 'leveling-up',
    labelledBy: 'leveling-up-title',
    children: [
      SectionHeader({ kicker, title, id: 'leveling-up-title', size: 'md' }),
      ProgressList({ items }),
    ],
  })
}
