<template>
  <header class="navbar">
    <div class="navbar-content">
      <h3 class="navbar-logo">&lt;/Onyra&gt;</h3>
      <nav class="navbar-menus">
        <ul>
          <li v-for="menu in menus" :key="menu.id">
            <a href="">{{ menu.label }}</a>
          </li>
        </ul>
      </nav>
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
    label: 'Services',
  },
  {
    id: 3,
    label: 'Blog',
  },
  {
    id: 4,
    label: 'Contact',
  },
]
</script>
<style lang="css" scoped>
.navbar {
  width: 100%;
  background-color: #001f3f;
  color: #f0f0f0;
  line-height: 1.5;
  padding: 14px 0;
  .navbar-content {
    width: 82%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .navbar-logo {
      font-size: 24px;
      width: 136px;
    }
    .navbar-menus {
      flex: 1;
      ul {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        li {
          list-style-type: none;
          a {
            font-size: 16px;
            color: #f0f0f0;
            line-height: 1.5;
            text-decoration: none;
            font-weight: 700;
            position: relative;
            &::before {
              content: '';
              width: 0;
              height: 2px;
              background-color: #f0f0f0;
              position: absolute;
              display: block;
              bottom: -4px;
              left: 0;
              transition: width .3s ease-in-out;
            }
            &:hover::before {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
