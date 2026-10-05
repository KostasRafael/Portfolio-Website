import { h } from '../../lib/h.js'
import { Icon } from '../Icon/Icon.js'
import './StatusIndicator.css'

/** Terminal-style status line with a green dot, e.g. "STATUS: OPEN TO ...". */
export function StatusIndicator({ label }) {
  return h('p', { class: 'status-indicator' }, Icon({ name: 'dot-green', size: 8 }), label)
}
