import { useEffect, useState } from 'react';
import { getCookie } from 'cookies-next';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { TUser } from '@/types';

export const useProfile = () => {
  const [user, setUser] = useState<TUser | null>(null);
  const token = getCookie('token');

  useEffect(() => {
    if (!token) return;

    setUser(jwtDecode(token) as JwtPayload & TUser);
  }, [token]);

  return user;
};
