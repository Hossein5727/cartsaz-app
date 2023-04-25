import { create } from 'zustand'


export const useShowMenuMobile = create((set) => ({
    isShowMenu: false,
    closeMenu: (newData) => set(() => {
        return { isShowMenu: false }
    }),
    openMenu: (newData) => set(() => {
        return { isShowMenu: true }
    }),
}))