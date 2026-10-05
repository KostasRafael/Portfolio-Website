import { Section } from '../../../components/Section/Section.js'
import { SectionHeader } from '../../../components/SectionHeader/SectionHeader.js'
import { PromptList } from '../../../components/PromptList/PromptList.js'
import './Learning.css'

export function Learning({ kicker, title, items }) {
  return Section({
    class: 'learning',
    labelledBy: 'learning-title',
    children: [
      SectionHeader({ kicker, title, id: 'learning-title' }),
      PromptList({ items }),
    ],
  })
}
