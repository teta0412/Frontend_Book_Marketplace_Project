import {api} from '../../config/api'
import { GET_STORE_ORDER_FAILURE, GET_STORE_ORDER_REQUEST, GET_STORE_ORDER_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from './ActionTypes'

export const updateOrderStatus = ({orderId, orderStatus, jwt}) => {
    return async(dispatch) => {
        try {
            dispatch({type:UPDATE_ORDER_STATUS_REQUEST})
            const res = await api.put(`/api/admin/orders/${orderId}/${orderStatus}`,{},{
                headers:{
                    Authorization: `Bearer ${jwt}`
                }
            })
            const updatedOrder = res.data
            console.log("updated order",updatedOrder)
            dispatch({
                type:UPDATE_ORDER_STATUS_SUCCESS,payload:updatedOrder
            })
        } catch (error) {
            console.log('catch error',error)
            dispatch({type:UPDATE_ORDER_STATUS_FAILURE,error})
        }
    }
}

export const fetchStoreOrder = ({storeId, orderStatus, jwt}) => {
    return async(dispatch) => {
        try {
            dispatch({type:GET_STORE_ORDER_REQUEST})
            const res = await api.get(`/api/admin/order/store/${storeId}`,{
                params:{order_status:orderStatus}
            },{
                headers:{
                    Authorization: `Bearer ${jwt}`
                }
            })
            const orders = data;
            console.log("stores order -----",orders)
            dispatch({
                type:GET_STORE_ORDER_SUCCESS,payload:orders
            })
        } catch (error) {
            console.log('catch error',error)
            dispatch({type:GET_STORE_ORDER_FAILURE,error})
        }
    }
}