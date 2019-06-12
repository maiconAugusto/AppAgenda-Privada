import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Icon} from 'react-native-elements'
import { connect } from 'react-redux'
import { DeleteMyContact } from '../Redux/Actions/DeleteContactAction'
import { Actions } from 'react-native-router-flux';
import call from 'react-native-phone-call'

class ContactData extends Component{

    DeletContact(){
       
        // Recebendo dados do contato via props.
        const keycontact = this.props.Data.keyContact
        // Recebendo dados do usuário via props.
        const { email } = this.props
        // Chamando a função remove contato na Action.
        this.props.DeleteMyContact({ email, keycontact})
    }

    //Um alert dispara para o usúario comfirmar a remoção do contado
    DeleteConfirm(){
        Alert.alert(
            'Deletar.',
            'Deseja excluir esse contato?',
            [
              {text: 'Não', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Sim', onPress: () => this.DeletContact()},
            ],{ cancelable: false })
    }
    
    // Função envia os dados do contato para fazer chamada.
    Call(){
        const args = {
            number: this.props.Data.PhoneNumber,
            prompt: false,
          };
        call(args).catch(console.error);
    }
    render(){
        
        return(
            <View style={stylo.container}>
                <View style={stylo.avatarContact}>
                        <View style={{flexDirection:'row', justifyContent: 'flex-end', marginTop: 6, marginRight: 4}}>
                            <TouchableOpacity onPress={()=> Actions.editcontactdata({Data: this.props.Data})}>
                                <Icon iconStyle={{marginRight: 20}} name  = 'create' size = {25} color = '#088A08'/>
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress={()=> this.DeleteConfirm()}>
                                <Icon name = 'delete' size ={25} color = 'red'/>
                            </TouchableOpacity>
                        </View>
                    <Icon name = 'person' size= {100} color = '#424242'/>
                </View>
                <View style={stylo.dataContact}>
                    <View style={stylo.areaInfo}>
                        <Icon name = 'person-outline' size={30} color = '#424242'/>
                        <Text style={{fontSize: 16, color:'#424242', fontWeight:'600'}}> {this.props.Data.FirstName} {this.props.Data.SecondName}</Text>
                    </View>

                    <View style={stylo.areaInfo}>
                        <Icon name = 'phone' size={30} color = '#424242'/>
                        <Text style={{fontSize: 16, color:'#424242', fontWeight:'600'}}> {this.props.Data.PhoneNumber}</Text>
                    </View>

                    <View style={stylo.areaInfo}>
                        <Icon name = 'location-on' size={30} color = '#424242'/>
                        <View style={{flexDirection:'column'}}>
                            <Text style={{fontSize: 16, color:'#424242', fontWeight:'600'}}> {this.props.Data.City} {this.props.Data.Uf}</Text>
                            <Text style={{fontSize: 16, color:'#424242', fontWeight:'600'}}> {this.props.Data.District}</Text>
                            <Text style={{fontSize: 16, color:'#424242', fontWeight:'600'}}> {this.props.Data.Street} {this.props.Data.Number}</Text>
                        </View>
                    </View>

                    <View style={stylo.areaInfo}>
                        <Icon name = 'mail-outline' size={30} color = '#424242'/>
                        <Text style={{fontSize: 16, color:'#424242', fontWeight:'600'}}> {this.props.Data.Email}</Text>
                    </View>

                    <View style={{marginTop: 8, alignItems:'center'}}>
                            <TouchableOpacity onPress={()=>this.Call()}>
                                <Icon name = 'phone' size = {60} color = '#088A08'/>
                            </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
const mapStateToProps = state =>({
    email: state.AuthenticationReducer.email,
})

export default connect(mapStateToProps,{DeleteMyContact})(ContactData)

const stylo = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    avatarContact:{
        flex: 2,
        backgroundColor: '#A9D0F5'
    },
    dataContact:{
        flex: 5,
    },
    areaInfo:{
        flexDirection:'row',
        alignItems:'center', 
        padding: 10, 
        backgroundColor:'#F2F2F2',
        marginTop:5,
        marginRight:5,
        marginLeft: 5,
        borderWidth: 1, 
        borderColor:'#424242'
    }

})