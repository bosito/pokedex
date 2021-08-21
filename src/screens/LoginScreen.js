import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useAuth } from '../core/context/AuthProvider';

//components..
import ViewContainer from '../components/ViewContainer';
import Loading from '../components/Loading';

//styles..
import '../style/indexStyles.scss';
import titlePokemon from '../style/images/titleProyect.png';

export default function Home() {

    const [loading, setloading] = useState(false);
    const [message, setMessage] = useState("");
    const [inputUser, setInputUser] = useState("");
    const history = useHistory();
    const location = useLocation();
    const auth = useAuth();

    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 5000);
    }, []);

    const loginForm = () => {

        const { from } = location.state || { from: { pathname: "/" } };

        if (inputUser) {

            localStorage.setItem('trainerName', inputUser);

            auth.signIn(() => history.replace(from));

            setMessage("");

        } else {

            setMessage("The field is required");
        };

    };

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
                                className="imageStyle"
                            />
                            <div className="glassConten" >
                                <p className="textInput" >
                                    Pokemon Trainer Name
                                </p>
                                <input
                                    trype="text"
                                    className="inputLogin"
                                    placeholder="Name Trainer: Ash ketchum"
                                    value={inputUser}
                                    onChange={(e) => setInputUser(e.target.value)}
                                />

                                <button className="singIn" onClick={loginForm} >
                                    SING IN
                                </button>

                                {
                                    message &&
                                    <p className="textInput" style={{ color: "red", marginTop: 20, textAlign: 'center' }}>
                                        {message}
                                    </p>
                                }

                            </div>

                        </div>

                    </div>

                )
            }
        </ViewContainer>
    );
};