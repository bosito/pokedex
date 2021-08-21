import React from 'react';
//import Loading from './Loading';

import '../style/indexStyles.scss';
import caminata from '../style/images/caminata.gif';
import saludoPikachu from '../style/images/saludoPikachu.png';
import charizard from '../style/images/charizard.png';

export default function ViewContainer({ children }) {
    return (
        <div className="homePage" >
            {children}

            <PokemonSludo
                className="saludoImg"
                src={saludoPikachu}
                alt="pikachu"
            />
            
            <PokemonSludo
                className="saludoImg2"
                src={charizard}
                alt="charizard"
            />

            <div className="adornos">
                <img
                    src={caminata}
                    alt="caminata"
                    className="caminataGif"
                />
            </div>

        </div>
    )
}

function PokemonSludo(props) {
    const { className, src, alt } = props;
    return (
        <div className={className}>
            <img
                src={src}
                alt={alt}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
};

