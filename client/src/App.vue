<template>
  <div id="app" class="container">
      <div class="header row">
          AniANI-Jikan
      </div>
      <keep-alive>
        <router-view></router-view>
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
</style>
