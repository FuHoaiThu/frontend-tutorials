<template>
  <aside class="sidebar">
    <h2>Frontend tutorials</h2>
    <nav>
      <ul>
        <router-link
          v-for="item in sidebarItems"
          :key="item.id"
          :to="item.path"
          custom
          v-slot="{ navigate, isActive }"
        >
          <li class="sidebar-menu" :class="{ 'sidebar-menu--active': isActive }" @click="navigate">
            <font-awesome-icon :icon="item.icon" />
            <p>{{ item.name }}</p>
          </li></router-link
        >
      </ul>
    </nav>
  </aside>
</template>
<script setup>
import sidebarItems from '@/data/sidebar'
import { ref } from 'vue'
const currentMenu = ref(0)
</script>
<style lang="css" scoped>
.sidebar {
  width: 296px;
  padding: 20px;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  border-right: 1px solid #dde9e7;
  h2 {
    font-size: 20px;
    margin: 0;
    line-height: 1.5;
    font-weight: 700;
    color: #051513;
    padding-bottom: 16px;
  }
  ul {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
      padding: 8px 12px;
      cursor: pointer;
      margin-bottom: 4px;
      svg {
        width: 20px;
        height: 20px;
        margin-right: 8px;
      }
      &:hover {
        background-color: #e8f0ef;
        border: 1px solid #e8f0ef;
        border-radius: 4px;
      }
      p {
        margin: 0;
      }
    }
    .sidebar-menu {
      font-size: 16px;
      line-height: 1.5;
      color: #4c5c59;
      text-decoration: none;
      display: flex;
      align-items: center;
    }
    .sidebar-menu--active {
      background-color: #e8f0ef;
      border: 1px solid #e8f0ef;
      border-radius: 4px;
      color: #051513;
      font-weight: 600;
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
}
</style>
