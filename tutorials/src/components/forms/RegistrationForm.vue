<template>
  <div class="form-container">
    <h3>Sign up now</h3>
    <form action="">
      <input
        type="text"
        placeholder="First Name"
        id="firstName"
        name="firstName"
        aria-label="firstName"
      />
      <input
        type="text"
        placeholder="Last Name"
        id="lastName"
        name="lastName"
        aria-label="lastName"
      />
      <input type="email" placeholder="Email" id="email" name="email" aria-label="email" />
      <input
        type="password"
        placeholder="Password"
        id="password"
        name="password"
        aria-label="password"
      />
      <div class="actions">
        <div>
          <input />
        </div>
        <button class="button--blue">Register</button>
        <button class="button--simple">Already have an account?</button>
      </div>
    </form>
  </div>
</template>
<style lang="css" scoped>
.form-container {
  width: 360px;
  border-radius: 4px;
  background-color: #24303c;
  padding: 24px;
  h3 {
    margin: 0;
    color: white;
    font-size: 20px;
    line-height: 1.5;
    margin-bottom: 24px;
    font-weight: 700;
  }
  form {
    input {
      width: 100%;
      background-color: #3a4b5a;
      border: 1px solid #4a5b6a;
      color: white;
      padding: 8px 10px;
      margin-bottom: 16px;
      border-radius: 4px;
      outline: none;
      height: 40px;
      font-size: 14px;
      line-height: 1.5;
    }
  }
}
</style>
