<script setup lang="ts">
import LoginForm from '@/components/forms/LoginForm.vue'
import { formFields } from '@/data'
</script>

<template>
  <section>
    <h1>HTML Forms</h1>
    <section>
      <LoginForm />
    </section>
  </section>
</template>
<style lang="css" scoped>
h1 {
  font-size: 24px;
  line-height: 36px;
  font-weight: 700;
  color: #051513;
  margin: 0;
}
</style>
