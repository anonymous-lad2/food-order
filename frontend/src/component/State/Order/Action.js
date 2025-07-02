import { api } from "../../Config/api"
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_USERS_ORDER_FAILURE, GET_USERS_ORDER_REQUEST, GET_USERS_ORDER_SUCCESS } from "./ActionType"

export const createOrder = (reqData) => {
    return async (dispatch) => {
        dispatch({type: CREATE_ORDER_REQUEST})
        try{
            const { data } = await api.post(
                `/api/order`,
                reqData.order,{
                    headers:{
                        Authorization: `Bearer ${reqData.jwt}`
                    }
                }
            )
            if(data.paymentUrl){
                window.location.href = data.paymentUrl;
            }
            dispatch({type: CREATE_ORDER_SUCCESS, payload: data})
            console.log("create order ",data)
        } catch(error){
            dispatch({type: CREATE_ORDER_FAILURE, payload: error})
            console.log("error ",error)
        }
    }
}

export const getUsersOrders = (jwt) => {
    return async (dispatch) => {
        dispatch({type: GET_USERS_ORDER_REQUEST})
        try{
            const { data } = await api.get(
                `/api/order/user`,
                {
                    headers:{
                        Authorization: `Bearer ${jwt}`
                    }
                }
            )
            dispatch({type: GET_USERS_ORDER_SUCCESS, payload: data})
            console.log("get order ",data)
        } catch(error){
            dispatch({type: GET_USERS_ORDER_FAILURE, payload: error})
            console.log("error ",error)
        }
    }
}
