import { PageLayout, mount } from '../../layouts/PageLayout.js'
import { Profile } from './sections/Profile.js'
import { Timeline } from './sections/Timeline.js'
import { profile, timeline } from './content.js'

mount(
  PageLayout({
    activeHref: '/about.html',
    children: [Profile(profile), Timeline(timeline)],
  }),
)
