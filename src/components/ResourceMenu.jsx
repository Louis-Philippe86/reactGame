import {Resource} from "./Resource.jsx";
import meatIcone from "../assets/icons/meat.svg";
import stoneIcone from "../assets/icons/stone.svg";
import woodIcone from "../assets/icons/wood.svg";
import survivorIcone from "../assets/icons/survivor.svg";
import {useResources} from "../store/useResources.js";

const icones = {
    meat : meatIcone,
    stone : stoneIcone,
    wood : woodIcone,
    survivor : survivorIcone
}

export function ResourceMenu(){

    const meat = useResources((state)=>state.meat)
    const stone = useResources((state)=>state.stone)
    const wood = useResources((state)=>state.wood)
    const survivor = useResources((state)=>state.survivor)
    const availableSurvivor = useResources((state)=>state.availableSurvivor)


    return (
        <div className={"d-flex flex-row bg-info-subtle rounded-5 position-fixed top-0 end-0 gap-5 w-50"}>
            <Resource type={meatIcone} value={meat}></Resource>
            <Resource type={stoneIcone} value={stone}></Resource>
            <Resource type={woodIcone} value={wood}></Resource>
            <Resource type={survivorIcone} value={survivor} limit={availableSurvivor}></Resource>
        </div>
    )
}

