export const request = async ({
  path = '',
  method = 'GET',
  data = null,
  headers = {},
}: {
  path?: string;
  method?: string;
  data?: object | null;
  headers?: object;
}) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });

  return response.json();
};
