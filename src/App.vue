<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <p class="green">第一部分路由</p>
    <router-view></router-view>
    <p>第二部分路由</p>
    <transition name="fade">
      <router-view name="a"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}

.green {
  color: #48cc48;
}
</style>
