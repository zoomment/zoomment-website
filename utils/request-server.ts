import { cookies } from 'next/headers';

export const request = async ({
  path = '',
  method = 'GET',
  data = null,
  headers = {},
}: {
  path?: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD';
  data?: object | null;
  headers?: object;
}) => {
  const cookiesList = cookies();
  const token: string = cookiesList.get('token')?.value || '';
  const options = {
    method: method,
    headers: {
      token,
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  if (method !== 'GET' && method !== 'HEAD') {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${path}`,
    options
  );

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};
