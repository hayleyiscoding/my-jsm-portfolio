import javascript from "../public/assets/tech/javascript.png";
import html from "../public/assets/tech/html.png";
import css from "../public/assets/tech/css.png";
import reactjs from "../public/assets/tech/reactjs.png";
import tailwind from "../public/assets/tech/tailwind.png";
import git from "../public/assets/tech/git.png";
import github from "../public/assets/tech/github.png";
import mui from "../public/assets/tech/materialui.png";
import nextjs from "../public/assets/tech/nextjs.png";
import express from "../public/assets/tech/express.png";
import figma from "../public/assets/tech/figma.png";
import typescript from "../public/assets/tech/typescript.png";
import nodejs from "../public/assets/tech/nodejs.png";
import mongodb from "../public/assets/tech/mongodb.png";
import redux from "../public/assets/tech/redux.png";
import hardhat from "../public/assets/tech/hardhat.png";
import solidity from "../public/assets/tech/solidity.png";
import thegraph from "../public/assets/tech/thegraph.png";
import rainbowkit from "../public/assets/tech/rainbowkit.png";
import ipfs from "../public/assets/tech/ipfs.png";
import ethersjs from "../public/assets/tech/ethersjs.png";
import automation from "../public/assets/tech/automation.png";
import community from "../public/assets/tech/community.png";
import email from "../public/assets/tech/email.png";
import agile from "../public/assets/tech/agile.png";
import jest from "../public/assets/tech/jest.png";
import writing from "../public/assets/tech/writing.png";
import graduate from "../public/assets/tech/graduate.png";
import teacher from "../public/assets/tech/teacher.png";
import smm from "../public/assets/tech/smm.png";
import crowdfunding from "../public/assets/projects/crowdfundingRev.png";
import bubbleBlowers from "../public/assets/projects/bubbles.png";
import morent from "../public/assets/projects/morent.png";
import jobit from "../public/assets/projects/jobit.png";
import aiChat from "../public/assets/projects/aiprompt.png";
import austinAvatar from "../public/assets/testimonials/austin-avatar.jpg";
import sallyAvatar from "../public/assets/testimonials/sally-avatar.png";
import matheusAvatar from "../public/assets/testimonials/matheus-avatar.jpeg";
import camiAvatar from "../public/assets/testimonials/cami-avatar.png";
import kristenAvatar from "../public/assets/testimonials/kristen-avatar.avif";
import morentLaptop from "../public/assets/projects/morent-laptop.png";
import jobitLaptop from "../public/assets/projects/jobit-laptop.png";
import morentFigma from "../public/assets/projects/morentFigma.png";
import morentCars from "../public/assets/projects/morentCars.png";
import morentCardImage from "../public/assets/projects/morentCardImage.png";
import jobitCardImage from "../public/assets/projects/jobitCardImage.png";
import process1 from "../public/assets/process/process1.svg";
import process2 from "../public/assets/process/process2.svg";
import process3 from "../public/assets/process/process3.svg";
import process4 from "../public/assets/process/process4.svg";
import process5 from "../public/assets/process/process5.svg";

import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { SiHashnode } from "react-icons/si";

export const socialLinks = [
  {
    id: 1,
    name: "Github",
    url: "https://github.com/hayleyiscoding",
    icon: <AiFillGithub size={18} />,
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hayleyiscoding/",
    icon: <AiFillLinkedin size={18} />,
  },
  {
    id: 3,
    name: "Twitter",
    url: "https://twitter.com/hayleyiscoding",
    icon: <AiFillTwitterCircle size={18} />,
  },
  {
    id: 4,
    name: "Hashnode",
    url: "https://hayleyiscoding.hashnode.dev/",
    icon: <SiHashnode size={18} />,
  },
];

export const navLinks = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Case Studies",
    url: "/case-studies",
  },
  {
    id: 3,
    name: "Contact",
    url: "/contact",
  },
];

export const technologies = [
  {
    id: 1,
    name: "HTML",
    icon: html,
  },
  {
    id: 2,
    name: "CSS",
    icon: css,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: javascript,
  },
  {
    id: 5,
    name: "React",
    icon: reactjs,
  },
  {
    id: 6,
    name: "Next.js",
    icon: nextjs,
  },
  {
    id: 7,
    name: "Typescript",
    icon: typescript,
  },
  {
    id: 8,
    name: "Tailwind",
    icon: tailwind,
  },
  {
    id: 9,
    name: "MUI",
    icon: mui,
  },
  {
    id: 10,
    name: "Redux",
    icon: redux,
  },
  {
    id: 11,
    name: "Figma",
    icon: figma,
  },
  {
    id: 12,
    name: "Node.js",
    icon: nodejs,
  },
  {
    id: 13,
    name: "Express",
    icon: express,
  },
  {
    id: 14,
    name: "MongoDB",
    icon: mongodb,
  },
  {
    id: 15,
    name: "Next.js",
    icon: nextjs,
  },
  {
    id: 16,
    name: "Solidity",
    icon: solidity,
  },
  {
    id: 17,
    name: "Ethers.js",
    icon: ethersjs,
  },
  {
    id: 18,
    name: "Hardhat",
    icon: hardhat,
  },
  {
    id: 19,
    name: "RainbowKit",
    icon: rainbowkit,
  },
  {
    id: 20,
    name: "IPFS",
    icon: ipfs,
  },
  {
    id: 21,
    name: "The Graph",
    icon: thegraph,
  },
  {
    id: 22,
    name: "BSc Hons (Biomolecular Technology)",
    icon: graduate,
  },
  {
    id: 23,
    name: "English Teacher",
    icon: teacher,
  },
  {
    id: 24,
    name: "Technical Writing",
    icon: writing,
  },
  {
    id: 25,
    name: "Community Management",
    icon: community,
  },
  {
    id: 26,
    name: "Email Marketing",
    icon: email,
  },
  {
    id: 27,
    name: "Business Automation",
    icon: automation,
  },
  {
    id: 28,
    name: "Social Media Management",
    icon: smm,
  },
  {
    id: 29,
    name: "Git",
    icon: git,
  },
  {
    id: 30,
    name: "Github",
    icon: github,
  },
  {
    id: 31,
    name: "Agile",
    icon: agile,
  },
  {
    id: 32,
    name: "Jest",
    icon: jest,
  },
];

