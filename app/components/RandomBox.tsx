import React, { useEffect, useState } from "react";
import styles from './RandomBox.module.css';


export default function RandomGen({ onCreatePrompt }){


    const [word, setWord] = useState("");
    const [loading, setLoading] = useState(false);


    const [sen, setSen] = useState("");
    const [loadingSen, setLoadingSen] = useState(false);


    const getWord = async () => {
        setLoading(true);
        try {
        const response = await fetch(
            "https://random-word-api.vercel.app/api?words=1"
        );
        const data = await response.json();
        setWord(data[0]);
        } catch (error) {
        console.error("Error fetching word:", error);
        setWord("Error fetching word");
        } finally {
        setLoading(false);
        }
    };


    const getSen = async () => {
        setLoadingSen(true);
        try {
        const response = await fetch(
            "https://sentence.underthekey.com/language?language=eng&count=1"
        );
        const data = await response.json();
        setSen(data[0].content);
        } catch (error) {
        console.error("Error fetching sentence:", error);
        setSen("Error fetching sentence");
        } finally {
        setLoadingSen(false);
        }
    };


    return (
    <div className={styles.container}>
        <h1 className={styles.title}>Prompt Generator</h1>
    
        <div className={styles.buttonsRow}>


        <button onClick={getWord} disabled={loading} className={styles.button}>
            {loading ? "Loading..." : "Generate Word"}
        </button>
        
        {word && <p className={styles.outputText}><strong>{word}</strong></p>}


        <button
            onClick={() => onCreatePrompt(word)}
            className={styles.button}
            disabled={!word}>
            Create Prompt From Word
        </button>
        </div>




        <div className={styles.buttonsRow}>


        <button onClick={getSen} disabled={loadingSen} className={styles.button}>
            {loadingSen ? "Loading..." : "Generate Sentence"}
        </button>


        {sen && <p className={styles.outputText}><strong>{sen}</strong></p>}
        
        <button
            onClick={() => onCreatePrompt(sen)}
            className={styles.button}
            disabled={!sen}>
            Create Prompt From Sen
        </button>


        </div>


    </div>
    );
}
