import React, { useEffect, useState } from "react";
import BoardSquare from "./BoardSquare";

import './test.css';

function Board() {

    //col = 縦, row = 横
    const [row, setRow] = useState(-1);
    const [col, setCol] = useState(-1);

    const clickPiece = (position) => {
        console.log("----------clickPiece----------");
        console.log(position);
        setCol(position.col);
        setRow(position.row);
        console.log("------------------------------");
    }

    const board = [];

    //将棋盤の最上段のマス
    for(let i = 0; i < 8; i++) {
        board.push(<BoardSquare key={i} style="board-top" position={{col: 0, row: i}} isArea={false} clickPiece={clickPiece}/>);
    }
    board.push(<BoardSquare key={8} style="board-top square-last" position={{col: 0, row: 8}} isArea={false}
    clickPiece={clickPiece}/>);

    //将棋盤の２段目以降のマス
    for(let i = 1; i < 9; i++) {
        for(let j = 0; j < 8; j++) {
            board.push(<BoardSquare key={(9*i)+j} style="board-nottop" position={{col: i, row: j}} isArea={false} clickPiece={clickPiece}/>);
        }
        board.push(<BoardSquare key={(9 * (i + 1)) - 1} style="board-nottop square-last" position={{col: i, row: 8}} isArea={false} clickPiece={clickPiece}/>);
    }


    useEffect(() => {
        const index = col * 9 + row;
        if(index < -1) {
            return;
        }
        
    }, [row, col])
    

    return(
        <div className="board">
            {board}
        </div>
    )
}

export default Board;