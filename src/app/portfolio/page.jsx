"use client";
import React, { useContext } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Button from "@/components/Button/Button";
import Image from "next/image";
// import chat from "../../../public/chat";
// import { items } from "./[category]/data";
import { ThemeContext } from "../../context/ThemeContext";

const Portfolio = () => {
  // return (
  //   <div className={styles.container}>
  //     <h1 className={styles.catTitle}>My Applications</h1>
  //     <h1 className={styles.selectTitle}>Choose a gallery</h1>
  //     <div className={styles.items}>
  //       <Link href="/portfolio/illustrations" className={styles.item}>
  //         <span className={styles.title}>Illustrations</span>
  //       </Link>
  //       <Link href="/portfolio/websites" className={styles.item}>
  //         <span className={styles.title}>Websites</span>
  //       </Link>
  //       <Link href="/portfolio/application" className={styles.item}>
  //         <span className={styles.title}>Application</span>
  //       </Link>
  //     </div>
  //   </div>
  // );
  const { mode } = useContext(ThemeContext);

  let data = [
    {
      id: 1,
      title: "Eccommerce Application",
      desc: " The Ecommerce Application is a platform for online shopping and transactions. It provides an intuitive interface for browsing products, adding items to the cart, and securely completing purchases. The app also features customer reviews for an informed shopping experience.",
      image: "/ecomm.png",
      link: "https://viable-nextjs.netlify.app/",
    },

    {
      id: 2,
      title: "Recipe Application",
      desc: "The Recipe Application is a great resource for discovering, and saving recipes. It offers a vast collection of dishes, step-by-step instructions, and ingredient lists. Users can save favorites, and share their culinary creations with the community.",
      image: "/recipe.png",
      link: "https://recipe-app-next.netlify.app/",
    },
    {
      id: 3,
      title: "Live Chat Application",
      desc: "The Live Chat Application is a real-time communication platform designed for seamless interactions. It features an intuitive chat interface, real-time message updates, and multimedia sharing capabilities. Ideal for both personal and professional use.",
      image: "/chat.png",
      link: "https://react-communications.netlify.app/",
    },
  ];
  return (
    // <div className={styles.container}>
    //   <h1 className={styles.catTitle}>My Applications</h1>

    //   {data?.map((item) => (
    //     <div className={styles.item} key={item.id}>
    //       <div className={styles.content}>
    //         <h1 className={styles.title}>{item.title}</h1>
    //         <p className={styles.desc}>{item.desc}</p>
    //         <Button text="See More" url="#" />
    //       </div>
    //       <div className={styles.imgContainer}>
    //         <Image className={styles.img} fill={true} src={item.image} alt="" />
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div className={styles.container}>
      <h1 className={styles.catTitle}>My Applications</h1>

      <div className={styles.grid}>
        {data.map((item) => (
          <div
            className={`${styles.item} ${
              mode === "dark" ? styles.dark : styles.light
            }`}
            key={item.id}
          >
            <div className={styles.imgContainer}>
              <Image
                className={styles.img}
                src={item.image}
                alt={item.title}
                layout="fill"
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
              <Link
                className={`${styles.link} ${
                  mode === "dark" ? styles.dark : styles.light
                }`}
                href={item.link}
                target="_blank"
              >
                Check Live Site
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
