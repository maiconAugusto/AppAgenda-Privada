import reduxThunk from 'redux-thunk'
import Base64 from 'base-64'
import firebase from '../../Firebase/Firebase'
import { Actions } from 'react-native-router-flux';
import React from 'react'
import { Alert } from 'react-native'
import axios from 'axios'


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

export const ModifyPasswordConfirm = text =>{
    return{
        type: 'ModifyPasswordConfirm',
        payload: text
    }
}
export const RegisterUser = ({email , password, passwordConfirm})=>{
    console.log(email, password, passwordConfirm)
    return dispatch=>{

        // Verifica de as senhas são iguais, se for, faz o registro, se não de um alert.
        // que as senhas não iguais.
        if(password == passwordConfirm){

            // Convertendo o email para base64
            let emailUserBase64 = Base64.encode(email)
            console.log(emailUserBase64)

            // Modificando o estado do ActivityIndicator.
            dispatch({ type: 'ModifyLoadingRegister'})

                // Cadastrando novo usuario.
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(dispatch=>{
                        // Registrando o email do usuario cadastrado no BD
                        axios.post(`/Users/${emailUserBase64}.json`,{email})
                    })
                        .then(user =>{
                            dispatch({ type: 'RegisterSucess'})
                                Actions.pop()
                        })
                            .catch(()=>{
                                dispatch({type: 'RegisterErro'})
                    })
        } 
        else{
            // Casdo as senhas não sejam iguais, de um altert informando o usuario.
            Alert.alert('As senhas não são iguais!\nTente mais uma vez!')
            dispatch({type: 'PasswordDifferent'})
        }
    }
}    
