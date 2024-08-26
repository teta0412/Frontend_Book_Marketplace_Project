import { GET_USERS_NOTIFICATION_SUCCESS, GET_USER_ORDERS_FAILURE, GET_USER_ORDERS_REQUEST, GET_USER_ORDERS_SUCCESS } from "./ActionTypes";

const initialState = {
    loading:false,
    orders:[],
    error:null,
    notifications:[]
}

export const orderReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case GET_USER_ORDERS_REQUEST:
            return {...state,error:null,loading:true}
        case GET_USER_ORDERS_SUCCESS:
            return {...state,error:null,loading:false,orders:payload}
        // case GET_USERS_NOTIFICATION_SUCCESS:
        //     return {...state,notifications:payload,error:null,loading:false}
        case GET_USER_ORDERS_FAILURE:
            return {...state,error:payload,loading:false} 
            break;
    
        default:
            return state;
    }
}
