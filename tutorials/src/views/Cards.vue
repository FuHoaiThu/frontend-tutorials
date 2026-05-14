<script setup lang="ts">
import cards from '@/data/cards'
import CommonView from './CommonView.vue'
</script>

<template>
  <section>
    <h1>HTML Cards</h1>
    <common-view :data="cards" />
  </section>
</template>
