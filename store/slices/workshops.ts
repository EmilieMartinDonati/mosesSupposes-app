import { StateCreator } from "zustand"

type WorkshopType = {
    id: string,
    status: "draft" | "published",
}

export const createWritingWorkshopsSlice : StateCreator<any> = (set) => ({
    writingWorkshopId: null,
    writingWorkshop: null,
    setWritingWorkshopId: (writingWorkshopId: string): void => {
        set({ writingWorkshopId: writingWorkshopId })
    },
    setWritingWorkshop: (writingWorkshop: WorkshopType): void => {
        set({ writingWorkshop: writingWorkshop })
    },
    clearWritingWorkshop: () => {
        set({ writingWorkshopId: null, writingWorkshop: null })
    }
})