import React, { Component } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'

import { ModifyEmail, ModifyPassword, Authentication } from '../Redux/Actions/AuthenticationAction'

 class Login extends Component{

    SendAuthentication(){
        const { email } = this.props
        const { password } = this.props
        this.props.Authentication({email, password})
    }
    Buttom(){
        if(this.props.loading){
            return( <ActivityIndicator style={{marginTop:56}} size = 'large' color = '#2E64FE'/>)
        }
        return(
            <TouchableOpacity onPress={()=> this.SendAuthentication()}>
                <Text style={stylo.textButtom}>Acessar</Text>
            </TouchableOpacity>
        )
    }
    render(){
        return(
            <View style={stylo.container}>
                <View style={{justifyContent:'center', flex:1}}>
                    <TextInput
                    value={this.props.email}
                    style = {stylo.textInputs}
                    underlineColorAndroid = '#2E64FE'
                    placeholder = 'E-mail'
                    placeholderTextColor = '#2E64FE'
                    onChangeText={(text)=> this.props.ModifyEmail(text)}
                    />
                    
                    <TextInput
                    value={this.props.password}
                    style = {stylo.textInputs}
                    underlineColorAndroid = '#2E64FE'
                    placeholder = 'Password'
                    placeholderTextColor = '#2E64FE'
                    secureTextEntry
                    onChangeText={(text)=> this.props.ModifyPassword(text)}
                    />
                    {this.Buttom()}
                    <Text style={stylo.textError}>{this.props.erroLogin}</Text>
                    <TouchableOpacity onPress={()=> Actions.register()}
                    >
                            <Text style={stylo.textButtomRegister}>Não tem cadastro? Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const mapStateToProps = state =>({
    email: state.AuthenticationReducer.email,
    password: state.AuthenticationReducer.password,
    loading: state.AuthenticationReducer.loading,
    erroLogin: state.AuthenticationReducer.erroLogin,
})

export default connect(mapStateToProps,{ ModifyEmail,
                                         ModifyPassword, 
                                         Authentication})
                                         (Login)

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
    textButtomRegister:{
        marginTop:50,
        padding: 10,
        textAlign:'center',
        color:'#2E64FE',
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