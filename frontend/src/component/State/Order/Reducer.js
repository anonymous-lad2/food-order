import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_USERS_ORDER_FAILURE, GET_USERS_ORDER_REQUEST, GET_USERS_ORDER_SUCCESS } from "./ActionType"

const initialState = {
    loading: false,
    orders: [],
    error: null
}

export const orderReducer = (state= initialState, action) => {
    switch(action.type){
        case GET_USERS_ORDER_REQUEST:
        case CREATE_ORDER_REQUEST:
            return{
                ...state,
                loading: true,
                error: null
            }

        case GET_USERS_ORDER_SUCCESS:
            return{
                ...state,
                error: null,
                loading: false,
                orders: action.payload
            }

        case CREATE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                // append the newly created order to the existing orders
                orders: [action.payload, ...state.orders],
                error: null,
            };

        case GET_USERS_ORDER_FAILURE:
        case CREATE_ORDER_FAILURE:
            return{
                ...state,
                error: action.payload,
                loading: false
            }

        default:
            return state
    }
}