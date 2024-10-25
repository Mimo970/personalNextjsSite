"use client";
import React from "react";
import styles from "./page.module.css";

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingText}>Loading...</div>
    </div>
  );
};

export default Loading;
