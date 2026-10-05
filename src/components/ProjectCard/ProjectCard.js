import { h } from '../../lib/h.js'
import { TagList } from '../Tag/Tag.js'
import { TextLink } from '../TextLink/TextLink.js'
import './ProjectCard.css'

/** Large project card: screenshot on the left, problem / solution / stack / learnings on the right. */
export function ProjectCard({ number, title, image, problem, solution, tags, learned, demoUrl, repoUrl }) {
  const titleId = `project-${number}-title`

  return h(
    'article',
    { class: 'project-card', 'aria-labelledby': titleId },
    h(
      'div',
      { class: 'project-card__media' },
      h('img', {
        class: 'project-card__image',
        src: image.src,
        alt: image.alt,
        width: 1264,
        height: 848,
        loading: 'lazy',
      }),
    ),
    h(
      'div',
      { class: 'project-card__info' },
      h(
        'div',
        { class: 'project-card__heading' },
        h('p', { class: 'project-card__number' }, `PROJECT ${String(number).padStart(2, '0')}`),
        h('h2', { class: 'project-card__title', id: titleId }, title),
      ),
      h(
        'div',
        { class: 'project-card__summary' },
        h('p', { class: 'project-card__problem' }, `The problem: ${problem}`),
        h('p', { class: 'project-card__solution' }, `The solution: ${solution}`),
      ),
      TagList({ items: tags, label: 'Technologies used' }),
      h('p', { class: 'project-card__learned' }, `What I learned: ${learned}`),
      h(
        'div',
        { class: 'project-card__links' },
        TextLink({ label: 'Live Demo', href: demoUrl, icon: 'external-link', external: true }),
        TextLink({ label: 'GitHub Repo', href: repoUrl, icon: 'github-accent', external: true }),
      ),
    ),
  )
}
