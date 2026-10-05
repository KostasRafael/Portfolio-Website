// Copy for the Projects page.
// TODO: replace the '#' demo / repo URLs with the real links.

export const intro = {
  kicker: 'portfolio-showcase',
  title: 'Selected Projects',
  lead: 'Below are the core projects where I applied my design patterns and web architectural engineering principles. Each has a live deployment and repository link.',
}

export const projects = [
  {
    title: 'BudgetWise',
    image: { src: '/images/projects/budget-wise.png', alt: 'BudgetWise interface' },
    problem:
      'Modern budget tracking apps are overly complicated, with non needed features and too rich data for everyday use.',
    solution:
      'A clean user interface that users can interact with without getting overwhelmed by the complecity and the richness of modern apps.',
    tags: ['HTML', 'CSS', 'React'],
    learned:
      'Writing rigorous test cases for async states, configuring resilient cache layers, and minimizing client-side script sizes.',
    demoUrl: 'https://budgetwise-ui.netlify.app/',
    repoUrl: 'https://github.com/KostasRafael/BudgetWise',
  },
  {
    title: 'Bet Calculator',
    image: { src: '/images/projects/bet-calculator.png', alt: 'DevBlog Platform editor with markdown source and rendered article' },
    problem:
      'Football bettors need a simple, instant, and reliable way for getting football statistics',
    solution:
      'A user friendly UI where bettors can browse football data and statistics in order to place educated bets. No signup needed; this is a tool for all the funs of betting!',
    tags: ['HTML', 'CSS', 'React', 'Netlify'],
    learned:
      'Working with node streams, automating asset transformations on static build sequences, and achieving 100% Core Web Vitals.',
    demoUrl: 'https://footballbetcalculator.netlify.app/',
    repoUrl: 'https://github.com/KostasRafael/BetCalculator',
  },
  {
    title: 'BudgetWise API',
    image: { src: '/images/projects/budget-wise-api.png', alt: 'WeatherNow Analytics dashboard with climate charts' },
    problem:
      'The BudgetWise app needs to store data such as users, expenses and budgets in a database. The user interface must be able to use an API in order to connect to the database.',
    solution:
      'A business logic consisting of a NodeJS API and a MongoDB database. The API exposes endpoints that allow users to store their info in the database, along with their expenses and budgets',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Zod', 'Helmet'],
    learned:
      'Managing state isolation, parsing high-frequency JSON responses cleanly, and handling graceful API fallback patterns.',
    repoUrl: 'https://github.com/KostasRafael/BudgetWise-API',
  },
  {
    title: 'CodeSnap CLI',
    image: { src: '/images/projects/codesnap.jpg', alt: 'CodeSnap CLI running in a terminal' },
    problem:
      'Developers waste time switching to screenshot tools and manually cropping code snippets for documentation and social sharing.',
    solution:
      'A lightweight Node.js CLI that reads source files, applies syntax highlighting with Shiki, and exports styled PNG screenshots — all from a single terminal command.',
    tags: ['Node.js', 'Shiki', 'Sharp', 'CLI', 'TypeScript'],
    learned:
      'Designing intuitive CLI argument APIs, working with image buffers in Node, and publishing an npm package with proper semantic versioning.',
    demoUrl: '#',
    repoUrl: '#',
  },
]
