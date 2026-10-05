import { h, cx } from '../../lib/h.js'
import { Icon } from '../Icon/Icon.js'
import './Button.css'

/**
 * Primary call-to-action, optionally with a trailing icon.
 * Renders a link when `href` is given, otherwise a <button> (e.g. `type: 'submit'`).
 * `block` stretches it to the full width of its container.
 */
export function Button({ label, href, icon, type = 'button', block = false }) {
  const className = cx('button', block && 'button--block')
  const content = [label, icon && Icon({ name: icon, size: 14 })]

  return href
    ? h('a', { class: className, href }, content)
    : h('button', { class: className, type }, content)
}
