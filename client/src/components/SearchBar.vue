<template>
<div className="row seasonSearchSection">
    <div class="input-group col-md-3">
        <div class="input-group-prepend">
            <span class="input-group-text">Year</span>
        </div>
        <select class="form-control">
        </select>
    </div>
    <div class="input-group col-md-3">
        <div class="input-group-prepend">
            <span class="input-group-text">Season</span>
        </div>
        <select class="form-control">
            <option value="summer">summer</option>
            <option value="winter">winter</option>
            <option value="fall">fall</option>
            <option value="spring">spring</option>
        </select>
    </div>
    <div className="go-btn col-md-3">
        <button className="btn btn-success">Search</button>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
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