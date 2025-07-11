import { api } from "../../Config/api"
import { CREATE_MENU_ITEM_FAILURE, CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS, DELETE_MENU_ITEM_FAILURE, DELETE_MENU_ITEM_REQUEST, DELETE_MENU_ITEM_SUCCESS, GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST, GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, SEARCH_MENU_ITEM_FAILURE, SEARCH_MENU_ITEM_REQUEST, SEARCH_MENU_ITEM_SUCCESS, UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST, UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS } from "./ActionType"

export const createMenuItem = ({menu, jwt}) => {
    return async(dispatch) => {
        dispatch({type: CREATE_MENU_ITEM_REQUEST})
        try{
            const { data } = await api.post(
                "/api/admin/food",
                menu, {
                    headers:{
                        Authorization:`Bearer ${jwt}`
                    }
                }
            )
            dispatch({type: CREATE_MENU_ITEM_SUCCESS, payload: data})
            console.log("Create menu item ",data)
        } catch(error){
            dispatch({type: CREATE_MENU_ITEM_FAILURE, payload: error})
            console.log("error ",error)
        }
    }
}

export const getMenuItemsByRestaurantId = (reqData) => {
    return async(dispatch) => {
        dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST})
        try{
            const { data } = await api.get(
                `/api/food/restaurant/${reqData.restaurantId}?vegetarian=${reqData.vegetarian}&seasonal=${reqData.seasonal}&nonveg=${reqData.nonveg}&food_category=${reqData.foodCategory}`,
                {
                    headers:{
                        Authorization:`Bearer ${reqData.jwt}`
                    }
                }
            )
            dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload: data})
            console.log("get menu item ",data)
        } catch(error){
            dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, payload: error})
            console.log("error ",error)
        }
    }
}

export const searchMenuItem = ({keyword, jwt}) => {
    return async(dispatch) => {
        dispatch({type: SEARCH_MENU_ITEM_REQUEST})
        try{
            const { data } = await api.get(
                `/api/food/search?name=${keyword}`,
                {
                    headers:{
                        Authorization:`Bearer ${jwt}`
                    }
                }
            )
            dispatch({type: SEARCH_MENU_ITEM_SUCCESS, payload: data})
            console.log("Search menu item ",data)
        } catch(error){
            dispatch({type: SEARCH_MENU_ITEM_FAILURE, payload: error})
            console.log("error ",error)
        }
    }
}

export const updateMenuItemAvailability = ({ foodId, jwt }) => {
    return async(dispatch) => {
        dispatch({type: UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST})
        try{
            const { data } = await api.put(
                `/api/admin/food/${foodId}`,
                {},
                {
                    headers:{
                        Authorization:`Bearer ${jwt}`
                    }
                }
            )
            dispatch({type: UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS, payload: data})
            console.log("update menu item ",data)
        } catch(error){
            dispatch({type: UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, payload: error})
            console.log("error ",error)
        }
    }
}

export const deleteFoodAction = ({ foodId, jwt }) => {
    return async(dispatch) => {
        dispatch({type: DELETE_MENU_ITEM_REQUEST})
        try{
            const { data } = await api.delete(
                `/api/admin/food/${foodId}`,
                {
                    headers:{
                        Authorization:`Bearer ${jwt}`
                    }
                }
            )
            dispatch({type: DELETE_MENU_ITEM_SUCCESS, payload: data})
            console.log("delete menu item ",data)
        } catch(error){
            dispatch({type: DELETE_MENU_ITEM_FAILURE, payload: error})
            console.log("error ",error)
        }
    }
}