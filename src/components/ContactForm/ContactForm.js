import { h } from '../../lib/h.js'
import { FormField } from '../FormField/FormField.js'
import { Button } from '../Button/Button.js'
import './ContactForm.css'

/**
 * Contact form card. Submits the fields as FormData (POST) to `action`,
 * e.g. a Formspree / Netlify Forms / custom API endpoint, and reports the result inline.
 * `netlifyName` adds the hidden `form-name` and honeypot fields Netlify Forms expects;
 * it must match the static form of the same name in the page's HTML.
 */
export function ContactForm({ action, fields, netlifyName, submitLabel = 'Send Message' }) {
  const status = h('p', { class: 'contact-form__status', role: 'status', 'aria-live': 'polite' })
  const submit = Button({ label: submitLabel, icon: 'arrow-right', type: 'submit', block: true })

  const form = h(
    'form',
    { class: 'contact-form', action, method: 'post', 'aria-label': 'Contact form' },
    netlifyName && [
      h('input', { type: 'hidden', name: 'form-name', value: netlifyName }),
      // Honeypot: hidden from people, filled in by spam bots, so Netlify drops those submissions.
      h(
        'p',
        { class: 'contact-form__honeypot', 'aria-hidden': 'true' },
        h('label', {}, 'Leave this empty: ', h('input', { name: 'bot-field', tabindex: '-1', autocomplete: 'off' })),
      ),
    ],
    h(
      'div',
      { class: 'contact-form__fields' },
      fields.map((field, index) => FormField({ ...field, number: index + 1 })),
    ),
    submit,
    status,
  )

  const setStatus = (message, tone) => {
    status.textContent = message
    status.dataset.tone = tone
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault()

    if (!action) {
      setStatus('The contact form is not connected yet. Please reach out by email instead.', 'error')
      return
    }

    submit.disabled = true
    setStatus('Sending…', 'pending')

    try {
      const response = await fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) throw new Error(`Request failed with ${response.status}`)
      form.reset()
      setStatus("Thanks! Your message has been sent — I'll get back to you soon.", 'success')
    } catch {
      setStatus('Something went wrong sending your message. Please try again.', 'error')
    } finally {
      submit.disabled = false
    }
  })

  return form
}
