import { FaArtstation, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { HiMail } from 'react-icons/hi';
import xtwitter from '/images/media/x-twitter.svg'
import Image from "next/image";
import { SiBento } from "react-icons/si";


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
    url: 'https://www.linkedin.com/in/rudyrsdev/'
  },
  {
    id: 3,
    name: 'GitHub',
    icon: <FaGithub />,
    url: 'https://github.com/rudyrsdev'
  },
  {
    id: 4,
    name: 'X/Twitter',
    icon: <Image
      src="/images/media/x-twitter.svg"
      alt="Follow us on Twitter"
      width={36} height={36}
    />,
    url: 'https://twitter.com/rudyrsdev',
    alt: <FaTwitter />
  },
  {
    id: 5,
    name: 'Instagram',
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/rudyrsdev/'
  },
  {
    id: 6,
    name: 'Artstation',
    icon: <FaArtstation />,
    url: 'https://www.artstation.com/rudyrsdev'
  },
  {
    id: 7,
    name: 'Bento',
    icon: <SiBento />,
    url: 'https://bento.me/rudyrsdev'
  }
]