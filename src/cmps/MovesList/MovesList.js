import React from 'react'
import './MovesList.scss'

export default function (props) {
    let moves = props.moves
    const mode = props.mode
    if (moves.length>0 && mode === 'home-page') {
        moves=moves.slice(0,3)
    }

    return (
        <section className="moves-list">
            <ul >
                {moves.map((move, idx) => {
                    return (
                        <li className="moves-details" key={idx}>
                            {mode && <span className="to">To {move.to}</span>}
                            <span className="amount"><i className="fa fa-bitcoin" ></i> {move.amount}</span>
                            <span>status: <span className="status">approve</span></span>
                            <span className="date" >{move.at}</span>
                        </li>)

                })}
            </ul>
        </section>)
}