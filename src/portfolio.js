import emoji from 'react-easy-emoji'

import sterling from './assets/img/icons/common/sterling.jpg'
import enye from './assets/img/icons/common/enye.png'
import hadajcom from './assets/img/icons/common/hadajcom.PNG'
import start from './assets/img/icons/common/start.jpg'

export const greetings = {
  'name': 'Abdur-Raqeeb Ajao',
  'title': 'Hi all, I\'m Abdur-Raqeeb',
  'description': 'A passionate Full Stack Web Developer and Backend App Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Typescript / NestJS and some other cool libraries and frameworks.',
  'resumeLink': 'https://res.cloudinary.com/abdraqeeb/image/upload/v1621540543/Abdur-Raqeeb_CV_wvhrnn.pdf'
}

export const openSource = {
  githubUserName: 'AbdRaqeeb',
}

export const contact = {}

export const socialLinks = {
  'facebook': 'https://www.facebook.com/roqmania',
  'instagram': 'https://www.instagram.com/abdraqeeb',
  'twitter': 'https://twitter.com/roqmania',
  'github': 'https://github.com/AbdRaqeeb',
  'linkedin': 'https://www.linkedin.com/in/abdur-raqeeb-ajao-98427213a'
}

export const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji(
      '⚡ Develop highly interactive Front end / User Interfaces for your web applications'
    ),
    emoji('⚡ Develop functional and sustainable web applications with clean codes'),
    emoji('⚡ Manage cutting-edge technologies to improve applications'),
    emoji(
      '⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean'
    ),
  ],

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'vscode-icons:file-type-html',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'vscode-icons:file-type-css',
    },
    {
      skillName: 'tailwind',
      fontAwesomeClassname: 'logos:tailwindcss-icon',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'logos:javascript',
    },
    {
      skillName: 'TypeScript',
      fontAwesomeClassname: 'logos:typescript-icon',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
    },
    {
      skillName: 'grapqhl',
      fontAwesomeClassname: 'logos:graphql',
    },
    {
      skillName: 'redux',
      fontAwesomeClassname: 'logos:redux',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'logos:nodejs-icon',
    },
    {
      skillName: 'nestjs',
      fontAwesomeClassname: 'logos:nestjs',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'vscode-icons:file-type-npm',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'vscode-icons:file-type-sql',
    },
    {
      skillName: 'mongoDB',
      fontAwesomeClassname: 'vscode-icons:file-type-mongo',
    },
    {
      skillName: 'aws',
      fontAwesomeClassname: 'logos:aws',
    },
    {
      skillName: 'firebase',
      fontAwesomeClassname: 'logos:firebase',
    },
    {
      skillName: 'git',
      fontAwesomeClassname: 'logos:git-icon',
    },
    {
      skillName: 'sequelize',
      fontAwesomeClassname: 'logos:sequelize',
    },
    {
      skillName: 'knex',
      fontAwesomeClassname: 'logos:knex',
    },
    {
      skillName: 'postgresql',
      fontAwesomeClassname: 'logos:postgresql',
    },
    {
      skillName: 'mysql',
      fontAwesomeClassname: 'logos:mysql',
    },
  ],
}

export const SkillBars = [
  {
    Stack: 'Backend',
    progressPercentage: '90',
  },
  {
    Stack: 'Frontend', //Insert stack or technology you have experience in
    progressPercentage: '60', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
]

export const educationInfo = [
  {
    schoolName: 'Federal University of Technology, Akure',
    subHeader: 'Bachelor of Science in Human Anatomy',
    duration: 'November 2015 - December 2019',
    desc: 'Participated in the research of histomorphometric impact of riboceine on testes.',
    descBullets: [
      'Graduated with a CGPA of 4.7 / 5.0',
      'Won Silver Medal in Squash at Nigeria University Games.',
    ],
  },
]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Sterling Bank',
    companylogo: sterling,
    date: 'March 2021 – Present',
    desc: 'Sterling Bank Plc, is a full service national commercial bank is licensed by the Central Bank of Nigeria.'
  },
  {
    role: 'Software Engineer',
    company: 'Enye',
    companylogo: enye,
    date: 'Dec 2020 – March 2021',
    desc: 'Enye is a mission driven education technology non-profit company that run a platform that fosters growth within Nigerian communities by empowering their brightest to become innovators, creators and mentors.'
  },
  {
    role: 'Software Developer',
    company: 'Start.ng',
    companylogo: start,
    date: 'Feb 2020 – Dec 2020',
    desc: 'Start.ng is a platform that gives everyone an equal opportunity of learning in  the tech world, in order to develop and build new generation Tech Developers. '
  },
  {
    role: 'Software Developer',
    company: 'Hadajcom',
    companylogo: hadajcom,
    date: 'Feb 2018 – Jan 2020',
    desc: 'Hadajcom is a telecommunication engineering company that deals in the installation, repair and other services of intercomms, CCTV and other telecommunication devices.'
  },
]

export const projects = [
  {
    name: 'Bimrec',
    desc: 'An application where patients can keep track of their medical history from anywhere in the world. Doctors can access such medical records with facial scan during emergencies.',
    link: {
      name: 'view',
      url: 'https://livritehealthcare.com.ng/bimrec'
    }
  },
  {
    name: 'Zeemart',
    desc: 'A management dashboard to help manage the operations of an ecommerce company.',
    link: {
      name: 'view',
      url: 'http://limitless-escarpment-55868.herokuapp.com'
    }
  },
  {
    name: 'Foodstore API',
    desc: 'This is a RESTful API documentation for an online food store application.',
    link: {
      name: 'view',
      url: 'https://foodstore-ng.herokuapp.com'
    }
  },
  {
    name: 'Cajeq',
    desc: 'This is a RESTful API documentation for an online vehicle rentals application.',
    link: {
      name: 'view',
      url: 'https://ride-ng.herokuapp.com'
    }
  },
  {
    name: 'Cloudinary-simple-upload',
    desc: 'This is an open source node package for uploading files to cloudinary.',
    link: {
      name: 'view',
      url: 'https://www.npmjs.com/package/cloudinary-simple-upload'
    }
  },
]