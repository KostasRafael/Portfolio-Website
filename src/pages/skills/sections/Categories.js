import { Section } from '../../../components/Section/Section.js'
import { SkillCategory } from '../../../components/SkillCategory/SkillCategory.js'
import './Categories.css'

export function Categories({ categories }) {
  return Section({
    class: 'skills-categories',
    children: categories.map(SkillCategory),
  })
}
