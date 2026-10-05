import { h, cx } from '../../lib/h.js'
import { Logo } from '../Logo/Logo.js'
import { Button } from '../Button/Button.js'
import './NavBar.css'

function NavLink({ label, href, active }) {
  return h(
    'a',
    { class: cx('nav__link', active && 'is-active'), href, 'aria-current': active && 'page' },
    label,
  )
}

/** Site header: logo, primary navigation and an optional call-to-action button. */
export function NavBar({ links, activeHref, cta }) {
  return h(
    'header',
    { class: 'navbar' },
    Logo(),
    h(
      'nav',
      { class: 'nav', 'aria-label': 'Primary' },
      links.map((link) => NavLink({ ...link, active: link.href === activeHref })),
    ),
    cta && Button({ ...cta, small: true }),
  )
}
