import reduxThunk from 'redux-thunk'
import React from 'react'
import Base64 from 'base-64'

import { Alert } from 'react-native'
import { Actions } from 'react-native-router-flux';
import axios from 'axios'

export const ModifyEmail = text =>{
    return{
        type: 'ModifyEmailContact',
        payload: text
    }
}
 
export const ModifyName = text =>{
    return{
        type: 'ModifyName',
        payload: text
    }
}
export const ModifyLastName = text =>{
    return{
        type: 'ModifyLastName',
        payload: text
    }
}

export const ModifyCity = text =>{
    return{
        type: 'ModifyCity',
        payload: text
    }
}
export const ModifyStreet = text =>{
    return{
        type: 'ModifyStreet',
        payload: text
    }
}
export const ModifyHouseNumber = text =>{
    return{
        type: 'ModifyHouseNumber',
        payload: text
    }
}

export const ModifyDistrict = text =>{
    return{
        type: 'ModifyDistrict',
        payload: text
    }
}

export const ModifyPhoneNumber = text =>{
    return{
        type: 'ModifyPhoneNumber',
        payload: text
    }
}

export const ModifyUf = text =>{
    return{
        type: 'ModifyUf',
        payload: text
    }
}

export const AddNewContacts = ({email ,emailContact, firstName, secondName, phoneNumber, city, houseNumber, uf, street, district})=>{
    console.log(email, emailContact)
    return dispatch=>{
        // Verefica se todos os campos estão preenchidos, se não estiver de um alerta para o usuário e aborta!.
        if(emailContact == null || firstName  == null || secondName  == null || phoneNumber  == null || city  == null || houseNumber  == null || uf  == null || street  == null || district  == null ){
            Alert.alert('Todos os campos dever ser preenchidos!')
        } 
        else{
            // Caso todos os campos esteja preenchidos de continuidade a inserção do novo contato.
            dispatch({type: 'ModifyLoadingAddContact'})

            // Convertendo o email do usuário e  para base64 para enviar ao BD.
            let emailUserBase64 = Base64.encode(email)
            console.log(emailUserBase64)

            // Convertendo o email do contato para a base64 para gerar sua indentificação.
            let emailContactBase64 = Base64.encode(emailContact)

            // Adicionando dados do conto no BD do usuário. 
            axios.put(`/Users/${emailUserBase64}/Contact/${emailContactBase64}.json`,{
                FirstName: firstName,
                SecondName: secondName,
                Email: emailContact,
                PhoneNumber: phoneNumber,
                City: city,
                Street: street,
                HouseNumber: houseNumber,
                District: district,
                Uf: uf,
                // KeyContact é chave gerada na base64 para a identificação unica do contato no DB.
                keyContact: emailContactBase64
            })
                // Se a inserção deu certo, mostre uma menssagem para o usuário confirmando.
                .then(()=>{
                    dispatch({type:'AddContactSucess'})
                        Alert.alert('Contato adicionado.')
                            Actions.pop()
                })
                // Se a inserção não der certo, mostre uma menssagem para o usuário .
                .catch(()=>{
                    Alert.alert('Tente novamente!')
                })
        }
    }
}  
