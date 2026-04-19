import AsyncStorage from '@react-native-async-storage/async-storage'
import { StateCreator } from 'zustand'

export const createUsersSlice:StateCreator<any> = (set) => ({
    guestId: null,
    userId: null,
    user: null,
    initializeGuestId: async () => {
        let id = await AsyncStorage.getItem('guest_id')
        if (!id) {
            id = crypto.randomUUID()
            await AsyncStorage.setItem('guest_id', id)
        }
        set({ guestId: id })
    },
    deleteGuestId: async () => {
        let id = await AsyncStorage.getItem("guest_id")
        if (id) {
            await AsyncStorage.removeItem("guest_id")
        }
        set({ guestId: null })
    },
    setUserId: async (userId: string) => {
        set({ userId: userId })
    },
    setUser: async (user: unknown) => {
        set({ user: user})
    }
}
)