import { reqSearchList } from '@/api/index'
const actions = {
    async getSearchList(context, params = {}) {
        let result = await reqSearchList(params);
        console.log(result, '@@@')
        if (result.code == 200) {

            context.commit("GetSearchList", result.data)
            //console.log('这里是actions', result.data)
        }
    }
}
const mutations = {
    GetSearchList(state, val) {
        state.searchList = val
    }
}
const state = { searchList: {} }
const getters = {
    attrsList(state) {
        return state.searchList.attrsList || []
    },
    goodsList(state) {
        return state.searchList.goodsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList || []
    }
}


export default {

    actions,
    mutations,
    state,
    getters

}