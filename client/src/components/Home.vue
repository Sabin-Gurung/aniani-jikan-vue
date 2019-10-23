<template>
  <div class="container">
        <div class="header row">
            AniANI-Jikan
        </div>
        <search-bar/>
  </div>
</template>
<script>
import SearchBar from "./SearchBar.vue";
export default {
    data(){
        return {
        };
    },
    components : {
        searchBar : SearchBar
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