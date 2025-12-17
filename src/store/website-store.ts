import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface WebsiteState {
  darkMode: boolean
  currentPage: string
  selectedService: string | null
  isBookingModalOpen: boolean

  // Actions
  toggleDarkMode: () => void
  setCurrentPage: (page: string) => void
  setSelectedService: (service: string | null) => void
  setBookingModalOpen: (open: boolean) => void
}

export const useWebsiteStore = create<WebsiteState>()(
  persist(
    (set) => ({
      darkMode: false,
      currentPage: 'home',
      selectedService: null,
      isBookingModalOpen: false,

      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
      setCurrentPage: (page) => set({ currentPage: page }),
      setSelectedService: (service) => set({ selectedService: service }),
      setBookingModalOpen: (open) => set({ isBookingModalOpen: open }),
    }),
    {
      name: 'website-storage',
    },
  ),
)
