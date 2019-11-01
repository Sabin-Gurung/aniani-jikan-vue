<template>
  <div id="app" class="container">
    <nav-bar/>
      <keep-alive>
        <router-view :key="$route.path"></router-view>
      </keep-alive>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: 'app',
  components : {
    navBar : NavBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Acme&display=swap');
.container-wrapper{
  width:95%;
  margin: 0 auto;
}

.container{
  min-height: 100vh;
}
</style>
