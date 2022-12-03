<template>
    <div v-for="(item ,index) of products"  :key="item.id" class="home_crypto_indicators">
      <div class="indicators_div d-flex">
        <div class="indicators_top">
          <img src="assets/img/lunacoin.png" alt="chart_img" />
        </div>
        <div class="ms-3 indicators_bottom">
          <h2 class="text-white"> {{item.title}} </h2>
          <span>(-2.45%)</span>
          <h5 class="text-white">USD 1.12562</h5>
        </div>
      </div>
      <div class="mt-3">
        <img style="width: 90%" src="assets/img/c_1.png" alt="asdf" />
      </div>
    </div>
</template>


<script setup>

import {mapGetters, useStore} from 'vuex'
import {computed} from '#imports';


const store = useStore();



const products = computed({
  get: () => store.state.products.products_arr,
})

</script>

