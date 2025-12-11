'use client';

import { useState } from 'react';
import PromptCard from '../components/prompts';
import { promptsArray, user } from '../pages/data';
import styles from './profile.module.css';

export default function ProfilePage() {
    const currentUser = user[0];

    const [userPrompts] = useState(
        promptsArray.filter((prompt) => prompt.author.id === currentUser.id)
    );

    return (
        <div className={styles.profilePage}>
        {/* header */}
        <div className={styles.headerCard}>
            <div className={styles.headerRow}>
            {/* Profile Picture */}
            <div className={styles.avatar}>
                {currentUser.name.charAt(0)}
            </div>

            {/* User Info */}
            <div className={styles.userInfo}>
                <h1 className={styles.userName}>
                {currentUser.name}
                </h1>
                <p className={styles.userHandle}>@{currentUser.username}</p>

                {/* Bio */}
                {currentUser.bio && (
                <p className={styles.userBio}>{currentUser.bio}</p>
                )}

                <button className={styles.editButton}>
                Edit
                </button>
            </div>
            </div>

            {/* Stats Section */}
            <div className={styles.statsRow}>
            <div className={styles.statItem}>
                <p className={styles.statValue}>{userPrompts.length}</p>
                <p className={styles.statLabel}>Prompts</p>
            </div>
            <div className={styles.statItem}>
                <p className={styles.statValue}>100</p>
                <p className={styles.statLabel}>Followers</p>
            </div>
            <div className={styles.statItem}>
                <p className={styles.statValue}>100</p>
                <p className={styles.statLabel}>Following</p>
            </div>
            </div>
        </div>

        {/* User's Prompts Section */}
        <div className={styles.promptsSection}>
            <h2 className={styles.promptsTitle}>My Prompts</h2>

            {userPrompts.length > 0 ? (
            <div className={styles.promptsList}>
                {userPrompts.map((prompt) => (
                <PromptCard key={prompt.id} prompt={prompt} />
                ))}
            </div>
            ) : (
            <div className={styles.emptyBox}>
                <p className={styles.emptyText}>
                You haven't created any prompts yet.
                </p>
                <p className={styles.emptySubText}>
                Start inspiring others by creating your first prompt!
                </p>
            </div>
            )}
        </div>
        </div>
    );
}
