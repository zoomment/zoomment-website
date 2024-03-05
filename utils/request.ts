export type Options = {
  path?: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD';
  data?: object | null;
  headers?: object;
};

export const request = async ({
  path = '',
  method = 'GET',
  data = null,
  headers = {},
}: Options) => {
  const options = {
    method: method,
    headers: {
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

  try {
    const json = await response.json();
    if (!response.ok) {
      throw new Error(json.message);
    }
    return json;
  } catch (e) {
    throw new Error(e.message || 'Something went wrong!');
  }
};
