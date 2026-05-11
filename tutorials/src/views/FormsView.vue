<script setup lang="ts">
import formFields from '@/data/forms'
import CommonView from './CommonView.vue';
</script>

<template>
  <section>
    <h1>HTML Forms</h1>
    <common-view :data="formFields"/>
  </section>
</template>
