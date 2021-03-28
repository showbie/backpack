import { useRouter } from 'next/router';

export function useIsHome(): boolean {
  return useRouter().pathname === '/';
}
