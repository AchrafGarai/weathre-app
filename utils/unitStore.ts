import { create } from 'zustand'

export const useUnitStore = create<{
  unit: string
  toggleUnit: (unit: string) => void
}>((set) => ({
  unit: 'metric',
  toggleUnit: (u) => set((state) => ({ ...state, unit: u })),
}))
