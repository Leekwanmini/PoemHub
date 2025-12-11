'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { promptsArray as initialPrompts } from '../pages/data';
import { Prompt } from '../pages/types';

type PromptsContextType = {
    prompts: Prompt[];
    setPrompts: React.Dispatch<React.SetStateAction<Prompt[]>>;
};

type PromptProviderProps = {
    children: ReactNode;
};
  

const PromptsContext = createContext<PromptsContextType | undefined>(undefined);


export const usePrompts = () => {
    const context = useContext(PromptsContext);
    if (!context) {
      throw new Error('usePrompts must be used within a PromptProvider');
    }
    return context;
};



export const PromptProvider = ({ children }) => {
    const [prompts, setPrompts] = useState(initialPrompts);

    return(
        <PromptsContext.Provider value = {{ prompts, setPrompts }}>
        {children}
        </PromptsContext.Provider>
    )
}


