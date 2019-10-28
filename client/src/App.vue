<template>
  <div id="app" class="container-wrapper">
      <div class="header row">
          AniANI-Jikan - Vue
      </div>
      <keep-alive>
        <router-view :key="$route.path"></router-view>
      </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Acme&display=swap');
.header{
    padding-left: 10px;
    padding-right: 10px;
    font-family: 'Acme', sans-serif;
    font-size: 50px;
    margin-bottom: 10px;
}

.container-wrapper{
  width:95%;
  margin: 0 auto;
}
</style>
