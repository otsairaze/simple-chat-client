export interface Contact {
  id: number;
  ownerId: number;
  contactId: number;
  createdAt: string;
}

export interface UserTypes {
  id: number;
  username: string;
  email: string;
  online: boolean;
  Contact: Contact[];
}

export interface AuthState {
  user: UserTypes;
}
