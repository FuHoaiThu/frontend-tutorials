<template>
  <header class="header">
    <div class="header-content">
      <h3>Onyra</h3>
      <div class="text--center">
        <p>Welcome to Onyra Website</p>
        <div class="actions">
          <a href="/forms">Create Account</a>
          <a href="/forms">Login</a>
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="css" scoped>
.header {
  background-image: url('../../assets/images/bg.jpg');
  width: 100%;
  height: 450px;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}
.header-content {
  width: 82%;
  margin: 0 auto;
}
h3 {
  width: 100%;
  margin: auto;
  padding: 20px 0;
  font-size: 44px;
}
p {
  font-weight: bold;
  font-size: 60px;
  margin: 1em;
}
a {
  text-decoration: none;
  background-color: #8bc34a;
  cursor: pointer;
  color: white;
  font-size: 30px;
  padding: 4px 20px;
  border-radius: 30px;
  margin: 10px;
}
</style>
