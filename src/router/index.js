//define router 

import {createRouter,createWebHistory} from 'vue-router'
import home from '../view/home.vue'
import shop from '../components/shop.vue'
import cart from '../components/Cart.vue'
import preview from '../view/preview.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            component:home
        },
        {
            path: '/shop',
            component: shop
        },
        {
            path:'/shop/:id',
            component: preview
        },
        {
            path:'/cart',
            component: cart
        }
    ]
})

export default router