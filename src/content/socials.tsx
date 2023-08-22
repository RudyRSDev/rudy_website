import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { HiMail } from 'react-icons/hi';

export const socials = [
  {
    id: 1,
    name: 'Mail',
    icon: <HiMail />,
    url: 'mailto:rodolfo.rudy.sandoval@gmail.com'
  },
  {
    id: 2,
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/'
  },
  {
    id: 3,
    name: 'GitHub',
    icon: <FaGithub />,
    url: 'https://github.com/RudySPG'
  },
  {
    id: 4,
    name: 'Twitter',
    icon: <FaTwitter />,
    url: 'https://twitter.com/'
  },
  {
    id: 5,
    name: 'Instagram',
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/'
  }
]