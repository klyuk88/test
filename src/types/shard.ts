import type { Transaction } from './transaction'

export interface Shard {
  _id: string
  workchain: number
  shard: string
  seqno: number
  root_hash: string
  file_hash: string
  transactions: Transaction[]
  processed: boolean
  __v: number
}
