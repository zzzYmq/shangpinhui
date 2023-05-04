import { request, mockReq } from "."

export const getList = (query) => request.post("/list", query)

export const getHotSale = () => mockReq.get('/hotsale')