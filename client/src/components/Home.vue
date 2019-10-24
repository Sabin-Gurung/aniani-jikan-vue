<template>
  <div class="container">
        <div class="header row">
            AniANI-Jikan
        </div>
        <search-bar @search="onSearch"/>
        <div class="anime-results row">
            <anime-mini v-for="anime in animes" :key="anime.mal_id" :anime="anime"/>
        </div>
  </div>
</template>
<script>
import SearchBar from "./SearchBar.vue";
import AnimeMini from "./AnimeMini"
import axios from "axios"

export default {
    data(){
        return {
            animes : []
        };
    },
    components : {
        searchBar : SearchBar,
        animeMini : AnimeMini
    },
    methods : {
        onSearch(obj){
            if (obj.year == "" || obj.season == ""){
                alert("invalid input");
                return;
            }

            axios.get(`https://api.jikan.moe/v3/season/${obj.year}/${obj.season}`)
                .then(res => res.data)
                .then(res => {
                    this.animes = res.anime;
                });
        }
    }
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