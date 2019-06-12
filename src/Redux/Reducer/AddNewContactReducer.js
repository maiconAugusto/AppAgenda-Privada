
const INITIAL_STATE = {
    emailContact: null,
    firstName: null,
    secondName: null,
    phoneNumber: null,
    city: null,
    houseNumber: null,
    uf: null,
    street: null,
    district: null,
    loadingAddContact: false,
    addContactErro: null
}

export default(state = INITIAL_STATE, action)=>{
console.log(action)
    if(action.type == 'ModifyEmailContact'){
        return{...state, emailContact: action.payload}}
    
    if(action.type == 'ModifyLoadingAddContact'){
        return{...state, loadingAddContact: true}}

    if(action.type == 'ModifyName'){
        return{...state, firstName: action.payload}}

    if(action.type == 'ModifyLastName'){
        return{...state, secondName: action.payload}}

    if(action.type == 'ModifyCity'){
        return{...state, city: action.payload}}

    if(action.type == 'ModifyStreet'){
        return{...state, street: action.payload}}

    if(action.type == 'ModifyHouseNumber'){
        return{...state, houseNumber: action.payload}}

    if(action.type == 'ModifyDistrict'){
        return{...state, district: action.payload}}

    if(action.type == 'ModifyPhoneNumber'){
        return{...state, phoneNumber: action.payload}}
    
    if(action.type == 'ModifyUf'){
        return{...state, uf: action.payload}
    }
    
    if(action.type == 'AddContactErro'){
        return{...state, addContactErro: action.payload, loadingAddContact: false }}
     
    if(action.type == 'AddContactSucess'){
        return{...state,loadingAddContact: false, 
                        emailContact: null,
                        firstName: null,
                        secondName: null,
                        phoneNumber: null,
                        city: null,
                        houseNumber: null,
                        uf: null,
                        street: null,
                        district: null,
                    }
    }
    return state
}