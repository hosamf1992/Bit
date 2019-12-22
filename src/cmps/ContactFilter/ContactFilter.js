import React from 'react'
import './ContactFilter.scss'

export default function (props) {
    const handleFilter = (value) => {
        props.filter(value)
    }
    return (
        <section >
            <input className="input-filter" placeholder="Search" type="text" onChange={(ev) => handleFilter(ev.target.value)} />
        </section>
    )
}

