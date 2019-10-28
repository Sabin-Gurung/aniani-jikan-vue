<template>
  <div id="app" class="container-wrapper">
      <keep-alive>
        <router-view :key="$route.path"></router-view>
      </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Acme&display=swap');
.container-wrapper{
  width:95%;
  margin: 0 auto;
}
</style>
