'use client';

import { useState } from 'react';
import PromptCard from './components/prompts';
import { promptsArray } from './pages/data';


export default function FeedPage() {
  //manages all prompts
  const [prompts, setPrompts] = useState(promptsArray);

  const handleCreatePrompt = () => {
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">Poetry Feed</h1>

      {/* Create Button */}
      <button
        onClick={handleCreatePrompt}
        className="w-2xs bg-linear-to-r from-cyan-500 to-blue-500 text-white shadow-lg py-3 rounded-lg font-semibold"
      >
        + Create New Prompt
      </button>

      {/* List of Prompts */}
      <div className="space-y-4 w-150">
        {prompts.map((prompt) => (
          <PromptCard key={prompt.id} prompt={prompt} />
        ))}
      </div>
    </div>
  );
}