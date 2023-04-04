import axios from "axios";

const BASE_URL = 'https://pokeapi.co/api/v2'


export const fetchPokemons = async(limit, offset) => {
    try {
        const { data } = await axios.get(BASE_URL + `/pokemon?limit=${limit}&offset=${offset}`);
        return data;
    }catch(e) {
        console.log(e);
    }
};  

// export const fetchImg = async() => {
//     const { data } = await axios.get()
// }



export const fetchPokemon = async(url) => {
    const { data } = await axios.get(url);
    // const result = data.results
    console.log(data);
    return data
};
