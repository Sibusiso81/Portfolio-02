import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
function Navbar() {
    const children ={
        hidden:{
            clipPath:'polygon(0% 100%,100% 100% ,100% 100%, 0% 100%)',
        },
        show:(i:number)=>({
            clipPath:'polygon(0% 0%,100% 0%,100% 100%, 0% 100%)',
            transition:{
                ease:[0.110,0.325,0.160,0.95],
                delay:Math.random()*(i/50),
                duration:0.6,
            }
        }),
        exit:(i:number)=>({
            clipPath:'polygon(0% 100%, 100% 100%,100% 100%, 0% 100%)',
           transition:{
            ease: [0.645, 0.045, 0.355, 0.8],
            delay:Math.random()* (i/50),
            duration:0.6,
           }
        })
    }
    const navLink={
        hidden:{
            y:'100%',
        },
        show:{
            y:0,
            transition:{
                ease:'easeOut',
                delay:0.2,
                duration:0.4,
            }
        },
        exit:{
            y:'100%',
            transition:{
                ease:'easeOut',
                delay:0.02,
                duration:0.3,
            }
        }

    }
  return (
    <div className="w-screen h-screen overflow-hidden fixed inset-0 font-mono">
      <div className="w-full h-full grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 grid-rows-1 gap-0">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((_, i) => (
          <motion.div 
          key={i} 
          className="w-full h-full bg-[#EDEDF4]"
          variants={children}
          initial='hidden'
          animate='show'
          exit='exit'
          custom={i}
          >
            {" "}
          </motion.div>
        ))}
      </div>
      <section className="w-full h-full absolute inset-0 flex justify-center items-center z-30 p-1 font-dmsans">
        <ul className="w-[1000px] leading-none space-y-2">
          <li className="overflow-hidden text-neutral-900">
          <motion.div variants={navLink} initial='hidden' animate='show' exit='exit' className=" p-1">
              <Link href={'/'} className="text-[40px] md:text-[60px]  h-fit p-1 ">
              Home
              </Link>
            </motion.div>
            </li>
            <li className="overflow-hidden">
           
          </li>
          
          
          <li className="overflow-hidden">
            <motion.div variants={navLink} initial='hidden' animate='show' exit='exit' className=" p-1">
              <Link href={'https://www.linkedin.com/in/sanele-ncube-823221236/'} className="text-[40px] md:text-[60px]  h-fit p-1">
                Linkedin
              </Link>
            </motion.div>
          </li>
          <li className="overflow-hidden">
            <motion.div variants={navLink} initial='hidden' animate='show' exit='exit' className=" p-1">
              <Link href={'/Contact'} className="text-[40px] md:text-[60px]  h-fit p-1">
              Contact
              </Link>
            </motion.div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Navbar;