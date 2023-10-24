<template>
    <div class="landing">
        <h1>PLAN YOUR ADVENTURE</h1>
        <v-btn to="/shop">Shop Now</v-btn>
    </div>
</template>

<style scoped>
    .landing{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-image: url(https://static.wixstatic.com/media/84770f_93b300330b3742f2b1948ef292a91f27~mv2_d_1920_1279_s_2.png/v1/fill/w_1899,h_1024,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/84770f_93b300330b3742f2b1948ef292a91f27~mv2_d_1920_1279_s_2.png);
        background-position: center;
        background-size: cover;
        align-items: center;
        gap: 20px;
        justify-content: center;
    }
    .landing h1{
        font-size: 70px;
        color: white;
        font-family: 'Times New Roman', Times, serif;
    }
    @media screen and (max-width:600px) {
        .landing h1{
            font-size: 30px;
        }
    }
</style>