export const secondarySkillsData = [
  {
    id: 1,
    name: "Next.js",
    icon: "TbBrandNextjs",
  },
  {
    id: 2,
    name: "Solidity",
    icon: "SiSolidity",
  },
  {
    id: 3,
    name: "Ethers.js",
    icon: "FaEthereum",
  },
  {
    id: 4,
    name: "Hardhat",
    icon: "FaHardHat",
  },
  {
    id: 5,
    name: "The Graph",
    icon: "SiGraphql",
  },
  {
    id: 6,
    name: "GraphQL",
    icon: "SiGraphql",
  },
  {
    id: 7,
    name: "Node.js",
    icon: "SiNodedotjs",
  },
  {
    id: 8,
    name: "Typescript",
    icon: "SiTypescript",
  },
  {
    id: 9,
    name: "Angular",
    icon: "SiAngular",
  },
  {
    id: 10,
    name: "SASS",
    icon: "SiSass",
  },
];

export const projects = [
  // {
  //   id: 1,
  //   name: "My Portfolio",
  //   type: "Web2 / Web3",
  //   about:
  //     "I had a lot of fun creating this portfolio website! I Used Vite and implemented neumorphic design with Tailwind CSS, React hooks, various libraries such as Masonry, CSS animations that are activated on scroll/hover, Email.js with error handling and fetched data from the Hashnode API using GraphQL.",
  //   tech: "#React #HashnodeAPI #GraphQL #Tailwind",
  //   url: "https://hayleyiscoding.com",
  //   github: "https://github.com/hayleyiscoding/my-portfolio",
  //   image: portfolio,
  // },

  {
    id: 1,
    name: "Morent",
    slug: "morent",
    title: "Morent - A Car Rental Website",
    type: "Web2",
    about:
      "A web application where users can share and discover artificial intelligence prompts from ChatGPT. I created it using Next.js - and used Next-Auth for user login, MongoDB for the database and Next.js's serverless backend ",
    tech: "#Next.js #Next-Auth #MongoDB #Tailwind",
    url: "https://cohort5-code-fam-car-rent.vercel.app/",
    github: "",
    image: morent,
    imageProjectDetails: morentLaptop,
    myRole: "Software Engineer",
    startDate: "06/08/2023",
    endDate: "05/09/2023",
    techStack: [reactjs, typescript, redux, tailwind, nodejs, express, mongodb],
    longDescription: (
      <>
        Morent, a cutting-edge car rental application that was developed using
        the MERN stack. The app boasts a dynamic homepage that showcases
        featured vehicles, along with convenient pickup & drop-off location
        options & a comprehensive list of available cars. <br />
        <br />
        My team and I also developed the car listing page which offers a search
        bar and various filtering options for users to find the perfect vehicle.
        Additionally, it has a car details page which provides users with
        detailed information along with suggestions for other recommended
        vehicles.
        <br />
        <br />
        Car owners are also able to list their cars for rent through our Add Car
        page, while users can easily track their rented and rented-out cars
        through their profile page. Overall, we&apos;ve created an intuitive and
        user-friendly MVP version of the platform that will make renting a car a
        breeze.
      </>
    ),
    problemStatement: `One of the main problems that people face when looking to rent a car is the hassle of finding a reliable and user-friendly platform to search for and book rental cars. In addition, car owners who want to rent out their vehicles often struggle to find a suitable platform to list their cars and manage their rentals.`,
    secondImage: morentCars,
    figmaDesign: morentFigma,
    challenges: [
      "Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols such as JSON Web Tokens.",
      "We conducted brainstorming and carefully weighed our options before making a decision. Furthermore, using NextJS was a new experience for us, and we encountered difficulties while implementing its features. Finally, we had to work under time constraints, which added pressure to the project.",
      "However, we collaborated effectively to overcome these obstacles and ultimately delivered a high-quality product within the given timeline.",
    ],
    learnings: [
      "Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols such as JSON Web Tokens.",
      "Sharpened my backend skills, specifically in optimizing database queries, improving performance, and handling server-side logic.",
      `Learned how to properly handle files, including file upload, storage, and retrieval, ensuring that the app's data is organized & easily accessible while keeping it secure.`,
      `Acquired proficiency in NextJS and implemented various features utilizing industry-standard best practices.`,
    ],
    cardImage: morentCardImage,
  },
  {
    id: 2,
    name: "Jobit",
    slug: "jobit",
    title: "Jobit - A Modern Job Board",
    type: "Web2",
    about:
      "A web application where users can share and discover artificial intelligence prompts from ChatGPT. I created it using Next.js - and used Next-Auth for user login, MongoDB for the database and Next.js's serverless backend.",
    tech: "#Next.js #Next-Auth #MongoDB #Tailwind",
    url: "https://ai-prompt-share-three.vercel.app/",
    github: "https://github.com/hayleyiscoding/ai-prompt-share",
    image: jobit,
    cardImage: jobitCardImage,
    imageProjectDetails: jobitLaptop,
    myRole: "Software Engineer",
    startDate: "06/08/2023",
    endDate: "05/09/2023",
    techStack: [reactjs, typescript, redux, tailwind, nodejs, express, mongodb],
    longDescription: (
      <>
        Morent, a cutting-edge car rental application that was developed using
        the MERN stack. The app boasts a dynamic homepage that showcases
        featured vehicles, along with convenient pickup & drop-off location
        options & a comprehensive list of available cars. <br />
        <br />
        My team and I also developed the car listing page which offers a search
        bar and various filtering options for users to find the perfect vehicle.
        Additionally, it has a car details page which provides users with
        detailed information along with suggestions for other recommended
        vehicles.
        <br />
        <br />
        Car owners are also able to list their cars for rent through our Add Car
        page, while users can easily track their rented and rented-out cars
        through their profile page. Overall, we&apos;ve created an intuitive and
        user-friendly MVP version of the platform that will make renting a car a
        breeze.
      </>
    ),
    secondImage: morentCars,
    figmaDesign: jobitCardImage,
    challenges: [
      "Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols such as JSON Web Tokens.",
      "We conducted brainstorming and carefully weighed our options before making a decision. Furthermore, using NextJS was a new experience for us, and we encountered difficulties while implementing its features. Finally, we had to work under time constraints, which added pressure to the project.",
      "However, we collaborated effectively to overcome these obstacles and ultimately delivered a high-quality product within the given timeline.",
    ],
    learnings: [
      "Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols such as JSON Web Tokens.",
      "Sharpened my backend skills, specifically in optimizing database queries, improving performance, and handling server-side logic.",
      `Learned how to properly handle files, including file upload, storage, and retrieval, ensuring that the app's data is organized & easily accessible while keeping it secure.`,
      `Acquired proficiency in NextJS and implemented various features utilizing industry-standard best practices.`,
    ],
    cardImage: morentCardImage,
  },

  {
    id: 3,
    name: "AI Prompt Share",
    slug: "ai-prompt-share",
    title: "AIPrompt - An AI Prompt-Sharing Website",
    type: "Web2",
    about:
      "A web application where users can share and discover artificial intelligence prompts from ChatGPT. I created it using Next.js - and used Next-Auth for user login, MongoDB for the database and Next.js's serverless backend ",
    tech: "#Next.js #Next-Auth #MongoDB #Tailwind",
    url: "https://ai-prompt-share-three.vercel.app/",
    github: "https://github.com/hayleyiscoding/ai-prompt-share",
    image: aiChat,
    imageProjectDetails: morentLaptop,
    myRole: "Software Engineer",
    startDate: "06/08/2023",
    endDate: "05/09/2023",
    techStack: [reactjs, typescript, redux, tailwind, nodejs, express, mongodb],
    longDescription: (
      <>
        Morent, a cutting-edge car rental application that was developed using
        the MERN stack. The app boasts a dynamic homepage that showcases
        featured vehicles, along with convenient pickup & drop-off location
        options & a comprehensive list of available cars. <br />
        <br />
        My team and I also developed the car listing page which offers a search
        bar and various filtering options for users to find the perfect vehicle.
        Additionally, it has a car details page which provides users with
        detailed information along with suggestions for other recommended
        vehicles.
        <br />
        <br />
        Car owners are also able to list their cars for rent through our Add Car
        page, while users can easily track their rented and rented-out cars
        through their profile page. Overall, we&apos;ve created an intuitive and
        user-friendly MVP version of the platform that will make renting a car a
        breeze.
      </>
    ),
    secondImage: morentCars,
    figmaDesign: morentFigma,
    challenges: [
      "Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols such as JSON Web Tokens.",
      "We conducted brainstorming and carefully weighed our options before making a decision. Furthermore, using NextJS was a new experience for us, and we encountered difficulties while implementing its features. Finally, we had to work under time constraints, which added pressure to the project.",
      "However, we collaborated effectively to overcome these obstacles and ultimately delivered a high-quality product within the given timeline.",
    ],
    learnings: [
      "Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols such as JSON Web Tokens.",
      "Sharpened my backend skills, specifically in optimizing database queries, improving performance, and handling server-side logic.",
      `Learned how to properly handle files, including file upload, storage, and retrieval, ensuring that the app's data is organized & easily accessible while keeping it secure.`,
      `Acquired proficiency in NextJS and implemented various features utilizing industry-standard best practices.`,
    ],
    cardImage: morentCardImage,
  },
  {
    id: 4,
    name: "Crowdfunding dApp",
    slug: "crypto-revolution",
    title: "The Crypo Crowfunding Revolution",
    type: "Web3",
    about:
      "My team and I built this decentralised app as our final project for the Encode Solidity Bootcamp. It is an app that is similar to Kickstart or GoFundMe - except that users can make and receive donations in cryptocurrencies.",
    tech: "#React #Solidity #Ethers #Hardhat #Thirdweb",
    url: "https://crowdfunding-tau-three.vercel.app/",
    github: "https://github.com/hayleyiscoding/crowdfunding-blockchain-app",
    image: crowdfunding,
    imageProjectDetails: morentLaptop,
    myRole: "Software Engineer",
    startDate: "06/08/2023",
    endDate: "05/09/2023",
    techStack: [reactjs, typescript, redux, tailwind, nodejs, express, mongodb],
    longDescription: (
      <>
        Morent, a cutting-edge car rental application that was developed using
        the MERN stack. The app boasts a dynamic homepage that showcases
        featured vehicles, along with convenient pickup & drop-off location
        options & a comprehensive list of available cars. <br />
        <br />
        My team and I also developed the car listing page which offers a search
        bar and various filtering options for users to find the perfect vehicle.
        Additionally, it has a car details page which provides users with
        detailed information along with suggestions for other recommended
        vehicles.
        <br />
        <br />
        Car owners are also able to list their cars for rent through our Add Car
        page, while users can easily track their rented and rented-out cars
        through their profile page. Overall, we&apos;ve created an intuitive and
        user-friendly MVP version of the platform that will make renting a car a
        breeze.
      </>
    ),
    problemStatement: `One of the main problems that people face when looking to rent a car is the hassle of finding a reliable and user-friendly platform to search for and book rental cars. In addition, car owners who want to rent out their vehicles often struggle to find a suitable platform to list their cars and manage their rentals.`,
    secondImage: morentCars,
    figmaDesign: morentFigma,
    challenges: [
      "Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols such as JSON Web Tokens.",
      "We conducted brainstorming and carefully weighed our options before making a decision. Furthermore, using NextJS was a new experience for us, and we encountered difficulties while implementing its features. Finally, we had to work under time constraints, which added pressure to the project.",
      "However, we collaborated effectively to overcome these obstacles and ultimately delivered a high-quality product within the given timeline.",
    ],
    learnings: [
      "Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols such as JSON Web Tokens.",
      "Sharpened my backend skills, specifically in optimizing database queries, improving performance, and handling server-side logic.",
      `Learned how to properly handle files, including file upload, storage, and retrieval, ensuring that the app's data is organized & easily accessible while keeping it secure.`,
      `Acquired proficiency in NextJS and implemented various features utilizing industry-standard best practices.`,
    ],
    cardImage: morentCardImage,
  },

  {
    id: 5,
    name: "BubbleBlowers Swim School",
    slug: "bubble-blowers",
    title: "Bubble Blowers Swim School Website",
    type: "Web2",
    about:
      "A one-page website that I created for a freelance client who runs a swim school. It includes connection to WhatsApp, Google Reviews and Google Maps. The client reported a large increase in student sign-ups after the website launch.",
    tech: "#HTML #CSS #Javascript",
    url: "https://bubbleblowers.fun",
    github: "https://github.com/hayleyiscoding/bubbleblowers",
    image: bubbleBlowers,
    imageProjectDetails: morentLaptop,
    myRole: "Software Engineer",
    startDate: "06/08/2023",
    endDate: "05/09/2023",
    techStack: [reactjs, typescript, redux, tailwind, nodejs, express, mongodb],
    longDescription: (
      <>
        Morent, a cutting-edge car rental application that was developed using
        the MERN stack. The app boasts a dynamic homepage that showcases
        featured vehicles, along with convenient pickup & drop-off location
        options & a comprehensive list of available cars. <br />
        <br />
        My team and I also developed the car listing page which offers a search
        bar and various filtering options for users to find the perfect vehicle.
        Additionally, it has a car details page which provides users with
        detailed information along with suggestions for other recommended
        vehicles.
        <br />
        <br />
        Car owners are also able to list their cars for rent through our Add Car
        page, while users can easily track their rented and rented-out cars
        through their profile page. Overall, we&apos;ve created an intuitive and
        user-friendly MVP version of the platform that will make renting a car a
        breeze.
      </>
    ),
    problemStatement: `One of the main problems that people face when looking to rent a car is the hassle of finding a
    reliable and user-friendly platform to search for and book rental cars.
    In addition, car owners who want to rent out their vehicles often
    struggle to find a suitable platform to list their cars and manage their
    rentals.`,
    secondImage: morentCars,
    figmaDesign: morentFigma,
    challenges: [
      "Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols such as JSON Web Tokens.",
      "We conducted brainstorming and carefully weighed our options before making a decision. Furthermore, using NextJS was a new experience for us, and we encountered difficulties while implementing its features. Finally, we had to work under time constraints, which added pressure to the project.",
      "However, we collaborated effectively to overcome these obstacles and ultimately delivered a high-quality product within the given timeline.",
    ],
    learnings: [
      "Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols such as JSON Web Tokens.",
      "Sharpened my backend skills, specifically in optimizing database queries, improving performance, and handling server-side logic.",
      `Learned how to properly handle files, including file upload, storage, and retrieval, ensuring that the app's data is organized & easily accessible while keeping it secure.`,
      `Acquired proficiency in NextJS and implemented various features utilizing industry-standard best practices.`,
    ],
    cardImage: morentCardImage,
  },
];

