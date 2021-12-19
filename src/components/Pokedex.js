import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
import { spritesPkemons } from '../core/functions/functions';

//images
import { listImage } from '../core/data/dataImages';
//style
import '../style/pokedex.scss';

// Import Swiper styles
import 'swiper/swiper.min.css';
import "swiper/components/autoplay/package.json";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation]);

/**
 * @returns nota para el yo del futuro si estas usando la libreria de swiper
 * cada importacion de algun modulo de la debe ser con este orden,
 * para que todo funcione de manera correcta.
 */

export default function Pokedex(props) {

  const { lisPokemons, listPokeInfo, listGeneration } = props;
  const [listSprites, setListSprites] = useState(null);
  const [listTypesicons, setListTypesicons] = useState([]);

  useEffect(() => {

    if (listPokeInfo) {
      const arrayImage = spritesPkemons(listPokeInfo);
      setListSprites(arrayImage);
    };

  }, [listPokeInfo]);

  useEffect(() => {
    setListTypesicons([...listImage])
  }, [listImage]);

  return (
    <div className="PokeContainer">
      <div className="pokedexLefth">
        <div className="PokeContainerSecond">

          <HeadreComponent />

          <div className="contenSwiper">
            <div className="centerSwiper">
              <Swiper
                slidesPerGroup={3}
                spaceBetween={20}
                slidesPerView={3}
                loop={true}
                loopFillGroupWithBlank={true}
                grabCursor={true}
                centeredSlides={true}
                //onSlideChange={() => console.log('slide change')}
                //onSwiper={(swiper) => console.log(swiper)}
                autoplay={{ delay: 7000 }}
              >
                {
                  listSprites &&
                  listSprites.map((slideContent, index) => {
                    return (
                      <SwiperSlide key={index} virtualIndex={index}>
                        <div className="cardSlides" key={index.toString()}>
                          <p className="fontPokedex" >{slideContent.name}</p>
                          <img src={slideContent?.sprites.front_default} style={{ width: '40%', height: '40%' }} />
                        </div>
                      </SwiperSlide>
                    )
                  })
                }

              </Swiper>
            </div>
          </div>

          <DisplayComponent

          />
        </div>
      </div>

      <PokeRight
        newListImage={listTypesicons}
        listGeneration={listGeneration}
      />
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

function HeadreComponent() {
  return (
    <div className="headerPekedex">

      <div className="contSircleBig">
        <div className="sircleBig" />
      </div>

      <div className="contenSircle">
        <div className="sircle luzRoja" />
        <div className="sircle luzAmarilla" />
        <div className="sircle luzVerde" />
      </div>

    </div>
  );
};

function PokeRight(props) {

  const { newListImage, listGeneration } = props;
  const [showAcordion, setShowAcordion] = useState(null);

  const hendelAcordion = (value) => setShowAcordion((state) => value !== state ? state = value : null)

  return (
    <div className="pokedexRight">
      <div className="adornoInclinacion" />
      <div className="pokedexRightContainer">
        <input className="buscadorPokedex" type="text" />

        <div className="acordionConten" >
          <button className="conetnTitleAcordion" onClick={() => hendelAcordion(0)} >
            <p style={{ marginLeft: 20 }}> {"<"} Types</p>
          </button>
          <div style={{ width: '90%', height: 0.5, backgroundColor: 'gray' }} />

          <div className="acordionList">
            {
              showAcordion === 0 ? (
                newListImage &&
                newListImage.map((iconType, index) => {
                  return (
                    <button className="botonTypes" style={{ width: 50, height: 50, margin: 2, boxShadow: 'none' }} key={index} >
                      <img src={iconType} style={{ width: '100%', height: '100%' }} />
                    </button>
                  )
                })
              ) : showAcordion === 1 && (
                listGeneration &&
                listGeneration.map((generation, index) => {
                  console.log(generation);
                  return (
                    <button className="botongeneration" style={{ backgroundColor: 'transparent', border: 0 }} key={index} >
                      <p className="fontPokedex" style={{ color: 'black' }} >{generation.name}</p>
                    </button>
                  )
                })
              )
            }
          </div>

          <div style={{ width: '90%', height: 0.5, backgroundColor: 'gray' }} />
          <button className="conetnTitleAcordion" onClick={() => hendelAcordion(1)} >
            <p style={{ marginLeft: 20 }} > {"<"} Genetarion</p>
          </button>

        </div>

      </div>
    </div>
  )

};
