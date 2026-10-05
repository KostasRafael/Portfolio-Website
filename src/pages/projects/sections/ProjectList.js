import { Section } from '../../../components/Section/Section.js'
import { ProjectCard } from '../../../components/ProjectCard/ProjectCard.js'
import './ProjectList.css'

export function ProjectList({ projects }) {
  return Section({
    class: 'project-list',
    children: projects.map((project, index) => ProjectCard({ ...project, number: index + 1 })),
  })
}
