<template>
<div class="row">
    <anime-mini v-for="anime in animes" :key="anime.mal_id" :anime="anime"/>
</div>
  
</template>

<script>
import AnimeMini from "./AnimeMini";
import axios from "axios";
export default {
    data(){
        return{
            animes : []
        };
    },
    components : {
        animeMini : AnimeMini
    },
    created(){
        window.console.log("animelanding called");
        axios.get(`https://api.jikan.moe/v3/top/anime`)
            .then(res => res.data)
            .then(res => {
                this.animes = res.top;
            });
    }
}
</script>

<style>

</style>