import { GET_RESTAURANT_ORDER_FAILURE, GET_RESTAURANT_ORDER_REQUEST, GET_RESTAURANT_ORDER_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./ActionType"

const initaialState = {
    isLoading: true,
    error: null, 
    orders: []
}

const restaurantOrderReducer = (state = initaialState, action) => {
    switch(action.type){
        case GET_RESTAURANT_ORDER_REQUEST:
        case UPDATE_ORDER_STATUS_REQUEST:
            return{
                ...state,
                isLoading: true,
                error: null
            }

        case GET_RESTAURANT_ORDER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                orders: action.payload
            }

        case UPDATE_ORDER_STATUS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                orders: state.orders.map((order) => order.id === action.payload.id ? action.payload : order)
            }

        case GET_RESTAURANT_ORDER_FAILURE:
        case UPDATE_ORDER_STATUS_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export default restaurantOrderReducer;