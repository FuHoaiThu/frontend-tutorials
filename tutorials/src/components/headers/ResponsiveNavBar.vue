<template>
  <header class="navbar">
    <div class="navbar-content">
      <ul>
        <li v-for="menu in menus" :key="menu.id">
          <a href="" class="navbar-link">{{ menu.label }}</a>
        </li>
      </ul>
    </div>
    <div class="navbar-mobile">
      <div class="navbar-mobile-action" @click="isMenuOpen = !isMenuOpen">
        <font-awesome-icon icon="fa-solid fa-bars" v-show="!isMenuOpen" />
        <font-awesome-icon icon="fa-solid fa-xmark" v-show="isMenuOpen" />
        <p>Menu</p>
      </div>
      <ul class="navbar-mobile-content" v-show="isMenuOpen">
        <li v-for="menu in menus" :key="menu.id">
          <a href="" class="navbar-link">{{ menu.label }}</a>
        </li>
      </ul>
    </div>
  </header>
</template>
<script setup>
import { ref } from 'vue'

const menus = [
  {
    id: 0,
    label: 'Home',
  },
  {
    id: 1,
    label: 'About',
  },
  {
    id: 2,
    label: 'Blog',
  },
  {
    id: 3,
    label: 'Shop',
  },
  {
    id: 4,
    label: 'Images',
  },
]
const isMenuOpen = ref(false)
</script>
<style scoped>
.navbar {
  width: 100%;
  background-color: #1e293b;
  color: #e2e8f0;
  line-height: 1.5;
  height: 52px;
}

.navbar-content {
  width: 82%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-content ul {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  align-items: center;
}

.navbar-content li {
  list-style-type: none;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  cursor: pointer;
}

.navbar-link {
  font-size: 16px;
  color: #e2e8f0;
  line-height: 1.5;
  text-decoration: none;
  font-weight: 700;
  position: relative;
}

.navbar-content li:hover {
  background-color: #334155;
}

.navbar-mobile {
  display: none;
  height: 100%;
  align-items: center;
  width: 100%;
  padding: 0 32px;
  position: relative;
}
.navbar-mobile-action {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 8px;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
}
.fa-bars,
.fa-xmark {
  width: 24px;
  height: 24px;
}
.navbar-mobile-content {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #334155;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 4px 4px;
  li {
    padding: 12px 16px;
    cursor: pointer;
    &:hover {
      background-color: #3b4a63;
    }
  }
}

@media screen and (max-width: 768px) {
  .navbar-content {
    display: none;
  }
  .navbar-mobile {
    display: flex;
  }
}
</style>
