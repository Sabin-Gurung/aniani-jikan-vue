<template>
  <div>
      <div class="row">
        <div class="btn-group btn-group-toggle col-md-12">
            <label class="btn btn-secondary" :class="picked == 'discover' ? 'active': ''">
                <input type="radio" value="discover" checked v-model="picked"> Discover
            </label>
            <label class="btn btn-secondary" :class="picked == 'favorites' ? 'active': ''">
                <input type="radio" value="favorites" v-model="picked"> Favorites
            </label>
        </div>
      </div>

      <div v-if="picked === 'discover'">
          Discovery
      </div>
      <div v-else-if="picked === 'favorites'">
          Favorites
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
            animes : [],
            picked : "discover"
        };
    },
    components : {
        searchBar : SearchBar,
        animeMini : AnimeMini
    },
    methods : {
        onSearch(obj){
            window.console.log(this.picked);
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