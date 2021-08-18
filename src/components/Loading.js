import React from 'react';
import Lottie from 'lottie-react-web';

//styles..
import '../style/indexStyles.scss';
import pokeLoading from '../style/animations/pokeLoading.json';

export default function Loading() {
    return (
        <div className="centerFrecuent">
            <div className="contenLoading" >
                <Lottie
                    options={{
                        animationData: pokeLoading,
                        loop: true,
                    }}
                />
            </div>
        </div>
    )
}
