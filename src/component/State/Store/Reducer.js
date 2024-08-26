import * as actionTypes from "./ActionTypes"
const initialState = {
    stores: [],
    userStore:null,
    store:null,
    loading:false,
    error:null,
    events:[],
    storesEvents:[],
    categories:[]
}

const storeReducer = (state = initialState, action)=>{
    switch (action.type) {
        case actionTypes.CREATE_STORE_REQUEST:
        case actionTypes.GET_ALL_STORES_REQUEST:
        case actionTypes.DELETE_STORE_REQUEST:
        case actionTypes.UPDATE_STORE_REQUEST:
        case actionTypes.GET_STORE_BY_ID_REQUEST:
        case actionTypes.CREATE_CATEGORY_REQUEST:
        case actionTypes.GET_STORES_CATEGORY_REQUEST:
            return {
                ...state,
                loading:true,
                error:null,
            }
        case actionTypes.CREATE_STORE_SUCCESS:
            return{
                ...state,
                loading: false,
                userStore:action.payload
            }
        case actionTypes.GET_ALL_STORES_SUCCESS:
            return{
                ...state,
                loading:false,
                stores:action.payload
            }
        case actionTypes.GET_STORE_BY_ID_SUCCESS:
            return{
                ...state,
                loading:false,
                store:action.payload
            }
        case actionTypes.GET_STORE_BY_USER_ID_SUCCESS:
        case actionTypes.UPDATE_STORE_STATUS_SUCCESS:
        case actionTypes.UPDATE_STORE_SUCCESS:
            return{
                ...state,
                loading:false,
                userStore:action.payload
            } 
        case actionTypes.DELETE_STORE_SUCCESS:
            return{
                ...state,
                error:null,
                loading:false,
                stores: state.stores.filter(
                    (item) => item.id !== action.payload
                ),
                userStore: state.userStore.filter(
                    (item) => item.id !== action.payload
                )
            }
        case actionTypes.CREATE_EVENTS_SUCCESS:
            return{
                ...state,
                loading:false,
                events: [...state.events,action.payload],
                storesEvents: [...state.storesEvents,action.payload]
            }
        case actionTypes.GET_ALL_EVENTS_SUCCESS:
            return {
                ...state,
                loading:false,
                events:action.payload
            }
        case actionTypes.DELETE_EVENTS_SUCCESS:
            return{
                ...state,
                loading:false,
                events: state.events.filter((item)=> item.id !== action.payload),
                storesEvents: state.storesEvents.filter(
                    (item) => item.id !== action.payload
                )
            }
        case actionTypes.CREATE_CATEGORY_SUCCESS:
            return{
                ...state,
                loading:false,
                categories: [...state.categories,action.payload]
            }
        case actionTypes.GET_STORES_CATEGORY_SUCCESS:
            return{
                ...state,
                loading:false,
                categories:action.payload
            }
        case actionTypes.CREATE_STORE_FAILURE:
        case actionTypes.GET_ALL_STORES_FAILURE:
        case actionTypes.DELETE_STORE_FAILURE:
        case actionTypes.UPDATE_STORE_FAILURE:
        case actionTypes.GET_STORE_BY_ID_FAILURE:
        case actionTypes.CREATE_EVENTS_FAILURE:
        case actionTypes.CREATE_CATEGORY_FAILURE:
        case actionTypes.GET_STORES_CATEGORY_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}

export default storeReducer;