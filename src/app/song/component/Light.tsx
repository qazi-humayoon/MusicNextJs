"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

function Light() {
  return (
    <LampContainer className="pt-16">
    <motion.h1
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="mt-10 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl text-purple-200"
    >
      To See my Work<br /> Check my Github <br />
      <a className=" text-blue-400 border rounded-xl text-2xl p-1 hover:bg-white transition-colors 3s" href="https://github.com/qazi-humayoon" target="_blank">Click Here</a>
    </motion.h1>
  </LampContainer>
  )
}

export default Light