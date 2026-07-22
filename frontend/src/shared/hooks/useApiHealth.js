import { useEffect, useState } from 'react';
import { getSystemInfo } from '../services/apiClient.js';

export function useApiHealth() {
  const [state, setState] = useState({
    status: 'loading',
    data: null,
    error: null,
  });

  useEffect(() => {
    const abortController = new AbortController();

    getSystemInfo(abortController.signal)
      .then((data) => setState({ status: 'ready', data, error: null }))
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setState({ status: 'error', data: null, error });
        }
      });

    return () => abortController.abort();
  }, []);

  return state;
}
