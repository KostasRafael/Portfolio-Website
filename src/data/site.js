// Content shared by every page (navigation, footer).

export const navLinks = [
  { label: 'Work', href: '/' },
  { label: 'About', href: '/about.html' },
  { label: 'Skills', href: '/skills.html' },
  { label: 'Projects', href: '/projects.html' },
  { label: 'Contact', href: '/contact.html' },
]

// ID of the CV Google Doc: the part between /d/ and /edit in its share link
// (https://docs.google.com/document/d/<ID>/edit). The doc must be shared as "Anyone with the link".
const CV_GOOGLE_DOC_ID = '1pFbIOb62xxLKQ8tkdUOy8Kx-Oi5YiQ8vN0oC1qr1oaM'

export const cvLink = {
  label: 'Download my CV',
  href: `https://docs.google.com/document/d/${CV_GOOGLE_DOC_ID}/export?format=pdf`,
  icon: 'download',
  external: true,
}

export const socialLinks = [
  { label: 'github.dev', icon: 'github', href: 'https://github.com/KostasRafael/', external: true },
  { label: 'linkedin.dev', icon: 'linkedin', href: 'https://www.linkedin.com/in/konstantinos-rafael-manousoudakis/', external: true },
  { label: 'email', icon: 'mail', href: '/contact.html' },
]

export const copyright = '© 2024 Alex Chen. Built with performance in mind.'
