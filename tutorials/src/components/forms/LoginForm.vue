<template>
  <section>
    <div class="form-container">
      <h2>Login Form</h2>
      <form action="">
        <input type="text" placeholder="Username" id="username" name="username" value="" />
        <input placeholder="Password" type="password" id="password" name="password" />
        <button type="submit">Login</button>
        <p>Don't have an account?</p>
      </form>
    </div>
  </section>
</template>
<style lang="css" scoped>
section {
  box-shadow: 0px 2px 4px 0px #1515150f;
  border-radius: 12px;
  padding: 24px;
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
}
.form-container {
  width: 360px;
  border-top: 4px solid #1293de;
  border-radius: 4px;
  background-color: #484747;
  padding: 24px;
}
h2 {
  margin: 0;
  color: white;
  font-size: 20px;
  text-align: center;
  line-height: 1.5;
  border-bottom: 1px solid #fff;
  padding-bottom: 16px;
  margin-bottom: 24px;
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
  height: 32px;
  border-radius: 4px;
  margin-bottom: 16px;
  padding: 0 8px;
}
input::placeholder {
  font-weight: bold;
}
button {
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
</style>
