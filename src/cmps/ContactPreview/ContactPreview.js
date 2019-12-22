import React from 'react'
import './ContactPrev.scss';
import avatar from '../../assets/imgs/avatar.png'

export default function ContactPreview(props) {
    const { contact, mode } = props
    let switchClass;
    switchClass = (mode === 'list') ? 'flex list' : 'flex individual'
    return (
        <li className={switchClass}>
            {/* <img src={`http://api.adorable.io/avatars/120/${contact.name}@adorable.png`}></img> */}
            <img src={avatar} />
            <div className="contact-info">
                <span  >{contact.name}</span>
                <span className="contact-phone">{contact.phone}</span>
            </div>
            {mode !== 'list' && <span>{contact.email}</span>}
        </li>)
}
