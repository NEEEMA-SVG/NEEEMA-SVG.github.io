// ============================================================
//  All the website content lives here.
//  To add a project, skill or activity, just add an entry to a list.
// ============================================================

export const profile = {
  name: 'Neema Jelagat Kimutai',
  firstName: 'Neema',
  initials: 'NJ',
  // To use a photo: put it in the /public folder (e.g. public/photo.jpg)
  // and change this to '/photo.jpg'
  photo: null,
  eyebrow: 'BSc Information Technology · Dedan Kimathi University of Technology',
  headline: 'I build affordable technology that solves real problems.',
  lead:
    "I'm a fourth-year IT student in Nyeri, Kenya, interested in software development, machine learning and AI. Right now I'm building a low-cost fire detection system to help keep Kenyan boarding schools safe.",
  email: 'nehemajelagat682@gmail.com',
  location: 'Nyeri, Kenya',
}

export const links = [
  { label: 'GitHub', url: 'https://github.com/NEEEMA-SVG' },
  // { label: 'LinkedIn', url: 'https://www.linkedin.com/in/YOUR-NAME' },
]

export const about = [
  "I grew up in Iten, a calm town in the Rift Valley known as the Home of Champions. My love for computers started just for fun, long before I knew it could be a career. Then I watched my older brother study software engineering and earn from his skills in his very first year, and I thought, \"I can do this too.\"",
  "My life has been a story of leaving places I love and building a little home in each new one, from Salaba Academy to Koisung'ur, Metkei Girls and now Dedan Kimathi. Along the way I've learnt to lead, to start over, and to figure things out under pressure.",
  "I'm especially drawn to technology that helps people, in safety, in healthcare, and in everyday life. My dream is to build my own IT company that gives people real software solutions.",
]

export const facts = [
  { label: 'Based in', value: 'Nyeri, Kenya' },
  { label: 'Studying', value: 'BSc IT, 4th year (2023 – 2027)' },
  { label: 'Interests', value: 'Software development, ML & AI, IoT, health tech' },
  { label: 'Languages', value: 'English, Kiswahili, Kalenjin (basic)' },
  { label: 'Outside class', value: 'Wildlife Club, hiking, reading novels' },
]

export const projects = [
  {
    title: 'Smart Fire Detection & Emergency Response System',
    status: 'In progress · Final year project',
    inProgress: true,
    featured: true,
    subtitle: 'For Kenyan boarding schools',
    description:
      "School fires in Kenya have taken many lives, and many schools can't afford expensive safety systems. Having spent four years as a boarder, I know that a dormitory at night is exactly where an early warning matters most. This system is designed to be cheap, simple and fast.",
    points: [
      'A smoke sensor connected to an Arduino detects fire early',
      'Sends instant SMS and email alerts to the school and people who can help',
      'A web dashboard shows what is happening in real time',
      'Built to be low-cost and affordable for schools, starting as a demo for one school',
    ],
    tags: ['Arduino', 'IoT', 'Sensors', 'SMS & Email alerts', 'Web dashboard'],
  },
  {
    title: 'Idea: Seizure early-warning wearable',
    status: 'Concept',
    description:
      "Epilepsy runs in my family, so this one is personal. I want to explore a watch or small gadget that detects when a seizure may be about to happen and alerts the person and the people around them. It's the same idea as my fire project: notice the danger early, and get help fast.",
    tags: ['Health tech', 'Wearables', 'Machine learning'],
  },
]

export const experience = [
  {
    date: 'Feb 2026 – May 2026',
    title: 'IT Attaché',
    org: 'Nyeri County Government, ICT Office',
    points: [
      'Troubleshot cabling and trunking in the server room',
      'Helped install CCTV cameras',
      'Set up Wi-Fi at the county fire station',
      'Gave basic ICT support to staff',
    ],
    quote:
      "The attachment taught me that I can figure things out under pressure, and that I should never stop at 'it works.' I should understand why.",
  },
]

export const education = [
  {
    date: '2023 – 2027',
    title: 'BSc Information Technology',
    org: 'Dedan Kimathi University of Technology, Nyeri',
  },
  {
    date: '2019 – 2022',
    title: 'KCSE, Grade B+',
    org: 'Metkei Girls High School',
    note:
      'Named most improved student in Form Four after rising from position 70 to position 1 in the opener exams, and never dropped below the top 20 after that.',
  },
]

export const skills = [
  { group: 'Programming', items: ['Python', 'JavaScript', 'React', 'C', 'SQL', 'HTML', 'CSS'] },
  { group: 'IoT & Hardware', items: ['Arduino', 'Sensors', 'Circuits'] },
  { group: 'Networking', items: ['Network troubleshooting', 'Network simulation', 'Cabling', 'CCTV'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Vite', 'JupyterLab', 'Word', 'Excel', 'PowerPoint'] },
  { group: 'Currently learning', items: ['Java', 'UI/UX design', 'Data analysis', 'Machine learning'], highlight: true },
  { group: 'Soft skills', items: ['Teamwork', 'Problem solving', 'Leadership', 'Public speaking'] },
]

export const beyond = [
  {
    icon: '🌿',
    title: 'Wildlife Club, DeKUT',
    text: 'Tree planting on National Wildlife Days, road shows teaching the public about endangered indigenous species like the grey crowned crane, clean-ups, hikes, and several trips to Aberdare National Park.',
  },
  {
    icon: '🎤',
    title: "Head Girl, Koisung'ur Academy",
    text: 'My first leadership role, in 2018. It taught me public speaking and how to lead people.',
  },
  {
    icon: '🤝',
    title: 'Christian Union & Guidance and Counselling',
    text: 'Active CU member and class representative in the Guidance and Counselling club at Metkei Girls, where I loved listening to people and helping.',
  },
]
