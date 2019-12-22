import ContactService from "../../services/ContactService"


const updateContact = (contact) => {
    return { type: 'SAVE_CONTACT', contact }
}

export const saveContact = (newContact) => {
    return async (dispatch) => {
        const contact = await ContactService.saveContact(newContact)
      
        return dispatch(updateContact(contact))
    }
}

const setContacts = (contacts) => {
    return { type: 'SET_CONTACTS', contacts }
}
export const loadContacts = (filterBy) => {
    return async (dispatch) => {
        const contacts = await ContactService.getContacts(filterBy)
        return dispatch(setContacts(contacts))
    }
}

const setCurrContact = (contact) => {
    return { type: 'SET_CURR_CONTACT', contact: contact }
}


export const loadCurrContact = (id) => {
    return async (dispatch) => {
        const contact = await ContactService.getContactById(id)
        // DO ANYTHING ASYNC
        return dispatch(setCurrContact(contact))
    }
}

const removeContact = (contact) => {
    return { type: 'DELETE_CONTACT', contact: contact }
}

export const deleteContact = (id) => {
    return async (dispatch) => {
        const contact = await ContactService.deleteContact(id)
        // console.log(contact)
        // DO ANYTHING ASYNC
        // return dispatch(removeContact(contact))
    }
}

