import { create } from 'zustand'




export const useResources = create((set, get) => ({
    meat: 10,
    stone: 20,
    wood: 30,
    survivor: 2,
    availableSurvivor: 10,

    initializeResources: () => {
        set({
            meat: 10,
            stone: 20,
            wood: 30,
            survivor: 2,
            availableSurvivor: 10,
        });
    },
    decreaseMeat: (value) => {
        set((state) => ({ meat: state.meat - value }));
    },

    increaseWood: (value) => {
        set((state) => ({ wood: state.wood + value }));
    },

    decreaseWood: (value) => {
        set((state) => ({ wood: state.wood - value }));
    },

    increaseSurvivor: (value) => {
        set((state) => ({ survivor: state.survivor + value }));
    }
}))