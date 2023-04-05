import { Link } from "react-router-dom"
import {useState} from "react"
import { useShop } from "../context/useShop";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './NavBar.css'

function NavBar() {

  const [toggle, setToggle]= useState(false)
  const {
    state: {cart},
  } = useShop();
  return (
  <nav>
        <div className="logo">
            <h1>ALL<span>CCESSORIES</span></h1>
        </div>
        <div className="nav-links" id={toggle? "hidden": ""}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="nav-icons">
          <Link to="/cart">
          <ShoppingCartIcon/>
          </Link>
          <span>{cart.length}</span>
          
            </div>

            <div className="menu-icon" onClick={()=> setToggle(!toggle)}>
           {toggle? <CloseIcon/> : <MenuIcon/>}
            </div>
    </nav>
  
  )
}

export default NavBar
