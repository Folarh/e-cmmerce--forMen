import {BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Error from './pages/Error';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className="app">
       <BrowserRouter>  
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
       <Footer/>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
