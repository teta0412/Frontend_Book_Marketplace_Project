import { api } from "../../component/config/api"
import { CREATE_MENU_ITEM_FAILURE, CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS, DELETE_MENU_ITEM_FAILURE, DELETE_MENU_ITEM_REQUEST, DELETE_MENU_ITEM_SUCCESS, GET_MENU_ITEMS_BY_STORE_ID_FAILURE, GET_MENU_ITEMS_BY_STORE_ID_REQUEST, GET_MENU_ITEMS_BY_STORE_ID_SUCCESS, SEARCH_MENU_ITEM_FAILURE, SEARCH_MENU_ITEM_REQUEST, SEARCH_MENU_ITEM_SUCCESS, UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST, UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS } from "./ActionTypes";

export const createMenuItem = ({menu,jwt}) =>{
    return async (dispatch) =>{
        dispatch({type:CREATE_MENU_ITEM_REQUEST})
        try {
            const {data} = await api.post("/api/admin/book",menu,{
                headers:{
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:CREATE_MENU_ITEM_SUCCESS,payload:data});
            console.log("create menu",data);
        } catch (error) {
            console.log("catch error",error)
            dispatch({type:CREATE_MENU_ITEM_FAILURE,payload:error});
        }
    }
}

export const getMenuItemsByStoreId = (reqData) =>{
    return async (dispatch) =>{
        dispatch({type:GET_MENU_ITEMS_BY_STORE_ID_REQUEST})
        try {
            const { data } = await api.get(`/api/book/store/${reqData.storeId}?available=${reqData.available}
            &comic=${reqData.comic}&novel=${reqData.novel}&book_category=${reqData.bookCategory}`,{
                headers:{
                    Authorization: `Bearer ${reqData.jwt}`,
                },
            });
            dispatch({type:GET_MENU_ITEMS_BY_STORE_ID_SUCCESS,payload:data});
        } catch (error) {
            console.log("catch error",error)
            dispatch({type:GET_MENU_ITEMS_BY_STORE_ID_FAILURE,payload:error});
        }
    }
}


export const searchMenuItem = ({keyword,jwt}) =>{
    return async (dispatch) =>{
        dispatch({type:SEARCH_MENU_ITEM_REQUEST})
        try {
            const {data} = await api.get(`/api/book/search?name=${keyword}`,{
                headers:{
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:SEARCH_MENU_ITEM_SUCCESS,payload:data});
            console.log("data ------",data)
        } catch (error) {
            console.log("catch error",error)
            dispatch({type:SEARCH_MENU_ITEM_FAILURE,payload:error});
        }
    }
}

export const updateMenuItemsAvailability = ({bookId,jwt}) =>{
    return async (dispatch) =>{
        dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST})
        try {
            const {data} = await api.put(`/api/admin/book/${bookId}`,{},{
                headers:{
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS,payload:data});
            console.log("update availability",data)
        } catch (error) {
            console.log("catch error",error)
            dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE,payload:error});
        }
    }
}

export const deleteBookAction = ({bookId, jwt}) =>{
    return async (dispatch) =>{
        dispatch({type:DELETE_MENU_ITEM_REQUEST})
        try {
            const {data} = await api.delete(`/api/admin/book/${bookId}`,{
                headers:{
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:DELETE_MENU_ITEM_SUCCESS,payload:data});
            console.log("delete book success",data)
        } catch (error) {
            console.log("catch error",error)
            dispatch({type:DELETE_MENU_ITEM_FAILURE,payload:error});
        }
    }
}
