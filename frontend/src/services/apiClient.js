const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080';

export async function getSystemInfo(signal) {
  const response = await fetch(`${API_BASE_URL}/api/system/info`, { signal });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return response.json();
}

export { API_BASE_URL };
