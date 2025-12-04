'use client';

import { useState } from 'react';
import { Poem } from '../pages/types';


interface PoemCardProps {
  poem: Poem;
}

export default function PoemCard({ poem }: PoemCardProps) {
  //managing likes
  const [likes, setLikes] = useState(poem.likes);
  const [isLiked, setIsLiked] = useState(false);

  //Handling like button
  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  return (
    <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 hover:border-blue-300 transition-colors">
      {/* Author Info */}
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
          {poem.author.name.charAt(0)}
        </div>
        <div className="ml-2">
          <p className="font-medium text-gray-800 text-sm">{poem.author.name}</p>
          <p className="text-xs text-gray-500">@{poem.author.username}</p>
        </div>
      </div>

      {/* Poem Text */}
      <div className="mb-4">
        <p className="text-gray-700 whitespace-pre-line leading-relaxed">
          {poem.text}
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500">{poem.createdAt}</span>
        
        {/* Like Button */}
        <button
          onClick={handleLike}
          className={`flex items-center space-x-1 transition-colors ${
            isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
          }`}
        >
          <span className="text-lg">{isLiked ? '❤️' : '🤍'}</span>
          <span className="font-medium">{likes}</span>
        </button>
      </div>
    </div>
  );
}