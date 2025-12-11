'use client';


import styles from "./featuredPoems.module.css";
import { poemsArray } from '../pages/data';
import { Poem } from '../pages/types';


export default function FeaturedPoems() {
    // Sort poems by likes and take top 4
    const topPoems: Poem[] = [...poemsArray]
        .sort((a, b) => b.likes - a.likes)
        .slice(0, 6);


    return (
        <div className={styles.container}>
        <div className={styles.grid}>
            {topPoems.map((poem) => (
            <div key={poem.id} className={styles.card}>
                <p className={styles.text}>{poem.text}</p>
                <p className={styles.meta}>
                By <strong>{poem.author.username}</strong> — {poem.likes} likes
                </p>
            </div>
            ))}
        </div>
        </div>
    );
}
