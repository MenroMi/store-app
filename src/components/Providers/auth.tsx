import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';

export type IAuthProviderProps = {
  children: ReactNode;
};
export type IAuthUserContext = {
  userToken: string | null;
  setUserToken: Dispatch<SetStateAction<string | null>>;
};

export const AuthUserContext = createContext<IAuthUserContext>({
  userToken: '',
  setUserToken: () => {},
});

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [userToken, setUserToken] = useState<string | null>('guest');
  useEffect(() => {
    const localToken = localStorage.getItem('token');
    const sessionToken = sessionStorage.getItem('token');
    localToken && setUserToken(localToken);
    sessionToken && setUserToken(sessionToken);
  }, [userToken]);
  return (
    <AuthUserContext.Provider value={{ userToken, setUserToken }}>
      {children}
    </AuthUserContext.Provider>
  );
};

export default AuthProvider;