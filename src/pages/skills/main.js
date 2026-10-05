import { PageLayout, mount } from '../../layouts/PageLayout.js'
import { cvLink } from '../../data/site.js'
import { PageIntro } from '../../components/PageIntro/PageIntro.js'
import { Categories } from './sections/Categories.js'
import { LevelingUp } from './sections/LevelingUp.js'
import { intro, categories, levelingUp } from './content.js'

mount(
  PageLayout({
    activeHref: '/skills.html',
    children: [PageIntro({ ...intro, cta: cvLink }), Categories({ categories }), LevelingUp(levelingUp)],
  }),
)
