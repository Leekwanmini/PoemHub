'use client';


import React from "react";
import styles from "./homepage.module.css";
import FeaturedPoems from "./components/featuredPoems";
import TrendingPrompts from "./components/topPrompts";
import { usePrompts } from "./contexts/PromptContext";


export default function HomePage() {
  const { prompts } = usePrompts();

  return (
    <div className={styles.pageContainer}>
     
      {/* Front Banner */}
      <section id="frontpage" className={styles.frontpage}>
        <h2 className={styles.frontTitle}>
          Read Poems.
          <br />
          Write Poems.
          <br />
          Inspire Others.
        </h2>


        <img
          className={styles.frontImage}
          src="/out-spoken-banner.jpg"
          alt="Front Page"
        />
      </section>


      {/* Featured Poems */}
      <section className={styles.section}>
        <h1 className={styles.sectionTitle}>Featured Poems</h1>
        <FeaturedPoems />
      </section>


      {/* Trending Prompts */}
      <section className={styles.section}>
        <h1 className={styles.sectionTitle}>Hot Prompts</h1>
        <TrendingPrompts />
      </section>
    </div>
  );
}
