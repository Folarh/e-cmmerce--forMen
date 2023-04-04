import { Link } from "react-router-dom"
import { useShop } from "../context/useShop";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import './NavBar.css'

function NavBar() {
  const {
    state: {cart},
  } = useShop();
  return (
  <nav>
        <div className="logo">
            <h1>ALL<span>CCESSORIES</span></h1>
        </div>
        <div className="nav-links">
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

            <div className="menu-icon">
           <MenuIcon/>
            </div>
    </nav>
  
  )
}

export default NavBar
