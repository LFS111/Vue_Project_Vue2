//import { reqContainerList } from '@/api'
import axios from "axios"
const actions = {
    // async bannerList(context) {
    //     let result = await reqContainerList()
    //     // await axios.get("http://localhost:5000/banner").then((res) => {
    //     //     console.log(res.data);

    //     context.commit('BannerList', result.data)
    //     console.log(result.data)
    //     // });


    // }
    bannerList(context) {
        //  let result = await reqContainerList()
        axios.get("http://localhost:3000/banner").then((res) => {
            console.log(res.data);

            context.commit('BannerList', res.data)

        });


    }
}
const mutations = {
    BannerList(state, el) {
        state.bannerLists = el
    }

}
const state = {
    bannerLists: []
}
const getters = {}


export default {

    actions,
    mutations,
    state,
    getters

}