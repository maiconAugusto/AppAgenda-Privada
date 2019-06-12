import reduxThunk from 'redux-thunk'
import firebase from '../../Firebase/Firebase'
import { Actions } from 'react-native-router-flux';

export const ModifyEmail = text =>{
    return{
        type: 'ModifyEmail',
        payload: text
    }
}
export const ModifyPassword = text =>{
    return{
        type: 'ModifyPassword',
        payload: text
    }
}

export const Authentication = ({ email , password })=>{

    return dispatch=>{
        dispatch({type: 'ModifyLoading'})
        // Verificando se o usuario esta cadastrado
            firebase.auth().signInWithEmailAndPassword(email,password)
                .then(()=>{
                    dispatch({type: 'LoginSucess'})
                    Actions.contacts()
                })
                .catch(()=>{
                    dispatch({type: 'ErroLogin',
                            payload: 'Insira um E-mail e senha válidos'
                            })
                })

    }
}

export const  SignOutUser = ()=>{
    return dispatch =>{
        firebase.auth().signOut()
            .then(()=>{
                console.log('exit')
                dispatch({type: 'SingOutSucess'})
                    Actions.login()
            })
                .catch(()=>{
                    
                })
    }
}

