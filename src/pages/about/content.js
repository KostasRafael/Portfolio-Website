// Copy for the About page.

export const profile = {
  portrait: { src: '/images/portrait.jpg', alt: 'Portrait of Alex Chen' },
  status: 'STATUS: OPEN TO FULL-TIME OPPORTUNITIES',
  kicker: 'developer-profile',
  title: 'About Me',
  intro:
    "Hello, I'm Alex. I am a frontend developer who loves bringing structure, high performance, and deep accessibility to user interfaces.",
  paragraphs: [
    "My journey into web engineering solidified in 2023 when I graduated from the Software Engineering Immersive program at General Assembly. Since then, I've shipped three real-world production projects and actively contributed to popular open-source libraries.",
    'I currently spend my time helping startups build pixel-perfect, secure frontends while freelancing in the Bay Area. I believe in writing readable, maintainable typescript code and treating page speed as a primary feature.',
  ],
}

export const timeline = {
  kicker: 'milestones',
  title: 'Career Timeline',
  milestones: [
    {
      year: '2023',
      title: 'General Assembly Graduate',
      description:
        'Completed intensive Software Engineering fellowship. Gained rigorous foundation in computer science and full-stack development patterns.',
    },
    {
      year: '2023',
      title: 'Open Source Contributor',
      description:
        'Merged my first non-trivial pull request into public software tooling. Learned the code review lifecycle and team collaboration.',
    },
    {
      year: '2024',
      title: 'First Production Launch',
      description:
        'Shipped custom client billing portal live to production for local creative studio, managing dynamic invoice configurations securely.',
    },
    {
      year: '2024',
      title: 'Freelance & Consulting',
      description:
        'Providing clean-code responsive engineering contracts to San Francisco companies, prioritizing performant static setups.',
    },
  ],
}
