import React, { Component } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

import { RegisterUser, ModifyEmail, ModifyPassword, ModifyPasswordConfirm } from '../Redux/Actions/RegisterNewUserAction'

class Register extends Component{
    SendRegisterUser(){

        const { email } = this.props
        const { password } = this.props
        const { passwordConfirm } = this.props
        
        this.props.RegisterUser({email, password, passwordConfirm})
    }
    
    Buttom(){
        if(this.props.loadingRegister){
            return( <ActivityIndicator style={{marginTop:56}} size = 'large' color = '#2E64FE'/>)
        }
        return(
            <TouchableOpacity onPress={()=> this.SendRegisterUser()}>
                <Text style={stylo.textButtom}>Cadastrar</Text>
            </TouchableOpacity>
        )
    }
    render(){
        return(
            <View style={stylo.container}>
                <View style={{justifyContent:'center', flex:1}}>
                    <TextInput
                    style = {stylo.textInputs}
                    underlineColorAndroid = '#2E64FE'
                    placeholder = 'E-mail'
                    placeholderTextColor = '#2E64FE'
                    onChangeText={(text)=> this.props.ModifyEmail(text)}
                    />

                    <TextInput
                    style = {stylo.textInputs}
                    underlineColorAndroid = '#2E64FE'
                    placeholder = 'Password'
                    placeholderTextColor = '#2E64FE'
                    secureTextEntry
                    onChangeText={(text)=> this.props.ModifyPassword(text)}
                    />

                    <TextInput
                    style = {stylo.textInputs}
                    underlineColorAndroid = '#2E64FE'
                    placeholder = 'Confirm Password'
                    placeholderTextColor = '#2E64FE'
                    secureTextEntry
                    onChangeText={(text)=> this.props.ModifyPasswordConfirm(text)}
                    />
                    <Text style={stylo.textError}>{this.props.registerErro}</Text>
                    {this.Buttom()}
                </View>
            </View>
        )
    }
}
const mapStateToProps = state=>({
    email: state.RegisterNewUserReducer.email,
    password: state.RegisterNewUserReducer.password,
    passwordConfirm: state.RegisterNewUserReducer.passwordConfirm,
    registerErro: state.RegisterNewUserReducer.registerErro,
    loadingRegister: state.RegisterNewUserReducer.loadingRegister
})
export default connect(mapStateToProps,{ModifyEmail,
                                        ModifyPassword,
                                        RegisterUser,
                                        ModifyPasswordConfirm
                                        })(Register)

const stylo = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor: 'white'
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
        marginTop: 8,
        color: 'red', 
        textAlign:'center',
        alignItems:'center'
    }
})