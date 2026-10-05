import { h, cx } from '../../lib/h.js'
import { Logo } from '../Logo/Logo.js'
import './NavBar.css'

function NavLink({ label, href, active }) {
  return h(
    'a',
    { class: cx('nav__link', active && 'is-active'), href, 'aria-current': active && 'page' },
    label,
  )
}

export function NavBar({ links, activeHref }) {
  return h(
    'header',
    { class: 'navbar' },
    Logo(),
    h(
      'nav',
      { class: 'nav', 'aria-label': 'Primary' },
      links.map((link) => NavLink({ ...link, active: link.href === activeHref })),
    ),
  )
}
