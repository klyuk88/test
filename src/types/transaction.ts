import type { InMsg } from './inMsg'
import type { OutMsg } from './outMsg'

export interface Transaction {
  _id: string
  processed: boolean
  out_messages: any[]
  account: string
  hash: string
  lt: string
  address: string
  utime: number
  data: string
  fee: number
  storage_fee: number
  other_fee: number
  in_msg: InMsg
  out_msgs: OutMsg[]
  __v: number
}
