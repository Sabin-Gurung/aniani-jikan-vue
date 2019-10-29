import Vuex from "vuex";
import Vue from "vue"

Vue.use(Vuex);

const store = new Vuex.Store({
    state : {
        favorites : []
    },
    getters : {
        favorites : (state) =>{
            return state.favorites;
        }
    },
    mutations : {
        addToFavorite(state, animeDate){
            state.favorites.push(animeDate);
        }
    }
});

export default store;