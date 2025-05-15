import {create} from "zustand"
import quests from "../data.json"

export const useQuest = create((set, )=>({
    questList : quests,
    changeStatus : (id, questStatus) =>
        set((state) => ({
            questList : state.questList.map((item)=>
                item.id === id ? {...item, questStatus} : item
            )
        }))
}))