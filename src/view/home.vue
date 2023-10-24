<script setup>
    import {} from 'vue-router'
    import {ref} from 'vue'
    import landingPage from '../components/landingPage.vue';
    import footerPage from '../components/footerPage.vue';

    const drawer = ref(null)

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
            <landingPage />
            <footerPage />
        </v-main>
    </v-app>
</template>