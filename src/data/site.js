// Content shared by every page (navigation, footer).

export const navLinks = [
  { label: 'Work', href: '/' },
  { label: 'About', href: '/about.html' },
  { label: 'Skills', href: '/skills.html' },
  { label: 'Projects', href: '/projects.html' },
  { label: 'Contact', href: '/contact.html' },
]

// ID of the CV PDF on Google Drive: the part between /d/ and /view in its share link
// (https://drive.google.com/file/d/<ID>/view). The file must be shared as "Anyone with the link".
const CV_DRIVE_FILE_ID = 'YOUR_GOOGLE_DRIVE_FILE_ID'

export const cvLink = {
  label: 'Download my CV',
  href: `https://drive.google.com/uc?export=download&id=${CV_DRIVE_FILE_ID}`,
  icon: 'download',
  external: true,
}

export const socialLinks = [
  { label: 'github.dev', icon: 'github', href: 'https://github.com/' },
  { label: 'linkedin.dev', icon: 'linkedin', href: 'https://www.linkedin.com/' },
  { label: 'email', icon: 'mail', href: '/contact.html' },
]

export const copyright = '© 2024 Alex Chen. Built with performance in mind.'
