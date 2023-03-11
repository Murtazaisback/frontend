import React, { useState } from 'react'
import "./list.css"
import Img from "../../assest/g.jpg"
import { BsBank, BsBookmarkFill, BsFile } from 'react-icons/bs'
import { HiOutlineHeart, HiWifi } from 'react-icons/hi'
import { ImStarEmpty, ImStarFull, ImStarHalf } from 'react-icons/im'
import { MdPets } from 'react-icons/md'
import { AiOutlineTrophy } from 'react-icons/ai'
import { TbAirConditioning } from 'react-icons/tb'
import { FaChevronDown, FaChevronRight, FaParking, FaSwimmingPool } from 'react-icons/fa'
import { Link } from "react-router-dom"

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

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";


const List = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab =(index)=>{
        setToggleState(index)
    }
    const [open, setOpen] = useState(false)
    
  return (
    <>
      <div className="main_list">


              <div className="content_list">
                  <div className="list__header">
                      <form action="#">
                          <label htmlFor="sort" className="sort-by-t">Sort by</label>
                          <select name="sort" id="sort">
                              <option value="recommend" selected>Our recommendation</option>
                              <option value="Price">Only Price</option>
                              <option value="rating & recommend">Rating & recommended</option>
                              <option value="Price &recommend">Price & recommended</option>
                              <option value="Rating">Rating Only</option>
                          </select>
                      </form>
                      <div className="list__header-conts">
                          <div className="list__header-cont">
                              <BsBank />
                              <p>Stays Founds:</p>
                              <span className="bold">1000+</span>
                          </div>
                          <div className="list__header-cont">
                              <BsBookmarkFill />
                              <p>Booking Sites Reached: </p>
                              <span className="bold">1000+</span>
                          </div>
                      </div>
                  </div>
                  <div className="content__container">
                      <div className="content__item">
                          <div className="content__img-list" onClick={() => setOpen(!open)}>
                              <img src={Img} alt="" className="siImg" />
                          </div>
                          <div className="siDesc">
                              <h1 className={toggleState === 1 ? "siTitle" : "siTitle"} onClick={() => setOpen(!open)}>tower Street apartments <HiOutlineHeart color="gray" /></h1>
                              <span className="siStars">
                                  <span className="Stars-li">
                                      <ImStarFull color='#F2921D' />
                                      <ImStarFull color='#F2921D' />
                                      <ImStarFull color='#F2921D' />
                                      <ImStarHalf color='#F2921D' />
                                      <ImStarEmpty color='#F2921D' />
                                  </span>
                                  <span className="place_li">Hotel</span>
                                  <span className="ad__or-not">Ads</span>
                              </span>
                              <span className="siPopular_rn">
                                  <AiOutlineTrophy />
                                  <p>
                                      Popular Choice
                                  </p>
                              </span>
                              <span className="siLocation_drop" onClick={() => setOpen(!open)}>
                                  Cairo <FaChevronDown />
                              </span>
                              <span className="siReviews" onClick={() => setOpen(!open)}>
                                  <span className="sireviews_info">
                                      <span className="siReview_points">8.9</span>
                                      <span className="siReview_pos">Very good</span>
                                      <span className="siReview_No.">(2061 reviews)</span>
                                  </span>
                                  <span className="sireviews_icon">
                                      <FaChevronDown />
                                  </span>
                              </span>
                          </div>
                          <div className="siDetails">
                              <div className="card__top">
                                  <div className="card_li_info">
                                      <span className="card_web_info">Booking.com</span>
                                      <span className="card_in_info">Free breakfast</span>
                                  </div>
                                  <div className="siDetailsTexts">
                                      <span className="siPrice">
                                          <span className='card__b-p c_g'>$123</span>
                                          <p>For two night <span className="card__b-p c_g">$300</span></p>
                                      </span>
                                      <Link to="/Redirect" target="_blank" className='Link_Redirect'>
                                          <button className="siCheckBtn">View Deal <FaChevronRight /> </button>
                                      </Link>
                                  </div>
                              </div>
                              <div className="card__bottom">
                              <Link to="/Redirect" target="_blank" className='Link_Redirect'>
                                  <div className="card__bleft">
                                      booking.com
                                      <p className='card__b-p'>$316</p>
                                  </div>
                              </Link>
                                  <span className="card__brigth" onClick={() => setOpen(!open)}>
                                      <div className="card__bright-info">
                                          Our lowest Price
                                          <span className="card__bright-loc">
                                              <p className="card__b-p">$314</p>
                                              <span>trip.com</span>
                                          </span>
                                      </div>
                                      <div className="card__bright-icon">
                                          <FaChevronDown />
                                      </div>
                                  </span>
                              </div>
                          </div>
                      </div>
                      <div className="content__item_dec">
                      {open && (
                          <><><div className="item_des_tabs">
                                  <div className={toggleState === 1 ? "card-tab active-tab" : "card-tab"} onClick={() => toggleTab(1)}>Overview</div>
                                  <div className={toggleState === 2 ? "card-tab active-tab" : "card-tab"} onClick={() => toggleTab(2)}>Info</div>
                                  <div className={toggleState === 3 ? "card-tab active-tab" : "card-tab"} onClick={() => toggleTab(3)}>Photos</div>
                                  <div className={toggleState === 4 ? "card-tab active-tab" : "card-tab"} onClick={() => toggleTab(4)}>Reviews</div>
                                  <div className={toggleState === 5 ? "card-tab active-tab" : "card-tab"} onClick={() => toggleTab(5)}>Deals</div>
                              </div>
                                  <div className={toggleState === 1 ? "main_card active-main_card" : "main_card"}>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                          <button className={toggleState === 3 ? "more_photos" : "more_photos"} onClick={() => toggleTab(3)}><p>More Photos</p> <FaChevronRight /></button>
                                      </div>
                                      <div className="item_des_deals">
                                          <span className="heading_deals">Deals you'll Love</span>
                                          <div className="item_deals_card">
                                              <Swiper
                                                  slidesPerView={4}
                                                  spaceBetween={1}
                                                  freeMode={true}
                                                  pagination={{
                                                      clickable: true,
                                                  }}
                                                  modules={[FreeMode, Pagination]}
                                                  className="mySwiper width"
                                              >
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Our Lowest Price <br /><span className="green d-p">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal g">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                              </Swiper>
                                              <div className="ShowBtn">
                                                  <button className={toggleState === 5 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(5)}><p>Show all deals </p> <FaChevronRight /></button>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="card_review">
                                          <div className="review_r">
                                              <span className="card_review_no">8.9</span>
                                              <span className="card_review_text">
                                                  <p className="bold review_p">Excellent <p className='nor'>(738 reviews)</p></p>
                                                  <p className='gray'>trivago Rating Index</p>
                                              </span>
                                          </div>
                                      </div>
                                      <div className="ShowBtn">
                                          <button className={toggleState === 4 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(4)}><p>Read Reviews </p> <FaChevronRight /></button>
                                      </div>
                                      <div className="card_facilities">
                                          <div className="card_facil_heading">
                                              Amenities & facilities
                                          </div>
                                          <span className="card_facil_icons">
                                              <div className="icon">
                                                  <HiWifi />
                                                  free wifi
                                              </div>
                                              <div className="icon">
                                                  <FaSwimmingPool />
                                                  Swimming Pool
                                              </div>
                                              <div className="icon">
                                                  <FaParking />
                                                  Parking
                                              </div>
                                              <div className="icon">
                                                  <MdPets />
                                                  Pets
                                              </div>
                                              <div className="icon">
                                                  <TbAirConditioning />
                                                  Air Conditioning
                                              </div>
                                          </span>
                                          <div className="ShowBtn">
                                              <button className={toggleState === 4 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(4)}><p>Read Reviews </p> <FaChevronRight /></button>
                                          </div>

                                      </div>
                                      <div className="ShowBtn border_n">
                                          <button className={toggleState === 4 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(4)}><p>Close all </p> <FaChevronRight /></button>
                                      </div>
                                  </div></><div className={toggleState === 2 ? "main_card active-main_card" : "main_card"}>
                                      <div className="heading_info">
                                          About Makkah Marriott Hotel
                                      </div>
                                      <div className="info_des">
                                          <span className="main_info_des">
                                              <p>
                                                  Located in the Jabal Omar Complex, Makkah Marriott Hotel features 426 modern rooms and 52 luxurious suites,<br /> and is conveniently close to the Grand Mosque and other holy sites. Each room has floor-to-ceiling <br /> windows that offer views of the city and the Grand Mosque, as well as a LCD TV, minibar, free Wi-Fi and <br /> safe deposit box. The private bathrooms feature complimentary robes, slippers and toiletries, and are fitted <br /> with rainfall showers. There are a total of 22 floors at Makkah Marriott Hotel, as well as five meeting rooms <br /> with wired high-speed Internet. There is a barbershop and laundry on-site, and Wi-Fi is complimentary in <br /> all public areas. Other amenities include a concierge desk, currency exchange, news-stand and front desk. <br /> A buffet and hot breakfast are available daily, and the on-site restaurants serve a variety of Asian and <br /> International cuisines. The revered Cave of Hira, which sits atop Jabal Al-Nur, is within easy access.
                                              </p>
                                          </span>
                                          <div className="card_facilities">
                                              <div className="card_facil_heading">
                                                  Top amenities
                                              </div>
                                              <span className="card_facil_icons">
                                                  <div className="icon">
                                                      <HiWifi />
                                                      free wifi
                                                  </div>
                                                  <div className="icon">
                                                      <FaSwimmingPool />
                                                      Swimming Pool
                                                  </div>
                                                  <div className="icon">
                                                      <FaParking />
                                                      Parking
                                                  </div>
                                                  <div className="icon">
                                                      <MdPets />
                                                      Pets
                                                  </div>
                                                  <div className="icon">
                                                      <TbAirConditioning />
                                                      Air Conditioning
                                                  </div>
                                              </span>

                                          </div>
                                          <div className="card_facilities">
                                              <span className="card_facil_icons">
                                                  <div className="icon">
                                                      <HiWifi />
                                                      free wifi
                                                  </div>
                                                  <div className="icon">
                                                      <FaSwimmingPool />
                                                      Swimming Pool
                                                  </div>
                                                  <div className="icon">
                                                      <FaParking />
                                                      Parking
                                                  </div>
                                                  <div className="icon">
                                                      <MdPets />
                                                      Pets
                                                  </div>
                                                  <div className="icon">
                                                      <TbAirConditioning />
                                                      Air Conditioning
                                                  </div>
                                              </span>

                                          </div>
                                      </div>
                                      <div className="ShowBtn border_n">
                                          <button className={toggleState === 4 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(4)}><p>Close all </p> <FaChevronRight /></button>
                                      </div>

                                  </div><div className={toggleState === 3 ? "main_card active-main_card" : "main_card"}>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img small">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                      </div>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img small">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                      </div>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img small">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                      </div>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img small">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                      </div>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img small">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                      </div>
                                  </div><div className={toggleState === 4 ? "main_card active-main_card" : "main_card"}>
                                    <span className="heading_deals">All Deals</span>
                                    <div className="top_rating_over">
                                        <div className="top_rating_left">
                                            <div className="rating_top"><span>8.2</span></div>
                                            <div className="rating_text"><span><span className='bold'>trivago</span> Rating Index based on <span className='bold'>374</span><br /> reviews From:</span></div>
                                            <div className="rating_exp">Expedia(8.4/10) </div>
                                        </div>
                                        <div className="main__bar_info">
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                        </div>
                                    </div>
                                  </div><div className={toggleState === 5 ? "main_card active-main_card" : "main_card"}>

                                      <div className="item_des_deals">
                                          <span className="heading_deals">Deals you'll Love</span>
                                          <div className="item_deals_card">
                                              <Swiper
                                                  slidesPerView={4}
                                                  spaceBetween={1}
                                                  freeMode={true}
                                                  pagination={{
                                                      clickable: true,
                                                  }}
                                                  modules={[FreeMode, Pagination]}
                                                  className="mySwiper width"
                                              >
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Our Lowest Price <br /><span className="green d-p">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal g">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                              </Swiper>
                                          </div>
                                      </div>
                                      <div className="all_deals_cards">
                                          
                                          <span className="heading_deals">All Deals</span>
                                          <div className="sohw_deals_cards">
                                              <div className="deals_form">
                                                  <div className="option_deal_1">
                                                      <form action="#" className="show_list">
                                                          <label htmlFor="gg" className='label_deal'>Show deals with:</label>
                                                          <select name="gg" id="show_deals">
                                                              <option value="gg" selected>All</option>
                                                              <option value="gg">USD1</option>
                                                              <option value="gg">USD2</option>
                                                              <option value="gg">USD3</option>
                                                              <option value="gg">USD4</option>
                                                          </select>
                                                      </form>
                                                  </div>
                                                  <div className="option_deal_2">
                                                      <form action="#" className="show_list">
                                                          <label htmlFor="gg" className='label_deal'>Show room types:</label>
                                                          <select name="gg" id="show_deals">
                                                              <option value="gg" selected>ALL</option>
                                                              <option value="gg">USD1</option>
                                                              <option value="gg">USD2</option>
                                                              <option value="gg">USD3</option>
                                                              <option value="gg">USD4</option>
                                                          </select>
                                                      </form>
                                                  </div>
                                              </div>
                                              <div className="main_deal_m">
                                                  <div className="main_deal">
                                                      <div className="main_deal_img">
                                                          <img src={Booking} alt="Booking logo" />
                                                      </div>
                                                      <div className="main_deal_text">
                                                          <div className="main_deal_p">Prepay Non-refundable Non-changeable Superior Guest Room, Guest</div>
                                                          <span className="breakfast">Breakfast not included</span>
                                                      </div>
                                                      <div className="main_deal_pr">
                                                          <span className="m_site">Official Hotel site</span>
                                                          <div>
                                                              <span className="bold m_price">$129 <br />/night</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="more_deal_no">Show 32 more deals(incl. Free breakfast, Pay at the property)
                                                  </div>
                                              </div>
                                              <div className="main_deal_m">
                                                  <div className="main_deal">
                                                      <div className="main_deal_img">
                                                          <img src={Booking} alt="Booking logo" />
                                                      </div>
                                                      <div className="main_deal_text">
                                                          <div className="main_deal_p">Prepay Non-refundable Non-changeable Superior Guest Room, Guest</div>
                                                          <span className="breakfast">Breakfast not included</span>
                                                      </div>
                                                      <div className="main_deal_pr">
                                                          <span className="m_site">Official Hotel site</span>
                                                          <div>
                                                              <span className="bold m_price">$129 <br />/night</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="more_deal_no">Show 32 more deals(incl. Free breakfast, Pay at the property)
                                                  </div>
                                              </div>
                                              <div className="main_deal_m">
                                                  <div className="main_deal">
                                                      <div className="main_deal_img">
                                                          <img src={Booking} alt="Booking logo" />
                                                      </div>
                                                      <div className="main_deal_text">
                                                          <div className="main_deal_p">Prepay Non-refundable Non-changeable Superior Guest Room, Guest</div>
                                                          <span className="breakfast">Breakfast not included</span>
                                                      </div>
                                                      <div className="main_deal_pr">
                                                          <span className="m_site">Official Hotel site</span>
                                                          <div>
                                                              <span className="bold m_price">$129 <br />/night</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="more_deal_no">Show 32 more deals(incl. Free breakfast, Pay at the property)
                                                  </div>
                                                  <div className="left">
                                                  <button className={toggleState === 4 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(4)}><p>Close all </p> <FaChevronRight /></button>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div></>
                          )}
                      </div>

                  </div>
                  <div className="content__container">
                      <div className="content__item">
                          <div className="content__img-list" onClick={() => setOpen(!open)}>
                              <img src={Img} alt="" className="siImg" />
                          </div>
                          <div className="siDesc">
                              <h1 className={toggleState === 1 ? "siTitle" : "siTitle"} onClick={() => setOpen(!open)}>tower Street apartments <HiOutlineHeart color="gray" /></h1>
                              <span className="siStars">
                                  <span className="Stars-li">
                                      <ImStarFull color='#F2921D' />
                                      <ImStarFull color='#F2921D' />
                                      <ImStarFull color='#F2921D' />
                                      <ImStarHalf color='#F2921D' />
                                      <ImStarEmpty color='#F2921D' />
                                  </span>
                                  <span className="place_li">Hotel</span>
                                  <span className="ad__or-not">Ads</span>
                              </span>
                              <span className="siPopular_rn">
                                  <AiOutlineTrophy />
                                  <p>
                                      Popular Choice
                                  </p>
                              </span>
                              <span className="siLocation_drop" onClick={() => setOpen(!open)}>
                                  Cairo <FaChevronDown />
                              </span>
                              <span className="siReviews" onClick={() => setOpen(!open)}>
                                  <span className="sireviews_info">
                                      <span className="siReview_points">8.9</span>
                                      <span className="siReview_pos">Very good</span>
                                      <span className="siReview_No.">(2061 reviews)</span>
                                  </span>
                                  <span className="sireviews_icon">
                                      <FaChevronDown />
                                  </span>
                              </span>
                          </div>
                          <div className="siDetails">
                              <div className="card__top">
                                  <div className="card_li_info">
                                      <span className="card_web_info">Booking.com</span>
                                      <span className="card_in_info">Free breakfast</span>
                                  </div>
                                  <div className="siDetailsTexts">
                                      <span className="siPrice">
                                          <span className='card__b-p c_g'>$123</span>
                                          <p>For two night <span className="card__b-p c_g">$300</span></p>
                                      </span>
                                      <Link to="/Redirect" target="_blank" className='Link_Redirect'>
                                          <button className="siCheckBtn">View Deal <FaChevronRight /> </button>
                                      </Link>
                                  </div>
                              </div>
                              <div className="card__bottom">
                              <Link to="/Redirect" target="_blank" className='Link_Redirect'>
                                  <div className="card__bleft">
                                      booking.com
                                      <p className='card__b-p'>$316</p>
                                  </div>
                              </Link>
                                  <span className="card__brigth" onClick={() => setOpen(!open)}>
                                      <div className="card__bright-info">
                                          Our lowest Price
                                          <span className="card__bright-loc">
                                              <p className="card__b-p">$314</p>
                                              <span>trip.com</span>
                                          </span>
                                      </div>
                                      <div className="card__bright-icon">
                                          <FaChevronDown />
                                      </div>
                                  </span>
                              </div>
                          </div>
                      </div>
                      <div className="content__item_dec">
                      {open && (
                          <><><div className="item_des_tabs">
                                  <div className={toggleState === 1 ? "card-tab active-tab" : "card-tab"} onClick={() => toggleTab(1)}>Overview</div>
                                  <div className={toggleState === 2 ? "card-tab active-tab" : "card-tab"} onClick={() => toggleTab(2)}>Info</div>
                                  <div className={toggleState === 3 ? "card-tab active-tab" : "card-tab"} onClick={() => toggleTab(3)}>Photos</div>
                                  <div className={toggleState === 4 ? "card-tab active-tab" : "card-tab"} onClick={() => toggleTab(4)}>Reviews</div>
                                  <div className={toggleState === 5 ? "card-tab active-tab" : "card-tab"} onClick={() => toggleTab(5)}>Deals</div>
                              </div>
                                  <div className={toggleState === 1 ? "main_card active-main_card" : "main_card"}>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                          <button className={toggleState === 3 ? "more_photos" : "more_photos"} onClick={() => toggleTab(3)}><p>More Photos</p> <FaChevronRight /></button>
                                      </div>
                                      <div className="item_des_deals">
                                          <span className="heading_deals">Deals you'll Love</span>
                                          <div className="item_deals_card">
                                              <Swiper
                                                  slidesPerView={4}
                                                  spaceBetween={1}
                                                  freeMode={true}
                                                  pagination={{
                                                      clickable: true,
                                                  }}
                                                  modules={[FreeMode, Pagination]}
                                                  className="mySwiper width"
                                              >
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Our Lowest Price <br /><span className="green d-p">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal g">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                              </Swiper>
                                              <div className="ShowBtn">
                                                  <button className={toggleState === 5 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(5)}><p>Show all deals </p> <FaChevronRight /></button>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="card_review">
                                          <div className="review_r">
                                              <span className="card_review_no">8.9</span>
                                              <span className="card_review_text">
                                                  <p className="bold review_p">Excellent <p className='nor'>(738 reviews)</p></p>
                                                  <p className='gray'>trivago Rating Index</p>
                                              </span>
                                          </div>
                                      </div>
                                      <div className="ShowBtn">
                                          <button className={toggleState === 4 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(4)}><p>Read Reviews </p> <FaChevronRight /></button>
                                      </div>
                                      <div className="card_facilities">
                                          <div className="card_facil_heading">
                                              Amenities & facilities
                                          </div>
                                          <span className="card_facil_icons">
                                              <div className="icon">
                                                  <HiWifi />
                                                  free wifi
                                              </div>
                                              <div className="icon">
                                                  <FaSwimmingPool />
                                                  Swimming Pool
                                              </div>
                                              <div className="icon">
                                                  <FaParking />
                                                  Parking
                                              </div>
                                              <div className="icon">
                                                  <MdPets />
                                                  Pets
                                              </div>
                                              <div className="icon">
                                                  <TbAirConditioning />
                                                  Air Conditioning
                                              </div>
                                          </span>
                                          <div className="ShowBtn">
                                              <button className={toggleState === 4 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(4)}><p>Read Reviews </p> <FaChevronRight /></button>
                                          </div>

                                      </div>
                                      <div className="ShowBtn border_n">
                                          <button className={toggleState === 4 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(4)}><p>Close all </p> <FaChevronRight /></button>
                                      </div>
                                  </div></><div className={toggleState === 2 ? "main_card active-main_card" : "main_card"}>
                                      <div className="heading_info">
                                          About Makkah Marriott Hotel
                                      </div>
                                      <div className="info_des">
                                          <span className="main_info_des">
                                              <p>
                                                  Located in the Jabal Omar Complex, Makkah Marriott Hotel features 426 modern rooms and 52 luxurious suites,<br /> and is conveniently close to the Grand Mosque and other holy sites. Each room has floor-to-ceiling <br /> windows that offer views of the city and the Grand Mosque, as well as a LCD TV, minibar, free Wi-Fi and <br /> safe deposit box. The private bathrooms feature complimentary robes, slippers and toiletries, and are fitted <br /> with rainfall showers. There are a total of 22 floors at Makkah Marriott Hotel, as well as five meeting rooms <br /> with wired high-speed Internet. There is a barbershop and laundry on-site, and Wi-Fi is complimentary in <br /> all public areas. Other amenities include a concierge desk, currency exchange, news-stand and front desk. <br /> A buffet and hot breakfast are available daily, and the on-site restaurants serve a variety of Asian and <br /> International cuisines. The revered Cave of Hira, which sits atop Jabal Al-Nur, is within easy access.
                                              </p>
                                          </span>
                                          <div className="card_facilities">
                                              <div className="card_facil_heading">
                                                  Top amenities
                                              </div>
                                              <span className="card_facil_icons">
                                                  <div className="icon">
                                                      <HiWifi />
                                                      free wifi
                                                  </div>
                                                  <div className="icon">
                                                      <FaSwimmingPool />
                                                      Swimming Pool
                                                  </div>
                                                  <div className="icon">
                                                      <FaParking />
                                                      Parking
                                                  </div>
                                                  <div className="icon">
                                                      <MdPets />
                                                      Pets
                                                  </div>
                                                  <div className="icon">
                                                      <TbAirConditioning />
                                                      Air Conditioning
                                                  </div>
                                              </span>

                                          </div>
                                          <div className="card_facilities">
                                              <span className="card_facil_icons">
                                                  <div className="icon">
                                                      <HiWifi />
                                                      free wifi
                                                  </div>
                                                  <div className="icon">
                                                      <FaSwimmingPool />
                                                      Swimming Pool
                                                  </div>
                                                  <div className="icon">
                                                      <FaParking />
                                                      Parking
                                                  </div>
                                                  <div className="icon">
                                                      <MdPets />
                                                      Pets
                                                  </div>
                                                  <div className="icon">
                                                      <TbAirConditioning />
                                                      Air Conditioning
                                                  </div>
                                              </span>

                                          </div>
                                      </div>
                                      <div className="ShowBtn border_n">
                                          <button className={toggleState === 4 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(4)}><p>Close all </p> <FaChevronRight /></button>
                                      </div>

                                  </div><div className={toggleState === 3 ? "main_card active-main_card" : "main_card"}>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img small">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                      </div>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img small">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                      </div>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img small">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                      </div>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img small">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                      </div>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img small">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                      </div>
                                  </div><div className={toggleState === 4 ? "main_card active-main_card" : "main_card"}>
                                    <span className="heading_deals">All Deals</span>
                                    <div className="top_rating_over">
                                        <div className="top_rating_left">
                                            <div className="rating_top"><span>8.2</span></div>
                                            <div className="rating_text"><span><span className='bold'>trivago</span> Rating Index based on <span className='bold'>374</span><br /> reviews From:</span></div>
                                            <div className="rating_exp">Expedia(8.4/10) </div>
                                        </div>
                                        <div className="main__bar_info">
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                        </div>
                                    </div>
                                  </div><div className={toggleState === 5 ? "main_card active-main_card" : "main_card"}>

                                      <div className="item_des_deals">
                                          <span className="heading_deals">Deals you'll Love</span>
                                          <div className="item_deals_card">
                                              <Swiper
                                                  slidesPerView={4}
                                                  spaceBetween={1}
                                                  freeMode={true}
                                                  pagination={{
                                                      clickable: true,
                                                  }}
                                                  modules={[FreeMode, Pagination]}
                                                  className="mySwiper width"
                                              >
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Our Lowest Price <br /><span className="green d-p">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal g">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                              </Swiper>
                                          </div>
                                      </div>
                                      <div className="all_deals_cards">
                                          
                                          <span className="heading_deals">All Deals</span>
                                          <div className="sohw_deals_cards">
                                              <div className="deals_form">
                                                  <div className="option_deal_1">
                                                      <form action="#" className="show_list">
                                                          <label htmlFor="gg" className='label_deal'>Show deals with:</label>
                                                          <select name="gg" id="show_deals">
                                                              <option value="gg" selected>All</option>
                                                              <option value="gg">USD1</option>
                                                              <option value="gg">USD2</option>
                                                              <option value="gg">USD3</option>
                                                              <option value="gg">USD4</option>
                                                          </select>
                                                      </form>
                                                  </div>
                                                  <div className="option_deal_2">
                                                      <form action="#" className="show_list">
                                                          <label htmlFor="gg" className='label_deal'>Show room types:</label>
                                                          <select name="gg" id="show_deals">
                                                              <option value="gg" selected>ALL</option>
                                                              <option value="gg">USD1</option>
                                                              <option value="gg">USD2</option>
                                                              <option value="gg">USD3</option>
                                                              <option value="gg">USD4</option>
                                                          </select>
                                                      </form>
                                                  </div>
                                              </div>
                                              <div className="main_deal_m">
                                                  <div className="main_deal">
                                                      <div className="main_deal_img">
                                                          <img src={Booking} alt="Booking logo" />
                                                      </div>
                                                      <div className="main_deal_text">
                                                          <div className="main_deal_p">Prepay Non-refundable Non-changeable Superior Guest Room, Guest</div>
                                                          <span className="breakfast">Breakfast not included</span>
                                                      </div>
                                                      <div className="main_deal_pr">
                                                          <span className="m_site">Official Hotel site</span>
                                                          <div>
                                                              <span className="bold m_price">$129 <br />/night</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="more_deal_no">Show 32 more deals(incl. Free breakfast, Pay at the property)
                                                  </div>
                                              </div>
                                              <div className="main_deal_m">
                                                  <div className="main_deal">
                                                      <div className="main_deal_img">
                                                          <img src={Booking} alt="Booking logo" />
                                                      </div>
                                                      <div className="main_deal_text">
                                                          <div className="main_deal_p">Prepay Non-refundable Non-changeable Superior Guest Room, Guest</div>
                                                          <span className="breakfast">Breakfast not included</span>
                                                      </div>
                                                      <div className="main_deal_pr">
                                                          <span className="m_site">Official Hotel site</span>
                                                          <div>
                                                              <span className="bold m_price">$129 <br />/night</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="more_deal_no">Show 32 more deals(incl. Free breakfast, Pay at the property)
                                                  </div>
                                              </div>
                                              <div className="main_deal_m">
                                                  <div className="main_deal">
                                                      <div className="main_deal_img">
                                                          <img src={Booking} alt="Booking logo" />
                                                      </div>
                                                      <div className="main_deal_text">
                                                          <div className="main_deal_p">Prepay Non-refundable Non-changeable Superior Guest Room, Guest</div>
                                                          <span className="breakfast">Breakfast not included</span>
                                                      </div>
                                                      <div className="main_deal_pr">
                                                          <span className="m_site">Official Hotel site</span>
                                                          <div>
                                                              <span className="bold m_price">$129 <br />/night</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="more_deal_no">Show 32 more deals(incl. Free breakfast, Pay at the property)
                                                  </div>
                                                  <div className="left">
                                                  <button className={toggleState === 4 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(4)}><p>Close all </p> <FaChevronRight /></button>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div></>
                          )}
                      </div>

                  </div>
                  <div className="content__container">
                      <div className="content__item">
                          <div className="content__img-list" onClick={() => setOpen(!open)}>
                              <img src={Img} alt="" className="siImg" />
                          </div>
                          <div className="siDesc">
                              <h1 className={toggleState === 1 ? "siTitle" : "siTitle"} onClick={() => setOpen(!open)}>tower Street apartments <HiOutlineHeart color="gray" /></h1>
                              <span className="siStars">
                                  <span className="Stars-li">
                                      <ImStarFull color='#F2921D' />
                                      <ImStarFull color='#F2921D' />
                                      <ImStarFull color='#F2921D' />
                                      <ImStarHalf color='#F2921D' />
                                      <ImStarEmpty color='#F2921D' />
                                  </span>
                                  <span className="place_li">Hotel</span>
                                  <span className="ad__or-not">Ads</span>
                              </span>
                              <span className="siPopular_rn">
                                  <AiOutlineTrophy />
                                  <p>
                                      Popular Choice
                                  </p>
                              </span>
                              <span className="siLocation_drop" onClick={() => setOpen(!open)}>
                                  Cairo <FaChevronDown />
                              </span>
                              <span className="siReviews" onClick={() => setOpen(!open)}>
                                  <span className="sireviews_info">
                                      <span className="siReview_points">8.9</span>
                                      <span className="siReview_pos">Very good</span>
                                      <span className="siReview_No.">(2061 reviews)</span>
                                  </span>
                                  <span className="sireviews_icon">
                                      <FaChevronDown />
                                  </span>
                              </span>
                          </div>
                          <div className="siDetails">
                              <div className="card__top">
                                  <div className="card_li_info">
                                      <span className="card_web_info">Booking.com</span>
                                      <span className="card_in_info">Free breakfast</span>
                                  </div>
                                  <div className="siDetailsTexts">
                                      <span className="siPrice">
                                          <span className='card__b-p c_g'>$123</span>
                                          <p>For two night <span className="card__b-p c_g">$300</span></p>
                                      </span>
                                      <Link to="/Redirect" target="_blank" className='Link_Redirect'>
                                          <button className="siCheckBtn">View Deal <FaChevronRight /> </button>
                                      </Link>
                                  </div>
                              </div>
                              <div className="card__bottom">
                              <Link to="/Redirect" target="_blank" className='Link_Redirect'>
                                  <div className="card__bleft">
                                      booking.com
                                      <p className='card__b-p'>$316</p>
                                  </div>
                              </Link>
                                  <span className="card__brigth" onClick={() => setOpen(!open)}>
                                      <div className="card__bright-info">
                                          Our lowest Price
                                          <span className="card__bright-loc">
                                              <p className="card__b-p">$314</p>
                                              <span>trip.com</span>
                                          </span>
                                      </div>
                                      <div className="card__bright-icon">
                                          <FaChevronDown />
                                      </div>
                                  </span>
                              </div>
                          </div>
                      </div>
                      <div className="content__item_dec">
                      {open && (
                          <><><div className="item_des_tabs">
                                  <div className={toggleState === 1 ? "card-tab active-tab" : "card-tab"} onClick={() => toggleTab(1)}>Overview</div>
                                  <div className={toggleState === 2 ? "card-tab active-tab" : "card-tab"} onClick={() => toggleTab(2)}>Info</div>
                                  <div className={toggleState === 3 ? "card-tab active-tab" : "card-tab"} onClick={() => toggleTab(3)}>Photos</div>
                                  <div className={toggleState === 4 ? "card-tab active-tab" : "card-tab"} onClick={() => toggleTab(4)}>Reviews</div>
                                  <div className={toggleState === 5 ? "card-tab active-tab" : "card-tab"} onClick={() => toggleTab(5)}>Deals</div>
                              </div>
                                  <div className={toggleState === 1 ? "main_card active-main_card" : "main_card"}>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                          <button className={toggleState === 3 ? "more_photos" : "more_photos"} onClick={() => toggleTab(3)}><p>More Photos</p> <FaChevronRight /></button>
                                      </div>
                                      <div className="item_des_deals">
                                          <span className="heading_deals">Deals you'll Love</span>
                                          <div className="item_deals_card">
                                              <Swiper
                                                  slidesPerView={4}
                                                  spaceBetween={1}
                                                  freeMode={true}
                                                  pagination={{
                                                      clickable: true,
                                                  }}
                                                  modules={[FreeMode, Pagination]}
                                                  className="mySwiper width"
                                              >
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Our Lowest Price <br /><span className="green d-p">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal g">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                              </Swiper>
                                              <div className="ShowBtn">
                                                  <button className={toggleState === 5 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(5)}><p>Show all deals </p> <FaChevronRight /></button>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="card_review">
                                          <div className="review_r">
                                              <span className="card_review_no">8.9</span>
                                              <span className="card_review_text">
                                                  <p className="bold review_p">Excellent <p className='nor'>(738 reviews)</p></p>
                                                  <p className='gray'>trivago Rating Index</p>
                                              </span>
                                          </div>
                                      </div>
                                      <div className="ShowBtn">
                                          <button className={toggleState === 4 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(4)}><p>Read Reviews </p> <FaChevronRight /></button>
                                      </div>
                                      <div className="card_facilities">
                                          <div className="card_facil_heading">
                                              Amenities & facilities
                                          </div>
                                          <span className="card_facil_icons">
                                              <div className="icon">
                                                  <HiWifi />
                                                  free wifi
                                              </div>
                                              <div className="icon">
                                                  <FaSwimmingPool />
                                                  Swimming Pool
                                              </div>
                                              <div className="icon">
                                                  <FaParking />
                                                  Parking
                                              </div>
                                              <div className="icon">
                                                  <MdPets />
                                                  Pets
                                              </div>
                                              <div className="icon">
                                                  <TbAirConditioning />
                                                  Air Conditioning
                                              </div>
                                          </span>
                                          <div className="ShowBtn">
                                              <button className={toggleState === 4 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(4)}><p>Read Reviews </p> <FaChevronRight /></button>
                                          </div>

                                      </div>
                                      <div className="ShowBtn border_n">
                                          <button className={toggleState === 4 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(4)}><p>Close all </p> <FaChevronRight /></button>
                                      </div>
                                  </div></><div className={toggleState === 2 ? "main_card active-main_card" : "main_card"}>
                                      <div className="heading_info">
                                          About Makkah Marriott Hotel
                                      </div>
                                      <div className="info_des">
                                          <span className="main_info_des">
                                              <p>
                                                  Located in the Jabal Omar Complex, Makkah Marriott Hotel features 426 modern rooms and 52 luxurious suites,<br /> and is conveniently close to the Grand Mosque and other holy sites. Each room has floor-to-ceiling <br /> windows that offer views of the city and the Grand Mosque, as well as a LCD TV, minibar, free Wi-Fi and <br /> safe deposit box. The private bathrooms feature complimentary robes, slippers and toiletries, and are fitted <br /> with rainfall showers. There are a total of 22 floors at Makkah Marriott Hotel, as well as five meeting rooms <br /> with wired high-speed Internet. There is a barbershop and laundry on-site, and Wi-Fi is complimentary in <br /> all public areas. Other amenities include a concierge desk, currency exchange, news-stand and front desk. <br /> A buffet and hot breakfast are available daily, and the on-site restaurants serve a variety of Asian and <br /> International cuisines. The revered Cave of Hira, which sits atop Jabal Al-Nur, is within easy access.
                                              </p>
                                          </span>
                                          <div className="card_facilities">
                                              <div className="card_facil_heading">
                                                  Top amenities
                                              </div>
                                              <span className="card_facil_icons">
                                                  <div className="icon">
                                                      <HiWifi />
                                                      free wifi
                                                  </div>
                                                  <div className="icon">
                                                      <FaSwimmingPool />
                                                      Swimming Pool
                                                  </div>
                                                  <div className="icon">
                                                      <FaParking />
                                                      Parking
                                                  </div>
                                                  <div className="icon">
                                                      <MdPets />
                                                      Pets
                                                  </div>
                                                  <div className="icon">
                                                      <TbAirConditioning />
                                                      Air Conditioning
                                                  </div>
                                              </span>

                                          </div>
                                          <div className="card_facilities">
                                              <span className="card_facil_icons">
                                                  <div className="icon">
                                                      <HiWifi />
                                                      free wifi
                                                  </div>
                                                  <div className="icon">
                                                      <FaSwimmingPool />
                                                      Swimming Pool
                                                  </div>
                                                  <div className="icon">
                                                      <FaParking />
                                                      Parking
                                                  </div>
                                                  <div className="icon">
                                                      <MdPets />
                                                      Pets
                                                  </div>
                                                  <div className="icon">
                                                      <TbAirConditioning />
                                                      Air Conditioning
                                                  </div>
                                              </span>

                                          </div>
                                      </div>
                                      <div className="ShowBtn border_n">
                                          <button className={toggleState === 4 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(4)}><p>Close all </p> <FaChevronRight /></button>
                                      </div>

                                  </div><div className={toggleState === 3 ? "main_card active-main_card" : "main_card"}>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img small">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                      </div>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img small">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                      </div>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img small">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                      </div>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img small">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                      </div>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img small">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                      </div>
                                  </div><div className={toggleState === 4 ? "main_card active-main_card" : "main_card"}>
                                    <span className="heading_deals">All Deals</span>
                                    <div className="top_rating_over">
                                        <div className="top_rating_left">
                                            <div className="rating_top"><span>8.2</span></div>
                                            <div className="rating_text"><span><span className='bold'>trivago</span> Rating Index based on <span className='bold'>374</span><br /> reviews From:</span></div>
                                            <div className="rating_exp">Expedia(8.4/10) </div>
                                        </div>
                                        <div className="main__bar_info">
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                        </div>
                                    </div>
                                  </div><div className={toggleState === 5 ? "main_card active-main_card" : "main_card"}>

                                      <div className="item_des_deals">
                                          <span className="heading_deals">Deals you'll Love</span>
                                          <div className="item_deals_card">
                                              <Swiper
                                                  slidesPerView={4}
                                                  spaceBetween={1}
                                                  freeMode={true}
                                                  pagination={{
                                                      clickable: true,
                                                  }}
                                                  modules={[FreeMode, Pagination]}
                                                  className="mySwiper width"
                                              >
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Our Lowest Price <br /><span className="green d-p">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal g">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                              </Swiper>
                                          </div>
                                      </div>
                                      <div className="all_deals_cards">
                                          
                                          <span className="heading_deals">All Deals</span>
                                          <div className="sohw_deals_cards">
                                              <div className="deals_form">
                                                  <div className="option_deal_1">
                                                      <form action="#" className="show_list">
                                                          <label htmlFor="gg" className='label_deal'>Show deals with:</label>
                                                          <select name="gg" id="show_deals">
                                                              <option value="gg" selected>All</option>
                                                              <option value="gg">USD1</option>
                                                              <option value="gg">USD2</option>
                                                              <option value="gg">USD3</option>
                                                              <option value="gg">USD4</option>
                                                          </select>
                                                      </form>
                                                  </div>
                                                  <div className="option_deal_2">
                                                      <form action="#" className="show_list">
                                                          <label htmlFor="gg" className='label_deal'>Show room types:</label>
                                                          <select name="gg" id="show_deals">
                                                              <option value="gg" selected>ALL</option>
                                                              <option value="gg">USD1</option>
                                                              <option value="gg">USD2</option>
                                                              <option value="gg">USD3</option>
                                                              <option value="gg">USD4</option>
                                                          </select>
                                                      </form>
                                                  </div>
                                              </div>
                                              <div className="main_deal_m">
                                                  <div className="main_deal">
                                                      <div className="main_deal_img">
                                                          <img src={Booking} alt="Booking logo" />
                                                      </div>
                                                      <div className="main_deal_text">
                                                          <div className="main_deal_p">Prepay Non-refundable Non-changeable Superior Guest Room, Guest</div>
                                                          <span className="breakfast">Breakfast not included</span>
                                                      </div>
                                                      <div className="main_deal_pr">
                                                          <span className="m_site">Official Hotel site</span>
                                                          <div>
                                                              <span className="bold m_price">$129 <br />/night</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="more_deal_no">Show 32 more deals(incl. Free breakfast, Pay at the property)
                                                  </div>
                                              </div>
                                              <div className="main_deal_m">
                                                  <div className="main_deal">
                                                      <div className="main_deal_img">
                                                          <img src={Booking} alt="Booking logo" />
                                                      </div>
                                                      <div className="main_deal_text">
                                                          <div className="main_deal_p">Prepay Non-refundable Non-changeable Superior Guest Room, Guest</div>
                                                          <span className="breakfast">Breakfast not included</span>
                                                      </div>
                                                      <div className="main_deal_pr">
                                                          <span className="m_site">Official Hotel site</span>
                                                          <div>
                                                              <span className="bold m_price">$129 <br />/night</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="more_deal_no">Show 32 more deals(incl. Free breakfast, Pay at the property)
                                                  </div>
                                              </div>
                                              <div className="main_deal_m">
                                                  <div className="main_deal">
                                                      <div className="main_deal_img">
                                                          <img src={Booking} alt="Booking logo" />
                                                      </div>
                                                      <div className="main_deal_text">
                                                          <div className="main_deal_p">Prepay Non-refundable Non-changeable Superior Guest Room, Guest</div>
                                                          <span className="breakfast">Breakfast not included</span>
                                                      </div>
                                                      <div className="main_deal_pr">
                                                          <span className="m_site">Official Hotel site</span>
                                                          <div>
                                                              <span className="bold m_price">$129 <br />/night</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="more_deal_no">Show 32 more deals(incl. Free breakfast, Pay at the property)
                                                  </div>
                                                  <div className="left">
                                                  <button className={toggleState === 4 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(4)}><p>Close all </p> <FaChevronRight /></button>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div></>
                          )}
                      </div>

                  </div>
                  <div className="content__container">
                      <div className="content__item">
                          <div className="content__img-list" onClick={() => setOpen(!open)}>
                              <img src={Img} alt="" className="siImg" />
                          </div>
                          <div className="siDesc">
                              <h1 className={toggleState === 1 ? "siTitle" : "siTitle"} onClick={() => setOpen(!open)}>tower Street apartments <HiOutlineHeart color="gray" /></h1>
                              <span className="siStars">
                                  <span className="Stars-li">
                                      <ImStarFull color='#F2921D' />
                                      <ImStarFull color='#F2921D' />
                                      <ImStarFull color='#F2921D' />
                                      <ImStarHalf color='#F2921D' />
                                      <ImStarEmpty color='#F2921D' />
                                  </span>
                                  <span className="place_li">Hotel</span>
                                  <span className="ad__or-not">Ads</span>
                              </span>
                              <span className="siPopular_rn">
                                  <AiOutlineTrophy />
                                  <p>
                                      Popular Choice
                                  </p>
                              </span>
                              <span className="siLocation_drop" onClick={() => setOpen(!open)}>
                                  Cairo <FaChevronDown />
                              </span>
                              <span className="siReviews" onClick={() => setOpen(!open)}>
                                  <span className="sireviews_info">
                                      <span className="siReview_points">8.9</span>
                                      <span className="siReview_pos">Very good</span>
                                      <span className="siReview_No.">(2061 reviews)</span>
                                  </span>
                                  <span className="sireviews_icon">
                                      <FaChevronDown />
                                  </span>
                              </span>
                          </div>
                          <div className="siDetails">
                              <div className="card__top">
                                  <div className="card_li_info">
                                      <span className="card_web_info">Booking.com</span>
                                      <span className="card_in_info">Free breakfast</span>
                                  </div>
                                  <div className="siDetailsTexts">
                                      <span className="siPrice">
                                          <span className='card__b-p c_g'>$123</span>
                                          <p>For two night <span className="card__b-p c_g">$300</span></p>
                                      </span>
                                      <Link to="/Redirect" target="_blank" className='Link_Redirect'>
                                          <button className="siCheckBtn">View Deal <FaChevronRight /> </button>
                                      </Link>
                                  </div>
                              </div>
                              <div className="card__bottom">
                              <Link to="/Redirect" target="_blank" className='Link_Redirect'>
                                  <div className="card__bleft">
                                      booking.com
                                      <p className='card__b-p'>$316</p>
                                  </div>
                              </Link>
                                  <span className="card__brigth" onClick={() => setOpen(!open)}>
                                      <div className="card__bright-info">
                                          Our lowest Price
                                          <span className="card__bright-loc">
                                              <p className="card__b-p">$314</p>
                                              <span>trip.com</span>
                                          </span>
                                      </div>
                                      <div className="card__bright-icon">
                                          <FaChevronDown />
                                      </div>
                                  </span>
                              </div>
                          </div>
                      </div>
                      <div className="content__item_dec">
                      {open && (
                          <><><div className="item_des_tabs">
                                  <div className={toggleState === 1 ? "card-tab active-tab" : "card-tab"} onClick={() => toggleTab(1)}>Overview</div>
                                  <div className={toggleState === 2 ? "card-tab active-tab" : "card-tab"} onClick={() => toggleTab(2)}>Info</div>
                                  <div className={toggleState === 3 ? "card-tab active-tab" : "card-tab"} onClick={() => toggleTab(3)}>Photos</div>
                                  <div className={toggleState === 4 ? "card-tab active-tab" : "card-tab"} onClick={() => toggleTab(4)}>Reviews</div>
                                  <div className={toggleState === 5 ? "card-tab active-tab" : "card-tab"} onClick={() => toggleTab(5)}>Deals</div>
                              </div>
                                  <div className={toggleState === 1 ? "main_card active-main_card" : "main_card"}>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                          <button className={toggleState === 3 ? "more_photos" : "more_photos"} onClick={() => toggleTab(3)}><p>More Photos</p> <FaChevronRight /></button>
                                      </div>
                                      <div className="item_des_deals">
                                          <span className="heading_deals">Deals you'll Love</span>
                                          <div className="item_deals_card">
                                              <Swiper
                                                  slidesPerView={4}
                                                  spaceBetween={1}
                                                  freeMode={true}
                                                  pagination={{
                                                      clickable: true,
                                                  }}
                                                  modules={[FreeMode, Pagination]}
                                                  className="mySwiper width"
                                              >
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Our Lowest Price <br /><span className="green d-p">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal g">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                              </Swiper>
                                              <div className="ShowBtn">
                                                  <button className={toggleState === 5 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(5)}><p>Show all deals </p> <FaChevronRight /></button>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="card_review">
                                          <div className="review_r">
                                              <span className="card_review_no">8.9</span>
                                              <span className="card_review_text">
                                                  <p className="bold review_p">Excellent <p className='nor'>(738 reviews)</p></p>
                                                  <p className='gray'>trivago Rating Index</p>
                                              </span>
                                          </div>
                                      </div>
                                      <div className="ShowBtn">
                                          <button className={toggleState === 4 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(4)}><p>Read Reviews </p> <FaChevronRight /></button>
                                      </div>
                                      <div className="card_facilities">
                                          <div className="card_facil_heading">
                                              Amenities & facilities
                                          </div>
                                          <span className="card_facil_icons">
                                              <div className="icon">
                                                  <HiWifi />
                                                  free wifi
                                              </div>
                                              <div className="icon">
                                                  <FaSwimmingPool />
                                                  Swimming Pool
                                              </div>
                                              <div className="icon">
                                                  <FaParking />
                                                  Parking
                                              </div>
                                              <div className="icon">
                                                  <MdPets />
                                                  Pets
                                              </div>
                                              <div className="icon">
                                                  <TbAirConditioning />
                                                  Air Conditioning
                                              </div>
                                          </span>
                                          <div className="ShowBtn">
                                              <button className={toggleState === 4 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(4)}><p>Read Reviews </p> <FaChevronRight /></button>
                                          </div>

                                      </div>
                                      <div className="ShowBtn border_n">
                                          <button className={toggleState === 4 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(4)}><p>Close all </p> <FaChevronRight /></button>
                                      </div>
                                  </div></><div className={toggleState === 2 ? "main_card active-main_card" : "main_card"}>
                                      <div className="heading_info">
                                          About Makkah Marriott Hotel
                                      </div>
                                      <div className="info_des">
                                          <span className="main_info_des">
                                              <p>
                                                  Located in the Jabal Omar Complex, Makkah Marriott Hotel features 426 modern rooms and 52 luxurious suites,<br /> and is conveniently close to the Grand Mosque and other holy sites. Each room has floor-to-ceiling <br /> windows that offer views of the city and the Grand Mosque, as well as a LCD TV, minibar, free Wi-Fi and <br /> safe deposit box. The private bathrooms feature complimentary robes, slippers and toiletries, and are fitted <br /> with rainfall showers. There are a total of 22 floors at Makkah Marriott Hotel, as well as five meeting rooms <br /> with wired high-speed Internet. There is a barbershop and laundry on-site, and Wi-Fi is complimentary in <br /> all public areas. Other amenities include a concierge desk, currency exchange, news-stand and front desk. <br /> A buffet and hot breakfast are available daily, and the on-site restaurants serve a variety of Asian and <br /> International cuisines. The revered Cave of Hira, which sits atop Jabal Al-Nur, is within easy access.
                                              </p>
                                          </span>
                                          <div className="card_facilities">
                                              <div className="card_facil_heading">
                                                  Top amenities
                                              </div>
                                              <span className="card_facil_icons">
                                                  <div className="icon">
                                                      <HiWifi />
                                                      free wifi
                                                  </div>
                                                  <div className="icon">
                                                      <FaSwimmingPool />
                                                      Swimming Pool
                                                  </div>
                                                  <div className="icon">
                                                      <FaParking />
                                                      Parking
                                                  </div>
                                                  <div className="icon">
                                                      <MdPets />
                                                      Pets
                                                  </div>
                                                  <div className="icon">
                                                      <TbAirConditioning />
                                                      Air Conditioning
                                                  </div>
                                              </span>

                                          </div>
                                          <div className="card_facilities">
                                              <span className="card_facil_icons">
                                                  <div className="icon">
                                                      <HiWifi />
                                                      free wifi
                                                  </div>
                                                  <div className="icon">
                                                      <FaSwimmingPool />
                                                      Swimming Pool
                                                  </div>
                                                  <div className="icon">
                                                      <FaParking />
                                                      Parking
                                                  </div>
                                                  <div className="icon">
                                                      <MdPets />
                                                      Pets
                                                  </div>
                                                  <div className="icon">
                                                      <TbAirConditioning />
                                                      Air Conditioning
                                                  </div>
                                              </span>

                                          </div>
                                      </div>
                                      <div className="ShowBtn border_n">
                                          <button className={toggleState === 4 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(4)}><p>Close all </p> <FaChevronRight /></button>
                                      </div>

                                  </div><div className={toggleState === 3 ? "main_card active-main_card" : "main_card"}>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img small">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                      </div>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img small">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                      </div>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img small">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                      </div>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img small">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                      </div>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img small">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                      </div>
                                  </div><div className={toggleState === 4 ? "main_card active-main_card" : "main_card"}>
                                    <span className="heading_deals">All Deals</span>
                                    <div className="top_rating_over">
                                        <div className="top_rating_left">
                                            <div className="rating_top"><span>8.2</span></div>
                                            <div className="rating_text"><span><span className='bold'>trivago</span> Rating Index based on <span className='bold'>374</span><br /> reviews From:</span></div>
                                            <div className="rating_exp">Expedia(8.4/10) </div>
                                        </div>
                                        <div className="main__bar_info">
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                        </div>
                                    </div>
                                  </div><div className={toggleState === 5 ? "main_card active-main_card" : "main_card"}>

                                      <div className="item_des_deals">
                                          <span className="heading_deals">Deals you'll Love</span>
                                          <div className="item_deals_card">
                                              <Swiper
                                                  slidesPerView={4}
                                                  spaceBetween={1}
                                                  freeMode={true}
                                                  pagination={{
                                                      clickable: true,
                                                  }}
                                                  modules={[FreeMode, Pagination]}
                                                  className="mySwiper width"
                                              >
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Our Lowest Price <br /><span className="green d-p">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal g">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                              </Swiper>
                                          </div>
                                      </div>
                                      <div className="all_deals_cards">
                                          
                                          <span className="heading_deals">All Deals</span>
                                          <div className="sohw_deals_cards">
                                              <div className="deals_form">
                                                  <div className="option_deal_1">
                                                      <form action="#" className="show_list">
                                                          <label htmlFor="gg" className='label_deal'>Show deals with:</label>
                                                          <select name="gg" id="show_deals">
                                                              <option value="gg" selected>All</option>
                                                              <option value="gg">USD1</option>
                                                              <option value="gg">USD2</option>
                                                              <option value="gg">USD3</option>
                                                              <option value="gg">USD4</option>
                                                          </select>
                                                      </form>
                                                  </div>
                                                  <div className="option_deal_2">
                                                      <form action="#" className="show_list">
                                                          <label htmlFor="gg" className='label_deal'>Show room types:</label>
                                                          <select name="gg" id="show_deals">
                                                              <option value="gg" selected>ALL</option>
                                                              <option value="gg">USD1</option>
                                                              <option value="gg">USD2</option>
                                                              <option value="gg">USD3</option>
                                                              <option value="gg">USD4</option>
                                                          </select>
                                                      </form>
                                                  </div>
                                              </div>
                                              <div className="main_deal_m">
                                                  <div className="main_deal">
                                                      <div className="main_deal_img">
                                                          <img src={Booking} alt="Booking logo" />
                                                      </div>
                                                      <div className="main_deal_text">
                                                          <div className="main_deal_p">Prepay Non-refundable Non-changeable Superior Guest Room, Guest</div>
                                                          <span className="breakfast">Breakfast not included</span>
                                                      </div>
                                                      <div className="main_deal_pr">
                                                          <span className="m_site">Official Hotel site</span>
                                                          <div>
                                                              <span className="bold m_price">$129 <br />/night</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="more_deal_no">Show 32 more deals(incl. Free breakfast, Pay at the property)
                                                  </div>
                                              </div>
                                              <div className="main_deal_m">
                                                  <div className="main_deal">
                                                      <div className="main_deal_img">
                                                          <img src={Booking} alt="Booking logo" />
                                                      </div>
                                                      <div className="main_deal_text">
                                                          <div className="main_deal_p">Prepay Non-refundable Non-changeable Superior Guest Room, Guest</div>
                                                          <span className="breakfast">Breakfast not included</span>
                                                      </div>
                                                      <div className="main_deal_pr">
                                                          <span className="m_site">Official Hotel site</span>
                                                          <div>
                                                              <span className="bold m_price">$129 <br />/night</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="more_deal_no">Show 32 more deals(incl. Free breakfast, Pay at the property)
                                                  </div>
                                              </div>
                                              <div className="main_deal_m">
                                                  <div className="main_deal">
                                                      <div className="main_deal_img">
                                                          <img src={Booking} alt="Booking logo" />
                                                      </div>
                                                      <div className="main_deal_text">
                                                          <div className="main_deal_p">Prepay Non-refundable Non-changeable Superior Guest Room, Guest</div>
                                                          <span className="breakfast">Breakfast not included</span>
                                                      </div>
                                                      <div className="main_deal_pr">
                                                          <span className="m_site">Official Hotel site</span>
                                                          <div>
                                                              <span className="bold m_price">$129 <br />/night</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="more_deal_no">Show 32 more deals(incl. Free breakfast, Pay at the property)
                                                  </div>
                                                  <div className="left">
                                                  <button className={toggleState === 4 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(4)}><p>Close all </p> <FaChevronRight /></button>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div></>
                          )}
                      </div>

                  </div>
                  <div className="content__container">
                      <div className="content__item">
                          <div className="content__img-list" onClick={() => setOpen(!open)}>
                              <img src={Img} alt="" className="siImg" />
                          </div>
                          <div className="siDesc">
                              <h1 className={toggleState === 1 ? "siTitle" : "siTitle"} onClick={() => setOpen(!open)}>tower Street apartments <HiOutlineHeart color="gray" /></h1>
                              <span className="siStars">
                                  <span className="Stars-li">
                                      <ImStarFull color='#F2921D' />
                                      <ImStarFull color='#F2921D' />
                                      <ImStarFull color='#F2921D' />
                                      <ImStarHalf color='#F2921D' />
                                      <ImStarEmpty color='#F2921D' />
                                  </span>
                                  <span className="place_li">Hotel</span>
                                  <span className="ad__or-not">Ads</span>
                              </span>
                              <span className="siPopular_rn">
                                  <AiOutlineTrophy />
                                  <p>
                                      Popular Choice
                                  </p>
                              </span>
                              <span className="siLocation_drop" onClick={() => setOpen(!open)}>
                                  Cairo <FaChevronDown />
                              </span>
                              <span className="siReviews" onClick={() => setOpen(!open)}>
                                  <span className="sireviews_info">
                                      <span className="siReview_points">8.9</span>
                                      <span className="siReview_pos">Very good</span>
                                      <span className="siReview_No.">(2061 reviews)</span>
                                  </span>
                                  <span className="sireviews_icon">
                                      <FaChevronDown />
                                  </span>
                              </span>
                          </div>
                          <div className="siDetails">
                              <div className="card__top">
                                  <div className="card_li_info">
                                      <span className="card_web_info">Booking.com</span>
                                      <span className="card_in_info">Free breakfast</span>
                                  </div>
                                  <div className="siDetailsTexts">
                                      <span className="siPrice">
                                          <span className='card__b-p c_g'>$123</span>
                                          <p>For two night <span className="card__b-p c_g">$300</span></p>
                                      </span>
                                      <Link to="/Redirect" target="_blank" className='Link_Redirect'>
                                          <button className="siCheckBtn">View Deal <FaChevronRight /> </button>
                                      </Link>
                                  </div>
                              </div>
                              <div className="card__bottom">
                              <Link to="/Redirect" target="_blank" className='Link_Redirect'>
                                  <div className="card__bleft">
                                      booking.com
                                      <p className='card__b-p'>$316</p>
                                  </div>
                              </Link>
                                  <span className="card__brigth" onClick={() => setOpen(!open)}>
                                      <div className="card__bright-info">
                                          Our lowest Price
                                          <span className="card__bright-loc">
                                              <p className="card__b-p">$314</p>
                                              <span>trip.com</span>
                                          </span>
                                      </div>
                                      <div className="card__bright-icon">
                                          <FaChevronDown />
                                      </div>
                                  </span>
                              </div>
                          </div>
                      </div>
                      <div className="content__item_dec">
                      {open && (
                          <><><div className="item_des_tabs">
                                  <div className={toggleState === 1 ? "card-tab active-tab" : "card-tab"} onClick={() => toggleTab(1)}>Overview</div>
                                  <div className={toggleState === 2 ? "card-tab active-tab" : "card-tab"} onClick={() => toggleTab(2)}>Info</div>
                                  <div className={toggleState === 3 ? "card-tab active-tab" : "card-tab"} onClick={() => toggleTab(3)}>Photos</div>
                                  <div className={toggleState === 4 ? "card-tab active-tab" : "card-tab"} onClick={() => toggleTab(4)}>Reviews</div>
                                  <div className={toggleState === 5 ? "card-tab active-tab" : "card-tab"} onClick={() => toggleTab(5)}>Deals</div>
                              </div>
                                  <div className={toggleState === 1 ? "main_card active-main_card" : "main_card"}>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                          <button className={toggleState === 3 ? "more_photos" : "more_photos"} onClick={() => toggleTab(3)}><p>More Photos</p> <FaChevronRight /></button>
                                      </div>
                                      <div className="item_des_deals">
                                          <span className="heading_deals">Deals you'll Love</span>
                                          <div className="item_deals_card">
                                              <Swiper
                                                  slidesPerView={4}
                                                  spaceBetween={1}
                                                  freeMode={true}
                                                  pagination={{
                                                      clickable: true,
                                                  }}
                                                  modules={[FreeMode, Pagination]}
                                                  className="mySwiper width"
                                              >
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Our Lowest Price <br /><span className="green d-p">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal g">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                              </Swiper>
                                              <div className="ShowBtn">
                                                  <button className={toggleState === 5 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(5)}><p>Show all deals </p> <FaChevronRight /></button>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="card_review">
                                          <div className="review_r">
                                              <span className="card_review_no">8.9</span>
                                              <span className="card_review_text">
                                                  <p className="bold review_p">Excellent <p className='nor'>(738 reviews)</p></p>
                                                  <p className='gray'>trivago Rating Index</p>
                                              </span>
                                          </div>
                                      </div>
                                      <div className="ShowBtn">
                                          <button className={toggleState === 4 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(4)}><p>Read Reviews </p> <FaChevronRight /></button>
                                      </div>
                                      <div className="card_facilities">
                                          <div className="card_facil_heading">
                                              Amenities & facilities
                                          </div>
                                          <span className="card_facil_icons">
                                              <div className="icon">
                                                  <HiWifi />
                                                  free wifi
                                              </div>
                                              <div className="icon">
                                                  <FaSwimmingPool />
                                                  Swimming Pool
                                              </div>
                                              <div className="icon">
                                                  <FaParking />
                                                  Parking
                                              </div>
                                              <div className="icon">
                                                  <MdPets />
                                                  Pets
                                              </div>
                                              <div className="icon">
                                                  <TbAirConditioning />
                                                  Air Conditioning
                                              </div>
                                          </span>
                                          <div className="ShowBtn">
                                              <button className={toggleState === 4 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(4)}><p>Read Reviews </p> <FaChevronRight /></button>
                                          </div>

                                      </div>
                                      <div className="ShowBtn border_n">
                                          <button className={toggleState === 4 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(4)}><p>Close all </p> <FaChevronRight /></button>
                                      </div>
                                  </div></><div className={toggleState === 2 ? "main_card active-main_card" : "main_card"}>
                                      <div className="heading_info">
                                          About Makkah Marriott Hotel
                                      </div>
                                      <div className="info_des">
                                          <span className="main_info_des">
                                              <p>
                                                  Located in the Jabal Omar Complex, Makkah Marriott Hotel features 426 modern rooms and 52 luxurious suites,<br /> and is conveniently close to the Grand Mosque and other holy sites. Each room has floor-to-ceiling <br /> windows that offer views of the city and the Grand Mosque, as well as a LCD TV, minibar, free Wi-Fi and <br /> safe deposit box. The private bathrooms feature complimentary robes, slippers and toiletries, and are fitted <br /> with rainfall showers. There are a total of 22 floors at Makkah Marriott Hotel, as well as five meeting rooms <br /> with wired high-speed Internet. There is a barbershop and laundry on-site, and Wi-Fi is complimentary in <br /> all public areas. Other amenities include a concierge desk, currency exchange, news-stand and front desk. <br /> A buffet and hot breakfast are available daily, and the on-site restaurants serve a variety of Asian and <br /> International cuisines. The revered Cave of Hira, which sits atop Jabal Al-Nur, is within easy access.
                                              </p>
                                          </span>
                                          <div className="card_facilities">
                                              <div className="card_facil_heading">
                                                  Top amenities
                                              </div>
                                              <span className="card_facil_icons">
                                                  <div className="icon">
                                                      <HiWifi />
                                                      free wifi
                                                  </div>
                                                  <div className="icon">
                                                      <FaSwimmingPool />
                                                      Swimming Pool
                                                  </div>
                                                  <div className="icon">
                                                      <FaParking />
                                                      Parking
                                                  </div>
                                                  <div className="icon">
                                                      <MdPets />
                                                      Pets
                                                  </div>
                                                  <div className="icon">
                                                      <TbAirConditioning />
                                                      Air Conditioning
                                                  </div>
                                              </span>

                                          </div>
                                          <div className="card_facilities">
                                              <span className="card_facil_icons">
                                                  <div className="icon">
                                                      <HiWifi />
                                                      free wifi
                                                  </div>
                                                  <div className="icon">
                                                      <FaSwimmingPool />
                                                      Swimming Pool
                                                  </div>
                                                  <div className="icon">
                                                      <FaParking />
                                                      Parking
                                                  </div>
                                                  <div className="icon">
                                                      <MdPets />
                                                      Pets
                                                  </div>
                                                  <div className="icon">
                                                      <TbAirConditioning />
                                                      Air Conditioning
                                                  </div>
                                              </span>

                                          </div>
                                      </div>
                                      <div className="ShowBtn border_n">
                                          <button className={toggleState === 4 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(4)}><p>Close all </p> <FaChevronRight /></button>
                                      </div>

                                  </div><div className={toggleState === 3 ? "main_card active-main_card" : "main_card"}>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img small">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                      </div>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img small">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                      </div>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img small">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                      </div>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img small">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                      </div>
                                      <div className="item_des_imgs">
                                          <div className="item_des_img small">
                                              <img src={Makkah} alt="" />
                                              <img src={Medina} alt="" />
                                              <img src={Lebanon} alt="" />
                                              <img src={Lebanon} alt="" />
                                          </div>
                                      </div>
                                  </div><div className={toggleState === 4 ? "main_card active-main_card" : "main_card"}>
                                    <span className="heading_deals">All Deals</span>
                                    <div className="top_rating_over">
                                        <div className="top_rating_left">
                                            <div className="rating_top"><span>8.2</span></div>
                                            <div className="rating_text"><span><span className='bold'>trivago</span> Rating Index based on <span className='bold'>374</span><br /> reviews From:</span></div>
                                            <div className="rating_exp">Expedia(8.4/10) </div>
                                        </div>
                                        <div className="main__bar_info">
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                            <div className="top_rating_right">

                                            <div className="review_left">Location</div>
                                            <div className="review_center">
                                                a <div className='bg__fullgreen'>a</div>
                                            </div>
                                            <div className="review_right">Excellent  (8.5 / 10)</div>
                                            </div>
                                        </div>
                                    </div>
                                  </div><div className={toggleState === 5 ? "main_card active-main_card" : "main_card"}>

                                      <div className="item_des_deals">
                                          <span className="heading_deals">Deals you'll Love</span>
                                          <div className="item_deals_card">
                                              <Swiper
                                                  slidesPerView={4}
                                                  spaceBetween={1}
                                                  freeMode={true}
                                                  pagination={{
                                                      clickable: true,
                                                  }}
                                                  modules={[FreeMode, Pagination]}
                                                  className="mySwiper width"
                                              >
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Our Lowest Price <br /><span className="green d-p">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal g">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                      <div className="card_deal ">
                                                          <span className="heading_deal">Recommended deal <br /><span className="green">Pay at the property</span></span>
                                                          <div className="card_deal_in">
                                                              <span className="deal_pr">$270 <br /><span className="small_text">/night</span></span>
                                                              <img src={Booking} id="imgg" />
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                              </Swiper>
                                          </div>
                                      </div>
                                      <div className="all_deals_cards">
                                          
                                          <span className="heading_deals">All Deals</span>
                                          <div className="sohw_deals_cards">
                                              <div className="deals_form">
                                                  <div className="option_deal_1">
                                                      <form action="#" className="show_list">
                                                          <label htmlFor="gg" className='label_deal'>Show deals with:</label>
                                                          <select name="gg" id="show_deals">
                                                              <option value="gg" selected>All</option>
                                                              <option value="gg">USD1</option>
                                                              <option value="gg">USD2</option>
                                                              <option value="gg">USD3</option>
                                                              <option value="gg">USD4</option>
                                                          </select>
                                                      </form>
                                                  </div>
                                                  <div className="option_deal_2">
                                                      <form action="#" className="show_list">
                                                          <label htmlFor="gg" className='label_deal'>Show room types:</label>
                                                          <select name="gg" id="show_deals">
                                                              <option value="gg" selected>ALL</option>
                                                              <option value="gg">USD1</option>
                                                              <option value="gg">USD2</option>
                                                              <option value="gg">USD3</option>
                                                              <option value="gg">USD4</option>
                                                          </select>
                                                      </form>
                                                  </div>
                                              </div>
                                              <div className="main_deal_m">
                                                  <div className="main_deal">
                                                      <div className="main_deal_img">
                                                          <img src={Booking} alt="Booking logo" />
                                                      </div>
                                                      <div className="main_deal_text">
                                                          <div className="main_deal_p">Prepay Non-refundable Non-changeable Superior Guest Room, Guest</div>
                                                          <span className="breakfast">Breakfast not included</span>
                                                      </div>
                                                      <div className="main_deal_pr">
                                                          <span className="m_site">Official Hotel site</span>
                                                          <div>
                                                              <span className="bold m_price">$129 <br />/night</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="more_deal_no">Show 32 more deals(incl. Free breakfast, Pay at the property)
                                                  </div>
                                              </div>
                                              <div className="main_deal_m">
                                                  <div className="main_deal">
                                                      <div className="main_deal_img">
                                                          <img src={Booking} alt="Booking logo" />
                                                      </div>
                                                      <div className="main_deal_text">
                                                          <div className="main_deal_p">Prepay Non-refundable Non-changeable Superior Guest Room, Guest</div>
                                                          <span className="breakfast">Breakfast not included</span>
                                                      </div>
                                                      <div className="main_deal_pr">
                                                          <span className="m_site">Official Hotel site</span>
                                                          <div>
                                                              <span className="bold m_price">$129 <br />/night</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="more_deal_no">Show 32 more deals(incl. Free breakfast, Pay at the property)
                                                  </div>
                                              </div>
                                              <div className="main_deal_m">
                                                  <div className="main_deal">
                                                      <div className="main_deal_img">
                                                          <img src={Booking} alt="Booking logo" />
                                                      </div>
                                                      <div className="main_deal_text">
                                                          <div className="main_deal_p">Prepay Non-refundable Non-changeable Superior Guest Room, Guest</div>
                                                          <span className="breakfast">Breakfast not included</span>
                                                      </div>
                                                      <div className="main_deal_pr">
                                                          <span className="m_site">Official Hotel site</span>
                                                          <div>
                                                              <span className="bold m_price">$129 <br />/night</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="more_deal_no">Show 32 more deals(incl. Free breakfast, Pay at the property)
                                                  </div>
                                                  <div className="left">
                                                  <button className={toggleState === 4 ? "show_all_btn" : "show_all_btn"} onClick={() => toggleTab(4)}><p>Close all </p> <FaChevronRight /></button>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div></>
                          )}
                      </div>

                  </div>
              </div>
              {/*----------- google map ------*/}
              <div className="map_list">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927.6905054884259!2d39.20588545869954!3d21.55615870270383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d1b76139a8c7%3A0xe84a7bbb80e4fd6!2sAl%20Maqrizi%2C%20Aziziyah%2C%20Jeddah%2023342!5e0!3m2!1sen!2ssa!4v1678101749678!5m2!1sen!2ssa" width="705" height="900" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="google__map-list"></iframe>
              </div>
          </div></>
  )
}

export default List