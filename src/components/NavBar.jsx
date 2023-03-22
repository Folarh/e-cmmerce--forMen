import { Link } from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import './NavBar.css'

function NavBar() {
  return (
  <nav>
        <div className="logo">
            <h1>FOR<span>MEN</span></h1>
        </div>
        <div className="nav-links">
          <ul>
            <li><Link>Home</Link></li>
            <li><Link>About</Link></li>
            <li><Link>Shop</Link></li>
            <li><Link>Contact</Link></li>
          </ul>
        </div>
        <div className="nav-icons">
           <ShoppingCartIcon/>
            </div>

            <div className="menu-icon">
           <MenuIcon/>
            </div>
    </nav>
  
  )
}

export default NavBar
