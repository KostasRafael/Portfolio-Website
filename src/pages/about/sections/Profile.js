import { h } from '../../../lib/h.js'
import { Section } from '../../../components/Section/Section.js'
import { SectionHeader } from '../../../components/SectionHeader/SectionHeader.js'
import { Portrait } from '../../../components/Portrait/Portrait.js'
import { StatusIndicator } from '../../../components/StatusIndicator/StatusIndicator.js'
import './Profile.css'

export function Profile({ portrait, status, kicker, title, intro, paragraphs }) {
  return Section({
    class: 'profile',
    labelledBy: 'profile-title',
    children: [
      h('div', { class: 'profile__photo' }, Portrait(portrait), StatusIndicator({ label: status })),
      h(
        'div',
        { class: 'profile__bio' },
        SectionHeader({ kicker, title, id: 'profile-title', level: 'h1', size: 'xl' }),
        h(
          'div',
          { class: 'profile__text' },
          h('p', { class: 'profile__intro' }, intro),
          paragraphs.map((text) => h('p', {}, text)),
        ),
      ),
    ],
  })
}
