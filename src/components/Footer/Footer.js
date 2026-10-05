import { h } from '../../lib/h.js'
import { SocialLink } from '../SocialLink/SocialLink.js'
import './Footer.css'

export function Footer({ copyright, socials }) {
  return h(
    'footer',
    { class: 'footer' },
    h('p', { class: 'footer__copy' }, copyright),
    h(
      'ul',
      { class: 'footer__socials' },
      socials.map((social) => h('li', {}, SocialLink(social))),
    ),
  )
}
