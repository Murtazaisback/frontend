import "./header.css"
import Logo from '../../assest/logo.png'
import React, { useState } from 'react'
import { FaCalendarDay} from "react-icons/fa"
import {BsPersonFill, BsSearch} from "react-icons/bs"
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";
import Booking from '../../assest/booking.png'
import Al from '../../assest/al.png'
import Exp from '../../assest/expedia.png'
import Hotel from '../../assest/hotels.png'
import Trip from '../../assest/trip.png'
import { Link } from "react-router-dom"


const Header2 = () => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const [openOptions, setOpenOptions] = useState(false);
      const [options, setOptions] = useState({
        adult: 1,
        childern: 0,
        room:1,
      });
      const handleOption = (name, operation) => {
        setOptions((prev) => {
          return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
          };
        });
      };
  return (
    <><section className="header__main_first main__cont-w">
          <div className="logo">
              <img src={Logo} alt="Logo" />
              <div className="bar"></div>
          </div>
          <div className="header__top-text">
              <h2>Deals from your favourite booking sites</h2>
              <p>Try searching for a city, a specific hotel, or even a landmark!</p>
          </div>
      </section>
      <section className="header__bg">
        <div className="header__main_sec-content main__cont-w">
          <div className="header__list">
            <ul>
                <li>All Stays</li>
                <li>Hotels</li>
                <li>House / Apartment</li>
            </ul>
          </div>
            {/*---------- header---- */}
          <div className="headerSearch">
        <div className="headerStrSearchItem">
            <BsSearch/>
            <input type="text" placeholder="where are you going" className="headerSearchInput"/>
        </div>
        <div className="headermidSearchItem">
            <FaCalendarDay/>
            <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `} 
                
            </span>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className='date2'
            />}
        </div>
        <div className="headerSearchItem">
            <BsPersonFill/>
            <span onClick={()=> setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult · ${options.childern} children · ${options.room} room`}</span>
            {openOptions && <div className="options_2">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}>+</button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">childern</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.childern <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("childern", "d")}>-</button>
                        <span className="optionCounterNumber">
                          {options.childern}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("childern", "i")}>+</button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}>-</button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}>+</button>
                      </div>
                    </div>
            </div>}
        </div>
        <div className="headerSearchItemBtn">
            <Link to="/main">
            <button className="headerBtn">Search</button>
            </Link>
        </div>
        </div>
        <div className="header__logos-cc">
            <div className="header__logos-text">
                We compare multiple booking sites at once
            </div>
            <div className="header__logos">
                <img src={Booking} alt="" />
                <img src={Al} alt="" />
                <img src={Trip} alt="" />
                <img src={Exp} alt="" />
                <img src={Hotel} alt="" />
                <span>+100more</span>
            </div>
        </div>
        </div>
        </section></>
  )
}

export default Header2