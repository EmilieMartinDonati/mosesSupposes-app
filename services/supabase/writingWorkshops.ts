import { supabase } from "./client";

/* ----------------------------------------------------------------
---------------------------- GET ----------------------------------
---------------------------------------------------------------- */

export async function getWritingWorkshopsByVisibility({ onlyPublic = false, visibility = "live" }: {
    onlyPublic?: boolean,
    visibility: "upcoming" | "live" | "finished"
}) {
    try {
        let query = supabase
            .from("writing_workshops")
            .select("*")
            .eq("status", "published")
            .order("start_time", { ascending: true });

        switch (visibility) {
            case "live":
                query = query.gt("end_time", new Date().toISOString()).lt("start_time", new Date().toISOString());
                break;
            case "upcoming":
                query = query.gt("start_time", new Date().toISOString());
                break;
            case "finished":
                query = query.lt("end_time", new Date().toISOString());
                break;
            default:
                break;
        }

        if (onlyPublic) {
            /**
             * Raw sql is
             * LEFT JOIN workshop_access 
             * ON workshop_access.workshop_id = writings_workshops.id 
             * WHERE workshop_access.workshop_id IS NULL
             */
            query = query.select("*, workshop_access!left(workshop_id)")
                .is("workshop_access.workshop_id", null)
        }

        const { data: writingWorkshops, error } = await query;

        if (error) {
            console.error("Error fetching upcoming writing workshops:", error);
            throw error;
        }

        return writingWorkshops;
    }
    catch (error) {
        console.error("Unexpected error fetching upcoming writing workshops:", error);
        throw error;
    }
}

export const getWritingWorkshopById = async (writingWorkshopId: string) => {
    try {
        const { data: writingWorkshop, error} = await supabase.from("writing_workshops").select("*").eq("id", writingWorkshopId).single()

        if (error) {
            throw(error)
        }
        return writingWorkshop
    }
    catch (e) {
        console.error(`erreur getting writingWorkshopById with writingWorkshopId ${writingWorkshopId}`)
    }

}

/* ----------------------------------------------------------------
---------------------------- CREATE -------------------------------
---------------------------------------------------------------- */




/* ----------------------------------------------------------------
---------------------------- UPDATE -------------------------------
---------------------------------------------------------------- */