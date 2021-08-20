import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Loading from '../components/Loading';

//styles..
import '../style/indexStyles.scss';
import '../style/home.scss';
import titlePokemon from '../style/images/titleProyect.png';
import caminata from '../style/images/caminata.gif';
import saludoPikachu from '../style/images/saludoPikachu.png';
import charizard from '../style/images/charizard.png';

export default function Home() {

    const [loading, setloading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 5000);
    }, []);

    return (
        <div className="homePage" >
            {
                loading ? (
                    <Loading />
                ) : (
                    <div className="centerFrecuent">
                        <div className="contenTitle">
                            <img
                                src={titlePokemon}
                                alt="titlePokemon"
                                className="titleImage"
                            />

                            <p className="textInput  textInfo">
                                Discover everything and all the pokemons that exist as well as their information and data about all of them.
                            </p>

                            <Link className="singIn  linkStyle" to="/protected" >
                                <p>GO</p>
                            </Link>
                        
                        </div>
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
        </div>
    );
};

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