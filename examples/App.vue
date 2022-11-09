<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Demo></Demo>
    <m-card imgSrc="logo.png" summary="介绍"></m-card>
    <m-card imgSrc="logo.png" summary="介绍">
      <template v-slot:footer>
        <div class="footer">
          <div class="level">200人报名</div>
          <div class="price">100元</div>
        </div>
      </template>
    </m-card>
    <m-card imgSrc="logo.png" :width="370" :imgHeight="90">
      介绍
      <template v-slot:footer>
        <div class="footer">
          <div class="level">200人报名</div>
          <div class="price">100元</div>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
