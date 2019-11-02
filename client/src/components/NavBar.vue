
<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/home">AniANI-Jikan-VUE</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <!-- <li class="nav-item">
      <a v-if="1 == 1" href="#" class="nav-link">Log In</a>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> -->
    </ul>
    <ul class="navbar-nav mr-right">
    <div class="form-inline my-2 my-lg-0 ml-2 mr-2">
      <input class="form-control mr-sm-2" v-model="queryText" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" @click="onSearch">Search</button>
    </div>
      <!-- <button v-if="$store.getters.isLoggedOut" class="btn btn-sm btn-success ml-2 mr-2" @click="onClickLogIn">Log In</button>
      <button v-else class="btn btn-sm btn-success ml-2 mr-2" @click="onClickLogOut" >Log Out</button> -->
      <a href="/api/auth/google" v-if="$store.getters.isLoggedOut" class="btn btn-sm btn-success ml-2 mr-2">Log In</a>
      <a href="/api/auth/logout" v-else class="btn btn-sm btn-success ml-2 mr-2">Log Out</a>
    </ul>
  </div>
</nav>
</template>

<script>
// import axios from "axios";
export default {
    data(){
        return {
            queryText : "",
            searchResults : []
        };
    },
    methods : {
        searchAnime(animeQueryString){
            window.console.log(animeQueryString);
        },
        onSearch (){
            window.console.log(this.queryText);
            this.searchAnime(this.queryText);
            this.queryText = "";
        },
        onClickLogIn(){
          this.$store.state.user = 1;
        },
        onClickLogOut(){
          this.$store.state.user = null;
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Acme&display=swap');
.navbar-brand{
    font-family: 'Acme', sans-serif;
    font-size: 34px;
}

</style>