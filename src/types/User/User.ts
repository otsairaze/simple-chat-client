export interface User {
  id: number;
  username: string;
  email: string;
}

export interface ChatUser {
  chat: {
    id: number;
    name: string;
  };
}
