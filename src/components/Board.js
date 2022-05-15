import { useState } from "react";

const Board = () => {

    const [circleTurn, setCircleTurn] = useState(true)

    const [cell1, setCell1] = useState(null)
    const [cell2, setCell2] = useState(null)
    const [cell3, setCell3] = useState(null)
    const [cell4, setCell4] = useState(null)
    const [cell5, setCell5] = useState(null)
    const [cell6, setCell6] = useState(null)
    const [cell7, setCell7] = useState(null)
    const [cell8, setCell8] = useState(null)
    const [cell9, setCell9] = useState(null)

    const handleClick = (e, num) => {
        //check if cell is occupied
        if (e.target.classList.contains('xSymbol') || e.target.classList.contains('oSymbol')) {
            return
        }
        //check for win
        //check for draw
        //add correct symbol to cell
        switch (num) {
            case 1:
                circleTurn ? setCell1('oSymbol') : setCell1('xSymbol')
                break;
            case 2:
                circleTurn ? setCell2('oSymbol') : setCell2('xSymbol')
                break;
            case 3:
                circleTurn ? setCell3('oSymbol') : setCell3('xSymbol')
                break;
            case 4:
                circleTurn ? setCell4('oSymbol') : setCell4('xSymbol')
                break;
            case 5:
                circleTurn ? setCell5('oSymbol') : setCell5('xSymbol')
                break;
            case 6:
                circleTurn ? setCell6('oSymbol') : setCell6('xSymbol')
                break;
            case 7:
                circleTurn ? setCell7('oSymbol') : setCell7('xSymbol')
                break;
            case 8:
                circleTurn ? setCell8('oSymbol') : setCell8('xSymbol')
                break;
            case 9:
                circleTurn ? setCell9('oSymbol') : setCell9('xSymbol')
                break;
            default:
                break;
        }

        //change turn
        setCircleTurn(!circleTurn)
    }


    return (
        <div className={`boardContainer ${ circleTurn ? 'circleTurn' : 'xTurn' }`}>
            <div className={`cell cell1 ${ cell1 }`} onClick={(e) => handleClick(e, 1)}></div>
            <div className={`cell cell2 ${ cell2 }`} onClick={(e) => handleClick(e, 2)}></div>
            <div className={`cell cell3 ${ cell3 }`} onClick={(e) => handleClick(e, 3)}></div>
            <div className={`cell cell4 ${ cell4 }`} onClick={(e) => handleClick(e, 4)}></div>
            <div className={`cell cell5 ${ cell5 }`} onClick={(e) => handleClick(e, 5)}></div>
            <div className={`cell cell6 ${ cell6 }`} onClick={(e) => handleClick(e, 6)}></div>
            <div className={`cell cell7 ${ cell7 }`} onClick={(e) => handleClick(e, 7)}></div>
            <div className={`cell cell8 ${ cell8 }`} onClick={(e) => handleClick(e, 8)}></div>
            <div className={`cell cell9 ${ cell9 }`} onClick={(e) => handleClick(e, 9)}></div>
        </div>
    );
}

export default Board;