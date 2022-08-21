/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Oliver Nguyen",
  title: "Hi all, I'm Oliver Nguyen",
  subTitle: emoji(
    "I'm a Senior iOS Developer with nine years of experience (Swift and Objective-C), had uploaded more than 50 applications on AppStore."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1YcAXvuwwI-5At8v_ohmSSkva1UUHbPUL/edit?usp=sharing&ouid=101898280701084812781&rtpof=true&sd=true", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/oliver-anh-nguyen",
  linkedin: "https://www.linkedin.com/in/oliver-anh-nguyen1990/",
  gmail: "oliver.anh.nguyen@gmail.com",
  medium: "https://medium.com/@oliver-nguyen",
  stackoverflow: "https://stackoverflow.com/users/10804130/oliver-nguyen",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DEVELOP SOFTWARE, COLLABORATE WITH OTHERS AND LEARN NEW THINGS EVERY DAY",
  skills: [
    emoji(
      "⚡ Self-motivated, be honest and responsible"
    ),
    emoji("⚡ Experienced with source version control Git and optimizing performance for app"),
    emoji(
      "⚡ A constant learner who is eager to explore and share new things, to be challenged, even by unfamiliar technologies."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Maharishi International University",
      logo: require("./assets/images/miu.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "April 2022 - Now",
      desc: "Iowa - USA"
    },
    {
      schoolName: "HCMC University Of Education",
      logo: require("./assets/images/pedagogy.jpeg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2008 - August 2012",
      desc: "Ho Chi Minh - VietNam"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Swift", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Objective-C", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Flutter",
      progressPercentage: "50%"
    },
    {
      Stack: "Java",
      progressPercentage: "50%"
    },
    {
      Stack: "Nodejs",
      progressPercentage: "50%"
    },
    {
      Stack: "Angular - MongoDB",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer ||",
      company: "ZaloPay",
      companylogo: require("./assets/images/zalopay.png"),
      date: "October 2018 – April 2022",
      desc: "A fintech product to revolutionize the way Vietnamese using money.",
      descBullets: [
        "Develop features in native iOS applications based on feature specifications and technical designs",
        "Mentor and coach junior team members",
        "Participate in code reviews"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Zalo Group",
      companylogo: require("./assets/images/zalo.png"),
      date: "May 2017 – Mar 2018",
      desc: "Zalo is a free message and call application on mobile and desktop",
      descBullets: [
          "Responsible for designing, developing and optimizing products Zing TV & Báo Mới on the iOS platform",
          "Maintain the existing application and create sophisticated solutions to complex technical problems"
      ]
    },
    {
      role: "Software Engineer",
      company: "VNG Corporation",
      companylogo: require("./assets/images/vng.png"),
      date: "Jan 2013 – Jun 2016",
      desc: "A technology company, online entertainment, social networking, and e-commerce.",
      descBullets: [
        "Build advertising SDK integrate Admob, Facebook Ads, Inmobi using Objective-C",
        "Build application, games for Game Center on Zalo using Objective-C",
        "Building company's applications with Objective-C language"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/zalo.png"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "TensorFlow Developer Certificate",
      subtitle:
        "Completed Certifcation from TensorFlow Certificate Program (Google).",
      image: require("./assets/images/tensor-flow.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credential.net/587350a3-6d11-418f-b603-f28c30bea22c#gs.9nh3ud"
        }
      ]
    },
    {
      title: "Problem Solving (Basic) Certificate",
      subtitle:
        "Completed Certifcation from HackerRank for Problem Solving (Basic).",
      image: require("./assets/images/hackker-rank.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.hackerrank.com/certificates/4252ac4ce242"
        }
      ]
    },

    {
      title: "IELTS Academic (6.0)",
      subtitle: "IELTS is the world's most popular English language test for higher education and global migration.",
      image: require("./assets/images/idp-ielts.jpg"),
      footerLink: [
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "oliver.anh.nguyen@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
