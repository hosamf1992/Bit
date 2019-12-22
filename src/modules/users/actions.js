import userService from "../../services/UserService"



const setSignup = (user) => {
    return { type: 'SET_USER', user }
}

export const signup = (newUser) => {
    return async (dispatch) => {
        const user = await userService.signup(newUser)
        return dispatch(setSignup(user))
    }
}
const setLogout = () => {
    return { type: 'SET_LOGOUT' }
}


export const isLogged = () => {
    return async (dispatch) => {
        const user = await userService.getUser()
        if (user) return dispatch(setSignup(user))
    }
}

export const loadUserMoves = (contactId) => {
    return async (dispatch) => {
        const moves = await userService.getUserMoves(contactId)
        return dispatch(setMoves(moves))
    }
}

const setMoves = (moves) => {
    return { type: 'SET_MOVES',moves }
}


export const logout = () => {
    return async (dispatch) => {
        await userService.logout()
        return dispatch(setLogout())
    }
}

export const addMove = (contact, amount) => {
    return async (dispatch) => {
        const user = await userService.addMove(contact, amount)
        console.log(user);

    }
}


