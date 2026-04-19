import { create } from 'zustand'
import { createUsersSlice } from './slices/users'
import { createWritingWorkshopsSlice } from './slices/workshops'

type AppStoreType = ReturnType<typeof createUsersSlice>

export const useAppStore = create<AppStoreType>()((...args) => ({
    ...createUsersSlice(...args),
    ...createWritingWorkshopsSlice(...args)
}))