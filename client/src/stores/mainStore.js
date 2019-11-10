import Vuex from "vuex";
import Vue from "vue"
import axios from "axios";

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
        initFavorites (state, favorites){
            state.favorites = favorites;
        },
        addToFavorites(state, animeData) {
            if (!state.favorites.map(anime => anime.mal_id).includes(animeData.mal_id)) {
                axios.get(`/api/users/${state.user.id}/like/${animeData.mal_id}`)
                    .then(res => res.data)
                    .then(res => {
                        window.console.log(res);
                        state.favorites.push(animeData);
                    })
            }
        },
        removeFromFavorites(state, animeId) {
            var index = state.favorites.findIndex(anime => anime.mal_id == animeId);
            if (index != -1) {
                axios.get(`/api/users/${state.user.id}/unlike/${animeId}`)
                    .then(res => res.data)
                    .then(res => {
                        window.console.log(res);
                        state.favorites.splice(index, 1);
                    })
            }
        }
    }
});

export default store;