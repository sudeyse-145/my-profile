import googleMapImg from '../assets/googlemap.jpg';

export const skills = {
  Frontend: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express', 'Python', 'SQL', 'PostgreSQL'],
  Tools: ['Git', 'Docker', 'Figma', 'Postman']
};

export const projects = [
  {
    id: 1,
    title: 'QR code generator and reader',
    description: 'I built a mobile app that makes it easy to share all your social media and contact info using just one QR code. Instead of sending multiple links, users can connect their Telegram, X (Twitter), Instagram, TikTok, email, and phone number in one place and generate a single code to share everything.',
    tags: ['Expo (React Native)', 'Node.js', 'PostgreSQL', 'QR Code Generation', 'Deep Linking'],
    github: 'https://github.com/sudeyse-145/QR-code-generator-and-reader',
    live: '#',
    image: ''
  },
  {
    id: 2,
    title: 'Bus tacking system',
    description: 'I developed a bus tracking system as my senior project that allows passengers to track buses in real time and estimate arrival times for nearby routes. It helps users plan their trips with accurate, up-to-date location data. Passengers use a mobile app, while transport companies manage routes, buses, and drivers through a web application, making the system efficient and easy to maintain.',
    tags: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'PostgreSQL', 'Expo (React Native)', 'Google Maps API'],
    github: 'https://github.com/sudeyse-145/Bus-tacking-system.git',
    live: '#',
    image: googleMapImg
  },
  {
    id: 3,
    title: 'Qr-code generator and scanner',
    description: 'A responsive chat interface interacting with AI models.',
    tags: ['React', 'OpenAI API', 'Tailwind'],
    github: '#',
    live: '#',
    image: 'https://via.placeholder.com/400x250/161b22/39c5cf?text=AI+Chat'
  }
];

export const experience = [
  {
    id: 1,
    role: 'Frontend Developer Intern',
    company: 'Ethiopian Broadcasting service.',
    period: 'Jul 2025 - sep 2025',
    description: 'I have developed remote live connector to the main ETV/EBC studio frontend wepage.'
  },
  {
    id: 2,
    role: 'Computer Science Graduate',
    company: 'Hope Enterprise University Collage',
    period: 'Sep 2022 - Feb 2026',
    description: 'Specialized in Software Engineering life cycle to developing responsive webpages and mobile app.'
  }
];
