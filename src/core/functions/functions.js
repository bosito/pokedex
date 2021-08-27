import axios from 'axios';

const Limit = 12;

export const getsPokemonts = async () => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${Limit}`);
        return response.data.results;
    } catch (error) {
        console.error(error);
    };
};

export const extraerFirtIndexPokemon = async (lisPokemons) => {

    const urlList = await lisPokemons.find((pokemon, index) => {
        return index === 0 && pokemon.url;
    });

    const arrayUrl = await urlList.url.split("/");

    return arrayUrl[6];
};

export const getAllImage = async (index) => {

    const myParams = parseInt(index);
    const myLimits = myParams + 11;
    const array = [];

    for (let i = myParams; i <= myLimits; i++) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        array.push(response.data)
    }

    return array

};

export const spritesPkemons = (listPokeInfo) => {
    const arrayImage = listPokeInfo.map((info) => {
        //console.log(info.sprites.versions["generation-v"]["black-white"].animated);
        //console.log(info.types[0].type.name);
        //console.log('wolas ->',info.forms[0].name);

        const data = {
            name: info.forms[0].name,
            sprites: info.sprites.versions["generation-v"]["black-white"].animated,
            types : info.types
        }; 

        return data
    });

    return arrayImage;
};

export const getListGenerations = async () => {
    try {
        const response = axios.get("https://pokeapi.co/api/v2/generation");

        /**
         * no sabia que se podia hacer esto ???? quede O.O
         */
        
        return (await response).data.results;

    } catch (error) {

        console.error(error);

    };
}