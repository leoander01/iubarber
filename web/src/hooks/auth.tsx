import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface User {
    id: string;
    name: string;
    avatar_url: string;
}

interface AuthState {
    token: string;
    user: User;
}

interface SignCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    user: User;
    signIn(credentials: SignCredentials): Promise<void>;
    signOut(): void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@IuBarber:token');
        const user = localStorage.getItem('@IuBarber:user');

        if (token && user) {
            api.defaults.headers.authorization = `Bearer ${token}`;

            return { token, user: JSON.parse(user) };
        }

        return {} as AuthState;
    });

    const signIn = useCallback(async ({ email, password }) => {
        const response = await api.post('sessions', {
            email,
            password
        });

        const { token, user } = response.data;

        localStorage.setItem('@IuBarber:token', token);
        localStorage.setItem('@IuBarber:user', JSON.stringify(user));

        api.defaults.headers.authorization = `Bearer ${token}`;

        setData({ token, user });
    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem('@IuBarber:token');
        localStorage.removeItem('@IuBarber:user');

        setData({} as AuthState);
    }, []);
    
    return (
        <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }

    return context;
}

export { useAuth };