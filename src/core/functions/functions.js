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
        return info.sprites.versions["generation-v"]["black-white"].animated
    });

    return arrayImage;
};