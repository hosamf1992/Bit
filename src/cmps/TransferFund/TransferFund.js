import React from 'react'
import './TransferFund.scss'
export default function (props) {
    const { contact } = props
    let amount = 0;
    const handleAmount = (value) => {
        amount = value
    }
    const onTransferCoins = () => {   
        props.amount(amount) 
    }

    return (
        <div className="transfer">
            {/* <h2>Transfer coins to: </h2>
            <span>{contact && contact.name}</span> */}
            <input type="number" onChange={(ev) => handleAmount(ev.target.value)} />
            <button onClick={() => onTransferCoins(this)}>Transfer</button>
        </div>
    )
}
