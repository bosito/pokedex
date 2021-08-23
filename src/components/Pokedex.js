import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Virtual } from 'swiper/core';
import { spritesPkemons } from '../core/functions/functions';

//style
import '../style/pokedex.scss';

// Import Swiper styles
import 'swiper/swiper.scss';
import "swiper/components/autoplay/package.json"

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Virtual]);

/**
 * @returns nota para el yo del futuro si estas usando la libreria de swiper
 * cada importacion de algun modulo de la debe ser con este orden,
 * para que todo funcione de manera correcta.
 */

export default function Pokedex(props) {

  const { lisPokemons, listPokeInfo } = props;
  const [listSprites, setListSprites] = useState(null);

  useEffect(() => {

    if (listPokeInfo) {
      const arrayImage = spritesPkemons(listPokeInfo);
      setListSprites(arrayImage);
    };

  }, [listPokeInfo]);

  return (
    <div className="PokeContainer">
      <div className="pokedexLefth">
        <div className="PokeContainerSecond">

          <HeadreComponent />

          <CardsComponent
            listSprites={listSprites}
          />

          <DisplayComponent

          />
        </div>
      </div>
      <div className="pokedexRight">
        <div className="adornoInclinacion" />
        <div className="pokedexRightContainer">

        </div>
      </div>
    </div>
  )
}

function DisplayComponent() {

  return (
    <div className="contenDisplay">
      <div className="controlDisplay" >
        <div className="displayLefth" >
          <div className="contButtons">

            <button className="boton">
              {"¿"}
            </button>

            <div className="contButton">
              <button className="boton">
                {"<"}
              </button>
            </div>

          </div>
        </div>
        <div className="display" >
          <div className="displayConten">

          </div>
        </div>
        <div className="displayLefth" >
          <div className="contButtons">
            <button className="boton">
              {">"}
            </button>
          </div>
        </div>
      </div>
      <div className="pagination" >

      </div>
    </div>
  );
};

function CardsComponent(props) {

  const { listSprites } = props;

  return (
    <div className="contenSwiper">
      <div className="centerSwiper">
        <Swiper
          slidesPerView={3}
          slidesPerGroup={3}
          spaceBetween={5}
          loop={true}
          loopFillGroupWithBlank={true}
          grabCursor={true}
          centeredSlides={true}
          //onSlideChange={() => console.log('slide change')}
          //onSwiper={(swiper) => console.log(swiper)}
          autoplay={{ delay: 7000 }}
          //virtual
        >
          {
            listSprites &&
            listSprites.map((slideContent, index) => {

              //console.log(listSprites.length);
              //console.log(slideContent);

              return (
                <SwiperSlide key={index} virtualIndex={index}>
                  <div className="cardSlides" 
                  //style={{ width: '100%', height: '100%' }}
                  >
                    <img src={slideContent.front_default} style={{width: '40%', height: '40%'}}/>
                  </div>
                </SwiperSlide>
              )
            })
          }

        </Swiper>
      </div>
    </div>
  );
};

function HeadreComponent() {
  return (
    <div className="headerPekedex">

      <div className="contSircleBig">
        <div className="sircleBig" />
      </div>

      <div className="contenSircle">
        <div className="sircle luzRoja"/>
        <div className="sircle luzAmarilla" />
        <div className="sircle luzVerde" />
      </div>

    </div>
  );
};
