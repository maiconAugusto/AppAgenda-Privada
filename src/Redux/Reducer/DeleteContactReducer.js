const INITIAL_STATE = {
    delete: null
}

export default (state = INITIAL_STATE, action)=>{
    if(action.type == 'DeleteSucess'){
        return{...state }
    }
    return state
}