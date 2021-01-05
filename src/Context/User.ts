import {createContext} from 'react';

interface UserType {
  user: string | undefined;
  setUser: (user: string) => void;
}

export const UserContext = createContext<UserType>({
  user: undefined,
  setUser: () => null,
});
