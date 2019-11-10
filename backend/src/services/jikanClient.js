
const API_URL = "https://api.jikan.moe/v3"
const axios = require("axios").default;

async function getAnime(animeId){
    console.log("in here");
    var res = await axios.get(`${API_URL}/anime/${animeId}`)
    if (res.status == 400){
        return null;
    }
    else {
        return res.data
    }
}

module.exports = {
    getAnime
}