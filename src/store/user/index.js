import { reqGetCode, reqPossport, reqLogin, reqUserInfo, reqLoginout } from '@/api'

import { setToken, getToken, removeToken } from '@/utils/token';

const actions = {
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone);
        console.log(result)
        if (result.code == 200) {
            commit('GetCode', result.data)
            return 'ok'
        }
        else {
            return Promise.reject(new Error('failed'))
        }
    },
    async getPossport({ commit }, data) {
        let result = await reqPossport(data);
        console.log(result)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }

    },
    async getLogin({ commit }, data) {
        let result = await reqLogin(data);
        console.log(result)
        if (result.code == 200) {
            commit('GetLogin', result.data.token)
            setToken(result.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }

    },
    async getUserInfo({ commit }) {
        let result = await reqUserInfo();
        //console.log(result)
        if (result.code == 200) {
            commit('GetUserInfo', result.data)

        }

    },
    async getLoginout({ commit }) {
        let result = await reqLoginout()
        if (result.code == 200) {
            commit('DELETE')
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    }
}
const mutations = {
    GetCode(state, code) {
        state.code = code
    },
    GetLogin(state, token) {
        state.token = token
    },
    GetUserInfo(state, userInfo) {
        state.userInfo = userInfo;
    },
    DELETE(state) {
        state.userInfo = {},
            state.token = ''
        removeToken();

    }
}
const getters = {}
const state = {
    code: '',
    token: getToken(),
    userInfo: {}
}

export default {
    actions,
    mutations,
    getters,
    state,
}