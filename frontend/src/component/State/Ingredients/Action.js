import { api } from "../../Config/api"
import { CREATE_INGREDIENT_CATEGORY_FAILURE, CREATE_INGREDIENT_CATEGORY_REQUEST, CREATE_INGREDIENT_CATEGORY_SUCCESS, CREATE_INGREDIENT_FAILURE, CREATE_INGREDIENT_REQUEST, CREATE_INGREDIENT_SUCCESS, GET_INGREDIENT_CATEGORY_FAILURE, GET_INGREDIENT_CATEGORY_REQUEST, GET_INGREDIENT_CATEGORY_SUCCESS, GET_INGREDIENTS, UPDATE_STOCK } from "./ActionType"


const getIngrdientOfRestaurant = ({id, jwt}) => {
    return async (dispatch) => {
        try{
            const { data } = await api.get(
                `/api/admin/ingredients/restaurant/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    }
                }
            )
            dispatch({type: GET_INGREDIENTS, payload: data})
            console.log("get ingredients ", data)
        } catch(error){
            console.log("error", error)
        }
    }
}


const createIngredient = ({reqData, jwt}) => {
    return async (dispatch) => {
        dispatch({type: CREATE_INGREDIENT_REQUEST})
        try{
            const { data } = await api.post(
                `/api/admin/ingredients`,
                reqData,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    }
                }
            )
            dispatch({type: CREATE_INGREDIENT_SUCCESS, payload: data})
            console.log("create ingredient ",data)
        } catch(error){
            dispatch({type: CREATE_INGREDIENT_FAILURE, payload: error})
            console.log("error" ,error)
        }
    }
}

const createIngredientCategory = ({reqData, jwt}) => {
    return async (dispatch) => {
        dispatch({type: CREATE_INGREDIENT_CATEGORY_REQUEST})
        try{
            const { data } = await api.post(
                `/api/admin/ingredients/category`,
                reqData,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    }
                }
            )
            dispatch({type: CREATE_INGREDIENT_CATEGORY_SUCCESS, payload: data})
            console.log("create ingredient category ",data)
        } catch(error){
            dispatch({type: CREATE_INGREDIENT_CATEGORY_FAILURE, payload: error})
            console.log("error" ,error)
        }
    }
}

const getIngredientCategory = ({id, jwt}) => {
    return async (dispatch) => {
        dispatch({type: GET_INGREDIENT_CATEGORY_REQUEST})
        try{
            const { data } = await api.get(
                `/api/admin/ingredients/restaurant/${id}/category`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    }
                }
            )
            dispatch({type: GET_INGREDIENT_CATEGORY_SUCCESS, payload: data})
            console.log("get ingredient category ",data)
        } catch(error){
            dispatch({type: GET_INGREDIENT_CATEGORY_FAILURE, payload: error})
            console.log("error" ,error)
        }
    }
}

export const updateStockOfIngredient = ({id, jwt}) => {
    return async (dispatch) => {
        try{
            const { data } = await api.put(
                `/api/admin/ingredients/${id}/stock`,
                {},
                {
                    headers:{
                        Authorization: `Bearer ${jwt}`
                    }
                }
            )

            dispatch({type: UPDATE_STOCK, payload: data})
            console.log("update stock ",data)
        } catch(error){
            console.log("error ",error)
        }
    }
}