import { create } from 'zustand'

const getInitialUserData = () => {
  const data = localStorage.getItem("user-data")
  return JSON.parse(data)
}

export const useUserDataStore = create((set) => ({
  userData:   getInitialUserData() ,
  newUserData: (newData) => set(() => {
    localStorage.setItem("user-data",JSON.stringify(newData));
    return { userData: newData }
  }),
}))