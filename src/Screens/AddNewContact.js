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
         AddNewContacts
} from '../Redux/Actions/AddNewContactAction'


class AddNewContact extends Component{
    
    SendAddNewContact(){
        
        const { email } = this.props
        const { emailContact } = this.props
        const { firstName } = this.props
        const { secondName } = this.props
        const { phoneNumber } = this.props
        const { city } = this.props
        const { houseNumber } = this.props
        const { uf } = this.props
        const { street } = this.props
        const { district } = this.props
        // Chamando a função adiciona contato na Action.
        this.props.AddNewContacts({ email ,emailContact, firstName, secondName, phoneNumber, city, houseNumber, uf, street, district})
    }
    Buttom(){
        if(this.props.loadingAddContact){
            return( <ActivityIndicator style={{marginTop:56}} size = 'large' color = '#2E64FE'/>)
        }
        return(
            <TouchableOpacity onPress={()=> this.SendAddNewContact()}>
                <Text style={stylo.textButtom}>Adicionar</Text>
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
                placeholder = '(XX) XXXX XXXX'
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
    emailContact: state.AddNewContactReducer.emailContact,
    firstName: state.AddNewContactReducer.firstName,
    secondName: state.AddNewContactReducer.secondName,
    phoneNumber: state.AddNewContactReducer.phoneNumber,
    city: state.AddNewContactReducer.city,
    houseNumber: state.AddNewContactReducer.houseNumber,
    uf: state.AddNewContactReducer.uf,
    street: state.AddNewContactReducer.street,
    district: state.AddNewContactReducer.district,
    loadingAddContact: state.AddNewContactReducer.loadingAddContact,
    addContactErro: state.AddNewContactReducer.addContactErro,
    email: state.AuthenticationReducer.email
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
                                        AddNewContacts})
                                        (AddNewContact)

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