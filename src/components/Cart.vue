<template>
    <v-app>
        <v-app-bar>
            <div class="d-flex justify-center w-100">
                <v-list-item to="/">Home</v-list-item>
                <v-list-item to="/shop">Shop</v-list-item>
                <v-list-item to="/cart">cart</v-list-item>
            </div>
        </v-app-bar>
        <v-main>
            <v-container fluid>
                <v-row>
                    <v-col v-if="cart.length > 0" v-for="item in cart" title="Your Cart"  cols="12">
                        <v-card 
                            color="#1F7087"
                            theme="dark"
                        >
                            <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-title class="text-h5">
                                    {{item.title}}
                                </v-card-title>
                                <v-card-subtitle>{{ item.category }}</v-card-subtitle>
                                <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                                <v-card-actions>
                                    <v-btn @click="removeItem(item.id)"
                                        class="ms-2"
                                        variant="outlined"
                                        size="small"
                                    >
                                        REMOVE CART
                                    </v-btn>
                                    <v-btn :to="`/shop/${item.id}`"
                                        class="ms-2"
                                        variant="outlined"
                                        size="small"
                                    >
                                        GO BACK
                                    </v-btn>
                                </v-card-actions>
                            </div>
                            <v-avatar
                                class="ma-3"
                                size="125"
                                rounded="0"
                            >
                                <v-img :src="item.image"></v-img>
                            </v-avatar>
                            </div>
                        </v-card>
                    </v-col>
                    <v-card v-else title="Your Cart is Empty"></v-card>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import { ref } from 'vue'
    import {} from 'vue-router'
    import {useCartStore} from '../store/cart'

    export default {
        setup(){
            const loading = ref(false)
            const useStore = useCartStore()

            const cart = ref(useStore.cart)

            const removeItem = (id) =>{
                useStore.removeItem(id)
            }

            return{
                cart,
                removeItem,
                loading
            }
        }
    }
</script>