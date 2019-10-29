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

      <discover-landing v-if="picked === 'discover'"></discover-landing>
      <favorites-landing v-else-if="picked === 'favorites'"></favorites-landing>
  </div>
</template>
<script>
import DiscoverLanding from "./DiscoverLanding";
import FavoritesLanding from "./FavoritesLanding";
export default {
    data(){
        return {
            animes : [],
            picked : "discover"
        };
    },
    components : {
        discoverLanding : DiscoverLanding,
        favoritesLanding : FavoritesLanding
    },
    methods : {
    }
}
</script>

<style>
</style>