import reduxThunk from 'redux-thunk'
import Base64 from 'base-64'
import { Actions } from 'react-native-router-flux';
import React from 'react'
import { Alert } from 'react-native'
import axios from 'axios'

export const DeleteMyContact = ({email, keycontact})=>{
    return dispatch=>{

            // Convertendo email do usuário para base64
            let emailUserBase64 = Base64.encode(email)

            //Deletando contato do banco de dados do usuário
            axios.delete(`https://reactnativetest-1d8e8.firebaseio.com/Users/${emailUserBase64}/Contact/${keycontact}.json`)
                .then(()=>{
                    Alert.alert('Contado deletado.')
                    Actions.pop()
                })
                    .catch(()=>{
                        Alert.alert('Usuário não foi excluido.')
                    })

    }
}