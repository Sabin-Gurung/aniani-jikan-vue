
const API_URL = "https://api.jikan.moe/v3"
const axios = require("axios").default;

async function getAnime(animeId){
    try{
        var res = await axios.get(`${API_URL}/anime/${animeId}`)
        return await res.data
    }
    catch(err){
        return null;
    }
}

module.exports = {
    getAnime
}