export const publications = [
  {
    id: 1,
    date: "Aug 14, 2022",
    title: "Storing Data on IPFS using Web3.Storage",
    featured: "",
    url: "https://hayleyiscoding.hashnode.dev/storing-data-on-ipfs-using-web3storage",
  },
  {
    id: 2,
    date: "Aug 9, 2022",
    title: `Add a 'Connect Wallet' Button to Your Website - Next.js,
    and RainbowKit Edition`,
    featured: "",
    url: "https://hayleyiscoding.hashnode.dev/add-a-connect-wallet-button-to-your-website-nextjs-and-rainbowkit-edition",
  },
  {
    id: 3,
    date: "Aug 8, 2022",
    title: `Add a 'Connect Wallet' Button to Your Website - Vanilla JS
    Edition`,
    featured: "",
    url: "https://hayleyiscoding.hashnode.dev/add-a-connect-wallet-button-to-your-website-vanilla-js-edition",
  },
  {
    id: 4,
    date: "Aug 3, 2022",
    title: `Write Your First Solidity Smart Contract in the Next 10
    Minutes`,
    featured: "",
    url: "https://hayleyiscoding.hashnode.dev/write-your-first-solidity-smart-contract-in-the-next-10-minutes",
  },
  {
    id: 5,
    date: "Aug 3, 2022",
    title: `Web 3 for Beginners`,
    featured: "** Featured on Hashnode",
    url: "https://hayleyiscoding.hashnode.dev/web-3-for-beginners",
  },
];

