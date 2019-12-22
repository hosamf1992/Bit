import React from 'react'
import {Link} from 'react-router-dom'
import ContactPreview from '../ContactPreview/ContactPreview'
// import contactService from '../../services/ContactService'


export default function ({contacts}) {
    return (
    <section className="contacts-list">
    <ul >
            {contacts.map(contact => {
                return (
                    <Link to={`/contact/${contact._id}`} key={contact._id}>
                        <ContactPreview mode="list" key={contact._id}  contact={contact} />
                     </Link>
                )
            })}
        </ul>
        </section>
    )
    }