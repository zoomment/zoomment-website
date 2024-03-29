import { getCookie } from 'cookies-next';
import { request as req, Options } from './request';

export const request = async (options: Options) => {
  const token = getCookie('zoommentToken') || '';

  return req({
    ...options,
    headers: {
      token,
      ...options.headers,
    },
  });
};
