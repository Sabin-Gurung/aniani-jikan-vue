<template>
  <div class="anime-landing mt-3">
    <div v-if="anime != null">
      <div class="col-md-12 row">
          <div class="col-md-4">
              <img :src="anime.image_url"/>
          </div>
          <div class="col-md-8">
              <h3>{{anime.title}}
              <span v-if="$store.getters.isLoggedIn">
                  <span v-if="isFavorite" @click="onClickFavorite">
                      <i class="fas fa-heart"></i>
                  </span>
                  <span v-else @click="onClickFavorite">
                      <i class="far fa-heart"></i>
                  </span>
              </span></h3>
              <p>
                  {{anime.synopsis}}
              </p>
          </div>
      </div>
      <div class="col-md-12">
          <table class="table">
              <tbody>
                      <tr>
                          <th>MAL ID</th>
                          <td>{{anime.mal_id}}</td>
                      </tr>
                      <tr>
                          <th>Type</th>
                          <td>{{anime.type}}</td>
                      </tr>
                      <tr>
                          <th>Source</th>
                          <td>{{anime.source}}</td>
                      </tr>
                      <tr>
                          <th>Episodes</th>
                          <td>{{anime.episodes}}</td>
                      </tr>
                      <tr>
                          <th>Genres</th>
                          <td>
                              {{anime.genres}}
                          </td>
                      </tr>
                      <tr>
                          <th>Producers</th>
                          <td>
                            {{anime.producers}}
                          </td>
                      </tr>
                      <tr>
                          <th>Premiered</th>
                          <td>{{anime.premiered}}</td>
                      </tr>
                      <tr>
                          <th>Score</th>
                          <td>{{anime.score}}</td>
                      </tr>
                      <tr>
                          <th>Trailer</th>
                          <td>
                              <iframe v-if="anime.trailer_url != null" :src="anime.trailer_url"/>
                              <div v-else>n/a</div>
                          </td>
                      </tr>
                  </tbody>
                      </table>
                  </div>
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
      anime : null
    }
  },
  computed : {
      isFavorite(){
          return this.$store.getters.favorites.map(anime=>anime.mal_id).includes(this.anime.mal_id);
      }
  },
  methods:{
    loadAnimeInfo(id){
      axios.get(`https://api.jikan.moe/v3/anime/${id}`)
          .then(res => res.data)
          .then(res => {
            this.anime = res;
            this.anime.genres = this.anime.genres.map(genre => genre.name).join(", ");
            this.anime.producers = this.anime.producers.map(producer => producer.name).join(", ");
          });
    },
    onClickFavorite(){
        if (!this.isFavorite){
            this.$store.commit("addToFavorites", this.anime)
        } 
        else {
            this.$store.commit("removeFromFavorites", this.anime.mal_id);
        }
    }
  },
  created(){
    this.loadAnimeInfo(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
