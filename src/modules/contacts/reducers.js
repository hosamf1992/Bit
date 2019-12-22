
const INITIAL_STATE = {
    currContact: null,
    contacts: []
}


export default function contactReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_CURR_CONTACT':
            return {
                ...state,
                currContact: action.contact
            }
        case 'SET_CONTACTS':
            return {
                ...state,
                contacts: action.contacts
            }
        case 'SAVE_CONTACT':
            return {
                ...state,

            }
        // case 'DELETE_CONTACT':
        //     // console.log(action.contact)
        //     const idx = state.contacts.findIndex(currContact => {
            
        //         return currContact._id === action.contact._id
        //     })
           
        //     return {
        //         ...state,
        //         contacts: [
        //             ...state.contacts.slice(0, idx),
        //             action.robot,
        //             ...state.contacts.slice(idx + 1)
        //         ]

        //     }
        default:
            return state
    }
}

