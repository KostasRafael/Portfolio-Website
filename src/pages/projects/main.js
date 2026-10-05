import { PageLayout, mount } from '../../layouts/PageLayout.js'
import { cvLink } from '../../data/site.js'
import { PageIntro } from '../../components/PageIntro/PageIntro.js'
import { ProjectList } from './sections/ProjectList.js'
import { intro, projects } from './content.js'

mount(
  PageLayout({
    activeHref: '/projects.html',
    children: [PageIntro({ ...intro, cta: cvLink }), ProjectList({ projects })],
  }),
)
