const USER = 'user'


export default {
    signup,
    getUser,
    logout,
    addMove,
    getUserMoves
}

function addMove(contact, amount) {
    const user = JSON.parse(localStorage.getItem(USER));
    const move = {
        toId: contact._id,
        to: contact.name,
        amount,
        at: new Date().toLocaleString()
    }
    user.moves.unshift(move)
    user.coins -= amount
    localStorage.setItem(USER, JSON.stringify(user));
    return user
}

function getUserMoves(contactId) {
    const user = JSON.parse(localStorage.getItem(USER));
    if (user) {
        const moves = user.moves.filter(move => move.toId === contactId)
        return moves
    }

}

function signup(name) {
    const user = createUser(name)
    localStorage.setItem(USER, JSON.stringify(user));
    return user
}

function logout() {
    localStorage.removeItem(USER);

}

function createUser(name) {
    return {
        name,
        coins: 100,
        moves: []
    }
}

function getUser() {
    const user = JSON.parse(localStorage.getItem(USER));
    if (user) return user
}
