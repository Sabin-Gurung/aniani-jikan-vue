<template>
<div class="row seasonSearchSection">
    <div class="input-group col-md-3">
        <div class="input-group-prepend">
            <span class="input-group-text">Year</span>
        </div>
        <select class="form-control" v-model="year">
            <option v-for="yr in yearList" :key="yr" :value="yr">{{yr}}</option>
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
            year : "",
            yearList : []
        }
    },
    methods : {
        onClickSearchButton (){
            this.$emit('search', {year: this.year, season: this.season});
        }
    },
    created(){
        let currentYear = new Date().getFullYear();
        var years = [];
        for (var i = currentYear; i >= 1950; --i) {
            years.push(i);
        }
        this.yearList = years;
    }
}
</script>

<style>
.seasonSearchSection{
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>