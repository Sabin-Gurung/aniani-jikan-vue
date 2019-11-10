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
    var init = async () => {
      var res = await axios.get("/api/auth/current_user");
      var userid = (await res.data).id;
      if (userid == -1)
        return;

      this.$store.commit("setUser", {id : userid});
      res = await axios.get(`/api/users/${userid}`);
      var user = await res.data;
      window.console.log(user);

      var getAnime = async (animeId) => {
        var res = await axios.get(`https://api.jikan.moe/v3/anime/${animeId}`);
        return await res.data;
      }
      Promise.all(user.favorites.map(getAnime))
      .then((values)=>{
        window.console.log(values);
        this.$store.commit("initFavorites", values);
      })
    }
    init();
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
