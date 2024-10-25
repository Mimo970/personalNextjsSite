// "use client";

// import Link from "next/link";
// import React, { useContext, useState } from "react";
// import styles from "./navbar.module.css";
// import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
// import { signOut, useSession } from "next-auth/react";
// import A from "public/letter-a-text-variant-svgrepo-com.svg";
// import WA from "public/letter-a-text-variant-svgrepo-com (2).svg";
// import Image from "next/image";
// import { ThemeContext } from "../../context/ThemeContext";
// import { Sling as Hamburger } from "hamburger-react";
// import { usePathname } from "next/navigation";

// const links = [
//   {
//     id: 1,
//     title: "Home",
//     url: "/",
//   },
//   {
//     id: 2,
//     title: "Portfolio",
//     url: "/portfolio",
//   },
//   {
//     id: 3,
//     title: "Blog",
//     url: "/blog",
//   },
//   {
//     id: 4,
//     title: "About",
//     url: "/about",
//   },
//   {
//     id: 5,
//     title: "Contact",
//     url: "/contact",
//   },
//   {
//     id: 6,
//     title: "Dashboard",
//     url: "/dashboard",
//   },
// ];

// const Navbar = () => {
//   const { data: session, status } = useSession();
//   const { mode } = useContext(ThemeContext);
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();

//   return (
//     <div
//       className={`${styles.container} ${
//         mode === "dark" ? styles.themeDark : styles.themeLight
//       }`}
//     >
//       <Link href="/" className={styles.logo}>
//         <Image
//           className={styles.transitionImage}
//           src={mode === "dark" ? WA : A}
//           width={35}
//           alt="Logo"
//         />
//       </Link>
//       <div className={styles.hamburgerMenu}>
//         {isOpen ? <></> : <Hamburger toggled={isOpen} toggle={setIsOpen} />}
//       </div>
//       <div
//         className={`${styles.links} ${isOpen ? styles.linksOpen : ""}     ${
//           mode === "dark" ? styles.themeDark : styles.themeLight
//         }
//   `}
//       >
//         <div className={styles.hamburgerToggle}>
//           <Hamburger toggled={isOpen} toggle={setIsOpen} />
//         </div>

//         <DarkModeToggle />

//         {links.map((link) => (
//           <>
//             <Link
//               key={link.id}
//               href={link.url}
//               className={`${styles.link} ${
//                 pathname === link.url ? styles.active : ""
//               }  }`}
//             >
//               {link.title}
//             </Link>
//           </>
//         ))}
//         {status === "authenticated" && (
//           <button className={styles.logout} onClick={signOut}>
//             Logout
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import A from "public/letter-a-text-variant-svgrepo-com.svg";
import WA from "public/letter-a-text-variant-svgrepo-com (2).svg";
import Image from "next/image";
import { ThemeContext } from "../../context/ThemeContext";
import { Sling as Hamburger } from "hamburger-react";
import { usePathname } from "next/navigation";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },

  {
    id: 3,
    title: "About",
    url: "/about",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  const { data: session, status } = useSession();
  const { mode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Function to handle toggling the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${styles.container} ${
        mode === "dark" ? styles.themeDark : styles.themeLight
      }`}
    >
      <Link href="/" className={styles.logo}>
        <Image
          className={styles.transitionImage}
          src={mode === "dark" ? WA : A}
          width={35}
          alt="Logo"
        />
      </Link>
      {/* Hamburger icon for smaller screens */}
      <div className={styles.hamburgerMenu}>
        <Hamburger toggled={isOpen} toggle={toggleMenu} />
      </div>
      {/* Menu links */}
      <div
        className={`${styles.links} ${isOpen ? styles.linksOpen : ""} ${
          mode === "dark" ? styles.themeDark : styles.themeLight
        }`}
      >
        {/* Hamburger icon toggle for larger screens */}
        <div className={styles.hamburgerToggle}>
          <Hamburger toggled={isOpen} toggle={toggleMenu} />
        </div>

        <DarkModeToggle />

        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className={`${styles.link} ${
              pathname === link.url ? styles.active : ""
            }`}
          >
            {link.title}
          </Link>
        ))}
        {/* {status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
