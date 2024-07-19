import { useAppFetch } from './useAppFetch'
import type { Message } from '@/types/message'

export const useAPIGetTransactions = () => {
  return useAppFetch('/transactions?limit=50&sort=desc', { refetch: true })
    .get()
    .json<{ messages: Message[]; ok: Boolean }>()
}
