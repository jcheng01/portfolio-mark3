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
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
export const skillsData = [
  React.createElement(SiHtml5, { size: 22, color: "#E34F26" }),
  React.createElement(SiCss3, { size: 22, color: "#1572B6" }),
  React.createElement(SiSass, { size: 22, color: "#CC6699" }),
  React.createElement(SiJavascript, { size: 22, color: "#f7df1e" }),
  React.createElement(SiTypescript, { size: 22, color: "#3178C6" }),
  React.createElement(SiNodedotjs, { size: 22, color: "#6cc24a" }),
  React.createElement(SiMongodb, { size: 22, color: "#4DB33D" }),
  React.createElement(SiReact, { size: 22, color: "#61DAFB" }),
  React.createElement(SiNextdotjs, { size: 22, color: "#000000" }),
  React.createElement(SiTailwindcss, { size: 22, color: "#06B6D4" }),
  React.createElement(SiHtml5, { size: 22, color: "#E34F26" }),
  React.createElement(SiCss3, { size: 22, color: "#1572B6" }),
  React.createElement(SiSass, { size: 22, color: "#CC6699" }),
  React.createElement(SiJavascript, { size: 22, color: "#f7df1e" }),
  React.createElement(SiTypescript, { size: 22, color: "#3178C6" }),
  React.createElement(SiNodedotjs, { size: 22, color: "#6cc24a" }),
  React.createElement(SiMongodb, { size: 22, color: "#4DB33D" }),
  React.createElement(SiReact, { size: 22, color: "#61DAFB" }),
  React.createElement(SiNextdotjs, { size: 22, color: "#000000" }),
  React.createElement(SiTailwindcss, { size: 22, color: "#06B6D4" }),
];

import mark2 from "@/public/mark2.png";
import mark1 from "@/public/mark1.png";
import ecommerceapp from "@/public/ecommerceapp.png";
import hangman from "@/public/hangman.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Creative Technology Developer - OUTFRONT Media",
    location: "New York, NY",
    description:
      "Worked with creative development team to implement designs into real products to be shipped onto NYC MTA transit ad displays.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - Aug 2023",
    link: "https://www.outfront.com/",
    position: "left",
    skills: ["React.js", "JavaScript", "HTML & SCSS"],
  },
  {
    title: "Student Technology Consultant - Syracuse University iSchool",
    location: "Syracuse, NY",
    description:
      "Assisted senior IT department staff in resolving daily work tickets through Jira.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2024",
    link: "https://ischool.syr.edu/",
    position: "right",
    skills: ["Jira", "Microsoft Excel"],
  },
  {
    title: "Syracuse University Graduate",
    location: "Syracuse, NY",
    description:
      "I graduated with a B.S in Information Management & Technology. GPA: 3.7/4.0",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
    link: "https://www.syracuse.edu/",
    position: "left",
    skills: [],
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio Mark 2",
    description:
      "Second iteration of personal website demonstrating responsive styling using media queries and modern CSS. Implemented React libary to handle shared logic within component tree.",
    tags: ["React.js", "Next.js", "SCSS", "JavaScript"],
    date: "Spring 2023",
    imageUrl: mark2,
    url: "https://justin-cheng-mark2.vercel.app/",
  },

  {
    title: "Ecommerce App",
    description:
      "Ecommerce site built using MERN stack. Authentication middleware utilizing Express.js routing. Purchase functionality through Stripe API. Node.js and Express.js to host backend requests on MongoDB.",
    tags: ["React,js", "Node.js", "Express.js", "MongoDB"],
    date: "Fall 2023",
    imageUrl: ecommerceapp,
    url: "https://github.com/jcheng01/ecommerceApp",
  },
  {
    title: "Hangman Game",
    description:
      "Integrated Typescript support with React state management to build a classic childrens game. Implemented type-safe user inputs when working with JavaScript event listeners to reduce page errors.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: hangman,
    url: "https://jcheng01.github.io/hangman-game/",
  },
  {
    title: "Portfolio Mark 1",
    description:
      "First interaction of my personal Website created with raw HTML/SCSS JavaScript. Implemented my own webpack to compile JS. Fun self- project to work on responsive UI.",
    tags: ["React,js", "Node.js", "Express.js", "MongoDB"],
    date: "Fall 2023",
    imageUrl: mark1,
    url: "https://justincheng2.netlify.app/",
  },
] as const;
