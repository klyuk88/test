import type { MsgData } from './msgData'

export interface OutMsg {
  '@type': string
  source: string
  destination: string
  value: string
  fwd_fee: string
  ihr_fee: string
  created_lt: string
  body_hash: string
  msg_data: MsgData
  message: string
}
