<template>
<div class="row seasonSearchSection">
    <div class="input-group col-md-3">
        <div class="input-group-prepend">
            <span class="input-group-text">Year</span>
        </div>
        <select class="form-control" v-model="year">
            <option value="1990">1990</option>
        </select>
    </div>
    <div class="input-group col-md-3">
        <div class="input-group-prepend">
            <span class="input-group-text">Season</span>
        </div>
        <select class="form-control" v-model="season">
            <option value="summer">summer</option>
            <option value="winter">winter</option>
            <option value="fall">fall</option>
            <option value="spring">spring</option>
        </select>
    </div>
    <div class="go-btn col-md-3">
        <button @click="onClickSearchButton" class="btn btn-success">Search</button>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            season : "",
            year : ""
        }
    },
    methods : {
        onClickSearchButton (){
            this.$emit('search', {year: this.year, season: this.season});
        }
    }

}
</script>

<style>
.seasonSearchSection{
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>