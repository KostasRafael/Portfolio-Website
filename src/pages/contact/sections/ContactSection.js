import { h } from '../../../lib/h.js'
import { Section } from '../../../components/Section/Section.js'
import { ContactForm } from '../../../components/ContactForm/ContactForm.js'
import './ContactSection.css'

export function ContactSection({ form, location, timezone }) {
  return Section({
    class: 'contact',
    children: [
      ContactForm(form),
      h(
        'div',
        { class: 'contact__location' },
        h('p', { class: 'contact__location-main' }, location),
        h('p', { class: 'contact__location-note' }, `// ${timezone}`),
      ),
    ],
  })
}
