'use client';



import PromptCard from "./prompts";
import styles from "./topPrompts.module.css";
import { usePrompts } from "../contexts/PromptContext";


export default function TrendingPrompts() {
    const { prompts } = usePrompts();
    const topPrompts = [...prompts]
        .sort((a, b) => b.likeCount - a.likeCount)
        .slice(0, 3);

    return (
        <div className={styles.container}>


        <div className={styles.grid}>
            {topPrompts.map((prompt) => (
            <div key={prompt.id} className={styles.card}>
                <PromptCard prompt={prompt} />


            </div>
            ))}
        </div>
        </div>
    );
}
