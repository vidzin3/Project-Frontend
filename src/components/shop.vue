<script>
  import { productList } from '../store/store'
  import {computed, onMounted, watch} from 'vue'
  import {storeToRefs} from 'pinia'
  import { ref } from 'vue'
  import {useRouter} from 'vue-router'
  import { all } from 'axios'
  import { useCartStore } from '../store/cart'

  export default {
    setup() {
      const product = computed(() => store.filterProduct)
      const store = productList()
      const {filterProduct} = storeToRefs(store)
      const loading = ref(true)
      const {deleteProduct,updataProductFilter} = store
      const cart = useCartStore()
      const search = ref("")

      onMounted(async ()=>{
        try{
          await store.getApi()
          handleSearch()
        }catch (error) {
          console.error(error)
        }finally{
          loading.value = false
        }
      })

      const addToCart = (product) =>{
        cart.addToCart(product)
      }

      // watch(search,()=>{
      //   product.value = filterProduct.filter(t => t.title.toLowerCase().includes(search.value.toLowerCase()))
      //   console.log("fdsfsd")
      // })

      const handleSearch = () => {
        product.value = store.products.filter(t => t.title.toLowerCase().includes(search.value.toLowerCase()))
      }

      const router = useRouter()
      const drawer = ref(null)

      return {
        product,
        loading,
        router,
        deleteProduct,
        updataProductFilter,
        filterProduct,
        drawer,
        addToCart,
        handleSearch
      }
    },
  }
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-list-item to="/">Home</v-list-item>
      <v-list-item to="/shop">Shop</v-list-item>
      <v-list-item to="/cart">Cart</v-list-item>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer">
      <v-sheet class="pa-3">Category</v-sheet>
      <v-divider></v-divider>
      <div class="d-flex flex-column">
        <v-list-item @click="() => updataProductFilter('all')">all</v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="() => updataProductFilter(`men's clothing`)">Men</v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="() => updataProductFilter('jewelery')">jewelery</v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="() => updataProductFilter('electronics')">electronics</v-list-item>
        <v-divider></v-divider>   
        <v-list-item @click="() => updataProductFilter(`women's clothing`)">women's clothing</v-list-item>
      </div>
      <v-divider></v-divider>
    </v-navigation-drawer>
    <v-main>
      <v-progress-linear v-if="loading" indeterminate></v-progress-linear>
      <v-container fluid>
        <!-- <v-row>
          <v-col>
            <input v-model="search" type="search" class="w-100 border pa-3" placeholder="Search Product">
          </v-col>
        </v-row> -->
        <v-row>
          <v-col v-for="pro in filterProduct" :key="pro.id" cols="12" lg="4" md="6" sm="12" xs="12" >
            <v-card>
              <v-img :src="pro.image" :height="200"></v-img>
              <v-card :title="pro.title" :subtitle="`${pro.price} $ ${pro.category}`">
                <v-btn class="mr-3 ml-3 mb-4" @click="() => deleteProduct(pro.id)">Delete</v-btn>
                <v-btn class="mr-3 ml-3 mb-4" @click="() => addToCart(pro)">BUY</v-btn>
                <v-btn class="mr-3 ml-3 mb-4" @click="router.push(`/shop/${pro.id}`)">Preview</v-btn>
              </v-card>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>