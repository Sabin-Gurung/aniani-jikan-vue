<template>
  <div class="container">
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
</style>