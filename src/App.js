import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="app">
   <NavBar/>
   <Home/>
   <Footer/>
    </div>
  );
}

export default App;
