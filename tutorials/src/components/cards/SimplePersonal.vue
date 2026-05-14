<template>
  <div class="wrapper">
    <div class="card">
      <div class="card-avatar">
        <img
          src="https://i.pinimg.com/736x/5e/ae/04/5eae04d6eac146fd6141be87b2bd05e3.jpg"
          alt="personal-avatar"
        />
      </div>
      <div class="card-info">
        <p class="card-info__name">Onyra</p>
        <p class="card-info__jobpos">Web Developer - Web designer</p>
        <p class="card-info__description">
          A web developer is a programmer who creates, builds, and maintains websites and web
          applications, handling everything from the visual layout to the functional backend.
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped>
.wrapper {
  width: 100%;
  padding: 100px 0;
  background-image: url('../../assets/images/bg2.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.card {
  background-color: rgba(255, 255, 255, 0.25);
  width: 480px;
  padding: 32px;
  border-radius: 4px;
  .card-avatar {
    text-align: center;
    margin-bottom: 32px;
    img {
      width: 150px;
      height: 150px;
      border-radius: 100%;
    }
  }
  .card-info {
    color: #333;
    line-height: 1.5;
    .card-info__name {
      font-size: 40px;
      font-weight: bold;
      text-align: center;
    }
    .card-info__jobpos {
      font-size: 20px;
      text-align: center;
      margin-bottom: 8px;
    }
    .card-info__description {
      font-size: 16px;
      text-align: justify;
    }
  }
}
</style>
