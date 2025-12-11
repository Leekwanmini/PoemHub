'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './CreatePrompt.module.css';

export default function CreatePromptPage() {
    const router = useRouter();
    const [promptText, setPromptText] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validation
        if (promptText.trim().length === 0) {
        setError('Please enter a prompt');
        return;
        }

        if (promptText.trim().length < 3) {
        setError('Prompt must be at least 3 characters long');
        return;
        }

        if (promptText.trim().length > 100) {
        setError('Prompt must be 100 characters or less');
        return;
        }

        console.log('Creating prompt:', promptText);
        
        // Redirect back to feed after creating
        router.push('/feed');
    };

    const handleCancel = () => {
        router.push('/feed');
    };

    return (
        <div className={styles.pageContainer}>
        <div className={styles.formCard}>
            <h1 className={styles.title}>Create New Prompt</h1>
            <p className={styles.subtitle}>
            Share a word or phrase to inspire poets
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
            {/* Prompt Input */}
            <div className={styles.inputGroup}>
                <label htmlFor="prompt" className={styles.label}>
                Your Prompt
                </label>
                <input
                id="prompt"
                type="text"
                value={promptText}
                onChange={(e) => {
                    setPromptText(e.target.value);
                    setError('');
                }}
                placeholder="e.g., sunset, memories, journey..."
                className={styles.input}
                maxLength={100}
                />
                <div className={styles.charCount}>
                {promptText.length}/100 characters
                </div>
            </div>

            {/* Error Message */}
            {error && (
                <div className={styles.error}>
                {error}
                </div>
            )}

            {/* Buttons */}
            <div className={styles.buttonGroup}>
                <button
                type="button"
                onClick={handleCancel}
                className={styles.cancelButton}
                >
                Cancel
                </button>
                <button
                type="submit"
                className={styles.submitButton}
                >
                Create Prompt
                </button>
            </div>
            </form>

            {/* Example Prompts */}
            <div className={styles.examplesSection}>
            <h3 className={styles.examplesTitle}>Need inspiration?</h3>
            <div className={styles.exampleTags}>
                <button
                type="button"
                onClick={() => setPromptText('sunrise')}
                className={styles.exampleTag}
                >
                sunrise
                </button>
                <button
                type="button"
                onClick={() => setPromptText('childhood memories')}
                className={styles.exampleTag}
                >
                childhood memories
                </button>
                <button
                type="button"
                onClick={() => setPromptText('the meaning of home')}
                className={styles.exampleTag}
                >
                the meaning of home
                </button>
                <button
                type="button"
                onClick={() => setPromptText('silence')}
                className={styles.exampleTag}
                >
                silence
                </button>
                <button
                type="button"
                onClick={() => setPromptText('freedom')}
                className={styles.exampleTag}
                >
                freedom
                </button>
            </div>
            </div>
        </div>
        </div>
    );
}
