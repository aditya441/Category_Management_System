import { FETCH_PRODUCT,NEW_PRODUCT, GET_CATEGORIES,GET_BRAND} from '../actions/types';

const initialState = {
    products: [],
    categories:[],
    brands:[]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_PRODUCT: 
            return {
                ...state,
                products: action.products
            }
        case GET_CATEGORIES:
            return {
                ...state,
                categories:action.categories
            }
        case GET_BRAND:
            return {
                ...state,
                brands:action.brand
            }
        default:
            return state;
    }
}