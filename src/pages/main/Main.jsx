import React from 'react'
import Navbar from "../../components/nav_var2/Nav2"
import Header from "../../components/header/header"
import "./main.css"
import List from "../../components/list/List"
import Maincard from "../../components/maincard/Maincard"
import Footer from "../../components/footer/Footer"
import Header2 from '../../components/header_var2/Header2'

const main = () => {
  return (
    <div>
        <Navbar/>
        <Header2/>
        <Maincard/>
        <Footer/>
    </div>
  )
}

export default main