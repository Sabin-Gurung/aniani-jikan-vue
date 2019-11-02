import Vuex from "vuex";
import Vue from "vue"

Vue.use(Vuex);

const store = new Vuex.Store({
    state : {
        user : null,
        favorites : []
    },
    getters : {
        favorites : (state) =>{
            return state.favorites;
        },
        isLoggedIn : (state)=>{
            return state.user != null;
        },
        isLoggedOut : (state, getters)=>{
            return !getters.isLoggedIn;
        },
        user : (state)=>{
            return state.user;
        }
    },
    mutations : {
        setUser(state, user){
            state.user = user;
        },
        addToFavorites(state, animeData){
            if (!state.favorites.map(anime=>anime.mal_id).includes(animeData.mal_id))
                state.favorites.push(animeData);
        },
        removeFromFavorites(state, animeId){
            var index = state.favorites.findIndex(anime=>anime.mal_id == animeId);
            if (index != -1){
                state.favorites.splice(index, 1)
            }
        }
    }
});

export default store;