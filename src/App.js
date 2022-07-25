import './App.css';
import NavBar from './components/NavBar'
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './components/Footer';
import ProductsListContainer from './components/ProductsListContainer';
import SideBar from './components/SideBar';
import Home from './components/Home';
import ProductsDestination from './components/ProductsDestination';
import ProductDetailContainer from './components/ProductDetailContainer';
import Contacto from './components/Contacto';
import { BackToTopButton } from './components/BackToTopButton';


function App() {
  return (
    <div className="App">
    <NavBar/>
    <SideBar/>
  {/*   <ProductsListContainer/> */}
    <Routes>
       <Route path="/" element={<Home />} />
     {/* <Route path="about" element={<Nosotros />} />  */}
       <Route path="/category/:CategoryId" element={<ProductsListContainer />}/>
      <Route path="/tours" element={<ProductsListContainer />}/>
      <Route path="/tours/:id" element={<ProductDetailContainer />}/>
      <Route path="/destino/:Destination" element={<ProductsDestination/>}/>
      <Route path="/contacto" element={<Contacto />}/>



            
    </Routes>
    <BackToTopButton/>
    <Footer/>
  </div>

     
  );
}

export default App;
