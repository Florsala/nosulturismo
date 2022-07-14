import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './components/Footer';
import ProductsListContainer from './components/ProductsListContainer';
import SideBar from './components/SideBar';



function App() {
  return (
    <div className="App">
    <NavBar/>
    <SideBar/>
    <ProductsListContainer/>
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="about" element={<Nosotros />} />  */}
    </Routes>
    <Footer/>
  </div>

     
  );
}

export default App;
