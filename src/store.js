import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import contactReducer from './modules/contacts/reducers'
import userReducer from './modules/users/reducers'


const rootReducer = combineReducers({
    contact: contactReducer,
    user:userReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)
export default store