
const INITIAL_STATE ={
    email: '',
    password: null,
    passwordConfirm: null,
    loadingRegister: false,
    registerErro: null,
}

export default(state = INITIAL_STATE, action)=>{
    console.log(action)
    if(action.type == 'ModifyEmail'){
        return{...state, email: action.payload}}

    if(action.type == 'ModifyPassword'){
        return{...state, password: action.payload}}

    if(action.type == 'ModifyPasswordConfirm'){
        return{...state, passwordConfirm: action.payload}}
    
    if(action.type == 'ModifyLoadingRegister'){
        return{...state, loadingRegister: true}
    }
    if(action.type == 'PasswordDifferent'){
        return{...state, registerErro: action.payload}
    }
    if(action.type == 'RegisterSucess'){
        return{...state, loadingRegister: false, password: null}
    }
    if(action.type == 'RegisterErro'){
        return{...state, loadingRegister: false}
    }
        
    return state
}