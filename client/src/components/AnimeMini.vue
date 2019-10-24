
<template>
<div class="anime-mini col-sm-4 col-md-3 col-lg-2 mt-3" @click="onClick">
    <img :src="anime.image_url" alt="Card image cap"/>
    <div>
        <div>
            <p>{{anime.title}}</p>
            <p>{{anime.score}}</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props : ['anime'],
    methods:{
        onClick(){
            window.console.log(this.$router);
            this.$router.push({path : `/anime/${this.$props.anime.mal_id}`})
        }
    }
}
</script>

<style>
.anime-mini{
    border-top: solid 1px gray;
    border-radius: 10px;
    padding-top: 10px;
}
.anime-mini img{
    height: 220px;
    border-radius: 20px;
    margin: 0px;
}
</style>