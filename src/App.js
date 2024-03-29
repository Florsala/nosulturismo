import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/Footer";
import ProductsListContainer from "./components/ProductsListContainer";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import ProductsDestination from "./components/ProductsDestination";
import ProductDetailContainer from "./components/ProductDetailContainer";
import Contacto from "./components/Contacto";
import { BackToTopButton } from "./components/BackToTopButton";
import BtnArrep from "./components/BtnArrep";
import Nosotros from "./components/Nosotros";
import Whatsapp from "./components/Whatsapp";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />{" "}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<Nosotros />} />  */}
        <Route
          path="/category/:CategoryId"
          element={<ProductsListContainer />}
        />
        <Route path="/tours" element={<ProductsListContainer />} />
        <Route path="/tours/:id" element={<ProductDetailContainer />} />
        <Route path="/destino/:Destination" element={<ProductsDestination />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/arrepentimiento" element={<BtnArrep />} />
        <Route path="/Nosotros" element={<Nosotros />} />
      </Routes>
      <Whatsapp />
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default App;
