"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaAngleDown } from "react-icons/fa";
//const downarraow = require('../../public/downarrow.svg')

export default function NavBar() {
  const navItems = [
    {
      name: "Home",
      link: "/",

    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Resources",
      link: "/resources ",
      icon: <FaAngleDown/>
    },
    {
      name: "Pricing",
      link: "/pricing",
      icon: <FaAngleDown/>
    }
  ];
  return (
    <div className="relative ">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
















// "use client";
// import React from "react";
// // import { FloatingNav } from "../ui/floating-navbar";
// // import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
// import { FloatingNav } from "@/components/ui/floating-navbar";
// import {  DashBoard } from "./DashBoard/page";
// import { Footer } from "./Footer";

// export default function NavBar() {
//   const navItems = [
//     {
//       name: "Home",
//       link: "/",
//     },
//     {
//       name: "About",
//       link: "/about",
//     },
//     {
//       name: "Contact",
//       link: "/contact",
//     },
//   ];
//   return (
//     <div className="relative  w-full">
//       <FloatingNav navItems={navItems} />
//       <DummyContent />
//     </div>
//   );
// }

// const DummyContent = () => {
//   return (
//     <div className="grid grid-cols-1 h-[40rem] w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md">
//       <p className="dark:text-white text-neutral-600 text-center text-4xl mt-40 font-bold">
//         Scroll back up to reveal Navbar
//         {/* <DashBoard/>
//         <Footer/> */}
//       </p>
//       <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
//     </div>
//   );
// };
