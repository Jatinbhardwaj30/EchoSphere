import { create } from 'zustand'

 export const useThemeStore = create((set) => ({
  theme:localStorage.getItem("Echo-theme")||"coffee",
  setTheme:(theme)=>{
    localStorage.setItem("Echo-theme",theme);
    set({theme})
  }
}))