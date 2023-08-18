import { About, Education, Experience, Home, Projects, Skills } from '../components/windows'
import {
  FaHouse,
  FaCircleInfo,
  FaCode,
  FaFolder,
  FaBook,
  FaBriefcase,
} from 'react-icons/fa6'

export const apps = [
  {
    name: 'Home',
    id: 1,
    icon: <FaHouse />,
    alt: 'Home Page of the Website',
    window: <Home />,
    state: 1
  },
  {
    name: 'About',
    id: 2,
    icon: <FaCircleInfo />,
    alt: 'Overview of the Website and About Me',
    window: <About />,
    state: 0
  },
  {
    name: 'Skills',
    id: 3,
    icon: <FaCode />,
    alt: 'Skills I have learn and experience with',
    window: <Skills />,
    state: 0
  },
  {
    name: 'Projects',
    id: 4,
    icon: <FaFolder />,
    alt: 'My Past Projects in a showcase',
    window: <Projects />,
    state: 0
  },
  {
    name: 'Education',
    id: 5,
    icon: <FaBook />,
    alt: 'My Education and Certifications',
    window: <Education />,
    state: 0
  },
  {
    name: 'Experience',
    id: 6,
    icon: <FaBriefcase />,
    alt: 'Places of Employment and Experience',
    window: <Experience />,
    state: 0
  },
];
