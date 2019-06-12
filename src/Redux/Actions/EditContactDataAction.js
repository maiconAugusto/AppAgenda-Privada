
import React from 'react'
import { Alert } from 'react-native'
import axios from 'axios'
import Base64 from 'base-64'
import reduxThunk from 'redux-thunk'
import { Actions } from 'react-native-router-flux'

export const ModifyEmail = text =>{
    return{
        type: 'ModifyEmailContactEdit',
        payload: text
    }
}
 
export const ModifyName = text =>{
    return{
        type: 'ModifyNameContactEdit',
        payload: text
    }
}
export const ModifyLastName = text =>{
    return{
        type: 'ModifyLastNameContactEdit',
        payload: text
    }
}

export const ModifyCity = text =>{
    return{
        type: 'ModifyCityContactEdit',
        payload: text
    }
}
export const ModifyStreet = text =>{
    return{
        type: 'ModifyStreetContactEdit',
        payload: text
    }
}
export const ModifyHouseNumber = text =>{
    return{
        type: 'ModifyHouseNumberContactEdit',
        payload: text
    }
}

export const ModifyDistrict = text =>{
    return{
        type: 'ModifyDistrictContactEdit',
        payload: text
    }
}

export const ModifyPhoneNumber = text =>{
    return{
        type: 'ModifyPhoneNumberContactEdit',
        payload: text
    }
}

export const ModifyUf = text =>{
    return{
        type: 'ModifyUfContactEdit',
        payload: text
    }
}

export const EditMyContact = ({email, emailContactEdit, keycontact ,firstName, secondName, phoneNumber, city, houseNumber, uf, street, district})=>{
    
    return dispatch=>{
        //// Verefica se todos os campos estão preenchidos, se não estiver de um alerta para o usuário e aborta!.
        if(emailContactEdit == null  || firstName  == null || secondName  == null || phoneNumber  == null || city  == null || houseNumber  == null || uf  == null || street  == null || district  == null ){
            Alert.alert('Todos os campos dever ser preenchidos.')
        } 
        else{
            dispatch({type: 'ModifyLoadingEditContac'})
            
            // Convertendo o email do usuário para a base64.
            let emailUserBase64 = Base64.encode(email)
              
            // Editando dados do usuário no BD.
            // keycontact é a chave individual do contato.
            axios.patch(`/Users/${emailUserBase64}/Contact/${keycontact}.json`,{
                FirstName: firstName,
                SecondName: secondName,
                Email: emailContactEdit,
                PhoneNumber: phoneNumber,
                City: city,
                Street: street,
                HouseNumber: houseNumber,
                District: district,
                Uf: uf,
            })
            // Se a inserção deu certo, mostre uma menssagem para o usuário confirmando.
            .then(()=>{
                dispatch({type: 'ModifyEditContacSucess'})
                Alert.alert('Salvo com sucesso!')
                   Actions.contacts()
            })
            // Se a inserção não der certo, mostre uma menssagem para o usuário .
            .catch(user =>{
                Alert.alert('Tente novamente!')
            })
        }
    }
}  