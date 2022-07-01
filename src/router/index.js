import VueRouter from "vue-router";
import routes from "./routes";
import Vue from 'vue'
import store from '@/store'
Vue.use(VueRouter)



const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    }
})

let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(location, () => { }, () => { })
    }
}
router.beforeEach(async (to, from, next) => {
    // next()
    if (store.state.user.token) {
        if (to.path == '/login') {
            next('/home')
        } else {
            if (store.state.user.userInfo.name) {
                next()
            } else {
                try {
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    await store.dispatch('getLoginout')
                    next('/login')
                }
            }
        }
    } else {
        //没有令牌
        //tp.path.indexOf('/trade')!=-1
        // if (to.path == '/trade') {
        //     next('/login')
        // } else if (to.path == '/pay') { //tp.path.indexOf('/pay')!=-1
        //     next('/login')
        // } else if (to.path == '/paysuccess') {
        //     next('/login')
        // } else if (to.path == '/center/myorder') { //tp.path.indexOf('/center')!=-1          
        //     next('/login')
        //     if (store.state.user.userInfo.name) {
        //         next(to.path)
        //     }
        // } else {
        if (to.path.indexOf('/trade') != -1 || to.path.indexOf('/pay') != -1 || to.path.indexOf('/center') != -1) {
            next(`/login?redirect=${to.path} `)
        }
        else { next() }
    }
})
router.afterEach((to) => {
    document.title = to.meta.title
})

export default router