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
        <p>I agree to <a href="">terms and conditions</a></p>
        <button class="button--blue">Register</button>
        <p>
          <a class="button--simple" href="">Already have an account?</a>
          <a href="/">Back to Homepage</a>
        </p>
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
    .actions {
      color: white;
      font-size: 14px;

      P {
        margin: 0 5px 0 0;
      }
      a {
        color: white;
        margin-right: 4px;
      }
      .button--blue {
        outline: none;
        border: none;
        width: 100%;
        margin: 16px 0;
        background-color: #1f53c5;
        padding: 12px;
        font-size: 16px;
        border-radius: 4px;
        color: white;
        font-weight: 700;
        cursor: pointer;
      }
    }
  }
}
</style>
