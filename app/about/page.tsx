"use client";
import Link from "next/link";
import { pageAnimation } from "../../animation";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="flex w-full justify-center"
    >
      <div className=" w-[1024px] justify-left p-6 ">
        <div className="w-96 text-xl mt-4">
          <p className="paragrahB text-xl">
            Capturing life's essence through the lens is not just my passion;
            it's my purpose. With a keen eye for detail and a heart fueled by
            creativity, I strive to immortalize fleeting moments into timeless
            memories.
          </p>
          <p className="paragrahB text-sm">
            Whether it's documenting love stories, capturing candid moments, or
            unveiling the beauty of everyday life, I approach each project with
            dedication and a genuine desire to exceed expectations.
          </p>
          <div className="w-full flex mt-6">
            <div className="w-1/2">
              <h1 className="text-lg">Services</h1>
              <ul className="text-sm mt-1">
                <Link className=" hoverOpacity" href="/work/portrait">
                  <li>Portrait</li>
                </Link>
                <Link className="pt-1 hoverOpacity" href="/work/portrait">
                  <li>Fashion</li>
                </Link>
                <Link className="pt-1 hoverOpacity" href="/work/portrait">
                  <li>Individual</li>
                </Link>
                <Link className="pt-1 hoverOpacity" href="/work/portrait">
                  <li>Events</li>
                </Link>
                <Link className="pt-1 hoverOpacity" href="/work/portrait">
                  <li>Urban</li>
                </Link>
                <Link className="pt-1 hoverOpacity" href="/work/portrait">
                  <li>Studio</li>
                </Link>
              </ul>
            </div>
            <div className="w-1/2">
              <h1 className="text-lg">Clients</h1>
              <ul className="text-sm mt-4">
                <li>Client 1</li>
                <li>Client 2</li>
                <li>Client 3</li>
                <li>Client 4</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
