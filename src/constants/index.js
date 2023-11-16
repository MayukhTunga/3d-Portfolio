import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Machine Learning",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  
  ];
  
  const experiences = [
    {
      title: "First Experience",
      company_name: "",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Middle of 2017 - End of 2019",
      points: [
        "Learnt Basic HTML,CSS and Javascript.",
        "Focused mainly on HTML and learning the basic structure of a website.",
        "Built Basic form websites to collect data.",
        "Built websites using tools such as Shopify and wordpress",
      ],
    },
    {
      title: "Learning ML",
      company_name: "",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Middle of 2022 - End of 2022",
      points: [
        "Delved into the world of Machine learning for the first time.",
        "Learnt and used tensorflow.",
        "Created a ML application that can read human numbers and convert it into digital text.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "",
      icon: shopify,
      iconBg: "#383E56",
      date: "November 2022 - Febuary 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Used tools such as Figma to create designs.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "May 2023 - Present",
      points: [
        "Developing web applications using React.js and other related technologies.",
        "Learnt and used back-end structures such as Node.js.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Learning and implementing Three.js in order to implement 3d structures.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Tab Saver",
      description:
        "A Simple web based extension allowing us to save the URl of any website or page we might be visiting.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/MayukhTunga/Leads-Tracker-extension-",
    },
    {
      name: "Pet Sales",
      description:
        "Web portal for Pet adoption providing all necessary details for adoptors.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
        {
          name: "My SQL",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };