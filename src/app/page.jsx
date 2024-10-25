"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design.</h1>
        <p className={styles.desc}>Turning ideas into Reality.</p>
        <Button url="/portfolio" text="View my work" />
      </div>
      <div className={styles.item}>
        {/* <Image src={matrix} alt="" className={styles.img} /> */}
        {/* <p>Hello</p> */}
      </div>
    </div>
  );
}
