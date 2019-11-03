<template>
<div>
    <div v-if="$store.getters.isLoggedOut" class="row m-3">
        <div class="col-md-3"></div>
        <div class="col-md-6 alert alert-danger" role="alert">
            You must be logged in to use the favorites features.
        </div>
        <div class="col-md-3"></div>
    </div>
    <div v-else class="row">
        <anime-mini v-for="anime in favorites" :key="anime.mal_id" :anime="anime"/>
    </div>
</div>
  
</template>

<script>
import AnimeMini from "./AnimeMini";
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
    },
    created(){
    }
}
</script>

<style>

</style>