'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Prompt } from '../pages/types';


interface PromptCardProps {
  prompt: Prompt;
}

export default function PromptCard({ prompt }: PromptCardProps) {
  //State for likes
  const [likes, setLikes] = useState(prompt.likeCount);
  const [isLiked, setIsLiked] = useState(false);

  //like button
  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);  // Unlike
      setIsLiked(false);
    } else {
      setLikes(likes + 1);  // Like
      setIsLiked(true);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      {/* Author Info */}
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
          {prompt.author.name.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="font-semibold">{prompt.author.name}</p>
          <p className="text-sm text-gray-500">@{prompt.author.username}</p>
        </div>
      </div>


      <Link href={`/prompt/${prompt.id}`}>
        <div className="mb-4 cursor-pointer hover:text-blue-600">
          <p className="text-lg italic">"{prompt.text}"</p>
        </div>
      </Link>

      {/* Footer with date and like button */}
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{prompt.createdAt}</span>
        
        {/* Like Button */}
        <button
          onClick={handleLike}
          className={`flex items-center space-x-1 ${
            isLiked ? 'text-red-500' : 'text-gray-500'
          }`}
        >
          <span className="text-xl">{isLiked ? '❤️' : '🤍'}</span>
          <span>{likes}</span>
        </button>
      </div>
    </div>
  );
}