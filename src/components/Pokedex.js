/*
este componente aun no se a terminado recomiendo ya pasarlo a la vista correspondiente,
para que no se vuelva mas complicado en el futuro.
*/
import React from 'react';
import SwiperCore, { Autoplay, Navigation, Virtual  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

//style
import '../style/pokedex.scss';

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Virtual]);

// Import Swiper styles
import 'swiper/swiper.scss';
import "swiper/components/autoplay/package.json"

export default function Pokedex() {
    return (
        <div className="PokeContainer">
          <div className="pokedexLefth">
            <div className="PokeContainerSecond">
              <div className="headerPekedex">
    
                <div className="contSircleBig">
                  <div className="sircleBig" />
                </div>
    
                <diiv className="contenSircle">
                  <div className="sircle" />
                  <div className="sircle" />
                  <div className="sircle" />
                </diiv>
              </div>
    
              <div className="contenSwiper">
                <div className="centerSwiper">
                  <Swiper
                    slidesPerView={3}
                    slidesPerGroup={3} 
                    spaceBetween={10}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    grabCursor={true}
                    centeredSlides={true}
                    //onSlideChange={() => console.log('slide change')}
                    //onSwiper={(swiper) => console.log(swiper)}
                    autoplay={{ delay: 7000 }}
                  >
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-1.jpg" style={{ width: '100%', height: '100%' }} />
                    </SwiperSlide>
    
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-2.jpg" style={{ width: '100%', height: '100%' }} />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-3.jpg" style={{ width: '100%', height: '100%' }} />
                    </SwiperSlide>
    
                    <SwiperSlide>
                      <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
                    </SwiperSlide>
    
                    <SwiperSlide>
                      <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }} />
                    </SwiperSlide>
    
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-1.jpg" style={{ width: '100%', height: '100%' }} />
                    </SwiperSlide>
    
                  </Swiper>
                </div>
              </div>
    
              <div className="contenDisplay">
                <div className="controlDisplay" >
                  <div className="displayLefth" >
    
                  </div>
                  <div className="display" >
    
                  </div>
                  <div className="displayLefth" >
    
                  </div>
                </div>
                <div className="pagination" >
    
                </div>
            </div>
    
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
