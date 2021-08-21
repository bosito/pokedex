import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//components..
import ViewContainer from '../components/ViewContainer';
import Loading from '../components/Loading';

//styles..
import '../style/indexStyles.scss';
import '../style/home.scss';
import titlePokemon from '../style/images/titleProyect.png';

export default function Home() {

    const [loading, setloading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 5000);
    }, []);

    return (
        <ViewContainer>
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

                    </div>

                )
            }
        </ViewContainer>
    );
};