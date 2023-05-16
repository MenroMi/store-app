import { createContext, useContext } from "react";
import { IUser } from '@/types/userTypes';
import { SignInCredentials } from "@/types/authTypes";

type AuthContextData = {
    login: (credentials: SignInCredentials) => Promise<void>
    logout: () => void
    user?: IUser | null
    isAuthenticated: boolean
}

export const AuthContext = createContext({} as AuthContextData);
export const useAuth = () => useContext(AuthContext);