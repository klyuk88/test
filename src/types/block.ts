import type { Shard } from './shard'

export interface Block {
  _id: string
  seqno: number
  workchain: number
  shards: Shard[]
  root_hash: string
  file_hash: string
  timestamp: number
  __v: number
}
