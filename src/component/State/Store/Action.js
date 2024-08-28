import { api } from "../../config/api"
import { CREATE_CATEGORY_FAILURE, CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS, CREATE_EVENTS_FAILURE, CREATE_EVENTS_REQUEST, CREATE_EVENTS_SUCCESS, CREATE_STORE_FAILURE, CREATE_STORE_REQUEST, CREATE_STORE_SUCCESS, DELETE_EVENTS_FAILURE, DELETE_EVENTS_REQUEST, DELETE_EVENTS_SUCCESS, DELETE_STORE_FAILURE, DELETE_STORE_REQUEST, DELETE_STORE_SUCCESS, GET_ALL_EVENTS_FAILURE, GET_ALL_EVENTS_REQUEST, GET_ALL_EVENTS_SUCCESS, GET_ALL_STORES_FAILURE, GET_ALL_STORES_REQUEST, GET_ALL_STORES_SUCCESS, GET_STORES_CATEGORY_FAILURE, GET_STORES_CATEGORY_REQUEST, GET_STORES_CATEGORY_SUCCESS, GET_STORES_EVENTS_FAILURE, GET_STORES_EVENTS_REQUEST, GET_STORES_EVENTS_SUCCESS, GET_STORE_BY_ID_FAILURE, GET_STORE_BY_ID_REQUEST, GET_STORE_BY_ID_SUCCESS, GET_STORE_BY_USER_ID_FAILURE, GET_STORE_BY_USER_ID_REQUEST, GET_STORE_BY_USER_ID_SUCCESS, UPDATE_STORE_FAILURE, UPDATE_STORE_REQUEST, UPDATE_STORE_STATUS_FAILURE, UPDATE_STORE_STATUS_REQUEST, UPDATE_STORE_STATUS_SUCCESS, UPDATE_STORE_SUCCESS } from "./ActionTypes";

export const getAllStoresAction = (token) =>{
    return async (dispatch) =>{
        dispatch({type:GET_ALL_STORES_REQUEST})
        try {
            const {data} = await api.get("/api/stores",{
                headers:{
                    Authorization: `Bearer ${token}`,
                },
            });
            dispatch({type:GET_ALL_STORES_SUCCESS,payload:data});
            console.log("all stores",data);
        } catch (error) {
            console.log("catch error",error)
            dispatch({type:GET_ALL_STORES_FAILURE,payload:error});
        }
    }
}

export const getStoreById = (reqData) =>{
    return async (dispatch) =>{
        dispatch({type:GET_STORE_BY_ID_REQUEST})
        try {
            const response = await api.get(`/api/stores/${reqData.storeId}`,{
                headers:{
                    Authorization: `Bearer ${reqData.jwt}`,
                },
            });
            dispatch({type:GET_STORE_BY_ID_SUCCESS,payload:response.data});
        } catch (error) {
            console.log("catch error",error)
            dispatch({type:GET_STORE_BY_ID_FAILURE,payload:error});
        }
    }
}


