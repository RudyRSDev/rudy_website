import { FaCss3, FaGithub, FaHtml5, FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { TbBrandReactNative } from "react-icons/tb";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { SiAdobeaftereffects, SiAdobecreativecloud, SiAdobeillustrator, SiAdobelightroom, SiAdobephotoshop, SiAdobepremierepro, SiAdobexd, SiAutodesk, SiAutohotkey, SiCplusplus, SiFigma, SiFirebase, SiGit, SiGnubash, SiGooglecloud, SiJavascript, SiJetbrains, SiMongodb, SiNextdotjs, SiRuby, SiTailwindcss, SiTypescript, SiVisualstudio, SiVisualstudiocode } from "react-icons/si";

export const skills = [
  {
    id: 1,
    name: 'HTML',
    icon: <FaHtml5 />,
    tag: "Markup",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    id: 2,
    name: 'CSS',
    icon: <FaCss3 />,
    tag: "Markup",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    id: 3,
    name: 'JavaScript',
    icon: <RiJavascriptFill />,
    tag: "Programming",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    id: 4,
    name: 'TypeScript',
    icon: <BiLogoTypescript />,
    tag: "Programming",
    url: "https://www.typescriptlang.org/"
  },
  {
    id: 5,
    name: 'Node.js',
    icon: <FaNodeJs />,
    tag: "Framework",
    url: "https://nodejs.org/"
  },
  {
    id: 6,
    name: 'React.js',
    icon: <FaReact />,
    tag: "Framework",
    url: "https://reactjs.org/"
  },
  {
    id: 7,
    name: 'React Native',
    icon: <TbBrandReactNative />,
    tag: "Framework",
    url: "https://reactnative.dev/"
  },
  {
    id: 8,
    name: 'Next.js',
    icon: <SiNextdotjs />,
    tag: "Framework",
    url: "https://nextjs.org/"
  },
  {
    id: 9,
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />,
    tag: "Framework",
    url: "https://tailwindcss.com/"
  },
  {
    id: 10,
    name: 'Google Cloud',
    icon: <SiGooglecloud />,
    tag: "Platform",
    url: "https://cloud.google.com/"
  },
  {
    id: 11,
    name: 'C++ [C & C#]',
    icon: <SiCplusplus />,
    tag: "Programming",
    url: "https://en.cppreference.com/w/"
  },
  {
    id: 12,
    name: 'Java',
    icon: <FaJava />,
    tag: "Programming",
    url: "https://www.java.com/"
  },
  {
    id: 13,
    name: 'Python',
    icon: <FaPython />,
    tag: "Programming",
    url: "https://www.python.org/"
  },
  {
    id: 14,
    name: 'Ruby',
    icon: <SiRuby />,
    tag: "Programming",
    url: "https://www.ruby-lang.org/en/"
  },
  {
    id: 15,
    name: 'AutoHotKey',
    icon: <SiAutohotkey />,
    tag: "Programming",
    url: "https://www.autohotkey.com/"
  },
  {
    id: 16,
    name: 'Bash',
    icon: <SiGnubash />,
    tag: "Programming",
    url: "https://www.gnu.org/software/bash/"
  },
  {
    id: 17,
    name: 'Visual Studio Code',
    icon: <SiVisualstudiocode />,
    tag: "Software",
    url: "https://code.visualstudio.com/"
  },
  {
    id: 18,
    name: 'Visual Studio',
    icon: <SiVisualstudio />,
    tag: "Software",
    url: "https://visualstudio.microsoft.com/"
  },
  {
    id: 19,
    name: 'JetBrains',
    icon: <SiJetbrains />,
    tag: "Software",
    url: "https://www.jetbrains.com/"
  },
  {
    id: 20,
    name: 'Autodesk Maya',
    icon: <SiAutodesk />,
    tag: "Software",
    url: "https://www.autodesk.com/products/maya/overview"
  },
  {
    id: 21,
    name: 'Figma',
    icon: <SiFigma />,
    tag: "Software",
    url: "https://www.figma.com/"
  },
  {
    id: 22,
    name: 'Creative Cloud',
    icon: <SiAdobecreativecloud />,
    tag: "Software",
    url: "https://www.adobe.com/creativecloud.html"
  },
  {
    id: 23,
    name: 'Photoshop',
    icon: <SiAdobephotoshop />,
    tag: "Software",
    url: "https://www.adobe.com/products/photoshop.html"
  },
  {
    id: 24,
    name: 'Illustrator',
    icon: <SiAdobeillustrator />,
    tag: "Software",
    url: "https://www.adobe.com/products/illustrator.html"
  },
  {
    id: 25,
    name: 'After Effects',
    icon: <SiAdobeaftereffects />,
    tag: "Software",
    url: "https://www.adobe.com/products/aftereffects.html"
  },
  {
    id: 26,
    name: 'Premiere Pro',
    icon: <SiAdobepremierepro />,
    tag: "Software",
    url: "https://www.adobe.com/products/premiere.html"
  },
  {
    id: 27,
    name: 'XD',
    icon: <SiAdobexd />,
    tag: "Software",
    url: "https://www.adobe.com/products/xd.html"
  },
  {
    id: 28,
    name: 'Lightroom',
    icon: <SiAdobelightroom />,
    tag: "Software",
    url: "https://www.adobe.com/products/photoshop-lightroom.html"
  },
  {
    id: 29,
    name: 'Git',
    icon: <SiGit />,
    tag: "Platform",
    url: "https://git-scm.com/"
  },
  {
    id: 30,
    name: 'GitHub',
    icon: <FaGithub />,
    tag: "Platform",
    url: "https://github.com/"
  },
  {
    id: 31,
    name: 'mySQL',
    icon: <GrMysql />,
    tag: "Platform",
    url: "https://www.mysql.com/"
  },
  {
    id: 32,
    name: 'MongoDB',
    icon: <SiMongodb />,
    tag: "Platform",
    url: "https://www.mongodb.com/"
  },
  {
    id: 33,
    name: 'FireBase',
    icon: <SiFirebase />,
    tag: "Platform",
    url: "https://firebase.google.com/"
  }
]