import {Cell} from "./Cell.jsx";
import {useBoard} from "../store/useBoard.js";

export function Board(){

    const updateCell = useBoard((state) => state.updateCell)
    const board = useBoard((state) => state.board)

    return(
        <table>
            <tbody>
            {
                board.map((row, rowIndex)=>(
                    <tr>
                        {row.map((cellContent, colIndex)=>(
                            <Cell
                                key={`${cellContent.type}-${colIndex}`}
                                cellContent={cellContent}
                                updateCell={updateCell}
                                position={[rowIndex,colIndex]}
                            />
                        ))}
                    </tr>
                        )
                )
            }
            </tbody>
        </table>
    )

}