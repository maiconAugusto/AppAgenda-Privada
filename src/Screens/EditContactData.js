import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native'
import { connect } from 'react-redux'

import { ModifyEmail,
         ModifyName,
         ModifyLastName,
         ModifyCity,
         ModifyUf,
         ModifyDistrict,
         ModifyHouseNumber,
         ModifyPhoneNumber,
         ModifyStreet,
         EditMyContact
} from '../Redux/Actions/EditContactDataAction'

class EditContactData extends Component{
    SendEditing(){

        const { email } = this.props
        const {  emailContactEdit } = this.props
        const keycontact = this.props.Data.keyContact
        const { firstName } = this.props
        const { secondName } = this.props
        const { phoneNumber } = this.props
        const { city } = this.props
        const { houseNumber } = this.props
        const { uf } = this.props
        const { street } = this.props
        const { district } = this.props


        this.props.EditMyContact({email,  emailContactEdit, keycontact , firstName, secondName, phoneNumber, city, houseNumber, uf, street, district})
    
    }
    Buttom(){
        if(this.props.loadingEdit){
            return( <ActivityIndicator style={{marginTop:56}} size = 'large' color = '#2E64FE'/>)
        }
        return(
            <TouchableOpacity onPress={()=> this.SendEditing()}>
                <Text style={stylo.textButtom}>Salvar</Text>
            </TouchableOpacity>
        )
    }
    render(){
        
        return(
            <View style={stylo.container}>
                <TextInput
                style = {stylo.textInputs}
                underlineColorAndroid = '#2E64FE'
                placeholder = 'Nome'
                placeholderTextColor = '#2E64FE'
                maxLength={20}
                onChangeText={(text)=> this.props.ModifyName(text)}
                />

                <TextInput
                style = {stylo.textInputs}
                underlineColorAndroid = '#2E64FE'
                placeholder = 'Sobrenome'
                placeholderTextColor = '#2E64FE'
                maxLength={35}
                onChangeText={(text)=> this.props.ModifyLastName(text)}
                />

                <TextInput
                style = {stylo.textInputs}
                underlineColorAndroid = '#2E64FE'
                placeholder = 'Telefone'
                placeholderTextColor = '#2E64FE'
                maxLength={20}
                onChangeText={(text)=> this.props.ModifyPhoneNumber(text)}
                />

                <TextInput
                style = {stylo.textInputs}
                underlineColorAndroid = '#2E64FE'
                placeholder = 'E-mail'
                placeholderTextColor = '#2E64FE'
                maxFontSizeMultiplier={30}
                onChangeText={(text)=> this.props.ModifyEmail(text)}
                />

                <TextInput
                style = {{width: 200, marginRight: 8, marginLeft: 8}}
                underlineColorAndroid = '#2E64FE'
                placeholder = 'Cidade'
                placeholderTextColor = '#2E64FE'
                maxLength={20}
                onChangeText={(text)=> this.props.ModifyCity(text)}
                />

                
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <TextInput
                    style = {{width: 200, marginRight: 8, marginLeft: 8}}
                    underlineColorAndroid = '#2E64FE'
                    placeholder = 'Rua'
                    placeholderTextColor = '#2E64FE'
                    maxLength={20}
                    onChangeText={(text)=> this.props.ModifyStreet(text)}
                    />

                    <TextInput
                    style = {{width: 100, marginRight: 8, marginLeft: 8}}
                    underlineColorAndroid = '#2E64FE'
                    placeholder = 'Numero'
                    placeholderTextColor = '#2E64FE'
                    maxLength={10}
                    onChangeText={(text)=> this.props.ModifyHouseNumber(text)}
                    />

                </View>

                <TextInput
                style = {{width: 200, marginRight: 8, marginLeft: 8}}
                underlineColorAndroid = '#2E64FE'
                placeholder = 'Bairro'
                placeholderTextColor = '#2E64FE'
                maxLength={20}
                onChangeText={(text)=> this.props.ModifyDistrict(text)}
                />
            

                <TextInput
                style = {{width: 100, marginRight: 8, marginLeft: 8}}
                underlineColorAndroid = '#2E64FE'
                placeholder = 'UF'
                placeholderTextColor = '#2E64FE'
                maxLength={30}
                onChangeText={(text)=> this.props.ModifyUf(text)}
                />
                <Text style={stylo.textError}>{this.props.addContactErro}</Text>
                {this.Buttom()}
            </View>
        )
    }
}
const mapStateToProps = state =>({
    emailContactEdit: state.EditContactDataReducer. emailContactEdit,
    firstName: state.EditContactDataReducer.firstName,
    secondName: state.EditContactDataReducer.secondName,
    phoneNumber: state.EditContactDataReducer.phoneNumber,
    city: state.EditContactDataReducer.city,
    houseNumber: state.EditContactDataReducer.houseNumber,
    uf: state.EditContactDataReducer.uf,
    street: state.EditContactDataReducer.street,
    district: state.EditContactDataReducer.district,
    loadingEdit: state.EditContactDataReducer.loadingEdit,
    addContactErro: state.EditContactDataReducer.addContactErro,
    email: state.AuthenticationReducer.email,
})

export default connect(mapStateToProps,{ModifyEmail,
                                        ModifyName,
                                        ModifyLastName,
                                        ModifyCity,
                                        ModifyUf,
                                        ModifyDistrict,
                                        ModifyHouseNumber,
                                        ModifyPhoneNumber,
                                        ModifyStreet,
                                        EditMyContact})
                                        (EditContactData)

const stylo = StyleSheet.create({
    container:{
        flex : 1
    },
    textInputs:{
        marginRight: 8,
        marginLeft: 8,
    },
    textButtom:{
        marginTop:50,
        padding: 10,
        textAlign:'center',
        backgroundColor:'#2E64FE',
        color:'white',
        marginRight: 8,
        marginLeft: 8,
        fontWeight:'800',
        fontSize: 16
    },
    textError:{
        color: 'red', 
        textAlign:'center',
        alignItems:'center'
    }
})