import { request, mockReq } from "."
export const getGoodDetail = (id) => request.get(`/item/${id}`)
export const getGoodRelated = () => mockReq.get('/related')
export const getGoodSuit = () => mockReq.get('/suit')
export const getGoodIntro = () => mockReq.get('/intro')