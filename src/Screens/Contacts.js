import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import { Header, Divider} from 'react-native-elements'
import {Icon} from 'react-native-elements'
import { SearchableFlatList } from 'react-native-searchable-list'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import Base64 from 'base-64'
import _ from 'lodash'
import firebase from '../Firebase/Firebase'
import { SignOutUser } from '../Redux/Actions/AuthenticationAction'

class Contacts extends Component{
    constructor(props){
        super(props)
            this.state = {
                data:[],
                    searchTerm: "",
                    searchAttribute: "FirstName",
                    ignoreCase: true,
                    loading: false
            }
    }
    GetData(){
        const { email } = this.props
        // Convertendo o email do usuário para base64
        let emailUserBase64 = Base64.encode(email)

        // Recuperando os dados do BD / Contatos.
        firebase.database().ref(`Users/${emailUserBase64}/Contact`)
            .on('value',snpashot =>{
                console.log(snpashot.val())
                    let dataContact = _.values(snpashot.val())

                    // Ordenando lista de contatos.
                        dataContact.sort(function(a,b){
                            return(a.FirstName > a.FirstName)? 1: ((b.FirstName > a.FirstName) ? -1 : 0)
                            })
                            this.setState({data: dataContact, loading: false})
                                

            })
    }
    componentWillMount(){
        this.setState({loading: true})
    }
    componentDidMount(){
        this.GetData()
    }
    ButtomAddContact(){
        return(
            <TouchableOpacity onPress={()=> Actions.addnewcontact()}>
                <Icon name ='add' size={30} color='white'/>
            </TouchableOpacity>
        )
    }
    SignOut(){
        return(
            <TouchableOpacity onPress={()=> this.props.SignOutUser()}>
                <Text style={{color:'white',fontWeight:'400',textAlign:'center'}}>SAIR</Text>
            </TouchableOpacity>
        )
    }
    RenderList(item){
        return(
            <View>
                <TouchableOpacity onPress={()=> Actions.contactdata({Data: item})}>
                    <Text style={stylo.textName}>{item.FirstName} {item.SecondName}</Text>
                </TouchableOpacity>
                <Divider style={{marginLeft:6 ,marginRight:6}} color = '#424242'/>
            </View>
        )
    }
    RenderDataList(){
        const { data, searchTerm, searchAttribute, ignoreCase } = this.state
        if(this.state.loading){
            return(
                <View style={{justifyContent:'center',alignItems:'center', marginTop: 40}}>
                    <ActivityIndicator size = 'large' color = '#2E64FE'/>
                </View>
            )
        }
        return(
                <SearchableFlatList 
                data={data} searchTerm={searchTerm}
                searchAttribute={searchAttribute} ignoreCase={ignoreCase}
                renderItem={({ item }) => this.RenderList(item)}
                keyExtractor={(item,index)=> index.toString()}
                />
        )
    }
    render(){ 
        return(
            <View style={stylo.container}>
                <Header
                containerStyle={{backgroundColor: '#2E64FE'}}
                placement = 'center'
                leftComponent={this.ButtomAddContact()}
                centerComponent={{ text: 'MEUS CONTATOS', style: { color: '#fff' } }}
                rightComponent={this.SignOut()}
                />
                <View style={{marginTop: 6,
                              marginLeft: 6,
                              marginRight: 6,
                              marginBottom: 8,
                              backgroundColor:'#D8D8D8', 
                              borderRadius: 20}}>
                    <TextInput
                    placeholder = ' Localizar contato'
                    placeholderTextColor = '#2E64FE'
                    onChangeText={searchTerm => this.setState({searchTerm})}
                    />
                </View>
                {this.RenderDataList()}
            </View>
        )
    }
}
const mapStateToProps = state =>({
    email: state.AuthenticationReducer.email,
  })
  
export default connect(mapStateToProps,{SignOutUser})(Contacts)

const stylo = StyleSheet.create({
    container:{
        flex : 1
    },
    textName:{
        padding: 16,
        color: '#424242',
        fontSize:16,
        fontWeight: '600',
        marginLeft: 6,
        justifyContent:'center'
    }
})