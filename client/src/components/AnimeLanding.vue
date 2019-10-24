<template>
  <div class="hello">
    <h1>Anime id : {{id}}</h1>
    <div v-if="animeLoaded">
      <h1>Anime id : {{anime.title}}</h1>
    </div>
    <div v-else>
      <h1>loading.....</h1>
    </div>

  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'AnimeLanding',
  props: {
  },
  data(){
    return {
      id: this.$route.params.id,
      animeLoaded : false,
      anime : null
    }
  },
  methods:{
  },
  mounted(){
    axios.get(`https://api.jikan.moe/v3/anime/${this.id}`)
        .then(res => res.data)
        .then(res => {
          window.console.log(res);
          this.anime = res;
          this.animeLoaded = true;
        });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
