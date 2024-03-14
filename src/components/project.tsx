import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";
import Link from "next/link";
export default function Projects() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion defaultExpandedKeys={["2"]}>
      
      <AccordionItem
        key="1"
        aria-label="project1"
        subtitle="ExpressJS, MongoDB, Google Cloud"
        title="Wave: Social Media Application"
      >

        <div>
            <div className="links mb-2">
            <Link href = "https://www.github.com" className="underline pr-4">Github</Link>
            <Link href = "https://www.github.com"  className="underline pr-4">Live Demo</Link>
            </div>
            <p>web-based social media platform tailored for college students. This
        involved architecting the application and building server-side
        functionality to handle user authentication, create posts, manage
        college, user management</p>
        </div>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="project2"
        subtitle="ExpressJS, MongoDB, Google Cloud"
        title="Wave: Social Media Application"
      >

        <div>
            <div className="links mb-2">
            <Link href = "https://www.github.com" className="underline pr-4">Github</Link>
            <Link href = "https://www.github.com"  className="underline pr-4">Live Demo</Link>
            </div>
            <p>web-based social media platform tailored for college students. This
        involved architecting the application and building server-side
        functionality to handle user authentication, create posts, manage
        college, user management</p>
        </div>
      </AccordionItem>
    </Accordion>
  );
}
