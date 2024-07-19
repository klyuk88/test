import type { Block } from 'typescript'
import { useAppFetch } from './useAppFetch'

export const useAPIGetBlocks = () => {
  return useAppFetch('/blocks', { refetch: true }).get().json<{ blocks: Block[]; ok: Boolean }>()
}
