import "./navbar.css"
import LOGO from "../../assest/logo.png"
import { HiOutlineHeart } from "react-icons/hi"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <img src={LOGO} alt="logo" />
        </div>
        <div className="content">
            <div className="favourites">
              <a href=""> <HiOutlineHeart size="" color="black"/> My Favourites</a>
            </div>
            <div className="currency_list">
                <form action="#" className="curr-list">
                  <select name="currency" id="currency">
                    <option value="usd" selected>USD</option>
                    <option value="usd" selected>USD1</option>
                    <option value="usd" selected>USD2</option>
                    <option value="usd" selected>USD3</option>
                    <option value="usd" selected>USD4</option>
                  </select>
                </form>
            </div>
            <Link to="/login">
            <div className="login__btn">
              <a href="">Log in</a>
            </div>
            </Link>
            {/* <div className="menu__btn">
              <p>Menu</p>
              <div className="menu__list dropDownprofile">
              <ul>
              <li>Recently Viewed</li>
              <li>Help and support</li>
              </ul>
              </div>
            </div> */}
            </div>
    </div>

  )
}

export default Navbar