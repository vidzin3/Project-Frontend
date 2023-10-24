<script>
    import { onMounted, ref } from 'vue'
    import {useRoute} from 'vue-router'
    import { productList } from '../store/store'
    import {useCartStore} from '../store/cart'
    import { storeToRefs } from 'pinia'
    import axios from 'axios'

    export default {
        setup(){
            const route = useRoute()
            const fillId = ref(route.params.id)
            const product = ref(null)
            const cartStore = useCartStore()
            const store = productList()

            // const getApi = async () =>{
            //     try
            //     {
            //         const res = await axios.get('https://fakestoreapi.com/products')
            //         product.value = res.data.find(product => product.id === parseInt(fillId.value))
            //     }catch(error) {
            //         console.error(error)
            //     }
            // }
            const getApi = async () => {
                try {
                    await store.getApi(); // Fetch data from API
                    product.value = store.products.find(product => product.id === parseInt(fillId.value));
                } catch (error) {
                        console.error(error);
                    }
                }

            const addToCart = (product) =>{
                console.log('Adding to cart:', product);
                cartStore.addToCart(product)   
            }
            onMounted(() => {
                getApi()
            })

            return{
                product,
                addToCart
            }
        },
    }
</script>

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
                <v-card v-if="product" :key="product.id"
                    class="mx-auto mt-8"
                    max-width="90%"
                    >
                    <v-img
                        class="align-end text-white"
                        height="200"
                        :src="product.image"
                    >
                        <v-card-title>Top 10 Australian beaches</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pt-4">
                        Number {{ product.id }}
                    </v-card-subtitle>

                    <v-card-text>
                        <v-card-title class="pa-0">{{ product.title }}</v-card-title>

                        <div>{{ product.description }}</div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="orange" @click="addToCart(product)">
                        Buy
                        </v-btn>
                        <v-btn color="#26c6da" to="/shop">Go Back</v-btn>
                    </v-card-actions>
                </v-card>
                <v-progress-linear v-else indeterminate></v-progress-linear>
            </v-container>
        </v-main>
    </v-app>
</template>