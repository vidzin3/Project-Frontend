import { defineStore } from 'pinia';
import axios from 'axios';

export const productList = defineStore('product', {
  state: () => ({
    products: [],
    categorie : 'all',
    search: ""
  }),
  getters:{
    filterProduct(){
      if(this.categorie === `men's clothing`){
        return this.products.filter((products) => products.category === `men's clothing`)
      }else if(this.categorie === 'jewelery'){
        return this.products.filter((products) => products.category === 'jewelery')
      }else if(this.categorie === 'electronics'){
        return this.products.filter((products) => products.category === 'electronics')
      }else if(this.categorie === `women's clothing`){
        return this.products.filter((products) => products.category === `women's clothing`)
      }
      return this.products
    },
    seachProduct(search){
      if(this.search === search){
        return this.products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
      }
      return this.products
    }    
  },
  actions: {
    async getApi() {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        this.products = res.data;
      } 
      catch (error) {
        console.error('Error fetching API:', error);
      }
    },
    deleteProduct(id){
      const index = this.products.findIndex((products) => products.id === id)
      this.products.splice(index ,1)
    },
    updataProductFilter(value){
      this.categorie = value
    }
  },
});
