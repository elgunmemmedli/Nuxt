<template>
  <div v-if="data" >
    <!-- Page Main Section -->
    <SectionsHomeDiscover />

    <!-- Statistic - Counts Sections -->
    <SectionsHomeStatics />

    <!-- Crypto Title Section -->
    <SectionsHomeCrypto/>

    <!-- Counts - Calculator Section -->
    <SectionsHomeCalculator />

    <!-- Crypto Title Section -->
    <SectionsHomeCrypto2 />

    <!-- Team Info Section -->
    <SectionsHomeTeamInfo />

    <!-- RoadMap Section -->
    <SectionsHomeRoadMap />

    <!-- Question Section -->
    <SectionsHomeQuestions />

    <!-- Join Our Community Section -->
    <SectionsHomeCommunity />
  </div>
</template>


<script setup>

import { useStore } from 'vuex';
import {useAsyncData, useRuntimeConfig} from "nuxt/app";




const store = useStore();

const runtimeConfig = useRuntimeConfig();
const base_url = runtimeConfig.public.apiUrl;

definePageMeta({
  layout: 'default'
})

const { data, pending, error, refresh } = await useAsyncData(
    'products',
    async () => {

      store.commit('loading/loadingUpdate', true);
      const result = {
        products_arr : [],
        products_one : {}

      }

      result.products_arr = await $fetch( base_url + 'products');
      result.products_one = await $fetch(base_url + 'products/1');
      store.commit('loading/loadingUpdate', false);
      return result;
    }

);


onMounted(()=>{
  store.commit('products/productsUpdate', data.value.products_arr);
})





</script>
