
// import Search from '@/pages/Search'
// import Login from '@/pages/Login'
// import Register from '@/pages/Register'

// import Center from '@/pages/Center'
// import MyOrder from '@/pages/Center/MyOrder'
// import GroudOrder from '@/pages/Center/GroudOrder'
export default
    [{
        path: '/shopcart',
        component: () => import('@/pages/ShopCart'),
        meta: {
            isFoot: true,
            title: "购物车",
        },

    },
    {
        path: '/paysuccess',
        component: () => import('@/pages/PaySuccess'),
        meta: {
            isFoot: true,
            title: "支付成功",
        }

    },
    {
        path: '/center',
        component: () => import('@/pages/Center'),
        meta: {
            isFoot: true,
            title: "个人中心",
        },
        children: [
            {
                path: 'myorder',
                component: () => import('@/pages/Center/MyOrder'),
                meta: {
                    isFoot: true,
                    title: "我的订单",
                },

            }, {
                path: 'groudorder',
                component: () => import('@/pages/Center/GroudOrder'),
                meta: {
                    isFoot: true,
                    title: "我的团购",
                },
            }, {
                path: '/center',
                redirect: '/center/myorder'


            }
        ]

    },
    {
        path: '/pay',
        component: () => import('@/pages/Pay'),
        meta: {
            isFoot: true,
            title: "支付",
        },
        beforeEnter: (to, from, next) => {
            if (from.path == '/trade') {
                next()
            } else {
                next(false)
            }
        }

    },
    {
        path: '/trade',
        component: () => import('@/pages/Trade'),
        meta: {
            isFoot: true,
            title: "交易",
        },
        beforeEnter: (to, from, next) => {
            if (from.path == '/shopcart') {
                next()
            } else {
                next(false)
            }
        }

    },

    {
        path: '/addCratSuccess',
        component: () => import('@/pages/AddCartSuccess'),
        meta: {
            isFoot: true,
            title: "购物车",
        }

    },
    {
        path: '/home',
        component: () => import('@/pages/Home'),
        meta: {
            isFoot: true,
            title: "首页",
        }

    },
    {
        path: '/detail/:skuId',
        component: () => import('@/pages/Detail'),
        meta: {
            title: "详情"
        }
    },
    {
        path: '/login',
        component: () => import('@/pages/Login'),
        meta: {
            isFoot: false,
            title: "登录",
        }

    },
    {

        name: "search",
        path: '/search/:keyword?',
        component: () => import('@/pages/Search'),
        meta: {
            isFoot: true,
            title: "搜索",
        }


    },
    {
        path: '/register',
        component: () => import('@/pages/Register'),
        meta: {
            isFoot: false,
            title: "注册",
        }


    },
    //重定向 在项目跑起来的时候，访问/，立马让她定向到首页
    {
        path: '*',
        redirect: '/home'


    }
    ]
