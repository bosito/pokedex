import React from 'react';
import Pokedex from '../components/Pokedex';
import { useContexApp } from '../core/context/GlobalPrivider';

//components..
import ViewContainer from '../components/ViewContainer';

//styles..
import '../style/indexStyles.scss';

export default function PokedexScreen() {

  const { lisPokemons, listPokeInfo } = useContexApp();

  return (
    <ViewContainer>
      <div className="centerFrecuent">
        <Pokedex
          listPokeInfo={listPokeInfo}
          lisPokemons={lisPokemons}
        />
      </div>
    </ViewContainer>
  );
};