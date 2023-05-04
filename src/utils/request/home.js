import { request, mockReq } from "."

export const getBaseCategoryList = () => request.get('/product/getBaseCategoryList')

export const getBanner = () => mockReq.get('/banner')

export const getFloor = () => mockReq.get('/floor')

export const getToday = () => mockReq.get('/today')