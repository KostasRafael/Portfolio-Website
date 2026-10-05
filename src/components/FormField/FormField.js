import { h } from '../../lib/h.js'
import './FormField.css'

/**
 * Labelled input with a numbered mono label, e.g. "01_ Name".
 * `multiline` renders a <textarea> instead of an <input>.
 */
export function FormField({ number, label, name, type = 'text', placeholder, autocomplete, multiline = false, required = true }) {
  const id = `field-${name}`
  const prefix = `${String(number).padStart(2, '0')}_ `
  const control = multiline
    ? h('textarea', { class: 'form-field__control form-field__control--multiline', id, name, placeholder, required, rows: 4 })
    : h('input', { class: 'form-field__control', id, name, type, placeholder, autocomplete, required })

  return h(
    'div',
    { class: 'form-field' },
    h('label', { class: 'form-field__label', for: id }, prefix, label),
    control,
  )
}
