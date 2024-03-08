import { useEffect, useState } from 'react';
import { getCookie, deleteCookie } from 'cookies-next';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { TUser } from '@/types';

export const useProfile = () => {
  const [user, setUser] = useState<TUser | null>(null);
  const [loading, setLoading] = useState(true);
  const token = getCookie('token');

  const logout = () => {
    deleteCookie('token');
    setUser(null);
  };

  useEffect(() => {
    setLoading(false);
    if (!token) return;

    setUser(jwtDecode(token) as JwtPayload & TUser);
  }, [token]);

  return {
    profile: user,
    logout,
    loading,
    token,
  };
};
