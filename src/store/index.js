import Vuex from 'vuex'
import Vue from 'vue'
import home from '@/store/home'
import search from "@/store/search"
import listContainer from "@/store/listContainer"
import detail from "@/store/detail"
import cartList from "@/store/cartList"
import user from "@/store/user"
import address from "@/store/address"


Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        home,
        search,
        listContainer,
        detail,
        cartList,
        user,
        address
    }
})