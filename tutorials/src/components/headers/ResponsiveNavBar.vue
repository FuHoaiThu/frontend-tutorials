<template>
  <header class="navbar">
    <div class="navbar-content">
      <ul>
        <li v-for="menu in menus" :key="menu.id">
          <a href="">{{ menu.label }}</a>
        </li>
      </ul>
    </div>
  </header>
</template>
<script setup>
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

.navbar-content li a {
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

@media screen and (max-width: 768px) {
  .navbar-content {
    display: none;
  }
}
</style>
