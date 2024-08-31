"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";
// import { useTheme } from "@/context/theme-context";

export default function Experience() {
  // const { ref } = useSectionInView("Experience");
  // const { theme } = useTheme();

  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <SectionHeading>My experience</SectionHeading>
        <VerticalTimeline lineColor="">
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <a href={item.link}>
                <VerticalTimelineElement
                  contentStyle={{
                    background: "#f3f4f6",
                    boxShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    padding: "1.3rem 2rem",
                    visibility: "visible",
                    margin: 0,
                    marginBottom: "2.5rem",
                    marginInline: ".55rem",
                  }}
                  contentArrowStyle={{
                    visibility: "hidden",
                  }}
                  date={item.date}
                  icon={item.icon}
                  iconStyle={{
                    background:
                      "linear-gradient(to right top, #dbd7fb, #ebd7f4, #f5d9ec, #fadde6, #fbe2e3)",
                    fontSize: "1.5rem",
                    visibility: "visible",
                  }}
                  textClassName={`vertical-timeline-${item.position}`}
                  position={item.position}
                >
                  <h3 className="block font-semibold capitalize text-gray-700 ">
                    {item.title}
                  </h3>
                  <p className="font-normal !mt-0">{item.location}</p>
                  <p className=" text-gray-700">{item.description}</p>
                  {item.skills.map((value, index) => (
                    <span
                      key={index}
                      className="text-gray-700 rounded-xl py-1 px-2 mt-2  mr-2  gradient text-[12px] font-medium italic "
                    >
                      {value}
                    </span>
                  ))}
                </VerticalTimelineElement>
              </a>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </motion.div>
    </section>
  );
}
