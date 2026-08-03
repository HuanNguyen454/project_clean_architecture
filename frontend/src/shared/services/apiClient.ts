import axios from 'axios';
import type { components } from '../api/generated/schema';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080';
export type SystemInfoDto = components['schemas']['SystemInfoResponse'];

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: 'application/json',
  },
  timeout: 15_000,
});

export async function getSystemInfo(signal?: AbortSignal): Promise<SystemInfoDto> {
  const response = await apiClient.get<SystemInfoDto>('/api/system/info', { signal });
  return response.data;
}

export { API_BASE_URL };
