import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';

//styles..
import '../style/indexStyles.scss';
import titlePokemon from '../style/images/titleProyect.png';
import caminata from '../style/images/caminata.gif';
import saludoPikachu from '../style/images/saludoPikachu.png';
import charizard from '../style/images/charizard.png';


export default function Home() {

    const [loading, setloading] = useState(true);
    const [message, setMessage] = useState("");
    const [inputUser, setInputUser] = useState("");

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
                            <img src={titlePokemon} alt="titlePokemon" className="imageStyle" />
                            <div className="glassConten" >
                                <p className="textInput" >
                                    Pokemon Trainer Name
                                </p>
                                <input
                                    trype="text"
                                    className="inputLogin"
                                    placeholder="Name Trainer: Ash ketchum"
                                    value={inputUser}
                                    onChange={(e) => setInputUser(e.target.value) }
                                />
                                {
                                    message && <p>{message}</p>
                                }
                                <button className="singIn" >
                                    SING IN
                                </button>
                            </div>
                        </div>
                        <div className="saludoImg">
                            <img
                                src={saludoPikachu}
                                alt="pikachu"
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                        <div className="saludoImg2">
                            <img
                                src={charizard}
                                alt="charizard"
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
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
