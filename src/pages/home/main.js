import { PageLayout, mount } from '../../layouts/PageLayout.js'
import { Hero } from './sections/Hero.js'
import { TechStack } from './sections/TechStack.js'
import { Learning } from './sections/Learning.js'
import { hero, techStack, learning } from './content.js'

mount(
  PageLayout({
    activeHref: '/',
    children: [Hero(hero), TechStack(techStack), Learning(learning)],
  }),
)
