import React, { useRef, useState } from "react";
import "./maincard.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import Makkah from "../../assest/makkah.jpg"
import Riyadh from "../../assest/riydh.jpg"
import Medina from "../../assest/medina.jpg"
import Istanbul from "../../assest/istanbul.jpg"
import Dubai from "../../assest/dubai.jpg"
import Cairo from "../../assest/cairo.jpg";
import Bahrian from "../../assest/bahrian.jpg";
import Egypt from "../../assest/egypt.jpg";
import Lebanon from "../../assest/lebanon.jpg";
import Qatar from "../../assest/qatar.jpg";

import Booking from '../../assest/booking.png'
import Al from '../../assest/al.png'
import Exp from '../../assest/expedia.png'
import Hotel from '../../assest/hotels.png'
import Trip from '../../assest/trip.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import {  Scrollbar, Mousewheel } from "swiper";

const Maincard = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab =(index)=>{
        setToggleState(index)
    }
  return (
    <>
    <div className='maincard__content main__cont-w'>
          <span className="bold maincard_heading">
              These top destinations are just a click away
          </span>


          <div className="main__container">

              <div className="main__card-tabs">
                  <div className={toggleState === 1 ? "card-tab active-tab" : "card-tab"} onClick={() => toggleTab(1)}>Top Cites</div>
                  <div className={toggleState === 2 ? "card-tab active-tab" : "card-tab"} onClick={() => toggleTab(2)}>Top destinations</div>
              </div>
              <div className="main_cards ">

                  <div className={toggleState === 1 ? "main_card active-main_card" : "main_card"}>
                      <Swiper
                          slidesPerView={4}
                          spaceBetween={20}
                          freeMode={true}
                          pagination={{
                              clickable: true,
                          }}
                          modules={[FreeMode, Pagination]}
                          className="mySwiper"
                      >
                          <SwiperSlide>
                            <div className="card_main_ok">

                            <div className="img_card_main">
                              <img src={Qatar} alt="makkah" className="main_img" />
                            </div>
                            <div className="text_card_main">
                              <div className="main__card-info bold">Hotels in <div className="main__card-loc bold">Makkah</div></div><br />
                              <div className="main__card_no-pr">
                                  2,345 <div className="main__card_no">Hotels <div className="bold">Avg.</div>
                                      <div className="main__card_pr bold">$302</div></div>
                              </div>
                            </div>
                            </div>

                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="card_main_ok">

                            <div className="img_card_main">
                              <img src={Qatar} alt="makkah" className="main_img" />
                            </div>
                            <div className="text_card_main">
                              <div className="main__card-info bold">Hotels in <div className="main__card-loc bold">Makkah</div></div><br />
                              <div className="main__card_no-pr">
                                  2,345 <div className="main__card_no">Hotels <div className="bold">Avg.</div>
                                      <div className="main__card_pr bold">$302</div></div>
                              </div>
                            </div>
                            </div>

                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="card_main_ok">

                            <div className="img_card_main">
                              <img src={Qatar} alt="makkah" className="main_img" />
                            </div>
                            <div className="text_card_main">
                              <div className="main__card-info bold">Hotels in <div className="main__card-loc bold">Makkah</div></div><br />
                              <div className="main__card_no-pr">
                                  2,345 <div className="main__card_no">Hotels <div className="bold">Avg.</div>
                                      <div className="main__card_pr bold">$302</div></div>
                              </div>
                            </div>
                            </div>

                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="card_main_ok">

                            <div className="img_card_main">
                              <img src={Qatar} alt="makkah" className="main_img" />
                            </div>
                            <div className="text_card_main">
                              <div className="main__card-info bold">Hotels in <div className="main__card-loc bold">Makkah</div></div><br />
                              <div className="main__card_no-pr">
                                  2,345 <div className="main__card_no">Hotels <div className="bold">Avg.</div>
                                      <div className="main__card_pr bold">$302</div></div>
                              </div>
                            </div>
                            </div>

                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="card_main_ok">

                            <div className="img_card_main">
                              <img src={Qatar} alt="makkah" className="main_img" />
                            </div>
                            <div className="text_card_main">
                              <span className="main__card-info bold">Hotels in <span className="main__card-loc bold">Makkah</span></span><br />
                              <span className="main__card_no-pr">
                                  2,345 <span className="main__card_no">Hotels <span className="bold">Avg.</span>
                                      <span className="main__card_pr bold">$302</span></span>
                              </span>
                            </div>
                            </div>

                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="card_main_ok">

                            <div className="img_card_main">
                              <img src={Qatar} alt="makkah" className="main_img" />
                            </div>
                            <div className="text_card_main">
                              <div className="main__card-info bold">Hotels in <div className="main__card-loc bold">Makkah</div></div><br />
                              <div className="main__card_no-pr">
                                  2,345 <div className="main__card_no">Hotels <div className="bold">Avg.</div>
                                      <div className="main__card_pr bold">$302</div></div>
                              </div>
                            </div>
                            </div>

                          </SwiperSlide>
                      </Swiper>
                  </div>
                  <div className={toggleState === 2 ? "main_card active-main_card" : "main_card"}>
                      <Swiper
                          slidesPerView={4}
                          spaceBetween={20}
                          freeMode={true}
                          pagination={{
                              clickable: true,
                          }}
                          modules={[FreeMode, Pagination]}
                          className="mySwiper"
                      >
                          <SwiperSlide>
                            <div className="card_main_ok">

                            <div className="img_card_main">
                              <img src={Qatar} alt="makkah" className="main_img" />
                            </div>
                            <div className="text_card_main">
                              <div className="main__card-info bold">Hotels in <div className="main__card-loc bold">Makkah</div></div><br />
                              <div className="main__card_no-pr">
                                  2,345 <div className="main__card_no">Hotels <div className="bold">Avg.</div>
                                      <div className="main__card_pr bold">$302</div></div>
                              </div>
                            </div>
                            </div>

                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="card_main_ok">

                            <div className="img_card_main">
                              <img src={Qatar} alt="makkah" className="main_img" />
                            </div>
                            <div className="text_card_main">
                              <div className="main__card-info bold">Hotels in <div className="main__card-loc bold">Makkah</div></div><br />
                              <div className="main__card_no-pr">
                                  2,345 <div className="main__card_no">Hotels <div className="bold">Avg.</div>
                                      <div className="main__card_pr bold">$302</div></div>
                              </div>
                            </div>
                            </div>

                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="card_main_ok">

                            <div className="img_card_main">
                              <img src={Qatar} alt="makkah" className="main_img" />
                            </div>
                            <div className="text_card_main">
                              <div className="main__card-info bold">Hotels in <div className="main__card-loc bold">Makkah</div></div><br />
                              <div className="main__card_no-pr">
                                  2,345 <div className="main__card_no">Hotels <div className="bold">Avg.</div>
                                      <div className="main__card_pr bold">$302</div></div>
                              </div>
                            </div>
                            </div>

                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="card_main_ok">

                            <div className="img_card_main">
                              <img src={Qatar} alt="makkah" className="main_img" />
                            </div>
                            <div className="text_card_main">
                              <div className="main__card-info bold">Hotels in <div className="main__card-loc bold">Makkah</div></div><br />
                              <div className="main__card_no-pr">
                                  2,345 <div className="main__card_no">Hotels <div className="bold">Avg.</div>
                                      <div className="main__card_pr bold">$302</div></div>
                              </div>
                            </div>
                            </div>

                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="card_main_ok">

                            <div className="img_card_main">
                              <img src={Qatar} alt="makkah" className="main_img" />
                            </div>
                            <div className="text_card_main">
                              <div className="main__card-info bold">Hotels in <div className="main__card-loc bold">Makkah</div></div><br />
                              <div className="main__card_no-pr">
                                  2,345 <div className="main__card_no">Hotels <div className="bold">Avg.</div>
                                      <div className="main__card_pr bold">$302</div></div>
                              </div>
                            </div>
                            </div>

                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="card_main_ok">

                            <div className="img_card_main">
                              <img src={Qatar} alt="makkah" className="main_img" />
                            </div>
                            <div className="text_card_main">
                              <div className="main__card-info bold">Hotels in <div className="main__card-loc bold">Makkah</div></div><br />
                              <div className="main__card_no-pr">
                                  2,345 <div className="main__card_no">Hotels <div className="bold">Avg.</div>
                                      <div className="main__card_pr bold">$302</div></div>
                              </div>
                            </div>
                            </div>

                          </SwiperSlide>
                      </Swiper>
                  </div>
              </div>
          </div>
      
      </div>
      <div className="hy">
      <div className="container__para main__cont-w">
            <div className="para_cont">
                <h2 className="para_cont-heading">trivago's global hotel search</h2>
                trivago’s hotel search allows users to compare hotel prices in just a few clicks from hundreds of booking sites for more than 5.0 million hotels and other types of accommodation in over 190 countries. We help millions of travelers each year compare deals for hotels and accommodations. Get information for weekend trips to cities like Liverpool or Birmingham and you can find the right hotel on trivago. New York City and its surrounding area are great for trips that are a week or longer with the numerous hotels available.
            </div>
            <div className="para_cont">
                <h2 className="para_cont-heading">trivago's global hotel search</h2>
                trivago’s hotel search allows users to compare hotel prices in just a few clicks from hundreds of booking sites for more than 5.0 million hotels and other types of accommodation in over 190 countries. We help millions of travelers each year compare deals for hotels and accommodations. Get information for weekend trips to cities like Liverpool or Birmingham and you can find the right hotel on trivago. New York City and its surrounding area are great for trips that are a week or longer with the numerous hotels available.
            </div>
        </div>
      <div className="container__para main__cont-w">
            <div className="para_cont">
                <h2 className="para_cont-heading">trivago's global hotel search</h2>
                trivago’s hotel search allows users to compare hotel prices in just a few clicks from hundreds of booking sites for more than 5.0 million hotels and other types of accommodation in over 190 countries. We help millions of travelers each year compare deals for hotels and accommodations. Get information for weekend trips to cities like Liverpool or Birmingham and you can find the right hotel on trivago. New York City and its surrounding area are great for trips that are a week or longer with the numerous hotels available.
            </div>
            <div className="para_cont">
                <h2 className="para_cont-heading">trivago's global hotel search</h2>
                trivago’s hotel search allows users to compare hotel prices in just a few clicks from hundreds of booking sites for more than 5.0 million hotels and other types of accommodation in over 190 countries. We help millions of travelers each year compare deals for hotels and accommodations. Get information for weekend trips to cities like Liverpool or Birmingham and you can find the right hotel on trivago. New York City and its surrounding area are great for trips that are a week or longer with the numerous hotels available.
            </div>
        </div>
        
      </div>
        </>
  )
}

export default Maincard