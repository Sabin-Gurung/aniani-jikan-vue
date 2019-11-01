<template>
<div>
    <div class="row">
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