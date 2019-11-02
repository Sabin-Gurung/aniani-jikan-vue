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
import axios from "axios";
export default {
  name: 'app',
  components : {
    navBar : NavBar
  },
  created(){
    axios.get("/api/auth/current_user")
    .then(res => res.data)
    .then(res => {
      if (res.id != -1){
        this.$store.commit("setUser", res);
      }
    })
    .catch(err=>{
      window.console.log(err);
    });
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
