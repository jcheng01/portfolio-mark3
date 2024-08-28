import React from "react";

import {
  SiTailwindcss,
  SiNodedotjs,
  SiNextdotjs,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiSass,
} from "react-icons/si";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export const skillIcons = [
  React.createElement(SiHtml5),
  React.createElement(SiCss3),
  React.createElement(SiSass),
  React.createElement(SiJavascript),
  React.createElement(SiTypescript),
  React.createElement(SiNodedotjs),
  React.createElement(SiMongodb),
  React.createElement(SiReact),
  React.createElement(SiNextdotjs),
  React.createElement(SiTailwindcss),
  React.createElement(SiTailwindcss),
  //   <SiHtml5 size={30} color="#E34F26" />
  //   <SiCss3 size={30} color="#1572B6" />
  //   <SiJavascript size={30} color="#f7df1e" />
  //   <SiTypescript size={30} color="#3178C6" />
  //   <SiNodedotjs size={30} color="#6cc24a" />
  //   <SiMongodb size={30} color="#4DB33D" />
  //   <SiReact size={30} color="#61DAFB" />
  //   <SiNextdotjs size={30} color="#000000" />
  //   <SiTailwindcss size={30} color="#06B6D4" />
  //   <SiSass size={30} color="#CC6699" />
];

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
