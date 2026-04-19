// import { useEffect, useState } from "react"
// import { supabase } from "@/services/supabase/client"

// export const useWorkshopPresence = (writingWorkshopId: string) => {
//   const [presenceCount, setPresenceCount] = useState(0)
//   const [isOpen, setIsOpen] = useState(true)

//   useEffect(() => {
//     const channel = subscribeToPresence(workshopId, (count, isOpen) => {
//       setPresenceCount(count)
//       setIsOpen(isOpen)
//     })

//     return () => { supabase.removeChannel(channel) }
//   }, [workshopId])

//   return { presenceCount, isOpen }
// }