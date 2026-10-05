import { h } from '../../lib/h.js'
import { Icon } from '../Icon/Icon.js'
import './Terminal.css'

/** Faux terminal window showing a command and its output. */
export function Terminal({ title = 'bash', command, output }) {
  return h(
    'div',
    { class: 'terminal' },
    h(
      'div',
      { class: 'terminal__header' },
      ['dot-red', 'dot-yellow', 'dot-green'].map((name) => Icon({ name, size: 8 })),
      h('span', { class: 'terminal__title' }, title),
    ),
    h(
      'div',
      { class: 'terminal__body' },
      h('p', {}, h('span', { class: 'terminal__prompt' }, '$ '), command),
      h('p', { class: 'terminal__output' }, output),
    ),
  )
}
