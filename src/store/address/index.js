import { reqUserAddress } from "@/api";
import { reqTrade } from "@/api";


const actions = {
    async getUserAddress({ commit }) {
        let result = await reqUserAddress()
        console.log(result)
        if (result.code == 200) {
            commit('GetUserAddress', result.data)
        }
    },
    async getTrade({ commit }) {
        let result = await reqTrade();
        if (result.code == 200) {
            commit('GetTrade', result.data)
        }
    }
};
const mutations = {
    GetUserAddress(state, userAddress) {
        state.userAddress = userAddress
    },
    GetTrade(state, trade) {
        state.trade = trade;
    }
};
const getters = {

};
const state = {
    userAddress: [],
    trade: {}
};

export default {
    actions,
    mutations,
    getters,
    state
}

