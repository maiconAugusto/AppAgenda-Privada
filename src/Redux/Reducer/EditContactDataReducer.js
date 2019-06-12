

const INITIAL_STATE = {
    emailContactEdit: null,
    firstName: null,
    secondName: null,
    phoneNumber: null,
    city: null,
    houseNumber: null,
    uf: null,
    street: null,
    district: null,
    loadingEdit: false,
    addContactErro: null
}

export default(state = INITIAL_STATE, action)=>{
console.log(action)
    if(action.type == 'ModifyEmailContactEdit'){
        return{...state,  emailContactEdit: action.payload}}
    
    if(action.type == 'ModifyLoadingEditContac'){
        return{...state, loadingEdit: true}}

    if(action.type == 'ModifyNameContactEdit'){
        return{...state, firstName: action.payload}}

    if(action.type == 'ModifyLastNameContactEdit'){
        return{...state, secondName: action.payload}}

    if(action.type == 'ModifyCityContactEdit'){
        return{...state, city: action.payload}}

    if(action.type == 'ModifyStreetContactEdit'){
        return{...state, street: action.payload}}

    if(action.type == 'ModifyHouseNumberContactEdit'){
        return{...state, houseNumber: action.payload}}

    if(action.type == 'ModifyDistrictContactEdit'){
        return{...state, district: action.payload}}

    if(action.type == 'ModifyPhoneNumberContactEdit'){
        return{...state, phoneNumber: action.payload}}
    
    if(action.type == 'ModifyUfContactEdit'){
        return{...state, uf: action.payload}
    }
    
    if(action.type == 'AddContactErro'){
        return{...state, addContactErro: action.payload }}
    
    if(action.type == 'ModifyEditContacSucess'){
        return{...state,loadingEdit: false,
                        emailContactEdit: null,
                        firstName: null,
                        secondName: null,
                        phoneNumber: null,
                        city: null,
                        houseNumber: null,
                        uf: null,
                        street: null,
                        district: null,}
    }
     
    return state
}