export const educationData = [
  {
    id: 1,
    type: "Education",
    date: `Jan 2001 - Dec 2004 (4 years)`,
    title: "Bachelor of Science Honours (Biomolecular Technology)",
    place: "University of KwaZulu Natal, South Africa",
    body: "I completed my university degree in 2003 - a triple major of Biochemistry, Genetics and Microbiology, with minors in Computer Science, Mathematics, Statistics and Business Management. I graduated 'Summa Cum Laude' (with highest distinction) and also received many Certificates of Merit during this degree - including Computer Science, Molecular Population Genetics and Diagnostics and for Protein Toxins in Cell Biology and Pathology. The title of my thesis was: 'The Chicken Embryo Model System and the Real-Time Polymerase Chain Reaction for the testing of invasion of HT1080 cells (lung cancer cells)'",
  },
  {
    id: 2,
    type: "Education",
    date: "2021 - 2022",
    title: "Full-Stack Web Developer Bootcamp (MERN Stack)",
    place: "AltCampus (Online)",
    body: "This was the start of my first formal coding studies. I had previously built websites using Shopify, Wordpress.org and Squarespace, but I was interested in learning how to code complex software from scratch. During the bootcamp I learnt HTML, CSS, Javascript, Node.js and React.",
  },
  {
    id: 3,
    type: "Education",
    date: "August 2022",
    title: "30 Days of Web3",
    place: "Women Build Web3, Online",
    body: "I was accepted to participate in '30 Days of Web3' - a project-based curriculum created by developers to teach students how to build full-stack decentralised apps. I built an events platform where users can add events to a website using blockchain technology. Some of the tech I used included Hardhat, Solidity,Graph Protocol, Ethers.js, IPFS, Next.js and Polygon Network.",
  },
  {
    id: 4,
    type: "Education",
    date: "October 2022 - December 2022 (2 months)",
    title: "Solidity Bootcamp",
    place: "Growic Solidity, Online",
    body: "I took part in a bootcamp to learn how to code smart contracts with Solidity. Some of my assignments included making my own ERC-20 token, creating a decentralised exchange and staking app, building a multi-sig wallet and a making a blockchain dice game using randomness.",
  },
  {
    id: 5,
    type: "Education",
    date: "February 2023 - April 2023 (2 months)",
    title: "Solidity Bootcamp",
    place: "Encode Solidity, Online",
    body: "The Encode Solidity bootcamp involved various small assignments using Angular, Nest.js and Solidity. For our final project, my team and I built a crowdfunding app similar to GoFundMe and Kickstarter where users can make and receive donations - but in cryptocurrency. We presentend this project on April 7th, 2023.",
  },
];

