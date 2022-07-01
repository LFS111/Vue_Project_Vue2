import { reqCartList, reqDeleteCart, reqCheckCart } from '@/api'

const actions = {
    async getCartList({ commit }) {
        let result = await reqCartList();
        if (result.code == 200) {
            commit('GetCartList', result.data)
            //console.log(result)
        }
    },
    async getDeleteList({ commit }, skuId) {
        let result = await reqDeleteCart(skuId)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    async getCheckedList({ commit }, { skuId, isChecked }) {
        let result = await reqCheckCart(skuId, isChecked)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    getAllCheckCart({ dispatch, getters }) {
        let promiseAll = []
        getters.CartList.cartInfoList.forEach(el => {
            let promise = el.isChecked == 1 ? dispatch('getDeleteList', el.skuId) : ""
            promiseAll.push(promise)

        });
        return Promise.all(promiseAll)
    },
    getAllCheckList({ dispatch, getters }, isChecked) {
        let promiseAll = []
        getters.CartList.cartInfoList.forEach((el) => {
            let promise = el.isChecked == 0 ? dispatch('getCheckedList', { skuId: el.skuId, isChecked }) : ''
            promiseAll.push(promise)
        })
        return Promise.all(promiseAll)
    }
}
const mutations = {
    GetCartList(state, val) {
        state.CartList = val
    }
}
const state = { CartList: [] }
const getters = {
    CartList(state) {
        return state.CartList[0] || []
    }
}

export default {
    actions,
    mutations,
    state,
    getters

}