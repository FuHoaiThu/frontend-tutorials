<script setup lang="ts">
import { formFields } from '@/data'
</script>

<template>
  <section>
    <h1>HTML Forms</h1>
    <template v-for="field in formFields" :key="field.id">
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
  </section>
</template>
<style lang="css" scoped>
h1 {
  font-size: 24px;
  line-height: 36px;
  font-weight: 700;
  color: #051513;
  margin: 0 0 24px 0;
}
.container {
  box-shadow: 0px 2px 4px 0px #1515150f;
  border-radius: 12px;
  padding: 24px;
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  .container-info {
    text-align: center;
    margin-bottom: 16px;
    .container-info__title {
      font-size: 20px;
      line-height: 30px;
      font-weight: 700;
      color: #051513;
      margin: 0;
    }

    .container-info__description {
      font-size: 14px;
      line-height: 20px;
      color: #4c5c59;
      margin-top: 8px;
    }
    .container-info__source {
      font-size: 12px;
      line-height: 18px;
      color: #051513;
      .container-info__source-link {
        color: #1293de;
        text-decoration: none;
      }
    }
  }
}
</style>
