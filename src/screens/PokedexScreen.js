import React from 'react';

//components..
import ViewContainer from '../components/ViewContainer';

//styles..
import '../style/indexStyles.scss';
import '../style/pokedex.scss'

export default function PokedexScreen() {
    return (
        <ViewContainer>
            <div className="centerFrecuent">
               <PokedexComponent
               
               />
            </div>
        </ViewContainer>
    );
};

function PokedexComponent() {

    //const {  } = props;

    return(
        <div  className="PokeContainer">
            <div  className="pokedexLefth">
                <div className="PokeContainerSecond">

                </div>
            </div>
            <div  className="pokedexRight">
                <div className="adornoInclinacion"/>
                <div className="pokedexRightContainer">

                </div>
            </div>
        </div>
    )
}
