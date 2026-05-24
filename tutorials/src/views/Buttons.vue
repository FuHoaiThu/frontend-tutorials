<script setup lang="ts">
import buttons from '@/data/buttons'
import CommonView from './CommonView.vue'
</script>

<template>
  <section>
    <h1>Buttons</h1>
    <common-view :data="buttons" />
  </section>
</template>
