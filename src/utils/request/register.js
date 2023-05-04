import { request } from "."

export const getCode = (phone) => request.get(`/user/passport/sendCode/${phone}`)

export const submitRegForm = (data) => request.post('/user/passport/register', data)
