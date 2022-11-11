/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";

// Your Summary And Greeting Section

const greeting = {
  username: "",
  title: "Hi all, I'm Sean",
  subTitle: emoji(
    "Backend Engineer 👨‍💻 | Devops Practioner 👷 | AI Enthusiast "
  ),
  resumeLink:
    "",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/codak77",
  linkedin: "https://www.linkedin.com/in/sean-stevens-811495221/",
  gmail: "seanchi77@gmail.com",
  facebook: "",
  twitter: "",
};

// Your Skills Section

const skillsSection = {
  title: "",
  subTitle:
    "",
  skills: [
    // emoji(
    //   "⚡ Designing and developing Test Automation frameworks using Python and Java"
    // ),
    // emoji("⚡ End to End automation executions"),
    // emoji(
    //   "⚡ Working on test automation tools like Selenium, Appium, UFT, SoapUI, AutoIT, Katalon Studio, Seetest Mobile Cloud administration, etc"
    // ),
    // emoji(
    //   "⚡ Building predictive models to extract insights and make decisions out of data"
    // ),
  ],

  softwareSkills: [
    {
      skillName: "Javascript",
      classname: "logos:javascript",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Python",
      classname: "logos:python",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Typescript",
      classname: "logos:typescript-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "ReactJS",
      classname: "simple-icons:react",
      style: {
        color: "#61DAFB",
      },
    },
    {
      skillName: "NodeJS",
      classname: "logos:nodejs-icon",
      style: {
        backgroundColor: "transparent",
        //color: "#D00000",
      },
    },
    {
      skillName: "Django",
      classname: "logos:django-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Laravel",
      classname: "logos:laravel",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "MongoDB",
      classname: "logos:mongodb-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "MySQL",
      classname: "logos:mysql-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Postgres",
      classname: "logos:postgresql",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Postman",
      classname: "logos:postman-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Git",
      classname: "logos:git-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Netlify",
      classname: "logos:netlify",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Heroku",
      classname: "logos:heroku-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Linux",
      classname: "logos:linux-tux",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Jenkins",
      classname: "vscode-icons:file-type-jenkins",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Nginx",
      classname: "logos:nginx",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Docker",
      classname: "logos:docker-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Kubernetes",
      classname: "logos:kubernetes",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Ansible",
      classname: "logos:ansible",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Terraform",
      classname: "logos:terraform-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Selenium",
      classname: "logos:selenium",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Azure",
      classname: "logos:microsoft-azure",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "AWS",
      classname: "logos:aws",
      style: {
        backgroundColor: "transparent",
      },
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
  display: true, // Set false to hide this section, defaults to true
};

// Your certifications

const certifications = {
  certifications: [
    {
      title: "Selenium",
      subtitle: "- Vskills",
      logo_path: "vskills-logo.png",
      certificate_link:
        "",
      alt_name: "Vskills",
      color_code: "#F6EAEA",
    },
    {
      title: "Azure C-100",
      subtitle: "- Microsoft",
      logo_path: "seetest-logo.png",
      certificate_link:
        "",
      alt_name: "Experitest",
      color_code: "#F0FFDD",
    },
    {
      title: "Python",
      subtitle: "- NIIT",
      logo_path: "pierian-data-logo.png",
      certificate_link:
        "",
      alt_name: "Pierian-Data",
      color_code: "#FEF6E6",
    },
    {
      title: "Javascript",
      subtitle: "- NIIT",
      logo_path: "rahulshettyacademy-logo.png",
      certificate_link:
        "",
      alt_name: "RahulShettyAcademy",
      color_code: "#FDE9EA",
    },
    // {
    //   title: "Data Science",
    //   subtitle: "- IBM",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/893f2210f39f5a60d0463b19b469b808",
    //   alt_name: "IBM",
    //   color_code: "#E3F1FA",
    // },
    // {
    //   title: "ML and DS",
    //   subtitle: "- Andrei Neagoie",
    //   logo_path: "zero-to-mastery.png",
    //   certificate_link:
    //     "https://www.udemy.com/certificate/UC-fd118b7d-7436-442c-a7f8-5077c432d596/",
    //   alt_name: "Zero To Mastery",
    //   color_code: "#FFFDDD",
    // },
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "",
      title: "",
      description:
        "",
    },
    {
      url:
        "",
      title: "",
      description:
        "",
    },
    {
      url:
        "",
      title: "",
      description:
        "",
    },
    {
      url:
        "",
      title: "",
      description:
        "",
    },
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+234 901 4610 880",
  email_address: "seanchi77@gmail.com",
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  openSource,
  blogSection,
  contactInfo,
  certifications,
};
