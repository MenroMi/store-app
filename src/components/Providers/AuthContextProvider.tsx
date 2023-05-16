
// basik
import {  ReactNode, useEffect, useState } from "react";
import api from '@/services/api';

// types
import { IUser } from '@/types/userTypes';
import { AuthContext } from '@/contexts/AuthContext';

interface IContextProviderProps {
    children: ReactNode;
}

export default function AuthContextProvider({children}: IContextProviderProps) {
    const [user, setUser] = useState<IUser | null>(null);
    const isAuthenticated = !!user;

    async function login() {}
    async function logout() {}

    useEffect(() => {
        async function loadUserFromLocalStorage() {
            const token = localStorage.getItem('token');
            if (token) {
                api.defaults.headers.post['Authorization'] = `Bearer ${token}`;
                const { data: user } = await api.get('/users/me');
                if (user) setUser(user)
            }
        }

        loadUserFromLocalStorage();
    }, []);
    
    return <AuthContext.Provider value={{user, isAuthenticated, login, logout}}>{children}</AuthContext.Provider>
}
