import axios from 'axios'

const GOT_PRODUCTS_FROM_SERVER = 'GOT_PRODUCTS_FROM_SERVER'

export const gotProductsFromServer = products => ({
  type: GOT_PRODUCTS_FROM_SERVER,
  products
})

export const getProductsFromServer = () => {
  return async dispatch => {
    const res = await axios.get(`/api/products`)
    const action = gotProductsFromServer(res.data)
    dispatch(action)
  }
}

const initialState = null

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_PRODUCTS_FROM_SERVER:
      return action.products
    default:
      return state
  }
}

export default productReducer