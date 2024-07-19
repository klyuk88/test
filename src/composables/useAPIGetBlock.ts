import type { Block } from '@/types/block'
import { useAppFetch } from './useAppFetch'
import { ref } from 'vue'

export const useAPIGetBlock = (seqno: number) => {
  const url = ref(`/block?seqno=${seqno}`)
  return useAppFetch(url, { refetch: true }).get().json<{ block: Block; ok: Boolean }>()
}
