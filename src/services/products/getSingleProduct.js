export const loaderProduct = async ({ request, params: { id } }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      signal: request.signal,
    }
  );

  if (!response.ok) {
    throw {
      status: response.status,
      statusText: `Product '${id}' not found`,
    };
  }

  const body = await response.json();

  return { body };
};
