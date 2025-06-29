import { api } from "../../Config/api"
import { GET_RESTAURANT_ORDER_FAILURE, GET_RESTAURANT_ORDER_REQUEST, GET_RESTAURANT_ORDER_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./ActionType"

const fetchRestaurantOrder = ({restaurantId, orderStatus, jwt}) => {
    return async (dispatch) => {
        dispatch({type: GET_RESTAURANT_ORDER_REQUEST})
        try{
            const { response } = await api.get(
                `/api/admin/order/restaurant/${restaurantId}`,
                {
                    params: {order_status : orderStatus},
                    headers:{
                        Authorization: `Bearer ${jwt}`
                    }
                }
            )
            dispatch({type: GET_RESTAURANT_ORDER_SUCCESS, payload: response})
            console.log("get restaurant order ",response)
        } catch(error){
            dispatch({type: GET_RESTAURANT_ORDER_FAILURE, payload: error})
            console.log("error ",error)
        }
    }
}

const updateOrderStatus = ({orderId, orderStatus, jwt}) => {
    return async (dispatch) => {
        dispatch({type: UPDATE_ORDER_STATUS_REQUEST})
        try{
            const { response } = await api.put(
                `/api/admin/order/${orderId}/${orderStatus}`,
                {},
                {
                    headers:{
                        Authorization: `Bearer ${jwt}`
                    }
                }
            )
            dispatch({type: UPDATE_ORDER_STATUS_SUCCESS, payload: response})
            console.log("update order status ",response)
        } catch(error){
            dispatch({type: UPDATE_ORDER_STATUS_FAILURE, payload: error})
            console.log("error ",error)
        }
    }
}