import { cookies } from 'next/headers';
import { request as req, Options } from './request';

export const request = async (options: Options) => {
  const cookiesList = cookies();
  const token = cookiesList.get('zoommentToken')?.value || '';

  return req({
    ...options,
    headers: {
      token,
      ...options.headers,
    },
  });
};
