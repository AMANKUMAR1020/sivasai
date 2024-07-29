"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
const navigationImage = require('../../../public/navigationImage.png');


export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex fixed top-10 inset-x-0 w-auto mx-auto place-items-center justify-between p-1 m-1 font-medium bg-slate-50 border-none shadow-md rounded-2xl shadow-indigo-400 z-[5000] pr-2 pl-8 py-2",
          className
        )}
      >
        <div className=" flex">NAVBAR</div>

        <div className=" flex justify-between">
          {navItems.map((navItem: any, idx: number) => (
            <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn("relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500")}
            >
              <span className="hidden sm:block text-sm p-1">{navItem.icon}</span>
              <span className="hidden sm:block text-sm p-1">{navItem.name}</span>
            </Link>
          ))}
        </div>

        <div className="hidden sm:block text-sm">
          <button className="">
            <span className="border text-sm font-medium text-indigo-400 py-2 px-3 border border-blue-700 rounded ">Login</span>
          </button>
          <button className="px-4 py-2">
            <span className="text-sm font-medium px-4 py-2 text-white py-2 px-3 border bg-indigo-700 rounded">Signin</span>
          </button>
        </div>
        <div className=" min-[620px]:hidden flex text-sm font-medium text-indigo-400">
          <button className="px-4 py-2"> 
            <Image
              src={navigationImage}
              alt="naviagte"
              className="dark:invert"
              width={20}
              height={20}
              priority
            />
</button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
















// "use client";
// import React, { useState } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useMotionValueEvent,
// } from "framer-motion";
// import { cn } from "@/lib/utils";
// import Link from "next/link";

// export const FloatingNav = ({
//   navItems,
//   className,
// }: {
//   navItems: {
//     name: string;
//     link: string;
//     icon?: JSX.Element;
//   }[];
//   className?: string;
// }) => {
//   const { scrollYProgress } = useScroll();

//   const [visible, setVisible] = useState(false);

//   useMotionValueEvent(scrollYProgress, "change", (current) => {
//     // Check if current is not undefined and is a number
//     if (typeof current === "number") {
//       let direction = current! - scrollYProgress.getPrevious()!;

//       if (scrollYProgress.get() < 0.05) {
//         setVisible(false);
//       } else {
//         if (direction < 0) {
//           setVisible(true);
//         } else {
//           setVisible(false);
//         }
//       }
//     }
//   });

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         initial={{
//           opacity: 1,
//           y: -100,
//         }}
//         animate={{
//           y: visible ? 0 : -100,
//           opacity: visible ? 1 : 0,
//         }}
//         transition={{
//           duration: 0.2,
//         }}
//         className={cn(
//           "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
//           className
//         )}
//       >
//         {navItems.map((navItem: any, idx: number) => (
//           <Link
//             key={`link=${idx}`}
//             href={navItem.link}
//             className={cn("relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500")}
//           >
//             <span className="block sm:hidden">{navItem.icon}</span>
//             <span className="hidden sm:block text-sm">{navItem.name}</span>
//           </Link>
//         ))}

//         <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
//           <span>Login</span>
//           <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
//         </button>
//       </motion.div>
//     </AnimatePresence>
//   );
// };
