import { reqCategroyList } from '@/api'
import axios from 'axios'

const actions = {
    async categoryList(context) {
        let result = await reqCategroyList();
        let results = result.data.slice(0, 16)
        if (result.code == 200) {

            context.commit('CategoryList', results)
        }
    },
    floorList(context) {
        //  let result = await reqContainerList()
        axios.get("http://localhost:3000/floor").then((res) => {
            console.log(res.data);

            context.commit('FloorList', res.data)

        });


    }
}
const mutations = {
    CategoryList(state, val) {
        state.categoryList = val
        //console.log(state.categoryList)
    },
    FloorList(state, val) {
        state.floorLists = val
    }
}
const state = { categoryList: [], floorLists: [] }
const getters = {}




export default {
    actions,
    mutations,
    state,
    getters

}