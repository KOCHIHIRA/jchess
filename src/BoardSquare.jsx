import React, { useEffect, useState } from "react";

import './test.css';
function BoardSquare(props) {

    const {col, row} = props.position;
    const [isSelected, setSelected] = useState(false)

    //ある任意の駒がクリックされた時、有効範囲になった時色を付けるための処理
    useEffect(() => {
        console.log("hello worldぉ");
        console.log(props.isArea);
    }, [props.isArea])

    //ここが選択された駒があるマス
    useEffect(() => {
        setSelected(props.isSelected);
    }, [props.isSelected])


    //Board.jsxに、どの座標の駒がクリックされたのか通知する。
    //BoardSquare内で色を変えても、また他の駒がクリックされた時に修正できない為。
    const selectPiece = () => {
        //console.log("clickされました。")
        props.clickPiece({col: col, row: row})
    }


    return(
        <div className={isSelected ? "square" : "square selected"}>
            <div className={props.style}>
                <p onClick={() => selectPiece()} className="piece">王</p>
            </div>
        </div>
    )
}

export default BoardSquare;