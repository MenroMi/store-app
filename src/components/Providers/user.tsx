import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useMutation } from '@tanstack/react-query';
import { getUser } from '@/services/userService';
import { IUser } from '@/types/userTypes';

interface IUserProvider {
  children: ReactNode;
}

interface IUserContext {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
}

export const UserContext = createContext<IUserContext>({
  user: null,
  setUser: () => {},
});

const UserProvider = ({ children }: IUserProvider) => {
  const [user, setUser] = useState<IUser | null>(null);
  const { mutate } = useMutation(getUser);

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    const sessionToken = sessionStorage.getItem('token');
    if (localToken || sessionToken) {
      const token = localToken ? localToken : sessionToken;
      mutate(token, {
        onSuccess: (data) => {
          setUser(data);
        },
      });
    }
  }, [mutate]);
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export default UserProvider;
