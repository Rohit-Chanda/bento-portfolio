// src/data/projectData.js

const projectData = [
  {
    id: 'portfolio',
    title: 'My Portfolio Website',
    subtitle: 'A Bento-Grid Developer Showcase',
    company: 'Personal Project',
    role: 'Designer & Developer',
    tools: ['VS Code', 'Figma', 'Chrome DevTools'],
    timeline: 'May 2025 – Present',
    description: `A bento-style portfolio site built with React and Framer Motion.`,
    context: `To create a modern, responsive, and animated personal website for showcasing projects and skills.`,
    problem: `Most portfolio templates felt too rigid or lacked animation; I wanted something dynamic yet lightweight.`,
    process: `Started with Figma sketches, implemented a modular component structure, and styled with custom CSS and Framer Motion.`,
    solution: `A responsive, grid-based portfolio that adapts beautifully to dark/light themes and animates modal project views.`,
    insights: `Emphasized the importance of mobile-first design and performance optimization.`,
    features: [
      'Dark/Light Mode Toggle',
      'Responsive Grid Layout',
      'Animated Modal with Project Info',
    ],
    techStack: ['React', 'CSS', 'Framer Motion'],
    links: {
      live: 'https://yourportfolio.com',
      github: 'https://github.com/yourhandle/portfolio',
    },
    thumbnail: '/me.jpg',
    heroImage: '/me.jpg',
    images: [
      '/me.jpg',
      '/me.jpg',
    ],
    extraImages: [],
    cta: 'Check the app',
  },
  {
    id: 'task',
    title: 'YouTube Task Tracker',
    subtitle: 'Playlist Progress Tracker with Dynamic Scheduling',
    company: 'Personal Project',
    role: 'Full Stack Developer',
    tools: ['Postman', 'SQL Studio', 'Vercel'],
    timeline: 'April 2025 – May 2025',
    description: `A progress-tracking app using video durations from YouTube playlists.`,
    context: `Inspired by my own difficulty managing YouTube tutorials effectively.`,
    problem: `Tracking video-based learning progress was manual and inefficient.`,
    process: `Developed a React frontend with Express backend to fetch and compute playlist data.`,
    solution: `A task tracker that calculates total duration and visualizes progress over time.`,
    insights: `Learned to optimize backend logic for YouTube API and create adaptive time tracking.`,
    features: [
      'Auto Calculate Total Playlist Duration',
      'Track Progress by Date Range',
      'Responsive Design with Charts',
    ],
    techStack: ['React', 'Node.js', 'Express', 'SQL'],
    links: {
      live: 'https://tasktracker.com',
      github: 'https://github.com/yourhandle/task-tracker',
    },
    thumbnail: '/me.jpg',
    heroImage: '/images/tracker-1.png',
    images: [
      '/images/tracker-1.png',
      '/images/tracker-2.png',
    ],
    extraImages: [],
    cta: 'Check the app',
  },
];

export default projectData;
