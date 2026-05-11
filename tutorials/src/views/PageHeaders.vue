<template>
  <section>
    <h1>Page Headers</h1>
    <common-view :data="pageHeaders" />
  </section>
</template>
<script setup>
import pageHeaders from '@/data/pageHeaders'
import CommonView from './CommonView.vue'
</script>
