'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import PoemCard from '../../components/poems';
import { promptsArray, poemsArray } from '../../pages/data';

export default function PromptDetailPage() {
    //get the id from url
    const params = useParams();
    const promptId = parseInt(params.id as string);

    //find the prompt
    const prompt = promptsArray.find(p => p.id === promptId);

    //filter the poems
    const [poems] = useState(
        poemsArray.filter(poem => poem.promptId === promptId)
    );

    const handleWritePoem = () => {
        
    };

    //debugging
    if (!prompt) {
        return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p className="font-bold">Prompt not found</p>
            <p>The prompt you're looking for doesn't exist.</p>
            </div>
        </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Prompt Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            {/* Author Info */}
            <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {prompt.author.name.charAt(0)}
            </div>
            <div className="ml-3">
                <p className="font-semibold text-gray-800">
                {prompt.author.name}
                </p>
                <p className="text-sm text-gray-500">
                @{prompt.author.username}
                </p>
            </div>
            </div>

            {/* Prompt Text */}
            <div className="mb-4">
            <h1 className="text-3xl font-bold text-gray-800 italic mb-2">
                "{prompt.text}"
            </h1>
            <p className="text-sm text-gray-500">{prompt.createdAt}</p>
            </div>

            {/* stats of user */}
            <div className="flex items-center space-x-6 text-gray-600">
            <span className="flex items-center">
                <span className="mr-1">❤️</span>
                {prompt.likeCount} likes
            </span>
            <span className="flex items-center">
                <span className="mr-1">📝</span>
                {poems.length} poems
            </span>
            </div>
        </div>

        {/* Write Button */}
        <div className="mb-6">
            <button
            onClick={handleWritePoem}
            className="w-2xs bg-linear-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg font-semibold transition-colors shadow-md"
            >
            Write a Poem for this Prompt
            </button>
        </div>

        {/* Poems Section */}
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Poems ({poems.length})
            </h2>

            {poems.length > 0 ? (
            <div className="space-y-4">
                {poems.map((poem) => (
                <PoemCard key={poem.id} poem={poem} />
                ))}
            </div>
            ) : (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <p className="text-gray-500 text-lg">
                No poems yet for this prompt.
                </p>
            </div>
            )}
        </div>
        </div>
    );
}