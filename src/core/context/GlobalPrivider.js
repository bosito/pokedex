import React, { createContext, useContext, useEffect, useState } from 'react';
import { getsPokemonts, getAllImage, extraerFirtIndexPokemon, getListGenerations } from '../functions/functions';

const CreateAppContext = createContext();

export default function GlobalPrivider({ children }) {

    const [lisPokemons, setLisPokemons] = useState(null);
    const [listPokeInfo, setListPokeInfo] = useState(null);
    const [listGeneration, setListGeneration] = useState(null);

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

    useEffect(() => {
        
        (async () => {

            const response = await getListGenerations();
            setListGeneration(response);

        })();

    }, []);


    const context = {
        lisPokemons,
        listPokeInfo,
        listGeneration
    };

    return (
        <CreateAppContext.Provider value={context} >
            {children}
        </CreateAppContext.Provider>
    );
};

export const useContexApp = () => useContext(CreateAppContext);
