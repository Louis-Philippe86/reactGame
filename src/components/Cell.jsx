import forestIcone from '../assets/icons/tree.svg'
import mountainIcone from '../assets/icons/mountain.svg'
import homeIcone from '../assets/icons/cabin.svg'
import {useState} from "react";
import dataCell from "../dataCells.json"
import {useResources} from "../store/useResources.js";

const icones = {
    home : homeIcone,
    forest : forestIcone,
    mountain: mountainIcone
}

export function Cell({cellContent,updateCell,position}){

    const[toggleOption, setToggleOption] = useState(false)
    const meat = useResources((state)=>state.meat)
    const wood = useResources((state)=>state.wood)
    const addWood = useResources((state)=>state.increaseWood)
    const addSurvivor = useResources((state)=>state.increaseWood)

    function handleOptions(){
        setToggleOption(!toggleOption)
    }

    function onClickOption(){
        switch (cellContent.type){
            case "forest":
                addWood(5)
                break
            case "empty":
                updateCell(dataCell[2],position[0],position[1])
                break
        }
    }

    return(
        <td className={"position-relative"} onClick={handleOptions}>
            {icones[cellContent.type] && <img src={icones[cellContent.type]} alt={cellContent.type}/>}
            {toggleOption && <span
                className={"p-3 bg-dark-subtle position-absolute top-100 translate-middle-x z-1"}
                onClick={onClickOption}
            >{cellContent.option}</span>}
        </td>
    )
}