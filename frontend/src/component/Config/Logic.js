export const isPresentInFavorites = (favorites, restaurant) => {
    for(let item of favorites){
        if(restaurant.is === item.id){
            return true;
        }
    }
    return false;
}