export const getStoreByUserId = (jwt) =>{
    return async (dispatch) =>{
        dispatch({type:GET_STORE_BY_USER_ID_REQUEST})
        try {
            const {data} = await api.get(`/api/admin/stores/user`,{
                headers:{
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:GET_STORE_BY_USER_ID_SUCCESS,payload:data});
            console.log("get store by user id",data)
        } catch (error) {
            console.log("catch error",error)
            dispatch({type:GET_STORE_BY_USER_ID_FAILURE,payload:error});
        }
    }
}

export const createStore = (reqData) =>{
    return async (dispatch) =>{
        dispatch({type:CREATE_STORE_REQUEST})
        try {
            const {data} = await api.post(`/api/admin/stores`,reqData.data,{
                headers:{
                    Authorization: `Bearer ${reqData.token}`,
                },
            });
            dispatch({type:CREATE_STORE_SUCCESS,payload:data});
            console.log("create store success",data)
        } catch (error) {
            console.log("catch error",error)
            dispatch({type:CREATE_STORE_FAILURE,payload:error});
        }
    }
}

export const updateStore = ({storeId, storeData, jwt}) =>{
    return async (dispatch) =>{
        dispatch({type:UPDATE_STORE_REQUEST})
        try {
            const res = await api.put(`/api/admin/stores/${storeId}`,storeData,{
                headers:{
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:UPDATE_STORE_SUCCESS,payload:res.data});
            console.log("update store success",res.data)
        } catch (error) {
            console.log("catch error",error)
            dispatch({type:UPDATE_STORE_FAILURE,payload:error});
        }
    }
}

export const deleteStore = ({storeId, jwt}) =>{
    return async (dispatch) =>{
        dispatch({type:DELETE_STORE_REQUEST})
        try {
            const res = await api.delete(`/api/admin/stores/${storeId}`,{
                headers:{
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:DELETE_STORE_SUCCESS,payload:res.data});
            console.log("delete store success",res.data)
        } catch (error) {
            console.log("catch error",error)
            dispatch({type:DELETE_STORE_FAILURE,payload:error});
        }
    }
}

export const updateStoreStatus = ({storeId, jwt}) =>{
    return async (dispatch) =>{
        dispatch({type:UPDATE_STORE_STATUS_REQUEST})
        try {
            const res = await api.put(`/api/admin/stores/${storeId}/status`,{},{
                headers:{
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:UPDATE_STORE_STATUS_SUCCESS,payload:res.data});
            console.log("update store status success",res.data)
        } catch (error) {
            console.log("catch error",error)
            dispatch({type:UPDATE_STORE_STATUS_FAILURE,payload:error});
        }
    }
}

export const createEventAction = ({data, jwt, storeId}) =>{
    return async (dispatch) =>{
        dispatch({type:CREATE_EVENTS_REQUEST})
        try {
            const res = await api.post(`/api/admin/events/store/${storeId}`,data,{
                headers:{
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:CREATE_EVENTS_SUCCESS,payload:res.data});
            console.log("create event success",res.data)
        } catch (error) {
            console.log("catch error",error)
            dispatch({type:CREATE_EVENTS_FAILURE,payload:error});
        }
    }
}

export const getAllEvents = ({jwt}) =>{
    return async (dispatch) =>{
        dispatch({type:GET_ALL_EVENTS_REQUEST})
        try {
            const res = await api.get(`/api/events`,{
                headers:{
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:GET_ALL_EVENTS_SUCCESS,payload:res.data});
            console.log("update store success",res.data)
        } catch (error) {
            console.log("catch error",error)
            dispatch({type:GET_ALL_EVENTS_FAILURE,payload:error});
        }
    }
}

export const deleteEventAction = ({eventId, jwt}) =>{
    return async (dispatch) =>{
        dispatch({type:DELETE_EVENTS_REQUEST})
        try {
            const res = await api.delete(`/api/admin/events/${eventId}`,{
                headers:{
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:DELETE_EVENTS_SUCCESS,payload:res.data});
            console.log("update event success",res.data)
        } catch (error) {
            console.log("catch error",error)
            dispatch({type:DELETE_EVENTS_FAILURE,payload:error});
        }
    }
}

export const getStoresEvents = ({storeId, jwt}) =>{
    return async (dispatch) =>{
        dispatch({type:GET_STORES_EVENTS_REQUEST})
        try {
            const res = await api.get(`/api/admin/events/store/${storeId}`,{
                headers:{
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:GET_STORES_EVENTS_SUCCESS,payload:res.data});
            console.log("update store success",res.data)
        } catch (error) {
            console.log("catch error",error)
            dispatch({type:GET_STORES_EVENTS_FAILURE,payload:error});
        }
    }
}

export const createCategoryAction = ({reqData, jwt}) =>{
    return async (dispatch) =>{
        dispatch({type:CREATE_CATEGORY_REQUEST})
        try {
            const res = await api.post(`/api/admin/category`,reqData,{
                headers:{
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:CREATE_CATEGORY_SUCCESS,payload:res.data});
            console.log("create category success",res.data)
        } catch (error) {
            console.log("catch error",error)
            dispatch({type:CREATE_CATEGORY_FAILURE,payload:error});
        }
    }
}

export const getStoresCategory = ({jwt, storeId}) =>{
    return async (dispatch) =>{
        dispatch({type:GET_STORES_CATEGORY_REQUEST})
        try {
            const res = await api.get(`/api/category/store/${storeId}`,{
                headers:{
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:GET_STORES_CATEGORY_SUCCESS,payload:res.data});
        } catch (error) {
            console.log("catch error",error)
            dispatch({type:GET_STORES_CATEGORY_FAILURE,payload:error});
        }
    }
}

