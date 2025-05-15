import {create} from "zustand";
import cellType from "../dataCells.json"

export const useBoard = create((set, get) => ({
    board : initialiseBoard(),
    updateCell : (value, xPoistion, yPostion) => {
        const updatedBoard =  get().board.map((row)=> (
            row.map((col)=> ({...col,}))
        ))
        updatedBoard[xPoistion][yPostion] = value
        set({board : updatedBoard})
    }
}))


function initialiseBoard(){

    const board = []
    for(let row = 0 ; row <5 ; row++){
        const rowArray=[]
        for (let col = 0; col<5; col++){
            rowArray.push(cellType[0])
        }
        board.push(rowArray)
    }

    board[0][0] = cellType[1]
    board[0][1] = cellType[1]
    board[1][0] = cellType[1]

    return board
}