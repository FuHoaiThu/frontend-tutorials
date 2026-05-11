<template>
  <template v-for="field in data" :key="field.id">
    <section class="container">
      <div class="container-info">
        <h2 class="container-info__title">{{ field.title }}</h2>
        <p class="container-info__description">{{ field.description }}</p>
        <p class="container-info__source">
          Source:
          <a
            :href="field.source"
            class="container-info__source-link"
            target="_blank"
            rel="noopener noreferrer"
            >{{ field.sourceName }}</a
          >
        </p>
      </div>
      <component :is="field.component" />
    </section>
  </template>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
})
</script>
