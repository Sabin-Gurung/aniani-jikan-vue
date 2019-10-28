
<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/home">AniANI-Jikan-VUE</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/discover" class="nav-link">Discover</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/favorites" class="nav-link">Favorites</router-link>
      </li>
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
      </li>
    </ul>
    <div class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" v-model="queryText" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" @click="onSearch">Search</button>
    </div>
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