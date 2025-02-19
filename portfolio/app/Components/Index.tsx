'use client'
import { AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
import Image from "next/image";

import React,{ useState }  from "react";
import Navbar from './Navbar';

function Index() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section className="flex flex-col w-screen h-screen p-2 md:p-6  space-y-10 lg:space-y-20 items-center tracking-tighter">
      <nav className="w-full flex flex-row justify-between p-3 font-medium text-lg sticky top-0 z-10 backdrop-blur-md bg-white/30 ">
        <div className=" "> 
          <h1>Sanele Ncube</h1>
        </div>
        <div>
        <Menu
              className={`cursor-pointer ${isOpen ? "hidden" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
            />
            <X
              className={`cursor-pointer ${isOpen ? "" : "hidden"}`}
              onClick={() => setIsOpen(!isOpen)}
            />
        </div>
      </nav>
      <AnimatePresence mode="wait">
          {isOpen ? <Navbar /> : null}
        </AnimatePresence>
    
      <div className="flex flex-col lg:flex-row justify-items-center items-center space-y-6">
      <div className="w-full lg:place-content-center lg:justify-items-center h-1/2 ">
      <Image
      src={"https://i.ibb.co/6cRtF4Dr/Screenshot-2025-02-19-105104.png"}
      width={400}
      height={400}
      alt="Hero-Self-image"
      className="rounded-full object-fill h-full max-w-[40%] lg:max-w-[60%] 2xl:max-w-[40%]"
    />
      </div>
      <div className="flex flex-col space-y-6 font-medium lg:p-4 xl:p-10 ">
      
         <h2 className="text-[54px] xl:text-[65px] font-interTight text-wrap whitespace-normal tracking-tighter flex flex-col p-0 leading-[0.85] md:hidden">
      <span className="block">Business</span>
      <span className="block">Analyst</span>
    </h2>
    <h2 className="text-[44px] xl:text-[75px]  font-interTight text-wrap whitespace-normal word-spacing-tight tracking-tighter md:flex flex-col p-0 space-y-0 hidden " >
    Business Analyst </h2>
      <p className="md:text-md "> Leveraging automation, data analytics, and business intelligence to streamline processes, reduce inefficiencies, and drive smarter decision-making. Passionate about transforming complex workflows into seamless, scalable solutions that enhance productivity and business growth.
      </p>
      <p>Exploring the intersection of RPA, business intelligence, and cybersecurity to create innovative, secure, and scalable solutions.</p>

      <a href="mailto:masanzawayne@gmail.com?subject=Let's Connect&body=Hi sanele,I'd like to discuss opportunities/collaboration"
      className="text-white bg-neutral-950 rounded-full p-3 w-fit items-center flex flex-row space-x-3 text-md"
      >
      <p>masanzawayne@gmail.com</p>
      <Mail className="stroke-white "/>
      </a>
      </div>
      </div>
    </section>
  );
}

export default Index;
