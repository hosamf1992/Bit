
const INITIAL_STATE = {
    currUser: null,
    isLogged: false,
    moves: []
}



export default function contactReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SET_USER':
            return {
                isLogged: true,
                currUser: action.user
            }
        case 'SET_LOGOUT':
            return {
                isLogged: false,
                currUser: null
            }
        case 'SET_MOVES':
            return {
                ...state,
                moves: action.moves
            }

        default:
            return state
    }
}

