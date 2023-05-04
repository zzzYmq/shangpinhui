import { request } from "."

export const addToCart = (skuId, skuNum) => request.post(`/cart/addToCart/${skuId}/${skuNum}`)

export const getCartList = () => request.get('/cart/cartList')