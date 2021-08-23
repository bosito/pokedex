import React, { createContext, useContext, useEffect, useState } from 'react';
import { getsPokemonts, getAllImage, extraerFirtIndexPokemon } from '../functions/functions';

const CreateAppContext = createContext();

export default function GlobalPrivider({ children }) {

    const [lisPokemons, setLisPokemons] = useState(null);
    const [listPokeInfo, setListPokeInfo] = useState(null);

    useEffect(() => {

        (async () => {

            const data = await getsPokemonts();
            setLisPokemons(data);

        })();

    }, []);

    useEffect(() => {

        if (lisPokemons) {

            (async () => {

                const indexPokemon = await extraerFirtIndexPokemon(lisPokemons);
                const arrayAllInfo = await getAllImage(indexPokemon);
                setListPokeInfo(arrayAllInfo);

            })();

        };

    }, [lisPokemons]);


    const context = {
        lisPokemons,
        listPokeInfo
    };

    return (
        <CreateAppContext.Provider value={context} >
            {children}
        </CreateAppContext.Provider>
    );
};

export const useContexApp = () => useContext(CreateAppContext);
