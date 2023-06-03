import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  mckinsey,
  gca,
  barredowl,
  purebarre,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Jr. Software Engineer',
    company_name: 'McKinsey & Company',
    icon: mckinsey,
    iconBg: '#fff',
    date: 'March 2022 - present',
    points: [
      'Liaised with Agile product team on the redesign of public-facing website (mckinsey.com) to include new front end technology and modern Javascript functionality increasing UX task success rate by 30%.',
      'Collaborated with multiple teams to implement visually stunning redesign of The Five Fifty feature while maintaining optimal site performance, resulting in a 50% decrease in production time and an improvement in reader engagement with a 1.6x increase in average completion rates.',
      'Improved accessibility in React components for dot com publishing and app.',
      'Implemented unit and integration test suites that reduced production issues by 75% and saved the team an average of 20 hours per week; automated test coverage increased from 30% to 90%',
      'Followed Scrum methodology for software workflow management and coordinated on APIs.',
      'Partnered with back-end developers to create dynamic components using Javascript and Typescript.',
    ],
  },
  {
    title: 'Co-Founder | Screenwriter',
    company_name: 'Barred Owl Productions',
    icon: barredowl,
    iconBg: '#383E56',
    date: 'May 2013 - Mar 2022',
    points: [
      'Maintained website’s SEO ranking through regular content updates and optimization techniques, resulting in a 30% increase in organic search traffic.',
      'Crafted a compelling screenplay that was purchased by a major studio, generating over $500,000 in revenue and receiving critical acclaim from industry professionals..',
      'Aligned with cross-functional teams to design and implement user-friendly website features, leading to a 40% decrease in client complaints.',
      'Recruited and onboarded a team of 50 industry professionals, managing payroll and SAG paperwork to ensure timely payment and compliance with union regulations.',
    ],
  },
  {
    title: 'High School Teacher',
    company_name: 'GCA',
    icon: gca,
    iconBg: '#383E56',
    date: 'Jul 2019 - Jul 2020',
    points: [
      'Classes taught: General ELA, World Literature, American Literature, and British Literature',
    ],
  },
  {
    title: 'Barre Fitness Instructor',
    company_name: 'Pure Barre',
    icon: purebarre,
    iconBg: '#E6DEDD',
    date: 'Mar 2014 - Apr 2019',
    points: ['Taught barre fitness classes'],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Jen proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jennifer does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Jen optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};
