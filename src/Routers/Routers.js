import React, { Component } from 'react'
import { Router, Scene, Stack, Actions, ActionConst } from 'react-native-router-flux'
import { BackHandler, Alert} from 'react-native'

import Login from '../Screens/Login'
import Register from '../Screens/Register';
import Contacts from '../Screens/Contacts';
import AddNewContact from '../Screens/AddNewContact';
import ContactData from '../Screens/ContactData';
import EditContactData from '../Screens/EditContactData';


export default class Routers extends Component{
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backPressed);
     }
     
     componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
     }
     
     BackPressed = () => {
       if(Actions.currentScene == 'login'){
        Alert.alert(
            'Agenda',
            'Você deseja sair?',
            [
              {text: 'Não', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Sim', onPress: () => BackHandler.exitApp()},
            ],
            { cancelable: false });
            return true;
       }
       else{
           Actions.pop()
       }
       return true
     }
    render(){
        return(
            <Router backAndroidHandler={()=>this.BackPressed()}>
                <Stack navigationBarStyle={{backgroundColor:'#2E64FE'}}>
                    <Scene key = 'login' component = {Login} initial hideNavBar={true}/>
                    <Scene key = 'register' component = {Register} />
                    <Scene key = 'contacts' component ={Contacts}   hideNavBar={true} type={ActionConst.RESET}/>
                    <Scene key = 'addnewcontact' component ={AddNewContact}/>
                    <Scene key = 'contactdata' component = {ContactData} />
                    <Scene key = 'editcontactdata' component = {EditContactData} />
                </Stack>     
            </Router>
        )
    }
}