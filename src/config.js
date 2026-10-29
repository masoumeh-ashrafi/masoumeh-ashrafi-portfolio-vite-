// Update this file to personalize the portfolio without changing the UI.
export const profile = {
  name: 'Masoumeh Ashrafi',
  initials: 'MA',
  role: 'Frontend Engineer · React · Next.js · TypeScript',
  location: 'Tehran, Iran · Freelance',
  email: 'masoumeh.ashrafi98@gmail.com',
  website: 'https://www.masoumeh-ashrafi.ir/',
  availability: 'Open to select frontend projects',
  heroBefore: 'I build ',
  heroAccent: 'fast, accessible,',
  heroAfter: ' and conversion-focused web interfaces.',
  bio: 'I help businesses turn complex product ideas into scalable frontend systems using React, Next.js, TypeScript, and clean UI architecture.',
  socials: [
    { label: 'Website', href: 'https://www.masoumeh-ashrafi.ir/' },
    { label: 'GitHub', href: 'https://github.com/masoumeh-ashrafi' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/masoumeh-ashrafi-96250825a/' },
    { label: 'YouTube', href: 'https://www.youtube.com/@masoumehashrafi2020' },
    { label: 'Instagram', href: 'https://www.instagram.com/front_maa/' },
  ],
  skills: ['React', 'Next.js App Router', 'TypeScript', 'Tailwind CSS', 'Frontend architecture', 'Performance', 'Technical SEO', 'Accessibility', 'RTL / i18n', 'Responsive design'],
}

export const projects = [
  {
    number: '01', title: 'Razy B2B Platform', type: 'Frontend / Full-stack · 2025', year: '2025',
    description: 'A scalable product-management and commerce platform with protected dashboards, subscription workflows, and a typed data layer.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'NextAuth', 'Stripe'], color: 'lavender', mark: 'R',
    href: 'https://razyar-project-5idj-b92b20t6c-masoumeh-ashrafis-projects.vercel.app',
    caseStudy: 'https://www.masoumeh-ashrafi.ir/case-studies/razy',
  },
  {
    number: '02', title: 'Permanent Makeup Portfolio', type: 'Frontend Developer · 2025', year: '2025',
    description: 'A responsive visual portfolio for a beauty business, designed around clear service information, a focused gallery, and mobile browsing.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Canvas API'], color: 'peach', mark: 'PM',
    href: 'https://permanent-makeup-portfolio-nextjs.vercel.app',
    caseStudy: 'https://www.masoumeh-ashrafi.ir/case-studies/fateme-darvishi',
  },
]

export const experience = [
  { role: 'Freelance Frontend Engineer', company: 'Independent', period: 'Current', detail: 'Building fast, accessible, SEO-ready React and Next.js interfaces for product and business needs.' },
]

export const posts = [
  { slug: 'rtl-as-a-product-requirement', date: 'Draft', read: '4 min read', category: 'Accessibility', title: 'RTL is a product requirement, not a final styling pass', excerpt: 'Directionality shapes layout, navigation, reading order, and interaction. Planning for it early makes the whole interface stronger.' },
  { slug: 'performance-as-architecture', date: 'Draft', read: '5 min read', category: 'Performance', title: 'Performance starts with frontend architecture', excerpt: 'Rendering choices, component boundaries, and client-side JavaScript all influence how quickly a product feels ready.' },
  { slug: 'seo-in-the-component-tree', date: 'Draft', read: '4 min read', category: 'Technical SEO', title: 'Making technical SEO part of the component tree', excerpt: 'Good metadata and semantic structure are easier to maintain when they belong to the same system as the page itself.' },
]

export const postBodies = {
  'small-details-big-feeling': [
    'Right-to-left support is often treated as a visual adjustment near the end of a project. In practice, direction affects information hierarchy, navigation, icons, form alignment, and the order in which someone moves through a page.',
    'Planning for RTL from the start encourages more flexible layouts. Logical properties, direction-aware components, and content that can expand naturally are useful for every language, not only Persian or Arabic.',
    'A multilingual interface should feel native in each language. That requires testing real content, mixed-direction text, numbers, and the small interactions that make a product feel coherent.',
  ],
  'making-space-for-focus': [
    'Performance is shaped by architecture. Route boundaries, rendering strategy, component size, and the amount of JavaScript sent to a browser all influence when an interface starts to feel usable.',
    'I start by asking what needs to be interactive and when. Keeping most UI predictable and moving only necessary behavior to the client can reduce work without making the code harder to understand.',
    'Fast interfaces come from many practical choices: sensible loading states, optimized media, smaller bundles, and real-device checks. A clear structure makes those choices easier to repeat.',
  ],
  'shipping-the-first-version': [
    'Search visibility is easier to maintain when technical SEO is part of the page architecture. Titles, descriptions, headings, canonical URLs, and structured content should be considered as each route is built.',
    'Reusable page patterns can keep metadata consistent while still allowing each page to describe its own purpose. Semantic HTML also helps assistive technology and makes content structure clearer to search engines.',
    'The practical habit is to review every route as a complete document: useful title, accurate description, meaningful headings, fast loading, and links that work without relying on visual context.',
  ],
}