export const workData = [
  // {
  //   id: 1,
  //   type: "Work",
  //   date: `Jan 2005 - June 2016`,
  //   title: "English Instructor, Amazon Rainforest Naturalist Guide and Travels",
  //   place: "Ecuador, Peru, South Korea, etc",
  //   body: `I decided after my degree that my next 'education' was to travel the world. In order to do this, I worked various expat jobs, such as guiding in the Amazon Rainforest and teaching English in South Korea. With this income, I was able to visit 7 continents, live on 6 of them and visit over 40 countries. I learned so much about the world - the problems that people are experiencing, technological advancements in various countries and especially important soft skills such as how to effectively communicate with people from other cultures.`,
  // },
  {
    id: 1,
    duration: "6 Months",
    type: "Remote, Full-Time",
    title: "Javascript Mastery",
    place: "Croatia, Online",
    body: "Open source contributions to various full-stack web2 projects. A program coordinated by one of the top 100 software-developer influencers in the world - Adrian Hajdin. Daily tasks included PR submissions with senior engineer code reviews, working to agile methodologies with various frontend and backend technologies",
  },
  {
    id: 2,
    duration: "3 Months",
    type: "Remote, Part-Time",
    title: "Women's Blockchain Development Program",
    place: "Women Build Web3, Online",
    body: "I was selected to receive funding from 'Women Build Web3' to build a blockchain start-up from scratch. I built a coworking lottery for women who work online to raise funds for their online businesses. I presented this project on Dec 22nd, 2022. Some of the tech I used included Solidity, Chainlink, Airtable API, Hardhat, Ether.js, RainbowKit, Polygon Network, etc.",
  },
  {
    id: 3,
    duration: "2 Months",
    type: "Freelance, Remote",
    title: "Web Developer",
    place: "Bubble Blowers Swim School, South Africa",
    body: "I coded a website using HTML/CSS/Javascript for a swim school in South Africa. I made it mobile responsive, added the ability for potential students to contact my client via Whatsapp, added a Google Map, Google Reviews and a Google-My-Business listing. The client reported a large number of student sign-ups after the website went live.",
  },
  {
    id: 4,
    duration: "12 Years",
    type: "Remote, Part-Time",
    title: "English (ESL) Teacher",
    place: "California, USA",
    body: "I work remotely part-time teaching English to professionals from around the world - such as software engineers, lawyers, accountants, etc. Also, university students and children. My students mostly come from South Korea, Japan, Saudi Arabia, Oman, Brazil and Turkey.",
  },
  {
    id: 5,
    duration: "18 months",
    type: "Remote, Full-Time",
    title: "Recruiting Manager",
    place: "ESLstarter, United Kingdom",
    body: `This was my first remote position. I was in charge of screening, interviewing and placing English Teachers in private and government schools around the world. In particular, I worked with the Colombian government to make their English program a success. I was also in charge of the company's community and social media. During this time, I lived in and travelled to many countries. This taught me invaluable remote work skills such as adaptability, discipline and team communication. I also arranged women's co-working events in Thailand and India.`,
  },
];

