import { FETCH_PRODUCT,NEW_PRODUCT,GET_CATEGORIES,GET_BRAND} from './types';

export  const getProducts = (data) => {
    return {
        type: FETCH_PRODUCT,
        products: data
    }
}
export const getCategories = (data) => {
    return {
        type:GET_CATEGORIES,
        categories:data
    }
}

export const getBrand = (data) => {
    return {
        type:GET_BRAND,
        brand:data
    }
}