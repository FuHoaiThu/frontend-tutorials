<template>
  <section>
    <h1>Landing Pages</h1>
    <common-view :data="landingPages" />
  </section>
</template>
<script setup>
import CommonView from './CommonView.vue'
import landingPages from '@/data/landingPages.js'
</script>
