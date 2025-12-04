export interface User {
  id: number;
  name: string;
  username: string;
  bio?: string; 
}
  
export interface Prompt {
  id: number;
  text: string;
  author: User;
  createdAt: string;
  likeCount: number;
}
  
export interface Poem {
  id: number;
  promptId: number;
  text: string;
  author: User;
  createdAt: string;
  likes: number;
}