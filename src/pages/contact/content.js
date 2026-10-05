// Copy for the Contact page.

export const intro = {
  kicker: 'co-operation',
  title: 'Get In Touch',
  lead: 'I am currently open to junior developer roles, freelance engineering contracts, and non-trivial open-source collaborations. Drop me a line!',
}

export const contact = {
  form: {
    // Handled by Netlify Forms: submissions POST to the site root and match the static
    // <form name="contact"> in contact.html. Email alerts are set up in the Netlify dashboard.
    action: '/',
    netlifyName: 'contact',
    fields: [
      { label: 'Name', name: 'name', placeholder: 'Alex Chen', autocomplete: 'name' },
      { label: 'Email Address', name: 'email', type: 'email', placeholder: 'alex@company.com', autocomplete: 'email' },
      { label: 'Message', name: 'message', placeholder: 'Describe your project or opportunities here...', multiline: true },
    ],
    submitLabel: 'Send Message',
  },
  location: 'Based in San Francisco, CA · Open to remote roles globally',
  timezone: 'Local time zone: PT (UTC-8)',
}
