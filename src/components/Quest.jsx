import {useQuest} from "../store/useQuest.js";


export function Quest({quest}){

    const closeQuest = useQuest((state)=>state.changeStatus)


    return (
        <div className="d-flex align-items-start gap-3 p-3 border rounded shadow-sm">
            <input type="checkbox" className="form-check-input mt-1" onClick={()=>closeQuest(quest.id, "completed")}/>
            <div className="d-flex flex-column">
                <span className="fw-bold text-dark">{quest.title}</span>
                <span className="text-muted small">{quest.description}</span>
            </div>
        </div>
    )

}