import { countPresencesByWorkshopId, createPresence } from "@/services/supabase/presences"
import { NavigationActions } from "./navigation"

export const clickWritingWorkshop = async (writingWorkshopId: string, visibility: "live" | "upcoming") => {
    console.log("Rejoindre l'atelier d'écriture", visibility, writingWorkshopId, typeof writingWorkshopId)

    if (visibility === "upcoming") {
        //@todo redirect to page id mode consultation
    }
    else if (visibility === "live") {
        const count = await countPresencesByWorkshopId({ writingWorkshopId })
        if ((count ?? 0) < 5) {
            await createPresence({ writingWorkshopId })
            NavigationActions.goToWorkshopEditor(writingWorkshopId)
        }
        else {
            console.log("L'atelier d'écriture est complet. Nombre de participants:", count)
        }
    }
}