export const workshops = [
  {
    id: 1,
    title: "Building on Polygon",
    speaker: "Rahat Chowdhury",
    company: "Polygon Network",
    about: `The most widely used Ethereum scaling ecosystem`,
    url: `https://polygon.technology/`,
  },
  {
    id: 2,
    title: "Intro to Solidity",
    speaker: "Patrick Collins",
    company: "Cyfrin",
    about: `Blockchain Engineer & Advocate`,
    url: `https://cyfrin.io`,
  },
  {
    id: 3,
    title: "Understanding Web3 Architecture",
    speaker: "Nader Dabit",
    company: "Aave and Lens Protocol",
    about: `Director of Developer Relations`,
    url: `https://nader.arweave.dev/`,
  },
  {
    id: 4,
    title: "Building API's with The Graph",
    speaker: "Cami",
    company: "Fuel Network and Women Build Web3",
    about: `Head of DevRel`,
    url: `https://camiinthisthang.substack.com/`,
  },
  {
    id: 5,
    title: "Interacting with Contracts (Wagmi)",
    speaker: "Dhaiwat Pandya",
    company: "Fuel Network",
    about: `Developer Relations`,
    url: `https://www.dhaiwat.xyz/`,
  },
  {
    id: 6,
    title: "Speedrunning Ethereum",
    speaker: "Austin Griffith and Eda",
    company: "Speedrun Ethereum",
    about: `A curriculum that teaches you how to write smart contracts and build apps on Ethereum`,
    url: `https://speedrunethereum.com/`,
  },
  {
    id: 7,
    title: "Building on Filecoin - Web3.Storage",
    speaker: "Dawn Kelly",
    company: "Developer Advocate - Filecoin",
    about: `A decentralised storage network designed to store humanity's most important information`,
    url: `https://filecoin.io/`,
  },
  {
    id: 8,
    title: "Building Web3 Products",
    speaker: "Katia Banina",
    company: "Head of Product at Wintermute and Bebop",
    about:
      "A decentralized trading platform that delivers a breakthrough in user experience for trading in DeFi",
    url: `https://bebop.xyz/`,
  },
  {
    id: 9,
    title: "Intro to Next.js",
    speaker: "Lee Robinson",
    company: "VP of Developer Experience at Vercel",
    about: "Helping developers build a faster web",
    url: "https://www.3ekv.com/",
  },

  {
    id: 10,
    title: "AMA",
    speaker: "Ekram Ahmed",
    company: "Founder of 3EKV",
    about:
      "A brand communications firm with a methodology to help technology organizations convey their differentiated role and relevance",
    url: "https://www.3ekv.com/",
  },
  {
    id: 11,
    title: "VC Panel",
    speaker: "Kinjal Shah and Yuan Han Li",
    company: "Blockchain Capital",
    about: "A leading venture firm in the blockchain industry",
    url: `https://blockchain.capital/`,
  },
  {
    id: 12,
    title: "Legals of Fundraising",
    speaker: "Natalya",
    company: "Humphreys Law",
    url: `https://humphreys.law/`,
    about: `A focused, full-service law firm advising clients in the technology and media sectors`,
  },
  {
    id: 13,
    title: "Fundraising",
    speaker: "Nicola Santoni",
    company: "Lemniscap",
    about:
      "Investment firm specialising in investments in emerging cryptoassets & blockchain startups",
    url: `https://lemniscap.com/`,
  },
  {
    id: 14,
    title: "Communications & Marketing",
    speaker: "CJ Huntzinger",
    company: "Galaxy Digital Ventures",
    about:
      "A digital asset and blockchain leader helping institutions, startups, and qualified individuals shape a changing economy",
    url: `https://www.galaxy.com/`,
  },
  {
    id: 15,
    title: "The Startup Method and Grants",
    speaker: "Anthony Beaumont",
    company: "Encode Club",
    about: `A web3 education community`,
    url: `https://www.encode.club/`,
  },
  {
    id: 16,
    title: "Design Workshop",
    speaker: "Matko",
    company: "Encode Club",
    about: `A web3 education community`,
    url: `https://www.encode.club/`,
  },
];

