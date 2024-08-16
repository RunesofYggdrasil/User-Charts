"use client";

import React, { useEffect } from "react";
import styles from "./Navigation.module.css";
import Link from "next/link";

const Navigation = () => {
  useEffect(() => {
    function handlePageWidth() {
      const root = document.documentElement;
      const innerWidth = window.innerWidth;
      const scrollbarWidth = innerWidth - root.clientWidth;
      const pageWidth = innerWidth - scrollbarWidth - 16;
      root.style.setProperty("--page-width", pageWidth + "px");
    }

    handlePageWidth();
    window.addEventListener("resize", () => {
      handlePageWidth();
    });
    window.addEventListener("scroll", () => {
      handlePageWidth();
    });
    return () => {
      window.removeEventListener("resize", () => {
        handlePageWidth();
      });
      window.removeEventListener("scroll", () => {
        handlePageWidth();
      });
    };
  });
  return (
    <nav className={styles.navigationOutside}>
      <div className={styles.navigationInside}>
        <div className={styles.navigationLeft}>
          <p>CROWSEE</p>
        </div>
        <div className={styles.navigationLeft}>
          <ul>
            <li>
              <Link href="./">HOME</Link>
            </li>
            <li>
              <Link href="./">SEARCH</Link>
            </li>
            <li>
              <Link href="./">CHARTS</Link>
            </li>
            <li>
              <Link href="./">PROFILE</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
