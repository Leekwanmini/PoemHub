'use client';


import { useState } from "react";
import PromptCard from "../components/prompts";
import styles from "./search.module.css";
import { usePrompts } from "../contexts/PromptContext";


export default function SearchPage() {
    const { prompts } = usePrompts();
    const [query, setQuery] = useState("");


    const filteredPrompts = prompts.filter((prompt) =>
        prompt.text.toLowerCase().includes(query.toLowerCase())
    );


    return (
        <div className={styles.container}>
        <h1 className={styles.title}>Search Prompts</h1>


        {/* Search bar */}
        <input
            type="text"
            placeholder="Search for a prompt..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.searchInput}
        />


        {/* Results */}
        <div className={styles.results}>
            {filteredPrompts.length > 0 ? (
            filteredPrompts.map((prompt) => (
                <PromptCard key={prompt.id} prompt={prompt} />
            ))
            ) : (
            <p className={styles.emptyMsg}>No prompts found.</p>
            )}
        </div>
        </div>
    );
}