export const moreAboutMeData = [
  {
    id: 1,
    title: "Featured on Hashnode",
    text: `My first web3 article - Web3 For Beginners - was featured on Hashnode.`,
  },
  {
    id: 2,
    title: "Journalism Superstar NFT",
    text: `I received a "Journalism Superstar" NFT reward during "30 Days of Web3"`,
  },
  {
    id: 3,
    title: "Interviewed as Remote Work Expert",
    text: `I have been interviewed on Refinery29.com and CoWorker.com as an expert on working remotely`,
  },
  {
    id: 4,
    title: "Certificate of Merit (Computer Science)",
    text: `I received a Certificate of Merit for Computer Science at university`,
  },
  {
    id: 5,
    title: "SuperTutor Award",
    text: `I received a SuperTutor Award - Recognized for outstanding skills as an Online English Instructor`,
  },
  {
    id: 6,
    title: "Women's Campus Bursary Award",
    text: `I was the recipient of the "Women's Campus Bursary" during my final year at university - awarded to a woman on campus of high integrity and excellence.`,
  },
  {
    id: 7,
    title: "Advanced Scuba Diving Certification",
    text: `I completed my advanced PADI Scuba Diving Certification in the Phillipines in 2007`,
  },
  {
    id: 8,
    title: "Promoted to Head Teacher",
    text: `I was promoted to head teacher during my first year of teaching English in South Korea`,
  },
  {
    id: 9,
    title: "Graduated Summa Cum Laude",
    text: `I graduated my university degree "summa cum laude" - this is with highest honours.`,
  },
  {
    id: 10,
    title: "Stood on 7 Continents",
    text: `I achieved my dream of standing on 7 continents and I've lived on 6 of them - I have lived in South Africa, Canada, South Korea, Thailand, India, Australia, Ecuador and Peru.`,
  },
];

export const testimonialData = [
  {
    id: 1,
    avatar: matheusAvatar,
    name: "Matheus Pagani",
    company: "CEO, BFT Solutions",
    testimonial: `Congratulations @hayleyiscoding! You have 'mined' this NFT with true talent and enduring effort! Super deserved. You are 🔥`,
  },
  {
    id: 2,
    avatar: sallyAvatar,
    name: "Sally",
    company: "Founder, Bubble Blowers Swim School",
    testimonial:
      "Hayley did an amazing job with our website! She really captured the essence of what Bubble Blowers is all about. I was able to increase my student numbers dramatically after the website launch.",
  },
  {
    id: 3,
    avatar: austinAvatar,
    name: "Austin Griffith",
    company: "Founder, SpeedRunEthereum.com",
    testimonial:
      "Awesome work getting through the speed run!! Let me know how I can help along the way. Keep building and keep learning!",
  },
  {
    id: 4,
    avatar: camiAvatar,
    name: "Cami",
    company: "Head of DevRel, Fuel Network",
    testimonial: "👏👏👏👏 Proud of you!",
  },
  {
    id: 5,
    avatar: kristenAvatar,
    name: "Kristen",
    company: "Co-Founder, Women Build Web3",
    testimonial:
      "Hayley, holy smokes! This was such an awesome article to read... You've got yourself a new Hashnode subscriber :D",
  },
  {
    id: 6,
    avatar: matheusAvatar,
    name: "Matheus Pagani",
    company: "CEO, BFT Solutions",
    testimonial: `Congratulations @hayleyiscoding! You have 'mined' this NFT with true talent and enduring effort! Super deserved. You are 🔥.`,
  },
  {
    id: 7,
    avatar: sallyAvatar,
    name: "Sally",
    company: "Founder, Bubble Blowers Swim School",
    testimonial:
      "Hayley did an amazing job with our website! She really captured the essence of what Bubble Blowers is all about. I was able to increase my student numbers dramatically after the website launch.",
  },
  {
    id: 8,
    avatar: austinAvatar,
    name: "Austin Griffith",
    company: "Founder, SpeedRunEthereum.com",
    testimonial:
      "Awesome work getting through the speed run!! Let me know how I can help along the way. Keep building and keep learning!",
  },
];

