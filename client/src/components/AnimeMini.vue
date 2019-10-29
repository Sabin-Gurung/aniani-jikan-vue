
<template>
<div class="col-sm-12 col-lg-6">
    <div class="anime-mini-wrapper d-flex">
        <div class="image-section">
            <img :src="anime.image_url" alt="Card image cap"/>
        </div>
        <div class="flex-grow-1 info-section">
            <p>{{anime.title}}</p>
            <p>{{anime.score}}</p>
            <button class="btn btn-success btn-sm" @click="onClick">See More</button><br/>
            <div v-if="isFavorite" @click="onClickFavorite">
                Favorite
            </div>
            <div v-else @click="onClickFavorite">
                Not Favorite
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            // isFavorite : false
        };
    },
    computed : {
        isFavorite(){
            return this.$store.getters.favorites.map(anime=>anime.mal_id).includes(this.anime.mal_id);
        }
    },
    props : ['anime'],
    methods:{
        onClick(){
            this.$router.push({path : `/anime/${this.$props.anime.mal_id}`})
        },
        onClickFavorite(){
            if (!this.isFavorite){
                this.$store.commit("addToFavorites", this.anime)
            } 
            else {
                this.$store.commit("removeFromFavorites", this.anime.mal_id);
            }
        }
    }
}
</script>
<style>
.anime-mini-wrapper{
    background-color: linen;
    margin-top: 10px;
    min-height: 100px;
}

.image-section{
    padding: 4px;
}

.image-section > img {
    object-fit: cover;
    border-radius: 15px;
    height: 200px;
    width: 140px;
}

.info-section{
    border-left: solid 2px grey;
    padding: 5px;
    margin: 5px;
}

</style>