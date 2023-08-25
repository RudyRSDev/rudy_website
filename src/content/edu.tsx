import Image from 'next/image'

export const edu = [
  {
    id: 1,
    name: 'California State University, Long Beach',
    location: 'Long Beach, CA',
    title: 'Bachelor of Science in Computer Science',
    graduation: 'May 2023',
    gpa: '3.5',
    image: <Image src="/images/media/csulb.png" alt="CSULB" width={800} height={800} />
  },
  {
    id: 2,
    name: 'Cerritos College',
    location: 'Norwalk, CA',
    title: 'Associate of Natural Science',
    graduation: 'May 2019',
    gpa: '3.2',
    image: <Image src="/images/media/cc.png" alt="Cerritos" width={800} height={800} />
  },
  {
    id: 3,
    name: 'Artesia High School',
    location: 'Lakewood, CA',
    title: 'High School Diploma',
    graduation: 'June 2015',
    gpa: '2.9',
    image: <Image src="/images/media/ahs.png" alt="Artesia" width={800} height={800} />
  }
]