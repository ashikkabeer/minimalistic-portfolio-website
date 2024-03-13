"use client";
import Projects from "@/components/project";
import { NextUIProvider } from "@nextui-org/react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Skills } from "@/components/skill";
import Link from "next/link";
import ModeToggle from "@/components/darkmode";
export default function Home() {
  return (
    <div className="light:light-bg ">
      <NextUIProvider>
        <div className="center flex justify-center">
          <div className={"w-screen md:w-screen xl:w-2/5 p-5 pt-10"}>
            <div className="header items-center flex justify-between">
              <div className="my-11 flex overscroll-x-contain">
                <Image
                  className="rounded-full"
                  src={"/profile.jpg"}
                  width={50}
                  height={50}
                  alt="ashikkabeer picture"
                />
                <div className="px-3">
                  <p className="text-2xl font-semibold ">Ashik Kabeer</p>
                  <p className="text-sm">Software Engineer</p>
                </div>
              </div>
              <div className="">
                <ModeToggle />
              </div>
            </div>
            <div className="flex my-5 justify-center description text-md">
              <p>
                Building the backbone of web experiences is my forte. I focus on
                creating robust and efficient software that seamlessly powers
                the digital realm. My goal is to craft backend solutions that
                are not only functional but also enhance the overall user
                experience.<br></br>
                <br></br>Fueled by a passion for learning, I`m always exploring
                new skills, with a current interest in TypeScript and NestJS. Just
                as I experiment GoLang, I enjoy pushing
                the boundaries to bring innovation to the core of backend
                development. Join me in constructing the solid foundations that
                drive delightful web functionalities.
              </p>
            </div>

            <div className="links flex col-span-2 flex-wrap my-10">
              <Link href={"https://www.twitter.com/ashikkabeer"}>
                <div className="flex whitespace-nowrap pr-4 underline flex-row">
                  <ArrowUpRight /> follow me on twitter
                </div>
              </Link>
              <Link href={"https://www.github.com/ashikkabeer"}>
                {" "}
                <div className="flex whitespace-nowrap  pr-4 underline flex-row">
                  <ArrowUpRight /> collaborate on github
                </div>
              </Link>
              <Link href={"https://www.linkedin.com/in/ashik-kabeer"}>
                <div className="flex whitespace-nowrap  pr-4 underline flex-row">
                  <ArrowUpRight /> connect on linkedIn
                </div>
              </Link>
              <Link href={"https://ashikkabeer.hashnode.dev/"}>
                <div className="flex whitespace-nowrap  pr-4 underline flex-row">
                  <ArrowUpRight /> read my writings
                </div>
              </Link>
            </div>

            <div className="skills">
              <Skills />
            </div>
            <div className=" my-10 projects">
              <p className="text-sm font-medium leading-none">Projects</p>
              <Projects />
            </div>
          </div>
        </div>
      </NextUIProvider>
    </div>
  );
}
