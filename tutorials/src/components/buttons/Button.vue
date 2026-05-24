<template>
  <button>
    <p class="button-text">Hover Me</p>
    <p class="button-icon"><font-awesome-icon icon="fa-solid fa-heart" /></p>
  </button>
</template>
<style lang="css" scoped>
button {
  font-size: 16px;
  line-height: 24px;
  background-color: #f59e0b;
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
  color: #fff7ed;
  position: relative;
  min-width: 102px;
  height: 40px;
  overflow: hidden;
  .button-text {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }
  .button-icon {
    position: relative;
    z-index: 2;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    color: #ef4444;
    opacity: 0;
  }
  &:hover {
    .button-text {
      top: -100%;
      opacity: 0;
    }
    .button-icon {
      top: 0;
      opacity: 1;
    }
  }
}
</style>
