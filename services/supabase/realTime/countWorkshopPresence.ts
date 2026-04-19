import { RealtimeChannel } from '@supabase/supabase-js'

type PresenceSummary = {
  readOnly: number
  queuing: number
  total: number
}

export const countWorkshopPresence = (channel: RealtimeChannel): PresenceSummary => {
  const state = channel.presenceState<{ isOver: boolean }>()
  const users = Object.values(state).flat()

  return {
    readOnly: users.filter(u => u.isOver === true).length,
    queuing:  users.filter(u => u.isOver === false).length,
    total:    users.length
  }
}