import { create } from 'zustand'

//Store state for unit C or F

export const useUnitStore = create<{
  unit: string
  toggleUnit: (unit: string) => void
}>((set) => ({
  unit: 'metric',
  toggleUnit: (u) => set((state) => ({ ...state, unit: u })),
}))
