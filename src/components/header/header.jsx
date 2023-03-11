import React, { useState } from 'react'
import "./header.css"
import { FaCalendarDay} from "react-icons/fa"
import {BsPersonFill, BsSearch} from "react-icons/bs"
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";
import MultiRangeSlider from "../multiRangeSlider/MultiRangeSlider";
import { FaChevronDown, FaChevronRight, FaParking, FaSwimmingPool } from 'react-icons/fa'
import { TiCoffee, TiTick } from 'react-icons/ti'
import { HiX, HiXCircle } from 'react-icons/hi'

const header = () => {
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
      const [open, setOpen] = useState(false)
      const [openg, setOpeng] = useState(false)
      const [openf, setOpenf] = useState(false)
    //   const handleSearch = () => {
    //     navigate("/hotels", { state: { destination, date, options } });
    //   };
    
      
  return (
    <><div className="header_bg">
    <div className="header">
        <div className="headerSearch">
          <div className="headerStrSearchItem">
            <BsSearch />
            <input type="text" placeholder="where are you going" className="headerSearchInput" />
          </div>
          <div className="headermidSearchItem">
            <FaCalendarDay />
            <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}

            </span>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className='date' />}
          </div>
          <div className="headerSearchItem">
            <BsPersonFill />
            <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult · ${options.childern} children · ${options.room} room`}</span>
            {openOptions && <div className="options">
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
            <button className="headerBtn">Search</button>
          </div>
        </div>
        <div className="header_options">
          <div className="header_price_slider">
            <span className="ladel_price">Price</span>
            <MultiRangeSlider
              min={0}
              max={600}
              onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)} />
          </div>
          <div className="property_type">
            <label htmlFor="" className='type_label'>Property Type</label>
            <ul className='type_ul'>
              <li className='active_type_li'>Hotels</li>
              <li>Coming soon...</li>
            </ul>
          </div>
          <div className="guest_rating">
            <div className="text_to_hover" onClick={() => setOpen(!open)}>
              <div className="rating_t">
                Guest Rating
              </div>
              <div className="rating_b">
                <span>All</span>
                <FaChevronDown />
              </div>
            </div>
            {open && (

            <div className="hover_menu">
              <button className="rating_ex" type='button'>
                <div className="rev_text">
                <span className="No">8.5</span>
                <span>excellent</span>
                </div>
                <TiTick/>
              </button>
              <button className="rating_ex" type='button'>
                <div className="rev_text">
                <span className="No">8.5</span>
                <span>excellent</span>
                </div>
                <TiTick/>
              </button>
              <button className="rating_ex" type='button'>
                <div className="rev_text">
                <span className="No">8.5</span>
                <span>excellent</span>
                </div>
                <TiTick/>
              </button>
              <button className="rating_ex" type='button'>
                <div className="rev_text">
                <span className="No">8.5</span>
                <span>excellent</span>
                </div>
                <TiTick/>
              </button>
              <button className="rating_ex" type='button'>
                <div className="rev_text">
                <span className="No">8.5</span>
                <span>excellent</span>
                </div>
                <TiTick/>
              </button>
            </div>
            )}
          </div>
          <div className="Location_menu">
            <div className="text_to_hover" onClick={() => setOpeng(!openg)}>
              <div className="rating_t">
                Location
              </div>
              <div className="rating_b">
                <span>City center</span>
                <FaChevronDown />
              </div>
            </div>
            {openg && (

            <div className="hover_menu">
              <div className="hover_m_container">
              <div className="h_text_b">
                <p className="bold">Find me a stay close to...</p>
              </div>
                <form action="">
                  <div className="input_lo">
                  <label htmlFor="">this Popular site:</label>
                    <select name="city_center" id="city_center">
                      <option value="city_centr">City Center</option>
                      <option value="city_cente">"Name" of site</option>
                    </select>
                  
                    <label htmlFor="">or this Address</label>
                    <input type="text" placeholder='Enter street address/zip code' className='add_zip' />



                    {/* <label htmlFor="">max distance</label>
                    <input type="range" max={20} /> */}



                  </div>
                  <div className="loc_Btn">
                    <button className="reset_btn">Reset</button>
                    <button type='search' className='done_btn'>Done</button>
                  </div>
                </form>
              </div>
              </div>
            )}
          </div>
          <div className="more_filter">
            <div className="text_to_hover" onClick={() => setOpenf(!openf)}>
              <div className="rating_t">
              select
              </div>
              <div className="rating_b">
                <span>All</span>
                <FaChevronDown />
              </div>
            </div>
            {openf && (

            <div className="hover_menu_left">
              <div className="more_filter_heading">Popular filter</div>
              <div className="fil_container">
                <div className="fil_row">
                  <div className="left_fil">
                    <div className="filter_ic">
                    <HiXCircle/>
                    Free cancellation
                    </div>
                    <input type="checkbox" className='checkbox_fil' />
                  </div>
                  <div className="right_fil">
                    <div>
                      <TiCoffee/>
                      Free BreakFast
                    </div>
                    <input type="checkbox" className='checkbox_fil' />
                  </div>
                </div>
                <div className="fil_row">
                  <div className="left_fil">
                    <div className="filter_ic">
                    <HiXCircle/>
                    Free cancellation
                    </div>
                    <input type="checkbox" className='checkbox_fil' />
                  </div>
                  <div className="right_fil">
                    <div>
                      <TiCoffee/>
                      Free BreakFast
                    </div>
                    <input type="checkbox" className='checkbox_fil' />
                  </div>
                </div>
                <div className="fil_row">
                  <div className="left_fil">
                    <div className="filter_ic">
                    <HiXCircle/>
                    Free cancellation
                    </div>
                    <input type="checkbox" className='checkbox_fil' />
                  </div>
                  <div className="right_fil">
                    <div>
                      <TiCoffee/>
                      Free BreakFast
                    </div>
                    <input type="checkbox" className='checkbox_fil' />
                  </div>
                </div>
                <div className="fil_row">
                  <div className="left_fil">
                    <div className="filter_ic">
                    <HiXCircle/>
                    Free cancellation
                    </div>
                    <input type="checkbox" className='checkbox_fil' />
                  </div>
                  <div className="right_fil">
                    <div>
                      <TiCoffee/>
                      Free BreakFast
                    </div>
                    <input type="checkbox" className='checkbox_fil' />
                  </div>
                </div>
                <div className="fil_row">
                  <div className="left_fil">
                    <div className="filter_ic">
                    <HiXCircle/>
                    Free cancellation
                    </div>
                    <input type="checkbox" className='checkbox_fil' />
                  </div>
                  <div className="right_fil">
                    <div>
                      <TiCoffee/>
                      Free BreakFast
                    </div>
                    <input type="checkbox" className='checkbox_fil' />
                  </div>
                </div>
                <div className="loc_Btn">
                    <button className="reset_btn">Reset</button>
                    <button type='search' className='done_btn'>Done</button>
                  </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
      </>
  )
}

export default header