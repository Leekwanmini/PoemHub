'use client';

import { useState } from 'react';
import PromptCard from '../components/prompts';
import RandomWordBox from '../components/RandomBox';
import { promptsArray } from '../pages/data';
import styles from './feed.module.css';
import RandomGen from '../components/RandomBox';
import {user} from '../pages/data'
import { usePrompts } from '../contexts/PromptContext';

export default function FeedPage() {
    const { prompts, setPrompts } = usePrompts();

    
    
    const handleCreatePrompt = () => {

    };

    const randomCreatePrompt = (text: string) => {
        const newPrompt = {
            id: prompts.length + 1,
            text: text,
            author: user[0],
            createdAt: new Date().toISOString().slice(0, 10),
            likeCount: 0
        };
        setPrompts(prev => [...prev, newPrompt])
    };


    return (
        <div className={styles.feedContainer}> 
  
        <div className={styles.twoColumnLayout}>
            
            {/* left side */}
            <div className={styles.leftColumn}>
            <h1 className={styles.title}>Poetry Feed</h1>

            <button
                onClick={handleCreatePrompt}
                className={styles.createButton}
            >
                + Create New Prompt
            </button>

            {/* List of Prompts */}
            <div className={styles.promptsList}> 
                {prompts.map((prompt) => (
                <PromptCard key={prompt.id} prompt={prompt} />
                ))}
            </div>
            </div>

            {/* right side */}
            <div className={styles.rightColumn}>
            <div className={styles.stickyContainer}>
                <h2 className={styles.sidebarTitle}>Get Inspired</h2>
                <RandomWordBox onCreatePrompt={randomCreatePrompt} />
            </div>
            </div>

        </div>
        </div>
    );
}