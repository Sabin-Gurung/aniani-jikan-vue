<template>
<div>
    <h3>This are your favorite animes</h3>
    <div class="row">
        <anime-mini v-for="anime in favorites" :key="anime.mal_id" :anime="anime"/>
    </div>
</div>
  
</template>

<script>
import AnimeMini from "./AnimeMini";
import axios from "axios";
export default {
    data(){
        return {
        };
    },
    computed : {
        favorites(){
            return this.$store.getters.favorites;
        }

    },
    components:{
        animeMini: AnimeMini
    },
    methods : {
        loadTopAnime(){
            axios.get("https://api.jikan.moe/v3/top/anime/1")
            .then(res=> res.data)
            .then(res=>{
                this.favorites = res.top;
                this.$store.commit("addToFavorite", res.top[0]);
            });
        }
    },
    created(){
        this.loadTopAnime();
    }
}
</script>

<style>

</style>