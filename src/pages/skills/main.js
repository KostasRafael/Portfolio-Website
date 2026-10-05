import { PageLayout, mount } from '../../layouts/PageLayout.js'
import { PageIntro } from '../../components/PageIntro/PageIntro.js'
import { Categories } from './sections/Categories.js'
import { LevelingUp } from './sections/LevelingUp.js'
import { intro, categories, levelingUp } from './content.js'

mount(
  PageLayout({
    activeHref: '/skills.html',
    children: [PageIntro(intro), Categories({ categories }), LevelingUp(levelingUp)],
  }),
)
