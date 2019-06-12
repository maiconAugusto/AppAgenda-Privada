

const INITIAL_STATE ={
    email:  '',
    password: '',
    loading: false,
    erroLogin: null
    
}

export default(state = INITIAL_STATE, action)=>{
    console.log(action)
    if(action.type == 'ModifyEmail'){
        return{...state, email: action.payload}}

    if(action.type == 'ModifyPassword'){
        return{...state, password: action.payload}}
    
    if(action.type == 'ModifyLoading'){
        return{...state, loading: true}
    }
    if(action.type == 'ErroLogin'){
        return{...state, erroLogin: action.payload, loading: false}}

    if(action.type == 'LoginSucess'){
        return{...state, loading: false}}
    
    if(action.type == 'SingOutSucess'){
        return{...state, email:'',password: ''}
    }
    return state
}