export const processIcons = [
  {
    id: 1,
    icon: process1,
    name: "Definition",
  },
  {
    id: 2,
    icon: process2,
    name: "Design",
  },
  {
    id: 3,
    icon: process3,
    name: "Planning",
  },
  {
    id: 4,
    icon: process4,
    name: "Development",
  },
  {
    id: 5,
    icon: process5,
    name: "Deployment",
  },
];

export const strengths = [
  {
    id: 1,
    title: "Technical Ability",
    name: "Sujata Gunale",
    job: "Senior Engineer",
    quote: `I was checking your PR, and I tried it
    locally. Works like a charm. Fantastic work`,
    isOpen: true,
  },
  {
    id: 2,
    title: "Problem Solving",
    name: "Brandon Etter",
    job: "Senior Engineer",
    quote: `JSM Algorithm Challenge - First place. Custom test cases. Well
    commented and clear code. And not a single map, foreach or
    filter in sight.`,
  },
  {
    id: 3,
    title: "Communication",
    name: "Kamsi Obi",
    job: "Software Engineer",
    quote: `Special shoutout to Hayley & James for lighting up the
    masterclass with their outstanding performance and being a
    true inspiration to the entire cohort!`,
  },
  {
    id: 4,
    title: "Team Work",
    name: "Haiying Liao",
    job: "Software Engineer",
    quote: `Thank you, Hayley!! Yeah, we did all these together. What
    an amazing teammate you are!`,
  },
  {
    id: 5,
    title: "Dedication",
    name: "Adrian Hajdin",
    job: "Founder - JS Mastery",
    quote: `Example: Hayley is traveling to a different country - and
    she is working on her tasks even while at the airport and
    inbetween flights.`,
  },
];

export const headers = [
  { id: 1, phrase1: `Hi! I'm `, phrase2: "Hayley!", phrase3: "" },
  { id: 2, phrase1: `About `, phrase2: "Me", phrase3: "" },
  { id: 3, phrase1: `My `, phrase2: "Skills", phrase3: "" },
  { id: 4, phrase1: ``, phrase2: "Experience", phrase3: "" },
  { id: 5, phrase1: `Featured `, phrase2: "Projects", phrase3: "" },
  { id: 6, phrase1: ``, phrase2: "Testimonials", phrase3: "" },
  { id: 7, phrase1: `Morent - A `, phrase2: " Car Rental", phrase3: "Website" },
  { id: 8, phrase1: `Jobit - A Modern `, phrase2: " Job Board", phrase3: "" },
  {
    id: 9,
    phrase1: `AI Prompt - A Website for Sharing `,
    phrase2: "AI Prompts",
    phrase3: "",
  },
  {
    id: 10,
    phrase1: `The Crypto Revolution - A `,
    phrase2: "Crypto Crowdfunding",
    phrase3: "Website",
  },
  {
    id: 11,
    phrase1: `Bubble Blowers - A Colorful `,
    phrase2: "Swim School",
    phrase3: "Website",
  },
];

// {
//   id: 5,
//   name: "The Online CoWork Lottery",
//   type: "Web3",
//   about:
//     "I was given funding to build a blockchain start-up as part of the 3-month Women Build Web3 / Encode Club Accelerator program. I created a 'coworking lottery' for women who work online to raise funding for their online businesses. I presented this project on Dec 22nd, 2022.",
//   tech: "#Nextjs #Solidity #Hardhat #Ethers #AirtableAPI",
//   url: "https://kiddo-online-cowork-front-end.vercel.app/",
//   github: "https://github.com/hayleyiscoding/online-cowork-front-end",
//   image: onlineCoWorkLottery,
// },

// {
//   id: 4,
//   name: "Jobit",
//   slug: "ai-prompt-share",
//   title: "AIPrompt - An AI Prompt-Sharing Website",
//   type: "Web2",
//   about:
//     "A web application where users can share and discover artificial intelligence prompts from ChatGPT. I created it using Next.js - and used Next-Auth for user login, MongoDB for the database and Next.js's serverless backend ",
//   tech: "#Next.js #Next-Auth #MongoDB #Tailwind",
//   url: "https://ai-prompt-share-three.vercel.app/",
//   github: "https://github.com/hayleyiscoding/ai-prompt-share",
//   image: jobit,
//   cardImage: jobitCardImage,
// },

// {
//   id: 6,
//   name: "E-Commerce App",
//   type: "Web2",
//   about:
//     "The front-end of an online clothing store that I created to practice React hooks and logic. Users can add their item/s to the cart (which pops out as a sidebar), sort the items by one size or multiple sizes, and flip the images to see the back and front views of the clothing.",
//   tech: "#React",
//   url: "https://react-shopping-cart-azure.vercel.app/",
//   github: "https://github.com/hayleyiscoding/react-shopping-cart",
//   image: ecommerce,
// },
// {
//   id: 7,
//   name: "Coding Gravity Animation",
//   type: "Web2",
//   about:
//     "A fun animation that I created during my Javascript studies. In this animation, balls fall from the top of the viewport and bounce at the bottom of the viewport as if they are responding to gravity. I used the HTML Canvas element.",
//   tech: "#Javascript #HTMLCanvas",
//   url: "https://coding-gravity.vercel.app/",
//   github: "https://github.com/hayleyiscoding/coding-gravity",
//   image: gravity,
// },
