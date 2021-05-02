import { AiOutlineApi, AiOutlineDesktop } from "react-icons/ai";
import { HiOutlineDatabase } from "react-icons/hi";
import { FaCheckCircle } from "react-icons/fa";
import { FiFigma } from 'react-icons/fi'


export const services = [
  {
    title: "Frontend Development",
    description:
      "I can build stunning SPA with <strong>React</strong> and <strong>Next js</strong>.I can use <strong>Bootstrap</strong> and <strong><strong>Next js</strong></strong>.",
    Icon: AiOutlineDesktop,
  },
  {
    title: "Backend Development",
    description:
      "I can work with <strong>Nodejs</strong>, <strong>Express</strong> and <strong>MongoDB</strong> Database",
    Icon: HiOutlineDatabase,
  },
  {
    title: "API Development",
    description:
      "I can build <strong>RestFull API</strong> with Nodejs and Express including support of <strong>Authentication</strong>.",
    Icon: AiOutlineApi,
  },
  {
    title: "UI / UX Development",
    description:
      "I have skills on <strong>UI/UX</strong> design. I can work with Adobe XD, Figma, Illustrator template.",
    Icon: FiFigma,
  },
  {
    title: "API Development",
    description:
      "I can build RestFull API with Nodejs and Express including support of Authentication.",
    Icon: AiOutlineApi,
  },
  {
    title: "API Development",
    description:
      "I can build RestFull API with Nodejs and Express including support of Authentication.",
    Icon: AiOutlineApi,
  },
];

export const skills = [
  {
    Icon: FaCheckCircle,
    name: "HTML",
    level: "99%",
  },
  {
    Icon: FaCheckCircle,
    name: "CSS",
    level: "80%",
  },
  {
    Icon: FaCheckCircle,
    name: "JavaScript",
    level: "78%",
  },
  {
    Icon: FaCheckCircle,
    name: "React",
    level: "85%",
  },
  {
    Icon: FaCheckCircle,
    name: "Node",
    level: "65%",
  },
  {
    Icon: FaCheckCircle,
    name: "MongoDB",
    level: "75%",
  },
  {
    Icon: FaCheckCircle,
    name: "Bootstrap",
    level: "95%",
  },
  {
    Icon: FaCheckCircle,
    name: "TailwindCSS",
    level: "95%",
  },
];
export const tools = [
  {
    Icon: FaCheckCircle,
    name: "VS Code",
    level: "90%",
  },
  {
    Icon: FaCheckCircle,
    name: "Figma",
    level: "70%",
  },
  {
    Icon: FaCheckCircle,
    name: "Adobe XD",
    level: "78%",
  },
  {
    Icon: FaCheckCircle,
    name: "Adobe Illustrator",
    level: "60%",
  },
  {
    Icon: FaCheckCircle,
    name: "Adobe Photoshop",
    level: "65%",
  },
];

export const projects = [
  {
    name: "boighor",
    category: "e-commerce",
    image_path: "https://i.imgur.com/2bmr9lcm.jpg",
    deployed_url: "https://boighor-fullstack-bookshop.netlify.app/",
    description: [
      "Online bookshop using React, Express and MongoDB",
      "Protected with firebase Authentication system",
      "User can buy book and can see his order in the Dashboard",
      "Admin can manage shop can add Books or remove",
      "All data will be saved in MongoDB database",
    ],
    github_url: [
      "https://github.com/rojon038/boiGhor-client",
      "https://github.com/rojon038/boiGhor-server",
    ],
  },
  {
    name: "homeTutor",
    category: "e-services",
    image_path: "https://i.imgur.com/wlq5ydRm.jpg",
    deployed_url: "https://hometutor.netlify.app/",
    description: [
      "Online service sell using React, Express and MongoDB",
      "Protected with firebase Authentication system",
      "User can order services and can track his order in the Dashboard",
      "Admin can manage services can add or remove",
      "Admin can see orders who made and can change its status",
      "All data will be saved in MongoDB database",
      "There is a scalable API is made with Express and Node"
    ],
    github_url: [
      "https://github.com/rojon038/homeTutor-client",
      "https://github.com/rojon038/homeTutor-server",
    ],
  },
  {
    name: "safeRide",
    category: "ride service",
    image_path: "https://i.imgur.com/UsBgoB9m.jpg",
    deployed_url: "https://react-auth-rojon038.netlify.app/",
    description: [
      "Online ride service using React and Firebase",
      "Protected with firebase Authentication system",
      "User can search ride and can see fare based on vehicle",
      "MapBox API is implemented",
    ],
    github_url: [
      "https://github.com/rojon038/safe-ride",
    ],
  },
  {
    name: "league-hunt",
    category: "league-tracking",
    image_path: "https://i.imgur.com/8SBqJb2m.jpg",
    deployed_url: "http://league-react-router.netlify.app/",
    description: [
      "League tracking website using React",
      "Mostly focused on React Router",
      "Raw CSS design without help of any frameworks",
      "Fully Responsive"
    ],
    github_url: [
      "https://github.com/rojon038/leauge-hunt",
    ],
  },
];

export const blogs = [
    {
        title: '10 things you should know about React',
        description: 'Here are some feature that you should know and use in React.',
        image_path: 'https://reactjs.org/logo-og.png'
    },
    {
        title: '3 ways to deploy in Netlify',
        description: 'After this tutorial you don\'t have to worry about deploy again.',
        image_path: 'https://www.netlify.com/img/global/meta-image.jpg'
    },
    {
        title: 'Setup env variable in Heroku and Netlify',
        description: 'For security reason you will know how to use env and in production also.',
        image_path: 'https://miro.medium.com/max/3280/1*tzWXBtmGms1wGIt-ApMZzg.jpeg'
    },
    {
        title: '15 CSS you probably didn\'t know',
        description: 'We use lots of CSS but this are gonna amaze you.',
        image_path: 'https://webtopic.com/wp-content/uploads/2020/03/Top-15-CSS-Books-1170x508.jpg'
    }
]
