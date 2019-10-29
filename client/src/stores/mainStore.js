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
        addToFavorite(state, animeData){
            state.favorites.push(animeData);
            window.console.log("pusing");
        }
    }
});

export default store;