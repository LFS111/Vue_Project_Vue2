import { reqGoodsInfo } from "@/api"
import { reqShopping } from "@/api"
import { getUuid } from '@/utils/uuid_token'
const actions = {
    async getGoodsInfo({ commit }, skuid) {
        let result = await reqGoodsInfo(skuid)
        if (result.code == 200) {
            commit("GetGoodsInfo", result.data)
        }
    },
    async getShopping({ commit }, { skuId, skuNum }) {
        let result = await reqShopping(skuId, skuNum)
        // console.log(result)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    }
}
const mutations = {
    GetGoodsInfo(state, val) {
        state.goodsInfo = val
    }
}
const state = {
    goodsInfo: {},
    uuid: getUuid()
}
const getters = {
    categoryView(state) {
        return state.goodsInfo.categoryView || {}
    },
    skuInfo(state) {
        return state.goodsInfo.skuInfo || {}
    },
    spuSale(state) {
        return state.goodsInfo.spuSaleAttrList || []
    }
}


export default {
    actions,
    getters,
    state,
    mutations
}