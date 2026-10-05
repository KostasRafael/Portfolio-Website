import { PageLayout, mount } from '../../layouts/PageLayout.js'
import { cvLink } from '../../data/site.js'
import { PageIntro } from '../../components/PageIntro/PageIntro.js'
import { ContactSection } from './sections/ContactSection.js'
import { intro, contact } from './content.js'

mount(
  PageLayout({
    activeHref: '/contact.html',
    children: [PageIntro({ ...intro, cta: cvLink, align: 'center', class: 'contact-intro' }), ContactSection(contact)],
  }),
)
