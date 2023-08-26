import { FaJava } from "react-icons/fa6";
import { SiAdobeaftereffects, SiAdobeillustrator, SiAdobephotoshop, SiAdobexd, SiCss3, SiFigma, SiGnubash, SiHtml5, SiJavascript, SiLinux, SiMaterialdesign, SiPython, SiReact, SiTailwindcss, SiTypescript, SiWindows, SiWindows11 } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const projects = [
  {
    id: 1,
    name: 'Dataniz',
    year: '2023',
    desc: 'Dataniz is a website that allows users to generate IoT data.',
    links: [
      {
        id: 1,
        name: 'Website',
        url: 'https://dataniz.com/'
      }
    ],
    images: [],
    tech: [
      {
        id: 1,
        name: 'React',
        icon: <SiReact />,
        url: 'https://reactjs.org/',
      },
      {
        id: 2,
        name: 'TypeScript',
        icon: <SiTypescript />,
        url: 'https://www.typescriptlang.org/',
      },
      {
        id: 3,
        name: 'Tailwind CSS',
        icon: <SiTailwindcss />,
        url: 'https://tailwindcss.com/',
      },
      {
        id: 4,
        name: 'Material UI',
        icon: <SiMaterialdesign />,
        url: 'https://material-ui.com/',
      },
      {
        id: 5,
        name: 'Figma',
        icon: <SiFigma />,
        url: 'https://www.figma.com/',
      }
    ]
  },
  {
    id: 2,
    name: 'Down',
    year: '2020 - 2022',
    desc: 'Down is a social media startup that aims to connect users with events going on in their area.',
    links: [
    ],
    images: [],
    tech: [
      {
        id: 1,
        name: 'Adobe XD',
        icon: <SiAdobexd  />,
        url: 'https://www.adobe.com/products/xd.html',
      },
      {
        id: 2,
        name: 'Photoshop',
        icon: <SiAdobephotoshop />,
        url: 'https://www.adobe.com/products/photoshop.html',
      },
      {
        id: 3,
        name: 'Illustrator',
        icon: <SiAdobeillustrator />,
        url: 'https://www.adobe.com/products/illustrator.html',
      },
      {
        id: 4,
        name: 'React Native',
        icon: <TbBrandReactNative />,
        url: 'https://reactnative.dev/',
      }
    ]
  },
  {
    id: 3,
    name: 'BeachHacks',
    year: '2021, 2022, 2023',
    desc: 'BeachHacks is a hackathon hosted by the Association for Computing Machinery at California State University, Long Beach.',
    links: [
      {
        id: 1,
        name: 'Website',
        url: 'https://beachhacks.com/'
      },
      {
        id: 2,
        name: 'Repository',
        url: 'https://github.com/BeachHacks/BeachHacks-Website-2023'
      },
    ],
    images: [],
    tech: [
      {
        id: 1,
        name: 'React',
        icon: <SiReact />,
        url: 'https://reactjs.org/',
      },
      {
        id: 2,
        name: 'TypeScript',
        icon: <SiTypescript />,
        url: 'https://www.typescriptlang.org/',
      },
      {
        id: 3,
        name: 'JavaScript',
        icon: <SiJavascript />,
        url: 'https://www.javascript.com/',
      },
      {
        id: 4,
        name: 'Tailwind CSS',
        icon: <SiTailwindcss />,
        url: 'https://tailwindcss.com/',
      }
    ]
  },
  {
    id: 4,
    name: 'Hacktoberfest',
    year: '2023',
    desc: 'Hacktoberfest is a month-long celebration of open source software run by DigitalOcean.',
    links: [
      {
        id: 1,
        name: 'Website',
        url: 'https://csulbacm.github.io/hacktoberfest/'
      },
      {
        id: 2,
        name: 'Repository',
        url: 'https://github.com/csulbacm/hacktoberfest'
      }
    ],
    images: [],
    tech: [
      {
        id: 1,
        name: 'HTML',
        icon: <SiHtml5 />,
        url: 'https://html.com/',
      },
      {
        id: 2,
        name: 'CSS',
        icon: <SiCss3 />,
        url: 'https://www.w3.org/Style/CSS/Overview.en.html',
      },
      {
        id: 3,
        name: 'Figma',
        icon: <SiFigma />,
        url: 'https://www.figma.com/',
      }
    ]
  },
  {
    id: 5,
    name: 'Apex Studios',
    year: '2023',
    desc: 'Apex Studios is a group of people developing mods for Minecraft.',
    links: [
      {
        id: 1,
        name: 'Website',
        url: 'https://apexstudios.dev/'
      },
      {
        id: 2,
        name: 'Repositories',
        url: 'https://github.com/ApexStudios-Dev/'
      }
    ],
    images: [],
    tech: [
      {
        id: 1,
        name: 'React',
        icon: <SiReact />,
        url: 'https://reactjs.org/',
      },
      {
        id: 2,
        name: 'TypeScript',
        icon: <SiTypescript />,
        url: 'https://www.typescriptlang.org/',
      },
      {
        id: 3,
        name: 'Tailwind CSS',
        icon: <SiTailwindcss />,
        url: 'https://tailwindcss.com/',
      },
      {
        id: 4,
        name: 'Java',
        icon: <FaJava />,
        url: 'https://www.java.com/',
      },
      {
        id: 5,
        name: 'Figma',
        icon: <SiFigma />,
        url: 'https://www.figma.com/',
      }
    ]
  },
  {
    id: 6,
    name: 'File Backup and Sync',
    year: '2023',
    desc: 'A system I developed working as a Information Technology Specialist that syncs files across multiple computers, encrypts connections, and create backups. For security and NDA reasons, I cannot share any code or images.',
    links: [],
    images: [],
    tech: [
      {
        id: 1,
        name: 'Python',
        icon: <SiPython />,
        url: 'https://www.python.org/',
      },
      {
        id: 2,
        name: 'Bash',
        icon: <SiGnubash />,
        url: 'https://www.gnu.org/software/bash/',
      },
      {
        id: 3,
        name: 'Linux',
        icon: <SiLinux />,
        url: 'https://www.linux.org/',
      },
      {
        id: 4,
        name: 'Windows',
        icon: <SiWindows11 />,
        url: 'https://www.microsoft.com/en-us/windows',
      },
      {
        id: 5,
        name: 'Windows Server',
        icon: <SiWindows />,
        url: 'https://www.microsoft.com/en-us/windows-server',
      }
    ]
  },
  {
    id: 7,
    name: 'Foodood',
    year: '2023',
    desc: 'FooDood is a mobile application that combines the concept of Tinder-swiping with selecting something to eat. Science says that it is easier to make a decision when presented with simple options such as "yes" or "no" rather than a large list of options.',
    links: [
      {
        id: 1,
        name: 'Website',
        url: 'https://foodood.dev/'
      },
      {
        id: 2,
        name: 'Repository',
        url: 'https://github.com/Brenden-Smith/FooDood'
      }
    ],
    images: [],
    tech: [
      {
        id: 1,
        name: 'React Native',
        icon: <TbBrandReactNative />,
        url: 'https://reactnative.dev/',
      },
      {
        id: 2,
        name: 'TypeScript',
        icon: <SiTypescript />,
        url: 'https://www.typescriptlang.org/',
      },
      {
        id: 3,
        name: 'Figma',
        icon: <SiFigma />,
        url: 'https://www.figma.com/',
      }
    ]
  },
  {
    id: 8,
    name: 'File Explorer',
    year: '2021',
    desc: 'An applcation developed with Java and Swing that would allow users to browse files on their computer with a GUI that is similar to Windows Explorer.',
    links: [
      {
        id: 1,
        name: 'Repository',
        url: 'https://github.com/RudySPG/File_Explorer'
      },
    ],
    images: [],
    tech: [
      {
        id: 1,
        name: 'Java',
        icon: <FaJava />,
        url: 'https://www.java.com/',
      }
    ]
  },
  {
    id: 9,
    name: 'Nuketown',
    year: '2017',
    desc: 'A recreation of a fan-favourite map nuketown from Black Ops 1. I worked on lighting, minimap creation, and designs.',
    links: [
      {
        id: 1,
        name: 'Workshop',
        url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=873266779'
      }
    ],
    images: [],
    tech: [
      {
        id: 1,
        name: 'Photoshop',
        icon: <SiAdobephotoshop />,
        url: 'https://www.adobe.com/products/photoshop.html',
      },
      {
        id: 2,
        name: 'Illustrator',
        icon: <SiAdobeillustrator />,
        url: 'https://www.adobe.com/products/illustrator.html',
      }
    ]
  },
  {
    id: 10,
    name: 'Kyassuru',
    year: '2017',
    desc: 'A custom zombies map based on original map by Treyarch\'s Call of Duty: World at War. I worked on designing the Head up Display',
    links: [
      {
        id: 1,
        name: 'Workshop',
        url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=879782355'
      }
    ],
    images: [],
    tech: [
      {
        id: 1,
        name: 'Photoshop',
        icon: <SiAdobephotoshop />,
        url: 'https://www.adobe.com/products/photoshop.html',
      },
      {
        id: 2,
        name: 'Illustrator',
        icon: <SiAdobeillustrator />,
        url: 'https://www.adobe.com/products/illustrator.html',
      },
      {
        id: 3,
        name: 'After Effects',
        icon: <SiAdobeaftereffects />,
      }
    ]
  },
  {
    id: 11,
    name: 'Wanted',
    year: '2019',
    desc: 'A custom zombies map Inspired by a great map like Buried or Games like Red Dead Redemption and Call of Juarez: Gunslinger, I designed multiple assets for the map including the Heads up Display.',
    links: [
      {
        id: 1,
        name: 'Workshop',
        url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1663631538'
      }
    ],
    images: [],
    tech: [
      {
        id: 1,
        name: 'Photoshop',
        icon: <SiAdobephotoshop />,
        url: 'https://www.adobe.com/products/photoshop.html',
      },
      {
        id: 2,
        name: 'Illustrator',
        icon: <SiAdobeillustrator />,
        url: 'https://www.adobe.com/products/illustrator.html',
      },
      {
        id: 3,
        name: 'After Effects',
        icon: <SiAdobeaftereffects />,
      }
    ]
  }
]