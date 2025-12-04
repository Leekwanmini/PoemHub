'use client';

import { useState } from 'react';
import PromptCard from '../components/prompts';
import { promptsArray, user } from '../pages/data';

export default function ProfilePage() {

    const currentUser = user[0];
    
    
    const [userPrompts] = useState(
        promptsArray.filter(prompt => prompt.author.id === currentUser.id)
    );

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
        {/* header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-center mb-4">
                {/* Profile Picture */}
                <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                    {currentUser.name.charAt(0)}
                </div>
            
                {/* User Info */}
                <div className="ml-6">
                    <h1 className="text-3xl font-bold text-gray-800">
                    {currentUser.name}
                    </h1>
                    <p className="text-gray-600">@{currentUser.username}</p>
                    
                    {/* Bio */}
                    {currentUser.bio && (
                    <p className="text-gray-700 mt-2">{currentUser.bio}</p>
                    )}

                    <button className="w-15 h-10 bg-linear-to-r from-cyan-500 to-blue-500
                    text-white py-3 rounded-lg transition-colors shadow-md">
                    Edit
                    </button>
                </div>
            </div>

            {/* Stats Section */}
            <div className="flex space-x-8 mt-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                    <p className="text-2xl font-bold text-gray-800">
                    {userPrompts.length}
                    </p>
                    <p className="text-sm text-gray-600">Prompts</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold text-gray-800">100</p>
                    <p className="text-sm text-gray-600">Followers</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold text-gray-800">100</p>
                    <p className="text-sm text-gray-600">Following</p>
                </div>
            </div>
        </div>

        {/* User's Prompts Section */}
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">My Prompts</h2>
            
            {/* Check if user has prompts */}
            {userPrompts.length > 0 ? (
            <div className="space-y-4">
                {userPrompts.map((prompt) => (
                <PromptCard key={prompt.id} prompt={prompt} /> 
                ))}
            </div>
            ) : (

            <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <p className="text-gray-500 text-lg">
                You haven't created any prompts yet.
                </p>
                <p className="text-gray-400 mt-2">
                Start inspiring others by creating your first prompt!
                </p>
            </div>
            )}
        </div>
        </div>
    );
}