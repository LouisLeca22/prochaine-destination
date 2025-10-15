import { create } from 'zustand'

interface SidebarState {
  open: boolean
  setOpen: (value: boolean) => void
  toggle: () => void
}

export const useSidebarStore = create<SidebarState>(set => ({
  open: false,
  setOpen: value => set({ open: value }),
  toggle: () => set(state => ({ open: !state.open })),
}))