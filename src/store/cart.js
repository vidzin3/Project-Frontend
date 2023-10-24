import {defineStore} from 'pinia'

export const useCartStore = defineStore('cart',{
    state:()=>({
        cart:[]
    }),
    actions:{
        addToCart(product){
            this.cart.push(product)
        },
        removeItem(id){
            const index = this.cart.findIndex((product) => product.id === id)
            this.cart.splice(index,1)
        }
    }
})