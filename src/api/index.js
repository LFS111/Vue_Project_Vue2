
import requests from "./request";

//三级列表
export const reqCategroyList = () => requests.get('/product/getBaseCategoryList')
//export const reqContainerList = () => requests.get('http://localhost:5000/banner')


//search数据
export const reqSearchList = (params) => requests({
    url: '/list',
    method: 'post',
    data: params
})


export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' })

///cart/addToCart/{ skuId }/{ skuNum }  POST
export const reqShopping = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })
// /api/cart/cartList  get
export const reqCartList = () => requests({ url: "/cart/cartList", method: 'get' })
///api/cart/deleteCart/{skuId}  DELETE
export const reqDeleteCart = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })
///api/cart/checkCart/{skuID}/{isChecked} GET

export const reqCheckCart = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' })
///api/user/passport/sendCode/{phone} get
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })
///user/passport/register post
export const reqPossport = (data) => requests({ url: "/user/passport/register", method: 'post', data })
///api/user/passport/login  post
export const reqLogin = (data) => requests({ url: '/user/passport/login', method: 'post', data })
///user/passport/auth/getUserInfo  get
export const reqUserInfo = () => requests({ url: "/user/passport/auth/getUserInfo", method: 'get' })
///api/user/passport/logout get
export const reqLoginout = () => requests({ url: "/user/passport/logout", method: 'get' })
///api/user/userAddress/auth/findUserAddressList get
export const reqUserAddress = () => requests({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' })
///api/order/auth/trade get
export const reqTrade = () => requests({ url: '/order/auth/trade', method: 'get' })
///api/order/auth/submitOrder?tradeNo={tradeNo}
export const reqSumbit = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, method: 'post', data })
///api/payment/weixin/createNative/{orderId} get
export const reqPayment = (orderId) => requests({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' })
///api/payment/weixin/queryPayStatus/{orderId} get
export const reqPayStatus = (orderId) => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get' })
///api/order/auth/{page}/{limit} get
export const reqOrder = (page, limit) => requests({ url: `/order/auth/${page}/${limit}`, method: 'get' })
