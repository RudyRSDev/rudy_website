import { FaComputer } from "react-icons/fa6";
import { SiAdobeaftereffects, SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro, SiAdobexd, SiGnubash, SiGooglecloud, SiLinux, SiMaterialdesign, SiMicrosoftoffice, SiReact, SiSynology, SiTailwindcss, SiTypescript, SiWindows, SiWindows11 } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const experience = [
  {
    id: 1,
    type: 'work',
    location: 'NewLife & Lily ADHC',
    title: 'Information Technology Specialist',
    date: 'Jan 2019 - Present',
    number: '(714)-828-7898',
    address: 'Anahiem & Los Angeles, CA',
    desc: 'While attending college to obtain my degree in Computer Science, I was hired as an IT Specialist for New Life in 2019, later in 2021 a second office named Lily was opened and I took on the responsiblity of both locations. I am responsible for the maintenance of all computers, servers, and other devices. I also manage the network and all software used by the company.',
    tasks: [
      'Software Maintence',
      'Hardware Maintence',
      'Network Maintence',
    ],
    tech: [
      {
        id: 1,
        name: 'Windows',
        icon: <SiWindows11 />,
        url: 'https://www.microsoft.com/en-us/windows',
      },
      {
        id: 2,
        name: 'Windows Server',
        icon: <SiWindows />,
        url: 'https://www.microsoft.com/en-us/windows-server',
      },
      {
        id: 3,
        name: 'Microsoft Office',
        icon: <SiMicrosoftoffice />,
        url: 'https://www.microsoft.com/en-us/microsoft-365',
      },
      {
        id: 4,
        name: 'Google Cloud',
        icon: <SiGooglecloud />,
        url: 'https://cloud.google.com/',
      },
      {
        id: 5,
        name: 'Synology',
        icon: <SiSynology />,
        url: 'https://www.synology.com/en-us',
      },
      {
        id: 6,
        name: 'Linux',
        icon: <SiLinux />,
        url: 'https://www.linux.org/',
      },
      {
        id: 7,
        name: 'Bash',
        icon: <SiGnubash />,
        url: 'https://www.gnu.org/software/bash/',
      }
    ]
  },
  {
    id: 2,
    type: 'work',
    location: 'Master PC Builder',
    title: 'Co-Owner & Hardware Technician',
    date: 'May 2020 - Present',
    number: '(562)-631-3609',
    address: 'Cerritos, CA',
    desc: 'In 2020, I co-founded a small business with a friend of mine. We build custom computers for clients and provide hardware repair services.',
    tasks: [
      'Hardware Maintence',
      'Software Maintence',
      'Customer Service',
      'Sales',
      'Marketing',
      'Website Development',
    ],
    tech: [
      {
        id: 1,
        name: 'Windows',
        icon: <SiWindows11 />,
        url: 'https://www.microsoft.com/en-us/windows',
      },
      {
        id: 2,
        name: 'Linux',
        icon: <SiLinux />,
        url: 'https://www.linux.org/',
      },
      {
        id: 3,
        name: 'Bash',
        icon: <SiGnubash />,
        url: 'https://www.gnu.org/software/bash/',
      },
      {
        id: 4,
        name: 'React',
        icon: <SiReact />,
        url: 'https://reactjs.org/',
      }
    ]
  },
  {
    id: 3,
    type: 'work',
    location: 'Shipmates',
    title: 'Chef & Information Technology Support',
    date: 'Feb 2014 - May 2015',
    number: '(562)-924-3211',
    address: 'Norwalk, CA',
    desc: 'I was hired as an assistant chef under my father who is the head chef. During this time I found a greater passion for computers and began to help the company with their IT needs.',
    tasks: [
      'Cooking',
      'Prep Work',
      'Dishwashing',
      'Cleaning',
      'Hardware Maintence',
    ],
    tech: [
      {
        id: 1,
        name: 'Windows',
        icon: <SiWindows11 />,
        url: 'https://www.microsoft.com/en-us/windows',
      },
      {
        id: 2,
        name: 'Hardware',
        icon: <FaComputer />,
        url: 'https://masterpcbuilds.com/'
      }
    ]
  },
  {
    id: 4,
    type: 'work',
    location: 'Freelance',
    title: 'Graphic Designer',
    date: 'Aug 2015 - may 2019',
    desc: 'While attending community college to make extra cash on the side I did graphics design work for various clients. This ranged from logo, flyers, videos, and marketing material.',
    tasks: [
      'Designing Digital Art',
      'Video Editing/VFX'
    ],
    tech: [
      {
        id: 1,
        name: 'Photoshop',
        icon: <SiAdobephotoshop />,
        url: 'https://www.adobe.com/products/photoshop.html',
      },
      {
        id: 2,
        name: 'After Effects',
        icon: <SiAdobeaftereffects />,
        url: 'https://www.adobe.com/products/aftereffects.html',
      },
      {
        id: 3,
        name: 'Premiere Pro',
        icon: <SiAdobepremierepro />,
        url: 'https://www.adobe.com/products/premiere.html',
      },
      {
        id: 4,
        name: 'Illustrator',
        icon: <SiAdobeillustrator />,
        url: 'https://www.adobe.com/products/illustrator.html',
      }
    ]
  },
  {
    id: 5,
    type: 'internship',
    location: 'Dataniz',
    title: 'Software Engineer',
    date: 'Jan 2023 - May 2023',
    number: 'malik.luti@csulb.edu',
    address: 'Long Beach, CA',
    desc: 'Dataniz is a website that allows users to generate IoT data. I worked on the front-end of the website using React and TypeScript connecting everything up to the Back-End.',
    tasks: [
      'Front-End Development',
      'Routing & State Management',
    ],
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
      }
    ]
  },
  {
    id: 6,
    type: 'internship',
    location: 'Down',
    title: 'Lead Designer',
    date: 'April 2020 - Jan 2022',
    number: '@joindown',
    address: 'Long Beach, CA',
    desc: 'Down is a social media startup that aims to connect users with events going on in their area. I worked on designing the mobile application from wireframes, mockups, and prototypes. I also worked on new protypes for the website. Later in the project became the Lead ensuring that my team under work flows of creating UI/UX designs and material for the marketing team.',
    tasks: [
      'UI/UX Designs',
      'Wireframes',
      'Mockups',
      'Prototypes',
      'Marketing Material',
      'Leading a Team',
    ],
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
  }
]