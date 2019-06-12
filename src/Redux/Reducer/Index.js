import { combineReducers } from 'redux'
import AuthenticationReducer from '../Reducer/AuthenticationReducer'
import RegisterNewUserReducer from '../Reducer/RegisterNewUserReducer'
import AddNewContactReducer from '../Reducer/AddNewContactReducer'
import DeleteContactReducer from '../Reducer/DeleteContactReducer'
import EditContactDataReducer from '../Reducer/EditContactDataReducer'


export default combineReducers({
    AuthenticationReducer,
    RegisterNewUserReducer,
    AddNewContactReducer,
    DeleteContactReducer,
    EditContactDataReducer,
})