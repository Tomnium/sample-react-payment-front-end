const initialState = {
  products: []
}

const productReducer = (state = initialState, action) => {
  switch(action.type) {
    case('FETCH_PRODUCTS_START'):
      return {
        ...state,
        isFetchingProducts: true
      }
    case('FETCH_PRODUCTS_SUCCESS'):
      return {
        ...state,
        isFetchingProducts:false,
        products: action.result.data
      }
    case('FETCH_PRODUCTS_FAIL'):
      return {
        ...state,
        isFetchingProducts:false
      }
    default:
      return state
  }
}

export default productReducer;