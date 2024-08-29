"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
// import { useSectionInView } from "@/lib/hooks";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function About() {
  //   const { ref } = useSectionInView("About");

  return (
    <section
      //   ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div
        id="skills"
        //   ref={ref}
        className="max-w-[53rem] scroll-mt-28 text-center px-6 whitespace-nowrap relative sm:mb-10 xtsm logos"
      >
        <ul className="flex flex-row justify-center gap-2 text-lg text-gray-800 logos-slide">
          {skillsData.map((skill, index) => (
            <motion.li
              className="bg-white borderBlack rounded-xl px-5 py-3 border border-black/10"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>

      <p className="mb-3">
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React.js, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Express. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and beeing with family. I also enjoy{" "}
        <span className="font-medium">
          keeping up with the new updates and dev tools within development
        </span>
        .
      </p>
    </section>
  );
}
