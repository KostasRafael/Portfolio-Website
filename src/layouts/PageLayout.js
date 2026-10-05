import '../styles/tokens.css'
import '../styles/base.css'
import { h } from '../lib/h.js'
import { NavBar } from '../components/NavBar/NavBar.js'
import { Footer } from '../components/Footer/Footer.js'
import { navLinks, socialLinks, copyright } from '../data/site.js'

/** Shared page shell: nav bar, page content, footer. */
export function PageLayout({ activeHref, children }) {
  return [
    NavBar({ links: navLinks, activeHref }),
    h('main', {}, children),
    Footer({ copyright, socials: socialLinks }),
  ]
}

/** Renders a page into #app. */
export function mount(nodes, root = document.getElementById('app')) {
  root.replaceChildren(...nodes)
}
