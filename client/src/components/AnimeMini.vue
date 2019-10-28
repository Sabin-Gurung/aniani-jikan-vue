
<template>
<div class="anime-mini-wrapper col-sm-4 col-md-3 col-lg-2">
    <div class="anime-mini" @click="onClick">
        <img :src="anime.image_url" alt="Card image cap"/>
        <hr/>
        <div>
            <div>
                <p>{{anime.title}}</p>
                <p>{{anime.score}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props : ['anime'],
    methods:{
        onClick(){
            this.$router.push({path : `/anime/${this.$props.anime.mal_id}`})
        }
    }
}
</script>

<style>
.anime-mini-wrapper{
    padding-top: 4px;
    margin: 0px;
}

.anime-mini{
    border: solid 1px gray;
    padding: 4px;
    border-radius: 10px;
    /* padding-top: 10px; */
    height: 100%;
}
.anime-mini img{
    /* height: 220px; */
    border-radius: 20px;
    margin: 0px;
    object-fit: contain;
    width : 100%;
}
</style>