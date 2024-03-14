'use client';
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { TUser } from '@/types';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { getCookie, deleteCookie } from 'cookies-next';

type User = null | TUser;

type AuthContextType = {
  loading: boolean;
  user: User;
  login: (userDetails: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const token = getCookie('token');

  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    if (!token) return;

    setUser(jwtDecode(token) as JwtPayload & TUser);
  }, [token]);

  const login = (userDetails: User) => {
    setUser(userDetails);
  };

  const logout = () => {
    deleteCookie('token');
    deleteCookie('token', {
      path: '/',
      domain: `.${window.location.hostname}`,
    });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
