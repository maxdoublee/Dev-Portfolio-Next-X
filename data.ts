import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";
import { BsCircleFill } from "react-icons/bs";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { FaBrain } from 'react-icons/fa';
import { MdDeveloperBoard } from 'react-icons/md';  // Represents a developer board, which is relevant to circuits
import { FaMicrochip } from 'react-icons/fa';  // Represents a microchip, common in circuits
import { MdDeviceHub } from 'react-icons/md';  // Represents connectivity, applicable to PCBs or circuit designs
import { FaBatteryFull } from 'react-icons/fa';  // Represents a fully charged battery
import { FiWifi } from 'react-icons/fi'; // Example for a wireless symbol

export const services: Service[] = [
  {
    Icon: FaMicrochip,
    title: "Low-Power Triple Cascode Gain-Boosted OTA Design",
    about:
      "Designed and implemented a low-power triple cascode gain-boosted OTA in 250nm CMOS technology, achieving a DC gain of 90 dB, an output swing of 1.2V and a power consumption of 0.5 mW. Optimized biasing circuits and gain-boost stages to minimize power wastage while maintaining phase margin and stability. Developed for high-speed sample-and-hold circuits, meeting stringent performance requirements with a 250 MHz bandwidth.",
  },
  {
    Icon: MdDeviceHub,
    title: "Multi-Layer PCB Design and Testing for Safety-Critical Avionics Systems",
    about:
      "Engineered multi-layer PCBs for avionics stand-by systems. Utilized Altium to execute design tasks, including component selection, library management, layout optimization, and signal integrity analysis. Ensured compliance with industry standards such as MIL-STD-461 for electromagnetic interference (EMI) by implementing testing procedures and environmental stress screening (ESS). Demonstrated full lifecycle involvement, from conceptualization to testing, meeting the rigorous demands of safety-critical avionic systems.",
  },
  {
    Icon: FaBatteryFull,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperBoard,
    title: "Low-Pass FIR Filter with Pipelining and Parallel Processing",
    about: "Designed and implemented on FPGA 100-tap low-pass FIR filter in Verilog, achieving 0.2π-0.23π rad/sample transition and 80dB attenuation. Utilized pipelining and parallel processing (L=2, L=3) for latency optimization, with detailed analysis of quantization effects, frequency response, and power estimation",
  },
  {
    Icon: FaBrain,
    title: "MindRace: EEG-Driven Robotic Car Control",
    about:
      "Developed an embedded system integrating a NeuroSky EEG biosensor with Arduino and MSP432 µcontrollers using SPI, I2C, and UART protocols to enable mind-controlled navigation of a robotic car"
  },
  {
    Icon: FiWifi,
    title: "Robotic Arm Lead",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projects: IProject[] = [
  { 
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/covid.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    name: "Algorithm Visualizer",
    image_path: "/images/algoVisual.png",
    deployed_url: "https://visual-algorithm.web.app/",
    github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
    category: ["react"],
    description:
      "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
    key_techs: ["React", "firebase", "Framer Motion"],
  },

  {
    name: "Dev Talks",
    image_path: "/images/dev.jpg",
    deployed_url: "https://dev-talks.herokuapp.com/",
    github_url: "https://github.com/Dey-Sumit/Dev-talks",
    category: ["node", "mongo", "react"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },

  {
    name: "Realtime Chat App",
    image_path: "/images/chatapp.jpg",
    deployed_url: "https://sumit-chat.netlify.app/",
    github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
    category: ["node", "react"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },

  {
    name: "Tweeter Clone",
    image_path: "/images/tweetme.jpg",
    deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
    github_url: "https://github.com/Dey-Sumit/tweetme",
    category: ["django", "react"],
    description:
      "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
    key_techs: ["React", "Django", "Django REST API"],
  },

  {
    name: "Color Classification using tf.js",
    image_path: "/images/color.jpg",
    deployed_url: "!#",
    github_url: "https://github.com/Dey-Sumit/color-classification",
    category: ["express"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
  },
  {
    name: "YouTube using YouTube ",
    image_path: "/images/youtubeClone.png",
    deployed_url: "https://not-utube.web.app/",
    github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
    category: ["express"],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    key_techs: [
      "React",
      "Redux",
      "Firebase Auth",
      "YouTube API",
      "Sass",
      "Bootstrap",
    ],
  },
  {
    name: "Football App",
    image_path: "/images/football.png",
    deployed_url: "https://o-my-goal.web.app/",
    github_url: "https://github.com/Dey-Sumit/football-app",
    category: ["react"],
    description:
      "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
    key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  },
];
