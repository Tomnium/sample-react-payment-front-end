export const initialState = {
  products: []
}

export const productReducer = (state = initialState, action) => {
  switch(action.type) {
    case('PRODUCTS_REQUESTED'):
      return {
        ...state,
        isFetchingProducts: true
      }
    case('PRODUCTS_RECEIVED'):
    console.log(action);
      return {
        ...state,
        isFetchingProducts: false,
        products: action.payload.data
      }
    case('PRODUCTS_FAILED'):
      return {
        ...state,
        isFetchingProducts: false 
      }
    default:
      return state
  }
}