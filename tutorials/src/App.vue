<script setup>
import Sidebar from './components/sidebar/Sidebar.vue'
</script>

<template>
  <main>
    <Sidebar />
    <div id="main-content">
      <router-view />
    </div>
  </main>
</template>

<style scoped>
#main-content {
  position: relative;
  left: 296px;
  background-color: #e8f0ef;
  padding: 32px;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
