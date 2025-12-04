import { User, Prompt, Poem } from './types';

export const user: User[] = [
  {
    id: 1,
    name: "Kwan min Lee",
    username: "Kwanmin",
    bio: "get out"
  },
  {
    id: 2,
    name: "Kanye West",
    username: "ye",
    bio: "I don't condone with jews"
  },
  {
    id: 3,
    name: "Donald Trump",
    username: "King_of_the_US",
    bio: "write something for me about the chinese communist government"
  }
];

export const promptsArray: Prompt[] = [
  {
    id: 1,
    text: "sunrise",
    author: user[0],
    createdAt: "2024-11-20",
    likeCount: 15
  },
  {
    id: 2,
    text: "childhood",
    author: user[1],
    createdAt: "2024-11-22",
    likeCount: 23
  },
  {
    id: 3,
    text: "home",
    author: user[0],
    createdAt: "2024-11-25",
    likeCount: 8
  },
  {
    id: 4,
    text: "sound",
    author: user[2],
    createdAt: "2024-11-26",
    likeCount: 12
  }
];

export const poemsArray: Poem[] = [
  {
    id: 1,
    promptId: 1,
    text: "poem poem poem",
    author: user[1],
    createdAt: "2024-11-21",
    likes: 5
  },
  {
    id: 2,
    promptId: 1,
    text: "I've just bought new tesla",
    author: user[2],
    createdAt: "2024-11-21",
    likes: 8
  },
  {
    id: 3,
    promptId: 2,
    text: "fuck poetry",
    author: user[0],
    createdAt: "2024-11-23",
    likes: 3
  },
  {
    id: 4,
    promptId: 3,
    text: "better than twitter",
    author: user[2],
    createdAt: "2024-11-25",
    likes: 7
  }
];