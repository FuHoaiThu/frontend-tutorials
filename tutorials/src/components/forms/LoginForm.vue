<template>
  <div class="form-container">
    <h3>Login Form</h3>
    <form action="">
      <input
        type="text"
        placeholder="Username"
        id="username"
        name="username"
        aria-label="username"
      />
      <input
        placeholder="Password"
        type="password"
        id="password"
        name="password"
        aria-label="password"
      />
      <button type="submit" class="button--blue">Login</button>
      <div class="actions">
        <p class="action-wrapper">
          <button class="button--simple">Don't have an account?</button>
          <span class="line"></span>
          <button class="button--simple">Forgotten Password?</button>
        </p>

        <button class="button--simple">
          <font-awesome-icon icon="fa-solid fa-arrow-left" />Return to HomePage
        </button>
      </div>
    </form>
  </div>
</template>
<style lang="css" scoped>
.form-container {
  width: 360px;
  border-top: 4px solid #1293de;
  border-radius: 4px;
  background-color: #484747;
  padding: 24px;
}
h3 {
  margin: 0;
  color: white;
  font-size: 20px;
  text-align: center;
  line-height: 1.5;
  border-bottom: 1px solid #fff;
  padding-bottom: 16px;
  margin-bottom: 24px;
}
p {
  margin: 0;
}
form {
  width: 100%;
}
input {
  width: 100%;
  color: white;
  background-color: #212121;
  border: 1px solid #1293de;
  font-size: 14px;
  line-height: 1.5;
  height: 40px;
  border-radius: 4px;
  margin-bottom: 16px;
  padding: 0 8px;
}
input::placeholder {
  font-weight: bold;
}
.button--blue {
  width: 100%;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  background-color: #1293de;
  border: 0;
  outline: 0;
  font-size: 16px;
  line-height: 1.5;
  height: 32px;
}
.button--simple {
  color: white;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  svg {
    width: 12px;
    height: 12px;
    margin-right: 4px;
  }
}
.actions {
  text-align: center;
  color: white;
  font-size: 14px;
  line-height: 1.5;
  .line {
    width: 6px;
    height: 2px;
    background-color: #fff;
    display: inline-block;
  }
  .action-wrapper {
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
  }
}
</style>
