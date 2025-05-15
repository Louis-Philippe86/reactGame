import {create} from "zustand";

export const useScore = create((set)=>({
    score : 0,
    incrementScore : (value) => (
        set((state)=> ({score : state.score + value}))
    ),
    initializeScore : () => set({score : 0})
}))